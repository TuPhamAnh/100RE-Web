/**
 * 100RE LAB — Floating AI Chatbot Widget (Google Gemini 3.5 Flash Powered)
 */

(function () {
  const API_KEY = atob('QVEuQWI4Uk42Skl2bzJGNk9UZ25KUVlaWklpbnJUUWxVQ1hOMWlzVk04U194a0RHZ1JNZUE=');
  
  const SYSTEM_PROMPT = `Bạn là 100RE Lab AI Assistant - Trợ lý Trí tuệ Nhân tạo thông minh của Phòng Thí nghiệm Năng lượng Tái tạo 100% (100RE LABORATORY) thuộc Trường Đại học Bách Khoa Hà Nội (HUST).

THÔNG TIN QUAN TRỌNG VỀ PHÒNG THÍ NGHIỆM 100RE LAB:
- Tên đầy đủ: 100RE LABORATORY (Toward 100% Renewable Energy).
- Trưởng phòng / Chủ nhiệm Lab: PGS. TS. Nguyễn Đức Tuyên (Assoc. Prof. Nguyen Duc Tuyen). Email: tuyen.nguyenduc@hust.edu.vn | Website: www.100relab.com
- Địa chỉ phòng Lab: Phòng D9-300 & C7-503, Đại học Bách Khoa Hà Nội, Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội, Việt Nam.

9 NHÓM NGHIÊN CỨU CHUYÊN SÂU:
1. PV Team (Quang điện mặt trời): Pin mặt trời hiệu suất cao, tandem perovskite, mô hình bức xạ. Trưởng nhóm: TS. Ngô Trí Đức.
2. BESS Team (Hệ thống lưu trữ năng lượng pin): Ước lượng SoC/SoH, suy thoái pin lithium, tối ưu hóa nạp xả. Trưởng nhóm: TS. Trịnh Minh Phương.
3. AI Team (Trí tuệ nhân tạo trong Năng lượng): Học sâu, dự báo sản lượng điện gió/mặt trời, tối ưu hóa hệ thống điện. Thành viên: KSTN. Bùi Quang Hải.
4. Wind Team (Năng lượng gió): Khí động học tua-bin gió, mô hình hiệu ứng bóng (wake effect), tích hợp lưới điện gió ngoài khơi.
5. Smart Grid Team (Lưới điện thông minh): Hệ thống SCADA thời gian thực, điều khiển biến tần thông minh, ổn định điện áp microgrid.
6. Electric Vehicle (EV) Team (Xe điện): Hạ tầng trạm sạc thông minh, công nghệ V2G (Vehicle-to-Grid), giảm suy thoái pin xe điện.
7. Hydrogen Team (Năng lượng Hydro xanh): Điện phân nước sản xuất hydro xanh, pin nhiên liệu (fuel cells), lưu trữ hydro.
8. Demand Response Team (Điều chỉnh phụ tải): Đáp ứng nhu cầu điện linh hoạt, biểu giá điện động, quản lý phụ tải đỉnh.
9. Unit Commitment Team (Khởi động tổ máy): Tối ưu hóa điều độ kinh tế hệ thống điện có tỷ trọng năng lượng tái tạo cao.

HỆ THỐNG THIẾT BỊ VÀ TRẠNG THÁI:
- Mini-SCADA Testbed (Phòng D9-300): Đang sử dụng (in_use) bởi nhóm Smart Grid & PV.
- Bộ nạp/xả Pin & EIS Tester (Phòng C7-503): Đang sử dụng (in_use) bởi nhóm BESS.
- Biến tần hòa lưới & PV Simulator Chroma: Đang rảnh (available).
- Bàn thử nghiệm RT-LAB / Typhoon HIL: Đang rảnh (available).
- Trạm sạc xe điện thông minh EV V2G: Đang rảnh (available).

HƯỚNG DẪN XIN VÀO LAB:
- Đối tượng: Sinh viên ĐHBK Hà Nội từ năm 2 trở lên (Điện, Năng lượng, Tự động hóa, CNTT), học viên Thạc sĩ, NCS Tiến sĩ.
- Các bước: Chuẩn bị CV cá nhân + bảng điểm GPA, chọn nhóm nghiên cứu quan tâm, gửi email tới PGS. TS. Nguyễn Đức Tuyên (tuyen.nguyenduc@hust.edu.vn) hoặc qua trang Join Us trên web, tham gia phỏng vấn định hướng.

HƯỚNG DẪN TRẢ LỜI:
- Trả lời bằng ngôn ngữ người dùng hỏi (Tiếng Việt hoặc Tiếng Anh).
- Thân thiện, nhiệt tình, am hiểu khoa học kỹ thuật, định dạng Markdown rõ ràng dễ đọc.`;

  let chatHistory = [];

  function initChatbotWidget() {
    if (document.getElementById('aiChatWidgetContainer')) return;

    // 1. Inject HTML Structure
    const container = document.createElement('div');
    container.id = 'aiChatWidgetContainer';
    container.innerHTML = `
      <!-- Floating Button -->
      <div class="ai-chat-launcher" id="aiLauncher">
        <span class="ai-pulse-ring"></span>
        <div class="ai-launcher-tooltip hide-mobile">100RE Lab AI Assistant</div>
        <button class="btn-ai-launcher" id="btnToggleAiChat" title="100RE Lab AI Assistant" aria-label="100RE Lab AI Assistant">
          <i class="fa-solid fa-robot"></i>
        </button>
      </div>

      <!-- Chat Window -->
      <div class="ai-chat-window" id="aiChatWindow">
        <!-- Header -->
        <div class="ai-chat-header">
          <div class="ai-header-info">
            <div class="ai-avatar"><i class="fa-solid fa-robot"></i></div>
            <div>
              <div class="ai-title">100RE Lab AI Assistant</div>
              <div class="ai-status"><span class="ai-status-dot"></span> Online (Gemini AI)</div>
            </div>
          </div>
          <div class="ai-header-actions">
            <button id="btnCloseAiChat" title="Close">&times;</button>
          </div>
        </div>

        <!-- Messages Area -->
        <div class="ai-chat-body" id="aiChatBody">
          <!-- Welcome Message -->
          <div class="ai-msg ai-msg-assistant">
            <div class="ai-bubble">
              👋 Hello! I am **100RE Lab AI Assistant** (AI Research Assistant for 100RE Laboratory &mdash; Hanoi University of Science and Technology).<br><br>
              Feel free to ask me anything in <strong>English</strong> or <strong>Tiếng Việt</strong>! Here are some suggested questions to get started:
              <div class="ai-quick-prompts">
                <button class="btn-quick-prompt" data-q="Give me an overview of 100RE Laboratory and its mission.">📌 Overview of 100RE Laboratory &amp; Mission</button>
                <button class="btn-quick-prompt" data-q="What are the 9 specialized research teams at 100RE Lab?">🔬 What are the 9 specialized research teams?</button>
                <button class="btn-quick-prompt" data-q="Who is Assoc. Prof. Nguyen Duc Tuyen?">👨‍🏫 Who is Assoc. Prof. Nguyen Duc Tuyen?</button>
                <button class="btn-quick-prompt" data-q="How can students or partners join and collaborate with 100RE Lab?">🤝 How to join &amp; collaborate with 100RE Lab?</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Input Bar -->
        <form class="ai-chat-footer" id="aiChatForm">
          <input type="text" id="aiChatInput" class="ai-input" placeholder="Ask 100RE Lab AI Assistant anything (English / Tiếng Việt)..." autocomplete="off" required>
          <button type="submit" id="btnAiSend" class="btn-ai-send" title="Send message">
            <i class="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
    `;

    document.body.appendChild(container);

    // 2. Element bindings
    const launcherBtn = document.getElementById('btnToggleAiChat');
    const closeBtn = document.getElementById('btnCloseAiChat');
    const chatWindow = document.getElementById('aiChatWindow');
    const chatBody = document.getElementById('aiChatBody');
    const chatForm = document.getElementById('aiChatForm');
    const chatInput = document.getElementById('aiChatInput');
    const sendBtn = document.getElementById('btnAiSend');

    // Toggle Chat Window
    launcherBtn.addEventListener('click', () => {
      chatWindow.classList.toggle('open');
      if (chatWindow.classList.contains('open')) {
        chatInput.focus();
      }
    });

    closeBtn.addEventListener('click', () => {
      chatWindow.classList.remove('open');
    });

    // Quick prompt buttons
    container.addEventListener('click', (e) => {
      const qBtn = e.target.closest('.btn-quick-prompt');
      if (qBtn) {
        const query = qBtn.getAttribute('data-q');
        if (query) {
          sendUserMessage(query);
        }
      }
    });

    // Handle Form Submit
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = chatInput.value.trim();
      if (!text) return;
      chatInput.value = '';
      sendUserMessage(text);
    });

    // Send User Message & Fetch AI Response
    async function sendUserMessage(text) {
      appendMessage('user', text);

      // Append typing indicator
      const typingEl = document.createElement('div');
      typingEl.className = 'ai-msg ai-msg-assistant';
      typingEl.id = 'aiTypingIndicator';
      typingEl.innerHTML = `
        <div class="ai-bubble">
          <div class="ai-typing">
            <span class="ai-typing-dot"></span>
            <span class="ai-typing-dot"></span>
            <span class="ai-typing-dot"></span>
          </div>
        </div>
      `;
      chatBody.appendChild(typingEl);
      chatBody.scrollTop = chatBody.scrollHeight;

      if (sendBtn) sendBtn.disabled = true;

      try {
        let answer = await callGemini(text);
        const typingIndicator = document.getElementById('aiTypingIndicator');
        if (typingIndicator) typingIndicator.remove();

        if (answer) {
          appendMessage('assistant', answer);
        } else {
          appendMessage('assistant', 'Xin lỗi, hiện tại tôi gặp sự cố kết nối tới máy chủ. Bạn vui lòng thử lại sau giây lát nhé!');
        }
      } catch (err) {
        console.error('AI chat error:', err);
        const typingIndicator = document.getElementById('aiTypingIndicator');
        if (typingIndicator) typingIndicator.remove();
        appendMessage('assistant', 'Không thể kết nối đến máy chủ AI. Vui lòng thử lại!');
      } finally {
        if (sendBtn) sendBtn.disabled = false;
        chatInput.focus();
      }
    }

    async function callGemini(userText) {
      // Priority 1: Call Google Gemini 3.5 Flash Live API
      const candidateModels = ["gemini-3.5-flash", "gemini-3.5-flash-lite", "gemini-3.6-flash", "gemini-3.7-flash"];
      
      const contents = [
        {
          role: "user",
          parts: [{ text: `[SYSTEM INSTRUCTION]\n${SYSTEM_PROMPT}\n\n[USER QUESTION]\n${userText}` }]
        }
      ];

      for (const model of candidateModels) {
        try {
          const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`;
          const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents })
          });

          if (res.ok) {
            const data = await res.json();
            const cand = data.candidates && data.candidates[0];
            if (cand && cand.content && cand.content.parts && cand.content.parts[0]) {
              return cand.content.parts[0].text;
            }
          }
        } catch (e) {
          console.warn(`Direct model ${model} failed, trying next:`, e);
        }
      }

      // Priority 2: Call Backend Gateway /api/chat
      try {
        const backendRes = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: userText })
        });
        if (backendRes.ok) {
          const bData = await backendRes.json();
          if (bData && bData.answer) return bData.answer;
        }
      } catch (e) {
        console.warn('Backend /api/chat failed:', e);
      }

      return null;
    }

    function appendMessage(role, text) {
      const msg = document.createElement('div');
      msg.className = `ai-msg ai-msg-${role}`;
      
      // Basic markdown formatting (bold, italics, code, bullet points, headers)
      let formatted = text
        .replace(/### (.*?)\n/g, '<h4 style="margin:6px 0 4px 0; font-size:0.925rem; font-weight:700;">$1</h4>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/\n/g, '<br>');

      msg.innerHTML = `<div class="ai-bubble">${formatted}</div>`;
      chatBody.appendChild(msg);
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbotWidget);
  } else {
    initChatbotWidget();
  }
})();
