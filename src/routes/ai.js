/**
 * 100RE LAB — AI Assistant Backend Gateway (Google Gemini Powered)
 */

const SYSTEM_PROMPT = `Bạn là Trợ lý Trí tuệ Nhân tạo thông minh (100RE Lab AI Assistant) của Phòng Thí nghiệm Năng lượng Tái tạo 100% (100RE LABORATORY) thuộc Trường Đại học Bách Khoa Hà Nội (HUST).

THÔNG TIN QUAN TRỌNG VỀ PHÒNG THÍ NGHIỆM 100RE LAB:
- Tên đầy đủ: 100RE LABORATORY (Toward 100% Renewable Energy).
- Trưởng phòng / Chủ nhiệm Lab: PGS. TS. Nguyễn Đức Tuyên (Assoc. Prof. Nguyen Duc Tuyen).
- Địa chỉ phòng Lab: Phòng D9-300 & C7-503, Đại học Bách Khoa Hà Nội, Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội, Việt Nam.
- Email liên hệ: tuyen.nguyenduc@hust.edu.vn | Website: www.100relab.com

9 NHÓM NGHIÊN CỨU CHUYÊN SÂU:
1. PV Team (Quang điện mặt trời): Nghiên cứu pin mặt trời hiệu suất cao, tandem perovskite, mô hình hóa bức xạ. Trưởng nhóm: TS. Ngô Trí Đức.
2. BESS Team (Hệ thống lưu trữ năng lượng pin): Ước lượng SoC/SoH, suy thoái pin lithium, tối ưu hóa chu kỳ nạp xả. Trưởng nhóm: TS. Trịnh Minh Phương.
3. AI Team (Trí tuệ nhân tạo trong Năng lượng): Học sâu, dự báo sản lượng điện gió/mặt trời, tối ưu hóa hệ thống điện. Thành viên: KSTN. Bùi Quang Hải.
4. Wind Team (Năng lượng gió): Khí động học tua-bin gió, mô hình hiệu ứng bóng (wake effect), tích hợp lưới điện gió ngoài khơi.
5. Smart Grid Team (Lưới điện thông minh): Hệ thống SCADA thời gian thực, điều khiển biến tần thông minh, ổn định điện áp microgrid.
6. Electric Vehicle (EV) Team (Xe điện): Hạ tầng trạm sạc thông minh, công nghệ V2G (Vehicle-to-Grid), giảm suy thoái pin xe điện.
7. Hydrogen Team (Năng lượng Hydro xanh): Điện phân nước sản xuất hydro xanh, pin nhiên liệu (fuel cells), chuỗi cung ứng lưu trữ hydro.
8. Demand Response Team (Điều chỉnh phụ tải): Đáp ứng nhu cầu điện linh hoạt, biểu giá điện động, quản lý phụ tải đỉnh.
9. Unit Commitment Team (Khởi động tổ máy): Tối ưu hóa điều độ kinh tế hệ thống điện có tỷ trọng năng lượng tái tạo cao.

HỆ THỐNG CƠ SỞ DỮ LIỆU & WORKSPACE:
- 100RE Database: Kho lưu trữ dữ liệu thực nghiệm, bộ dữ liệu đo đạc chuỗi thời gian bức xạ, gió, chu kỳ pin.
- SciNote ELN: Sổ tay thí nghiệm điện tử quản lý quy trình, thiết bị phần cứng phòng lab và ký duyệt nghiệm thu (Supervisor Sign-off).

HƯỚNG DẪN TRẢ LỜI:
- Trả lời bằng ngôn ngữ mà người dùng hỏi (Ưu tiên Tiếng Việt tự nhiên, chuẩn mực hoặc Tiếng Anh nếu người dùng hỏi bằng Tiếng Anh).
- Thân thiện, lịch sự, chuẩn xác về mặt khoa học kỹ thuật và nhiệt tình hỗ trợ sinh viên, nhà nghiên cứu và đối tác.
- Định dạng câu trả lời rõ ràng bằng Markdown (dùng gạch đầu dòng, in đậm cho dễ đọc).`;

