export type ProjectCategory = "AI Dreams" | "Web Playgrounds" | "Design Doodles";
export type ProjectTemplateVariant = "showcase" | "case-study";

export interface ProjectFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProjectTroubleshooting {
  problem: string;
  solution: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  subtitle?: string;
  badge: string;
  category: ProjectCategory;
  categoryTag: string;
  template: ProjectTemplateVariant;
  summary: string;
  heroImage?: string;
  heroImageAlt: string;
  heroIcon?: string;
  conceptTitle: string;
  conceptHighlight?: string;
  conceptDescription: string;
  conceptImage?: string;
  conceptImageAlt?: string;
  features: ProjectFeature[];
  troubleshooting?: ProjectTroubleshooting[];
  techStack: string[];
  links?: {
    github?: string;
    demo?: string;
  };
}

/**
 * 토이 프로젝트 통합 데이터
 * 실제 토이 프로젝트로 교체할 때 이 배열의 항목만 수정하거나 추가하면
 * 메인 페이지(/), 프로젝트 목록(/project/list), 상세 페이지(/project/[slug])에 모두 반영됩니다.
 *
 * - template: "showcase" (project1 스타일 - 부드러운 파스텔 카드형)
 * - template: "case-study" (project2 스타일 - 비대칭 컨셉 섹션 & 벤토 그리드형)
 */
