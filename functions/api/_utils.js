// Default lab members dataset bundled for Cloudflare deployment
export const DEFAULT_MEMBERS = [
  {
    id: "pv-1",
    name: "Ngô Trí Đức",
    team: "pv",
    teamName: "PV Team",
    role: "PV Team",
    image: "assets/images/ngo_tri_duc.png",
    bio: "Researcher in the PV Team at 100RE Laboratory. Focusing on photovoltaic systems modeling, performance analysis, and optimization."
  },
  {
    id: "pv-2",
    name: "Bui Quang Minh",
    team: "pv",
    teamName: "PV Team",
    role: "PV Team",
    image: "assets/images/bui_quang_minh.jpg",
    bio: "Researcher in the PV Team at 100RE Laboratory. Dedicated to solar irradiance modeling and high-efficiency photovoltaic integration."
  },
  {
    id: "ai-1",
    name: "Bui Quang Hai",
    team: "ai",
    teamName: "AI Team",
    role: "AI Team",
    image: "assets/images/bui_quang_hai.jpg",
    bio: "Researcher in the AI Team at 100RE Laboratory. Specializing in Artificial Intelligence, Deep Learning, and Neural Network applications for renewable energy systems."
  },
  {
    id: "dr_uc-1",
    name: "Nguyen Tuan Anh",
    team: "dr_uc",
    teamName: "Demand Response and Unit Commitment Team",
    role: "Unit Commitment Team",
    image: "assets/images/nguyen_tuan_anh.jpg",
    bio: "Researcher at 100RE Laboratory. Research focus: Unit commitment optimization, demand response mechanisms, power dispatch algorithms.\n\nContact: Tel: +84 974 812 546 | Email: anh.nt196322@sis.hust.edu.vn"
  },
  {
    id: "dr_uc-2",
    name: "Le Anh Quan",
    team: "dr_uc",
    teamName: "Demand Response and Unit Commitment Team",
    role: "Unit Commitment Team",
    image: "assets/images/le_anh_quan.png",
    bio: "Researcher in Demand Response & Unit Commitment Team at 100RE Laboratory. Focusing on mathematical modeling, power system economic dispatch, and load curve optimization."
  },
  {
    id: "wind-1",
    name: "Nguyen Hoang Nam",
    team: "wind",
    teamName: "Wind Team",
    role: "Wind Team",
    image: "assets/images/nguyen_hoang_nam.jpg",
    bio: "Researcher in the Wind Energy Team at 100RE Laboratory. Researching wind turbine aerodynamics, power curve forecasting, and grid integration."
  },
  {
    id: "wind-2",
    name: "Nguyễn Như Tùng",
    team: "wind",
    teamName: "Wind Team",
    role: "Wind Team",
    image: "assets/images/nguyen_nhu_tung.png",
    bio: "Researcher in the Wind Team at 100RE Laboratory. Focusing on wind farm layout optimization and wake effect modeling."
  },
  {
    id: "smartgrid-1",
    name: "Le Ngoc Dung",
    team: "smartgrid",
    teamName: "Smart Grid Team",
    role: "Smart Grid Team",
    image: "assets/images/le_ngoc_dung.jpg",
    bio: "Researcher in the Smart Grid Team at 100RE Laboratory. Researching microgrid management, communication protocols, and grid automation."
  },
  {
    id: "smartgrid-2",
    name: "Duong Minh Hai",
    team: "smartgrid",
    teamName: "Smart Grid Team",
    role: "Smart Grid Team",
    image: "assets/images/duong_minh_hai.png",
    bio: "Researcher in the Smart Grid Team at 100RE Laboratory. Focused on real-time SCADA monitoring, voltage stability, and active distribution networks."
  },
  {
    id: "smartgrid-3",
    name: "Vu Tien Dung",
    team: "smartgrid",
    teamName: "Smart Grid Team",
    role: "Smart Grid Team",
    image: "assets/images/vu_tien_dung.png",
    bio: "Researcher in the Smart Grid Team at 100RE Laboratory. Investigating power quality improvement, inverter control, and distributed energy resources."
  },
  {
    id: "ev-1",
    name: "Le The Cuong",
    team: "ev",
    teamName: "Electric Vehicle",
    role: "Electric Vehicle Team",
    image: "assets/images/le_the_cuong.jpg",
    bio: "Researcher in the Electric Vehicle Team at 100RE Laboratory. Specializing in EV charging infrastructure, V2G (Vehicle-to-Grid) interactions, and power electronics."
  },
  {
    id: "ev-2",
    name: "Dao Quoc Khanh",
    team: "ev",
    teamName: "Electric Vehicle",
    role: "Electric Vehicle Team",
    image: "assets/images/dao_quoc_khanh.jpg",
    bio: "Researcher in the Electric Vehicle Team at 100RE Laboratory. Focused on smart charging scheduling and EV battery health degradation modeling."
  },
  {
    id: "hydrogen-1",
    name: "Nguyen Hoang Anh",
    team: "hydrogen",
    teamName: "Hydrogen Team",
    role: "Hydrogen Team",
    image: "assets/images/nguyen_hoang_anh.jpg",
    bio: "Researcher in the Hydrogen Team at 100RE Laboratory. Exploring Green Hydrogen production via water electrolysis, fuel cell efficiency, and hydrogen storage supply chains."
  },
  {
    id: "bess-1",
    name: "Trinh Minh Phuong",
    team: "bess",
    teamName: "BESS Team",
    role: "BESS Team",
    image: "assets/images/trinh_minh_phuong.jpg",
    bio: "Researcher in the BESS Team at 100RE Laboratory. Dedicated to battery state of charge (SoC) estimation, state of health (SoH), and energy storage economics."
  },
  {
    id: "bess-2",
    name: "Nguyen Quang Anh",
    team: "bess",
    teamName: "BESS Team",
    role: "BESS Team",
    image: "assets/images/nguyen_quang_anh.png",
    bio: "Researcher in the BESS Team at 100RE Laboratory. Working on battery energy management systems (BEMS) and hybrid renewable storage systems."
  },
  {
    id: "bess-3",
    "name": "Tran Thi Hong Vinh",
    "team": "bess",
    "teamName": "BESS Team",
    "role": "BESS Team",
    "image": "assets/images/tran_thi_hong_vinh.png",
    "bio": "Researcher in the BESS Team at 100RE Laboratory. Specializing in battery degradation models, thermal management, and energy storage peak shaving strategies."
  }
];

export const ADMIN_USERNAME = "100re";
export const ADMIN_PASSWORD = "100re";

export function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status: status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
    }
  });
}

export function extractToken(request) {
  const auth = request.headers.get("Authorization") || "";
  if (auth.startsWith("Bearer ")) {
    return auth.slice(7).trim();
  }
  return auth.trim();
}

export async function verifyToken(token, env) {
  if (!token) return false;
  if (env && env.MEMBERS_KV) {
    const session = await env.MEMBERS_KV.get(`session:${token}`);
    return session !== null;
  }
  // In stateless / memory mode, valid if non-empty UUID
  return token.length >= 10;
}
