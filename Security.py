"""
Security.py - Authentication & Session Token Management for 100RE Laboratory
Uses Python's uuid module to issue and verify secure session tokens.
"""

import uuid
import time
from typing import Optional, Dict

# Admin Credentials
ADMIN_USERNAME: str = "100re"
ADMIN_PASSWORD: str = "100re"

# Active sessions dictionary: { token_str: { "username": str, "created_at": float } }
_ACTIVE_SESSIONS: Dict[str, Dict] = {}

def authenticate(username: str, password: str) -> Optional[str]:
    """
    Authenticate user with username and password.
    If valid, generates a new UUID session token and stores it.
    Returns the token string if successful, or None if invalid.
    """
    if username == ADMIN_USERNAME and password == ADMIN_PASSWORD:
        # Generate new unique UUID session token
        token = str(uuid.uuid4())
        _ACTIVE_SESSIONS[token] = {
            "username": username,
            "created_at": time.time(),
            "role": "admin"
        }
        return token
    return None

def verify_token(token: Optional[str]) -> bool:
    """
    Verify if a given token is active and valid.
    """
    if not token or not isinstance(token, str):
        return False
    
    # Strip optional "Bearer " prefix
    if token.startswith("Bearer "):
        token = token[7:].strip()

    return token in _ACTIVE_SESSIONS

def invalidate_token(token: Optional[str]) -> bool:
    """
    Invalidate/revoke a token upon logout.
    Returns True if token existed and was removed, False otherwise.
    """
    if not token or not isinstance(token, str):
        return False

    if token.startswith("Bearer "):
        token = token[7:].strip()

    if token in _ACTIVE_SESSIONS:
        del _ACTIVE_SESSIONS[token]
        return True
    return False

def get_session_info(token: Optional[str]) -> Optional[Dict]:
    """
    Retrieve session metadata for an active token.
    """
    if not token or not isinstance(token, str):
        return None

    if token.startswith("Bearer "):
        token = token[7:].strip()

    return _ACTIVE_SESSIONS.get(token)

def list_active_sessions_count() -> int:
    """
    Return the total number of currently active sessions.
    """
    return len(_ACTIVE_SESSIONS)
