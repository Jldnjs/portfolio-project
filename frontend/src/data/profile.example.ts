export interface SkillTag {
  name: string;
  bgClass: string;
  textClass: string;
}

export interface CareerExperience {
  period: string;
  location: string;
  role: string;
  company: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  highlightIcon: string;
  tags: string[];
  icon: string;
  serviceUrl?: string;
}

export interface TroubleshootingCase {
  id: string;
  title: string;
  badge: string;
  problem: string;
  cause: string;
  solution: string;
  result: string;
  tags: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  description?: string;
}

export interface ProfileData {
  brandName: string;
  name: string;
  headline: string;
  heroGreetingLine1: string;
  heroGreetingLine2: string;
  heroHighlightWord: string;
  heroGreetingSuffix: string;
  heroBio: string;
  resumeBio: string;
  avatars: {
    hero: string;
    resume: string;
    chat: string;
  };
  socials: {
    email: string;
    github: string;
    blog: string;
  };
  skills: SkillTag[];
  careerSummary: {
    company: string;
    period: string;
    description: string;
  };
  experiences: CareerExperience[];
  troubleshooting: TroubleshootingCase[];
  education: EducationItem[];
  growthPlan: string[];
  contributions: string[];
}

/**
 * 프로필 / 경력기술서 데이터 템플릿
 * 이 파일을 `profile.ts`로 복사한 뒤 본인 정보에 맞게 수정하세요.
 */
export const PROFILE: ProfileData = {
  brandName: "MyPort",
  name: "홍길동 (Gildong Hong)",
  headline: "백엔드 개발자 포트폴리오 템플릿",
  heroGreetingLine1: "안녕하세요!",
  heroGreetingLine2: "안정적인 시스템을 만드는",
  heroHighlightWord: "백엔드 개발자",
  heroGreetingSuffix: "입니다.",
  heroBio: "여기에 간단한 자기소개 문구를 작성하세요.",
  resumeBio: "이력서 상단에 들어갈 상세 자기소개를 작성하세요.",
  avatars: {
    hero: "/images/hero-avatar.jpg",
    resume: "/images/hero-avatar.jpg",
    chat: "/images/hero-avatar.jpg",
  },
  socials: {
    email: "example@email.com",
    github: "https://github.com/username",
    blog: "https://blog.example.com",
  },
  skills: [
    { name: "Python / FastAPI", bgClass: "bg-[#e0f2fe]", textClass: "text-[#075985]" },
    { name: "Java / Spring Boot", bgClass: "bg-[#dcfce7]", textClass: "text-[#166534]" },
    { name: "PostgreSQL / MySQL", bgClass: "bg-[#fef3c7]", textClass: "text-[#92400e]" },
  ],
  careerSummary: {
    company: "Sample Company",
    period: "2024.01 – Present",
    description: "백엔드 서비스 개발 및 운영",
  },
  experiences: [
    {
      period: "2024.01 - Present",
      location: "Sample Company",
      role: "Backend Developer",
      company: "Sample Company · Core API",
      shortDescription: "메인 화면에 노출할 1~2줄 경력 요약을 작성하세요.",
      description: "이력서 페이지에 노출할 경력 상세 설명을 작성하세요.",
      highlights: [
        "주요 성과 1 (예: API 응답 속도 개선)",
        "주요 성과 2 (예: 대량 데이터 처리 안정화)",
      ],
      highlightIcon: "star",
      tags: ["Java", "Spring Boot", "MySQL"],
      icon: "rocket_launch",
    },
  ],
  troubleshooting: [
    {
      id: "sample-case",
      title: "샘플 문제 해결 사례",
      badge: "Performance",
      problem: "발생했던 문제 상황을 작성하세요.",
      cause: "원인 분석 내용을 작성하세요.",
      solution: "해결 방법을 작성하세요.",
      result: "개선 결과를 수치와 함께 작성하세요.",
      tags: ["Spring Boot", "Database"],
    },
  ],
  education: [
    {
      degree: "전공 또는 수료 과정명",
      school: "학교 또는 교육기관명",
      period: "2023.01 - 2023.06",
      description: "교육 내용 요약을 작성하세요.",
    },
  ],
  growthPlan: ["앞으로의 기술 성장 목표 1", "앞으로의 기술 성장 목표 2"],
  contributions: ["팀 및 서비스에 기여할 수 있는 역량 1", "역량 2"],
};
