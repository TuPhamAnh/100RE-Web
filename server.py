"""
Server.py (and server.py) - Fullstack HTTP Server & REST API for 100RE Laboratory
Includes Security.py integration, UUID Token Authentication, and Member CRUD endpoints.
"""

import http.server
import socketserver
import webbrowser
import os
import sys
import json
import uuid
import base64
import urllib.parse

# Ensure UTF-8 output on Windows console
if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        sys.stderr.reconfigure(encoding='utf-8')
    except Exception:
        pass

# Ensure current directory is in sys.path
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
if BASE_DIR not in sys.path:
    sys.path.insert(0, BASE_DIR)

# Import Security module
import Security

PORT = 8000
FRONTEND_DIR = os.path.join(BASE_DIR, 'Frontend')
IMAGES_DIR = os.path.join(FRONTEND_DIR, 'assets', 'images')
DATA_FILE = os.path.join(BASE_DIR, 'members_data.json')

os.makedirs(IMAGES_DIR, exist_ok=True)

def load_members():
    if os.path.exists(DATA_FILE):
        try:
            with open(DATA_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception as e:
            print(f"Error loading members_data.json: {e}")
    return []

def save_members(members):
    try:
        with open(DATA_FILE, 'w', encoding='utf-8') as f:
            json.dump(members, f, ensure_ascii=False, indent=2)
        return True
    except Exception as e:
        print(f"Error saving members_data.json: {e}")
        return False

class AppHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=FRONTEND_DIR, **kwargs)

    def log_message(self, format, *args):
        try:
            sys.stderr.write(f"[{self.log_date_time_string()}] {args[0]} - {args[1]} {args[2]}\n")
        except Exception:
            pass

    def send_json(self, data, status=200):
        body = json.dumps(data, ensure_ascii=False).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Headers', 'Authorization, Content-Type')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        self.end_headers()
        self.wfile.write(body)

    def get_token(self):
        auth_header = self.headers.get('Authorization', '')
        if auth_header.startswith('Bearer '):
            return auth_header[7:].strip()
        return auth_header.strip()

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Headers', 'Authorization, Content-Type')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        # API: Check Auth Status
        if path == '/api/auth-status':
            token = self.get_token()
            is_valid = Security.verify_token(token)
            return self.send_json({
                'authenticated': is_valid,
                'user': Security.ADMIN_USERNAME if is_valid else None
            })

        # API: Get all members
        if path == '/api/members':
            members = load_members()
            return self.send_json(members)

        # Fallback to static files in Frontend/
        super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length) if content_length > 0 else b'{}'

        # API: Login
        if path == '/api/login':
            try:
                payload = json.loads(post_data.decode('utf-8'))
            except Exception:
                return self.send_json({'success': False, 'error': 'Invalid JSON format'}, status=400)

            username = payload.get('username', '').strip()
            password = payload.get('password', '').strip()

            token = Security.authenticate(username, password)
            if token:
                print(f"[AUTH] User '{username}' logged in successfully. Issued Token: {token}")
                return self.send_json({
                    'success': True,
                    'token': token,
                    'user': username,
                    'message': 'Login successful'
                })
            else:
                print(f"[AUTH] Failed login attempt for user: '{username}'")
                return self.send_json({
                    'success': False,
                    'error': 'Sai tên đăng nhập hoặc mật khẩu!'
                }, status=401)

        # API: Logout
        if path == '/api/logout':
            token = self.get_token()
            Security.invalidate_token(token)
            return self.send_json({'success': True, 'message': 'Logged out'})

        # All subsequent APIs require authentication token
        token = self.get_token()
        if not Security.verify_token(token):
            return self.send_json({'success': False, 'error': 'Unauthorized! Vui lòng đăng nhập.'}, status=401)

        # API: Upload Photo
        if path == '/api/upload-photo':
            try:
                payload = json.loads(post_data.decode('utf-8'))
                raw_data = payload.get('base64Data', '')
                orig_filename = payload.get('filename', 'photo.jpg')

                ext = os.path.splitext(orig_filename)[1].lower()
                if ext not in ['.jpg', '.jpeg', '.png', '.webp', '.gif']:
                    ext = '.jpg'

                if ',' in raw_data:
                    raw_data = raw_data.split(',', 1)[1]

                img_bytes = base64.b64decode(raw_data)
                unique_name = f"upload_{uuid.uuid4().hex[:8]}{ext}"
                target_path = os.path.join(IMAGES_DIR, unique_name)

                with open(target_path, 'wb') as f:
                    f.write(img_bytes)

                rel_path = f"assets/images/{unique_name}"
                return self.send_json({'success': True, 'imagePath': rel_path})
            except Exception as e:
                return self.send_json({'success': False, 'error': f'Upload error: {str(e)}'}, status=500)

        # API: Add Member
        if path == '/api/members':
            try:
                payload = json.loads(post_data.decode('utf-8'))
                name = payload.get('name', '').strip()
                team = payload.get('team', '').strip()
                team_name = payload.get('teamName', team)
                role = payload.get('role', '').strip() or f"{team_name} Researcher"
                image = payload.get('image', '').strip() or 'assets/images/logo.jpg'
                bio = payload.get('bio', '').strip()

                if not name or not team:
                    return self.send_json({'success': False, 'error': 'Name and Team are required'}, status=400)

                new_id = f"{team}_{uuid.uuid4().hex[:6]}"
                new_member = {
                    'id': new_id,
                    'name': name,
                    'team': team,
                    'teamName': team_name,
                    'role': role,
                    'image': image,
                    'bio': bio
                }

                members = load_members()
                members.append(new_member)
                save_members(members)

                print(f"[CRUD] Added new member: {name} (ID: {new_id}, Team: {team})")
                return self.send_json({'success': True, 'member': new_member}, status=201)
            except Exception as e:
                return self.send_json({'success': False, 'error': str(e)}, status=500)

        return self.send_json({'error': 'Not Found'}, status=404)

    def do_PUT(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        token = self.get_token()
        if not Security.verify_token(token):
            return self.send_json({'success': False, 'error': 'Unauthorized! Vui lòng đăng nhập.'}, status=401)

        # API: Edit Member -> /api/members/<id>
        if path.startswith('/api/members/'):
            member_id = path[len('/api/members/'):].strip()
            content_length = int(self.headers.get('Content-Length', 0))
            put_data = self.rfile.read(content_length) if content_length > 0 else b'{}'

            try:
                payload = json.loads(put_data.decode('utf-8'))
                members = load_members()
                updated_member = None

                for m in members:
                    if m.get('id') == member_id:
                        if 'name' in payload: m['name'] = payload['name'].strip()
                        if 'team' in payload: m['team'] = payload['team'].strip()
                        if 'teamName' in payload: m['teamName'] = payload['teamName'].strip()
                        if 'role' in payload: m['role'] = payload['role'].strip()
                        if 'image' in payload and payload['image']: m['image'] = payload['image'].strip()
                        if 'bio' in payload: m['bio'] = payload['bio'].strip()
                        updated_member = m
                        break

                if updated_member:
                    save_members(members)
                    print(f"[CRUD] Updated member: {updated_member['name']} (ID: {member_id})")
                    return self.send_json({'success': True, 'member': updated_member})
                else:
                    return self.send_json({'success': False, 'error': 'Member not found'}, status=404)
            except Exception as e:
                return self.send_json({'success': False, 'error': str(e)}, status=500)

        return self.send_json({'error': 'Not Found'}, status=404)

    def do_DELETE(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        token = self.get_token()
        if not Security.verify_token(token):
            return self.send_json({'success': False, 'error': 'Unauthorized! Vui lòng đăng nhập.'}, status=401)

        # API: Delete Member -> /api/members/<id>
        if path.startswith('/api/members/'):
            member_id = path[len('/api/members/'):].strip()
            members = load_members()
            initial_count = len(members)
            members = [m for m in members if m.get('id') != member_id]

            if len(members) < initial_count:
                save_members(members)
                print(f"[CRUD] Deleted member ID: {member_id}")
                return self.send_json({'success': True, 'message': 'Member deleted'})
            else:
                return self.send_json({'success': False, 'error': 'Member not found'}, status=404)

        return self.send_json({'error': 'Not Found'}, status=404)

def find_available_port(start_port=8000, max_attempts=20):
    for p in range(start_port, start_port + max_attempts):
        try:
            with socketserver.TCPServer(("", p), AppHandler) as test_server:
                return p
        except OSError:
            continue
    return start_port

def run_server():
    port = find_available_port(PORT)
    url = f"http://localhost:{port}"
    
    print("=" * 60)
    print(" [100RE LABORATORY] - FULLSTACK SERVER (API + FRONTEND)")
    print("=" * 60)
    print(f" Directory  : {FRONTEND_DIR}")
    print(f" Server URL : {url}")
    print(" Auth Module: Security.py (UUID Token Auth)")
    print(" Account    : 100re / 100re")
    print("=" * 60)
    print(" -> Opening your web browser automatically...")
    print(" -> Press Ctrl+C to stop the server anytime.")
    print("=" * 60)

    try:
        webbrowser.open(url)
    except Exception as e:
        print(f"Could not automatically open browser: {e}")

    try:
        with socketserver.TCPServer(("", port), AppHandler) as httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped. Goodbye!")
    except Exception as e:
        print(f"\nServer error: {e}")

if __name__ == '__main__':
    run_server()
