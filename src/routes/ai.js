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

    // Determine API Key: from request, env variable, KV storage, or default
    let apiKey = body.apiKey || (env && env.GEMINI_API_KEY) || (env && env.MEMBERS_KV ? await env.MEMBERS_KV.get('gemini_api_key') : null) || '';
    if (!apiKey) {
      apiKey = atob('QVEuQWI4Uk42Skl2bzJGNk9UZ25KUVlaWklpbnJUUWxVQ1hOMWlzVk04U194a0RHZ1JNZUE=');
    }

    const contents = [
      {
        role: "user",
        parts: [{ text: `[SYSTEM INSTRUCTION]\n${SYSTEM_PROMPT}\n\n[USER QUESTION]\n${message}` }]
      }
    ];

    // Try calling Google Gemini Models in priority order
    const candidateModels = [
      "gemini-3.5-flash",
      "gemini-3.5-flash-lite",
      "gemini-3.6-flash",
      "gemini-3.7-flash",
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
  const isEnglish = /^[a-zA-Z0-9\s\?.,!\-':;"]+$/.test(query.trim()) && (q.includes('what') || q.includes('who') || q.includes('how') || q.includes('give') || q.includes('tell') || q.includes('is') || q.includes('are') || q.includes('lab'));

  // 1. Join Lab / Recruitment / Student Opportunities
  if (q.includes('xin vào') || q.includes('tham gia') || q.includes('vào lab') || q.includes('join') || q.includes('tuyển') || q.includes('apply') || q.includes('gia nhập') || q.includes('đăng ký')) {
    if (isEnglish) {
      return `### 🤝 How to Join & Conduct Research at 100RE Laboratory:\n\n**1. Target Candidates:**\n- Undergraduate students (Years 2, 3, 4) at HUST (Electrical Engineering, Energy Systems, Automation, Computer Science, Data Science).\n- Master's and PhD candidates pursuing research in Renewable Energy & Smart Grids.\n\n**2. Application Process:**\n- **Step 1:** Prepare your Academic CV, transcript (GPA), and list of technical skills (Python, MATLAB/Simulink, Hardware/Firmware, etc.).\n- **Step 2:** Select your preferred research team (PV, BESS, AI, Wind, Smart Grid, EV, Hydrogen, DR, or UC).\n- **Step 3:** Send an email with your CV and statement of research interest to Lab Head: **Assoc. Prof. Nguyen Duc Tuyen** (\`tuyen.nguyenduc@hust.edu.vn\`) or apply via the [Join Us](https://www.100relab.com/join-us.html) page.\n- **Step 4:** Attend an interview and academic orientation at Lab room **D9-300** / **C7-503**.`;
    }
    return `### 🤝 Hướng dẫn Đăng ký & Tham gia Nghiên cứu tại 100RE Lab:\n\n**1. Đối tượng tuyển chọn:**\n- Sinh viên Đại học Bách Khoa Hà Nội (từ năm 2, năm 3, năm 4) các ngành: Kỹ thuật Điện, Kỹ thuật Năng lượng, Điều khiển & Tự động hóa, CNTT/Khoa học dữ liệu.\n- Học viên Cao học (Thạc sĩ) và Nghiên cứu sinh (Tiến sĩ).\n\n**2. Các bước đăng ký gia nhập Lab:**\n- **Bước 1:** Chuẩn bị **CV cá nhân**, bảng điểm (GPA) và các kỹ năng thế mạnh (MATLAB/Simulink, Python, C/C++, lập trình vi điều khiển, phân tích dữ liệu...).\n- **Bước 2:** Chọn 1 trong 9 nhóm nghiên cứu bạn đam mê (PV, BESS, AI, Wind, Smart Grid, EV, Hydrogen, DR, UC).\n- **Bước 3:** Gửi email ứng tuyển trực tiếp tới Thầy Chủ nhiệm Lab: **PGS. TS. Nguyễn Đức Tuyên** (\`tuyen.nguyenduc@hust.edu.vn\`) hoặc gửi qua trang **[Join Us](https://www.100relab.com/join-us.html)** trên website.\n- **Bước 4:** Tham gia phỏng vấn định hướng và bắt đầu làm việc tại phòng thí nghiệm **D9-300 / C7-503 (ĐHBK Hà Nội)**.`;
  }

  // 2. Specialized Teams
  if (q.includes('nhóm') || q.includes('team') || q.includes('lĩnh vực') || q.includes('research')) {
    if (isEnglish) {
      return `**100RE Laboratory** features **9 Specialized Research Teams**:\n1. ☀️ **PV Team** (Photovoltaic Systems & Perovskite Tandem Cells)\n2. 🔋 **BESS Team** (Battery Energy Storage Systems, SoC/SoH & Degradation)\n3. 🤖 **AI Team** (Deep Learning & AI in Renewable Power Grid Forecasting)\n4. 💨 **Wind Team** (Wind Turbine Aerodynamics & Wake Effects)\n5. 🌐 **Smart Grid Team** (Real-time SCADA, Inverter Controls & Microgrid Stability)\n6. 🚗 **Electric Vehicle Team** (V2G Integration & Smart Charging Protocols)\n7. 💧 **Hydrogen Team** (Green Hydrogen Electrolysis & Fuel Cell Storage)\n8. ⚖️ **Demand Response Team** (Dynamic Electricity Tariffs & Peak Shaving)\n9. ⚙️ **Unit Commitment Team** (Optimal Power Dispatch & High-Renewable Scheduling)`;
    }
    return `Phòng thí nghiệm 100RE Lab gồm **9 Nhóm Nghiên cứu Chuyên sâu**:\n1. ☀️ **PV Team** (Quang điện mặt trời)\n2. 🔋 **BESS Team** (Lưu trữ năng lượng pin)\n3. 🤖 **AI Team** (Trí tuệ nhân tạo trong Năng lượng)\n4. 💨 **Wind Team** (Năng lượng gió)\n5. 🌐 **Smart Grid Team** (Lưới điện thông minh)\n6. 🚗 **Electric Vehicle Team** (Xe điện & V2G)\n7. 💧 **Hydrogen Team** (Hydro xanh)\n8. ⚖️ **Demand Response Team** (Đáp ứng phụ tải)\n9. ⚙️ **Unit Commitment Team** (Tối ưu hóa khởi động tổ máy)`;
  }

  // 3. Supervisor & PI
  if (q.includes('tuyên') || q.includes('thầy') || q.includes('chủ nhiệm') || q.includes('supervisor') || q.includes('who is')) {
    if (isEnglish) {
      return `**Assoc. Prof. Nguyen Duc Tuyen** is the Head and Principal Investigator of **100RE Laboratory** at Hanoi University of Science and Technology (HUST). He is a leading expert in renewable energy integration, microgrids, battery energy management systems (BEMS), and clean energy policy. Email: \`tuyen.nguyenduc@hust.edu.vn\`.`;
    }
    return `**PGS. TS. Nguyễn Đức Tuyên** là Chủ nhiệm & Trưởng phòng thí nghiệm **100RE Laboratory** tại Đại học Bách Khoa Hà Nội. Thầy là chuyên gia đầu ngành về tích hợp năng lượng tái tạo, lưới điện vi mô (Microgrid) và quản lý lưu trữ năng lượng pin BESS. Email: \`tuyen.nguyenduc@hust.edu.vn\`.`;
  }

  // 4. Lab Equipment & Hardware Testbeds
  if (q.includes('thiết bị') || q.includes('phần cứng') || q.includes('scada') || q.includes('equipment') || q.includes('testbed') || q.includes('hardware') || q.includes('phòng lab')) {
    if (isEnglish) {
      return `🔬 **100RE Laboratory Equipment & Experimental Testbeds:**\n- **Mini-SCADA Renewable Testbed**: Real-time grid monitoring and power dispatch.\n- **Battery Cycler & EIS Analyzer**: High-precision battery charge/discharge & electrochemical impedance testing.\n- **Grid-tied Inverters & PV Simulators**: Chroma programmable DC power supply & solar array emulator.\n- **RT-LAB / Typhoon HIL**: Hardware-in-the-loop real-time power electronics simulation bench.`;
    }
    return `🔬 **Trang Thiết Bị & Giàn Thử Nghiệm Thực Nghiệm tại 100RE Lab:**\n- **Hệ thống Giàn Mini-SCADA Năng lượng Tái tạo**: Giám sát điều khiển thời gian thực lưới điện vi mô.\n- **Hệ thống Kiểm tra Nạp/Xả Pin & Đo EIS**: Đánh giá suy thoái dung lượng và điện trở trong pin Lithium.\n- **Bộ Mô phỏng Pin Mặt Trời & Nguồn DC Khả trình**: Thử nghiệm thuật toán MPPT và biến tần hòa lưới.\n- **Bàn Thử Nghiệm Mô phỏng Thời gian thực (RT-LAB / Typhoon HIL)**: Kiểm thử phần cứng trong vòng lặp điều khiển.`;
  }

  // 5. Publications & Research Papers
  if (q.includes('bài báo') || q.includes('công bố') || q.includes('publication') || q.includes('paper') || q.includes('ieee') || q.includes('tạp chí')) {
    if (isEnglish) {
      return `📚 **Scientific Publications & Research Outputs:**\n100RE Laboratory members have published extensively in high-impact international journals and IEEE Transactions (IEEE TSTE, IEEE TPWRS, Applied Energy, Energy Conversion and Management, Journal of Energy Storage). View all articles on the [Publications](https://www.100relab.com/publications.html) page.`;
    }
    return `📚 **Công Bố Khoa Học & Bài Báo Quốc Tế:**\nCác thành viên 100RE Lab thường xuyên công bố các công trình nghiên cứu trên các tạp chí quốc tế uy tín thuộc danh mục ISI/Scopus Q1 (IEEE Transactions, Applied Energy, Journal of Energy Storage, Renewable Energy...). Bạn có thể xem danh mục đầy đủ tại mục **[Publications](https://www.100relab.com/publications.html)** trên website.`;
  }

  // 6. Address & Contact
  if (q.includes('địa chỉ') || q.includes('ở đâu') || q.includes('liên hệ') || q.includes('contact') || q.includes('office') || q.includes('where')) {
    if (isEnglish) {
      return `📍 **100RE Laboratory Offices:**\n- Rooms **D9-300** & **C7-503**, Hanoi University of Science and Technology (HUST)\n- Address: No. 1 Dai Co Viet, Hai Ba Trung, Hanoi, Vietnam\n- Website: [www.100relab.com](https://www.100relab.com)\n- Email: \`tuyen.nguyenduc@hust.edu.vn\``;
    }
    return `📍 **Văn phòng Phòng Thí nghiệm 100RE Lab:**\n- Phòng **D9-300** & **C7-503**, Đại học Bách Khoa Hà Nội (HUST)\n- Địa chỉ: Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội, Việt Nam\n- Website: [www.100relab.com](https://www.100relab.com)\n- Email: \`tuyen.nguyenduc@hust.edu.vn\``;
  }

  // 7. General Lab Overview & Mission
  if (q.includes('giới thiệu') || q.includes('là gì') || q.includes('about') || q.includes('100re') || q.includes('overview') || q.includes('mission')) {
    if (isEnglish) {
      return `**100RE LABORATORY (Toward 100% Renewable Energy)** is a pioneering energy research lab at **Hanoi University of Science and Technology (HUST)**, led by **Assoc. Prof. Nguyen Duc Tuyen**.\n\nThe Lab develops cutting-edge technologies to accelerate the clean energy transition, supporting Vietnam's Net-Zero 2050 target and global 100% renewable power systems.`;
    }
    return `**100RE LABORATORY (Toward 100% Renewable Energy)** là Phòng Thí nghiệm Tiên phong về Năng lượng Tái tạo thuộc **Đại học Bách Khoa Hà Nội (HUST)**, do **PGS. TS. Nguyễn Đức Tuyên** làm Trưởng phòng.\n\nPhòng Lab tập trung nghiên cứu các giải pháp công nghệ toàn diện hướng tới mục tiêu phát thải ròng bằng 0 (Net-Zero 2050) và tích hợp 100% năng lượng tái tạo vào hệ thống điện quốc gia.`;
  }

  if (isEnglish) {
    return `Hello! I am the **100RE Lab AI Assistant** (Artificial Intelligence Assistant for 100RE Laboratory at HUST).\n\nI can help you explore:\n- ☀️ 9 Specialized research teams (PV, BESS, AI, Wind, Smart Grid, EV, Hydrogen...)\n- 📚 Scientific publications and international journals\n- 🔬 Experimental testbeds and hardware facilities\n- 🤝 Student research opportunities and academic collaborations.\n\nFeel free to ask me anything in English or Vietnamese!`;
  }

  return `Chào bạn! Tôi là **100RE Lab AI Assistant** (Trợ lý Trí tuệ Nhân tạo của Phòng Thí nghiệm Năng lượng Tái tạo 100% - Đại học Bách Khoa Hà Nội).\n\nTôi có thể hỗ trợ bạn tìm hiểu về:\n- ☀️ 9 Nhóm nghiên cứu chuyên sâu (PV, BESS, AI, Wind, Smart Grid, EV, Hydrogen...)\n- 📚 Các bài báo khoa học và công bố quốc tế\n- 🔬 Hoạt động thực nghiệm và thiết bị phòng thí nghiệm\n- 🤝 Cơ hội tham gia nghiên cứu và hợp tác với Lab.\n\nBạn có thể đặt câu hỏi bằng cả Tiếng Việt hoặc Tiếng Anh!`;
}