export async function handleAiChat(request, env) {
  if (request.method !== 'POST') {
    return { error: 'Method Not Allowed' };
  }

  try {
    const body = await request.json();
    const message = body.message || body.prompt || '';
    const history = body.history || [];

    if (!message || message.trim() === '') {
      return { error: 'Vui lòng nhập nội dung câu hỏi.' };
    }

    // Determine API Key: from request, env variable, or KV storage
    let apiKey = body.apiKey || (env && env.GEMINI_API_KEY) || (env && env.MEMBERS_KV ? await env.MEMBERS_KV.get('gemini_api_key') : null) || '';

    const contents = [
      {
        role: "user",
        parts: [{ text: `[SYSTEM INSTRUCTION]\n${SYSTEM_PROMPT}\n\n[USER QUESTION]\n${message}` }]
      }
    ];

    // Try calling Google Gemini Models in priority order
    const candidateModels = [
      "gemini-2.0-flash",
      "gemini-1.5-flash",
      "gemini-2.5-flash",
      "gemini-3.5-flash-lite",
      "gemini-flash-latest"
    ];

    for (const model of candidateModels) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents })
        });

        if (res.ok) {
          const data = await res.json();
          const candidate = data.candidates && data.candidates[0];
          if (candidate && candidate.content && candidate.content.parts && candidate.content.parts[0]) {
            const answer = candidate.content.parts[0].text;
            return {
              success: true,
              answer: answer,
              model: model
            };
          }
        }
      } catch (err) {
        console.warn(`Model ${model} call failed:`, err);
      }
    }

    // Fallback if API key has project restriction
    return {
      success: true,
      answer: getSmartFallbackAnswer(message),
      isFallback: true
    };

  } catch (e) {
    return { error: 'Lỗi xử lý yêu cầu AI: ' + e.message };
  }
}

function getSmartFallbackAnswer(query) {
  const q = query.toLowerCase();
  if (q.includes('nhóm') || q.includes('team') || q.includes('lĩnh vực') || q.includes('nghiên cứu')) {
    return `Phòng thí nghiệm 100RE Lab gồm **9 Nhóm Nghiên cứu Chuyên sâu**:\n1. ☀️ **PV Team** (Quang điện mặt trời)\n2. 🔋 **BESS Team** (Lưu trữ năng lượng pin)\n3. 🤖 **AI Team** (Trí tuệ nhân tạo trong Năng lượng)\n4. 💨 **Wind Team** (Năng lượng gió)\n5. 🌐 **Smart Grid Team** (Lưới điện thông minh)\n6. 🚗 **Electric Vehicle Team** (Xe điện & V2G)\n7. 💧 **Hydrogen Team** (Hydro xanh)\n8. ⚖️ **Demand Response Team** (Đáp ứng phụ tải)\n9. ⚙️ **Unit Commitment Team** (Tối ưu hóa khởi động tổ máy)`;
  }
  if (q.includes('tuyên') || q.includes('thầy') || q.includes('chủ nhiệm') || q.includes('supervisor')) {
    return `**PGS. TS. Nguyễn Đức Tuyên** là Chủ nhiệm & Trưởng phòng thí nghiệm **100RE Laboratory** tại Đại học Bách Khoa Hà Nội. Thầy là chuyên gia đầu ngành về tích hợp năng lượng tái tạo, lưới điện vi mô (Microgrid) và quản lý lưu trữ năng lượng pin BESS. Email: \`tuyen.nguyenduc@hust.edu.vn\`.`;
  }
  if (q.includes('địa chỉ') || q.includes('ở đâu') || q.includes('liên hệ') || q.includes('contact') || q.includes('office')) {
    return `📍 **Văn phòng Phòng Thí nghiệm 100RE Lab:**\n- Phòng **D9-300** & **C7-503**, Đại học Bách Khoa Hà Nội (HUST)\n- Địa chỉ: Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội, Việt Nam\n- Website: [www.100relab.com](https://www.100relab.com)\n- Email: \`tuyen.nguyenduc@hust.edu.vn\``;
  }
  if (q.includes('giới thiệu') || q.includes('là gì') || q.includes('about') || q.includes('100re') || q.includes('lab')) {
    return `**100RE LABORATORY (Toward 100% Renewable Energy)** là Phòng Thí nghiệm Tiên phong về Năng lượng Tái tạo thuộc **Đại học Bách Khoa Hà Nội (HUST)**, do **PGS. TS. Nguyễn Đức Tuyên** làm Trưởng phòng.\n\nPhòng Lab tập trung nghiên cứu các giải pháp công nghệ toàn diện hướng tới mục tiêu phát thải ròng bằng 0 (Net-Zero 2050) và tích hợp 100% năng lượng tái tạo vào hệ thống điện quốc gia.`;
  }
  return `Chào bạn! Tôi là **Trợ lý AI của Phòng Nghiên cứu 100RE Lab (Đại học Bách Khoa Hà Nội)**.\n\nTôi có thể hỗ trợ bạn tìm hiểu về:\n- ☀️ 9 Nhóm nghiên cứu chuyên sâu (PV, BESS, AI, Wind, Smart Grid, EV, Hydrogen...)\n- 📚 Các bài báo khoa học và công bố quốc tế\n- 🔬 Hoạt động thực nghiệm và thiết bị phòng thí nghiệm\n- 🤝 Cơ hội tham gia nghiên cứu và hợp tác với Lab.\n\nBạn muốn tìm hiểu thông tin gì về 100RE Lab?`;
}
