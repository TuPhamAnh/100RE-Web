/**
 * 100RE LAB — Floating AI Chatbot Widget (Google Gemini Powered)
 */

(function () {
  const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
    ? '' 
    : '';

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
              <div class="ai-status"><span class="ai-status-dot"></span> Trực tuyến (Gemini AI)</div>
            </div>
          </div>
          <div class="ai-header-actions">
            <button id="btnCloseAiChat" title="Đóng">&times;</button>
          </div>
        </div>

        <!-- Messages Area -->
        <div class="ai-chat-body" id="aiChatBody">
          <!-- Welcome Message -->
          <div class="ai-msg ai-msg-assistant">
            <div class="ai-bubble">
              👋 Xin chào! Tôi là **100RE Lab AI Assistant** (Trợ lý Trí tuệ Nhân tạo của 100RE Laboratory - Đại học Bách Khoa Hà Nội).<br><br>
              Bạn có thể hỏi tôi bất cứ điều gì bằng <strong>Tiếng Việt</strong> hoặc <strong>English</strong>! Dưới đây là một số câu hỏi gợi ý:
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
          <input type="text" id="aiChatInput" class="ai-input" placeholder="Ask 100RE Lab AI Assistant anything (Tiếng Việt / English)..." autocomplete="off" required>
          <button type="submit" id="btnAiSend" class="btn-ai-send" title="Gửi câu hỏi">
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
      // Append user bubble
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
        const res = await fetch(`${API_BASE}/api/chat`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: text })
        });

        const data = await res.json();
        const typingIndicator = document.getElementById('aiTypingIndicator');
        if (typingIndicator) typingIndicator.remove();

        if (data && data.answer) {
          appendMessage('assistant', data.answer);
        } else {
          appendMessage('assistant', 'Xin lỗi, hiện tại tôi gặp sự cố kết nối tới máy chủ. Bạn vui lòng thử lại sau giây lát nhé!');
        }
      } catch (err) {
        console.error('AI chat error:', err);
        const typingIndicator = document.getElementById('aiTypingIndicator');
        if (typingIndicator) typingIndicator.remove();
        appendMessage('assistant', 'Không thể kết nối đến máy chủ AI. Vui lòng kiểm tra mạng!');
      } finally {
        if (sendBtn) sendBtn.disabled = false;
        chatInput.focus();
      }
    }

    function appendMessage(role, text) {
      const msg = document.createElement('div');
      msg.className = `ai-msg ai-msg-${role}`;
      
      // Basic markdown formatting (bold, italics, code, bullet points)
      let formatted = text
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