export const PROJECTS: ProjectItem[] = [
  {
    slug: "project1",
    title: "말랑말랑 챗봇",
    subtitle: "(Malang-Malang Chatbot)",
    badge: "Featured Project",
    category: "AI Dreams",
    categoryTag: "AI Dream",
    template: "showcase",
    summary:
      "사용자의 감정을 분석하여 따뜻한 위로를 건네는 AI 친구 서비스입니다. 둥글둥글한 UI가 특징입니다.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtvbv-zSiFMdYX7zM0sKaAaKP2AQHEJJx36QiItu252N7XivzdgStYGPgkYziPLHtPbk-D6yxbDUFoNjAtH0XG-kWECvbTFox_PSpbCZY5gpKTUmCXYUSXPG-FIn9DF0Prc6BpXuSlRSq_6cajKpFQodRZH_NOdD7geibcukqFHXvRd2lRwGUFq4kVSHp2iOvUzbMIWqkzaDiXwLmjld5_pv2DQLPin0xJ-PR7ArqE_KYC66Any-PVNg",
    heroImageAlt:
      "A highly detailed, soft pastel colored 3D render of a cute, friendly, floating robot companion",
    conceptTitle: "The Goal",
    conceptDescription:
      "In a fast-paced world, finding a moment of genuine emotional connection can be tough. Malang-Malang Chatbot was created to bridge this gap, offering a safe, non-judgmental space for users to vent, seek comfort, and receive empathetic responses driven by advanced sentiment analysis.",
    conceptImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7N_GIed6eVVsUFLze27JzI9hU5n1L5-Gy3wBK97k_R7LYMu3qg_xOyQnRxzszdN5PZGsFeEiqw_vht3tpZ5K6K9gGOk1e9dp5TnYH5tKtosoCcdrtk8LMiLccps09cNsw4It0ieukLkxZRJf1K0i69r3Yvn2lCtprF3KmTpKbk4GbdXnI4zlxO1QTljnFvqdZhh3JUEBtoFC32sqyx1gqyXITaGpWahCtC1vjXUQ90ysK3Cp0E61cww",
    conceptImageAlt:
      "A stylized illustration of a mobile app interface showing a chat conversation with a cute robot avatar",
    features: [
      {
        icon: "favorite",
        title: "Sentiment Analysis",
        description:
          "Understands your mood and adapts its tone to provide appropriate comfort.",
      },
      {
        icon: "psychology_alt",
        title: "Empathetic AI",
        description:
          "Trained to respond not just with logic, but with simulated emotional intelligence.",
      },
      {
        icon: "palette",
        title: "Customizable UI",
        description:
          "Personalize the chat environment with soothing color palettes and themes.",
      },
    ],
    troubleshooting: [
      {
        problem:
          "대화가 길어질수록 이전 감정 맥락을 잃거나 답변 톤이 기계적으로 변하는 현상",
        solution:
          "최근 대화 요약 컨텍스트와 감정 상태 태그를 시스템 프롬프트에 동적으로 주입하여 일관된 공감형 페르소나를 유지했습니다.",
      },
    ],
    techStack: ["Next.js", "FastAPI", "OpenAI API", "Tailwind CSS"],
    links: {
      github: "https://github.com",
      demo: "/chat",
    },
  },
  {
    slug: "project2",
    title: "Heart Tracker",
    subtitle: "(하트 트래커)",
    badge: "Case Study",
    category: "Design Doodles",
    categoryTag: "Design Doodle",
    template: "case-study",
    summary:
      "당신의 하루, 어떤 모양의 하트로 남았나요? 매일의 기분을 하트 모양으로 기록하는 소소한 일기장 앱.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGyPemPRDO3eTlUn2SK-sPM8y4LtFw1D2Qf0vPIrQa7C2oZDcxxOvzq2sc9yuCxC8np02J7v8eqlo8cNk6ZB74eiZWrIHytnrE-03quxuTrLb_KHEVWhkHsZZ_q36pd06foyW4FUNaXVEtqS1PrlRIvuG8INgd3OyesJO90Uhi7TZF7PxEoyF_J5NjYpR7CdILuQB4QDXdjgDmAT0Lgrr_SRBXKRA7W5wxqujTPLLMWPZdbYOQiX-MgQ",
    heroImageAlt: "Heart Tracker App Mockup",
    conceptTitle: "Concept",
    conceptHighlight: "'Recording daily feelings as heart-shaped notes'",
    conceptDescription:
      "복잡한 감정을 긴 글로 적는 대신, 직관적이고 귀여운 하트 모양 노트에 담아보세요. 색상과 크기로 그날의 감정 농도를 표현하며, 시각적으로 아름다운 나만의 감정 기록장을 완성할 수 있습니다.",
    conceptImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmBLQZYC18Yf9jgac2M1z47ZsQurJwoBrmzDWGXVxkbOB-sMn-W7WlSKzhJZ8lrVXROltQ-awTrWjIa5gTViimbU2Z6sxCRgRjLDWawI26PhcClfDOKZ3H0YrQ21pC6vRKQYZG3LHQqq_bqQmxEdfzFS1lpOxrEpw6HQFTBiJW2VCtwPMFVeGVIDMZuE6Jq4pyArp3UYjaDfl322-w0v-6ur4_7cge7WGG6PqHg3C47v2R5EOnIlOHgg",
    conceptImageAlt: "Concept Illustration",
    features: [
      {
        icon: "insights",
        title: "Emotional Insights",
        description:
          "기록된 하트 데이터를 분석하여 주간/월간 감정 변화 추이를 부드러운 곡선 그래프로 제공합니다.",
      },
      {
        icon: "calendar_month",
        title: "Heart Calendar",
        description:
          "매일 모인 하트들이 캘린더를 채워가는 모습을 시각적으로 즐길 수 있습니다. 한눈에 보는 나의 감정 달력.",
      },
      {
        icon: "share",
        title: "Social Sharing",
        description:
          "예쁘게 완성된 오늘의 하트를 이미지로 저장하거나 친구들과 공유하며 위로와 공감을 나눌 수 있습니다.",
      },
    ],
    troubleshooting: [
      {
        problem:
          "월간 캘린더에서 30개 이상의 커스텀 하트 애니메이션이 동시에 실행될 때 모바일 환경 프레임 저하 발생",
        solution:
          "Framer Motion의 layout 애니메이션 범위를 최소화하고 GPU 가속 속성(transform/opacity)만 사용하도록 리팩토링하여 60fps를 확보했습니다.",
      },
    ],
    techStack: ["React Native", "Firebase", "Framer Motion"],
    links: {
      github: "https://github.com",
    },
  },
  {
    slug: "robogarden",
    title: "RoboGarden V2",
    subtitle: "(로보가든 V2)",
    badge: "AI Dream",
    category: "AI Dreams",
    categoryTag: "AI Dream",
    template: "showcase",
    summary:
      "An interactive experiment blending generative AI with cozy gaming mechanics. Watch your digital flora bloom based on daily weather data.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3G4iP_mQD8_S4Q79XuaVFPbPwph67OBTNKFzo8ZcTU8V2LjoSsHakTjLhx8noFbMOHQpWXw_BvVhCzpX62gkVXqZlgNQaU0X9GqowVOftrtxMj7bS0r8f0ZNJvi2pBLj30RwxSqq2wYjVZ7M7vkSOv0Ly95tX-_Pqg0MPFBlQxXszH5K3Mo-BPQm8EFK8LkNXrSMGD5d43Rcq6I1MHC2A9c300beuxE7KYuh47DShoeMyyDcqZd1GzQ",
    heroImageAlt:
      "A vibrant, playful 3D rendered illustration of a friendly robot tending to a digital garden",
    conceptTitle: "The Goal",
    conceptDescription:
      "실시간 날씨 데이터와 생성형 AI를 결합해 매일 조금씩 자라나는 나만의 아늑한 디지털 정원을 웹에서 구현한 실험적 토이 프로젝트입니다.",
    conceptImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3G4iP_mQD8_S4Q79XuaVFPbPwph67OBTNKFzo8ZcTU8V2LjoSsHakTjLhx8noFbMOHQpWXw_BvVhCzpX62gkVXqZlgNQaU0X9GqowVOftrtxMj7bS0r8f0ZNJvi2pBLj30RwxSqq2wYjVZ7M7vkSOv0Ly95tX-_Pqg0MPFBlQxXszH5K3Mo-BPQm8EFK8LkNXrSMGD5d43Rcq6I1MHC2A9c300beuxE7KYuh47DShoeMyyDcqZd1GzQ",
    conceptImageAlt: "RoboGarden 3D illustration",
    features: [
      {
        icon: "partly_cloudy_day",
        title: "Weather-Driven Growth",
        description:
          "실시간 기상 데이터에 따라 정원의 조명, 날씨 효과, 식물 성장 속도가 달라집니다.",
      },
      {
        icon: "smart_toy",
        title: "AI Gardener Bot",
        description:
          "정원을 돌보는 로봇 친구가 매일 피어난 식물의 특징과 짧은 이야기를 생성해 들려줍니다.",
      },
      {
        icon: "view_in_ar",
        title: "Cozy 3D Web",
        description:
          "Three.js를 활용해 웹 브라우저에서도 가볍고 따뜻한 파스텔 3D 렌더링을 구현했습니다.",
      },
    ],
    techStack: ["React", "Three.js", "TypeScript"],
    links: {
      github: "https://github.com",
    },
  },
  {
    slug: "habit-sprites",
    title: "Habit Sprites",
    subtitle: "(해빗 스프라이트)",
    badge: "Design Doodle",
    category: "Design Doodles",
    categoryTag: "Design Doodle",
    template: "case-study",
    summary:
      "A UI/UX concept that turns daily habit tracking into collecting tiny, adorable sprites. Focus on micro-interactions and soft shadows.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASBGBoYoZwrWfyJDgPJz1J4JoyQoqyawxM3mGzn35x4w_0GJaJouhpWzDtAyiECpmQRLT1VgSmYCAVqs_wdXxthrNoFqFb_3x-r_rpESPBFo8Eu-OF_eY68Jp_m4AOFOHbjvxEjyibDVCdpjBQOHkVjnhkX4aZPhQmORy06kGChWy9PqzDhMwM9XNKnuTh5KNwUmRIxRxncDxcs85H3wxHtVL6KfuFyNdzvMKUTCNSZcNWMoXTZBc7SQ",
    heroImageAlt: "Habit Sprites UI Concept",
    conceptTitle: "Concept",
    conceptHighlight: "'Turning daily habits into collectible sprites'",
    conceptDescription:
      "지루한 체크리스트 대신 습관을 달성할 때마다 작고 귀여운 정령(Sprite) 캐릭터를 수집하는 게이미피케이션 UI/UX 프로토타입입니다.",
    conceptImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASBGBoYoZwrWfyJDgPJz1J4JoyQoqyawxM3mGzn35x4w_0GJaJouhpWzDtAyiECpmQRLT1VgSmYCAVqs_wdXxthrNoFqFb_3x-r_rpESPBFo8Eu-OF_eY68Jp_m4AOFOHbjvxEjyibDVCdpjBQOHkVjnhkX4aZPhQmORy06kGChWy9PqzDhMwM9XNKnuTh5KNwUmRIxRxncDxcs85H3wxHtVL6KfuFyNdzvMKUTCNSZcNWMoXTZBc7SQ",
    conceptImageAlt: "Habit Sprites Concept",
    features: [
      {
        icon: "auto_awesome",
        title: "Micro-interactions",
        description:
          "체크 버튼을 누를 때 통통 튀는 스프링 물리 애니메이션으로 즉각적인 성취감을 전달합니다.",
      },
      {
        icon: "pets",
        title: "Sprite Collection",
        description:
          "연속 달성 일수(Streak)에 따라 정령 캐릭터가 진화하며 도감을 채우는 재미를 제공합니다.",
      },
      {
        icon: "palette",
        title: "Soft Design System",
        description:
          "파스텔 컬러 토큰과 소프트 섀도우를 체계화한 컴포넌트 라이브러리를 설계했습니다.",
      },
    ],
    techStack: ["Figma", "Prototyping", "Design System"],
  },
  {
    slug: "liquid-canvas",
    title: "Liquid Canvas",
    subtitle: "(리퀴드 캔버스)",
    badge: "Web Playground",
    category: "Web Playgrounds",
    categoryTag: "Web Playground",
    template: "showcase",
    summary:
      "A webGL shader experiment exploring soft, pastel liquid dynamics that react to cursor movement in real-time.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChaoZZmISqUyv7lkjsbX5JYEAZej6aLI1HAaj6OYuGwUK776rzZaYidQg66bVC4-dX8nBbQ77CmhGm7J2XcYvFvinGxPk1gDg7Y4dI5gK2N3dkKWzrhenLb3ivrAv3v2uNESPJUxNcGhNctj8eq8GDESCYJLHZwK7XhHoUUtbDNJbtSHoNC1E31ANZn5K1MZYiUoMGWfWGGrc9iYJm_6esDh3FcArTTh51xaGEE-sw_WNoX73E5h8zBQ",
    heroImageAlt:
      "An abstract, generative art piece featuring soft, undulating waves of color in shades of pastel purple, blue, and pink",
    conceptTitle: "The Goal",
    conceptDescription:
      "마우스 커서 움직임에 따라 물감이 부드럽게 섞이는 듯한 유체 역학(Fluid Dynamics) 효과를 순수 WebGL과 GLSL 셰이더로 구현한 인터랙티브 아트 실험입니다.",
    conceptImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChaoZZmISqUyv7lkjsbX5JYEAZej6aLI1HAaj6OYuGwUK776rzZaYidQg66bVC4-dX8nBbQ77CmhGm7J2XcYvFvinGxPk1gDg7Y4dI5gK2N3dkKWzrhenLb3ivrAv3v2uNESPJUxNcGhNctj8eq8GDESCYJLHZwK7XhHoUUtbDNJbtSHoNC1E31ANZn5K1MZYiUoMGWfWGGrc9iYJm_6esDh3FcArTTh51xaGEE-sw_WNoX73E5h8zBQ",
    conceptImageAlt: "Liquid Canvas Shader Preview",
    features: [
      {
        icon: "gesture",
        title: "Real-Time Fluid Shader",
        description:
          "커서 이동 속도와 방향 벡터를 프래그먼트 셰이더에 전달해 실시간 물결 왜곡을 계산합니다.",
      },
      {
        icon: "gradient",
        title: "Pastel Color Blending",
        description:
          "색상이 섞일 때 탁해지지 않도록 커스텀 보간 수식을 적용해 화사한 파스텔 톤을 유지합니다.",
      },
      {
        icon: "bolt",
        title: "60FPS Performance",
        description:
          "고해상도 디스플레이에서도 끊김 없이 동작하도록 프레임버퍼 해상도 스케일링을 최적화했습니다.",
      },
    ],
    techStack: ["WebGL", "GLSL", "TypeScript"],
    links: {
      github: "https://github.com",
    },
  },
  {
    slug: "cloud-thoughts",
    title: "Cloud Thoughts",
    subtitle: "(클라우드 쏘츠)",
    badge: "AI Dream",
    category: "AI Dreams",
    categoryTag: "AI Dream",
    template: "case-study",
    summary:
      "An NLP project that visualizes user sentiments as fluffy, floating clouds that change color based on the emotional tone of the input text.",
    heroIcon: "cloud",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCaeQsAidqZDYSFIWlrqRmsRU5Hq2fd8ASH7nwGjdELj7HkxdIzk2Ytv5RMchmEwamaJryk7ND-X-xHt6MTn40p6LhCyGyrjoxwc2svqxa3DqTuqrIeNBWHeUOh0Bva-WNmeSobToycybxm9UY5pxr06pMDxrHfNrMxJct-LwEnhuLnCuT4mYaGRi1O0lF4EzMZVLWcvZDaL7S3tMVIF1QsbSczcXMEcAVY-WPxL-2tXbxLoqgZvyRfNQ",
    heroImageAlt: "Cloud Thoughts Visualization Dashboard",
    conceptTitle: "Concept",
    conceptHighlight: "'Visualizing sentiments as floating pastel clouds'",
    conceptDescription:
      "사용자가 입력한 문장의 감정 톤을 자연어 처리(NLP)로 분석하여, 기분에 따라 색깔과 모양이 바뀌는 몽글몽글한 구름 그래픽으로 시각화해주는 프로젝트입니다.",
    conceptImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCaeQsAidqZDYSFIWlrqRmsRU5Hq2fd8ASH7nwGjdELj7HkxdIzk2Ytv5RMchmEwamaJryk7ND-X-xHt6MTn40p6LhCyGyrjoxwc2svqxa3DqTuqrIeNBWHeUOh0Bva-WNmeSobToycybxm9UY5pxr06pMDxrHfNrMxJct-LwEnhuLnCuT4mYaGRi1O0lF4EzMZVLWcvZDaL7S3tMVIF1QsbSczcXMEcAVY-WPxL-2tXbxLoqgZvyRfNQ",
    conceptImageAlt: "Cloud Thoughts Dashboard",
    features: [
      {
        icon: "cloud",
        title: "Sentiment Cloud Mapping",
        description:
          "긍정, 평온, 우울 등 감정 스코어를 파스텔 컬러와 구름 밀도 파라미터로 변환해 시각화합니다.",
      },
      {
        icon: "bubble_chart",
        title: "Interactive D3.js Canvas",
        description:
          "키워드 빈도와 연관성에 따라 구름 방울들이 부드럽게 모여들고 흩어지는 물리 시뮬레이션을 제공합니다.",
      },
      {
        icon: "psychology",
        title: "Python NLP Backend",
        description:
          "FastAPI와 텍스트 감정 분석 파이프라인을 연동해 실시간으로 텍스트의 감정 극성을 추출합니다.",
      },
    ],
    techStack: ["Python", "FastAPI", "D3.js", "React"],
    links: {
      github: "https://github.com",
    },
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

