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
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
}

export interface AchievementItem {
  title: string;
  year: string;
  icon: string;
  iconColorClass: string;
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
    linkedin: string;
    twitter: string;
  };
  skills: SkillTag[];
  experiences: CareerExperience[];
  education: EducationItem[];
  achievements: AchievementItem[];
}

/**
 * 내 프로필 / 이력서 통합 데이터
 * 이름, 소개글, 연락처, 기술 스택, 경력, 학력, 수상 내역을 수정할 때
 * 이 파일만 수정하면 메인(/), 이력서(/resume), 상세 타임라인(/resume/history), 푸터, 챗봇(/chat)에 모두 자동 반영됩니다.
 */
export const PROFILE: ProfileData = {
  brandName: "CreatorPort",
  name: "Hi, I'm Alex ✨",
  headline: "Full-Stack Developer & Creative Technologist",
  heroGreetingLine1: "안녕하세요!",
  heroGreetingLine2: "재미있는 아이디어를 만드는",
  heroHighlightWord: "크리에이터",
  heroGreetingSuffix: "입니다.",
  heroBio:
    "따뜻한 색감과 부드러운 인터랙션으로 사용자에게 미소를 짓게 하는 서비스를 추구합니다. 프론트엔드와 백엔드의 경계를 넘나들며 놀이 같은 경험을 설계합니다.",
  resumeBio:
    "전략적인 백엔드 로직과 생동감 있는 프론트엔드 UI를 결합해 사용자가 사랑하는 프로덕트를 만듭니다. 서울을 기반으로 활동하며 새로운 기술적 도전을 즐깁니다.",
  avatars: {
    hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzCnx3gnpRLODcLRI2o7bKl6epKLs3z67ZEyG8SuFaTrwtwOIhyKCzk1zP1jUzAPw8EEwFemt1YDPQcQWnS9yi5y5edYId7hYCFTuhaaZ4tVkEs628M8uf-MQY07WYsTLAuy-zYLB4B890uHR6MvW2EbxfA9TVh0X1ec0c2WL5Q8V1xGT3BTKsykSdMx9uex-ArYmhqJI5lR5jMKtBgD5G2w7GaQ4DF7sdO9o-d0IpeRjPHqVhet4LpQ",
    resume:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWO-CNnb4iMHkc1VxDw5TQhAQEE7v7QIjcslO3BDJx9cH-OLdEWRAIvhgy4V5HTS0euEe960rWjADtH86FvoW_3r5x1qqhCvzeomjTBM6oXLq9Kus2L_4rO22X4g8t3C0WvGvZSdCp3O0oaJFa0XLcTPyTsbcwPbW_QWOmUghiYLNcCY9JBu0BVcCldpRITjWGvnpNKLhSMnLk11L5XfAk2iDkzVtkU5pxizG-ff_Y4kBseZsfVsu1xg",
    chat: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8qXmR7wbrNdwyoeK6FF63stmx4edAef0jqjTdI4SwPbzqmhifkaXI_WqX4CmHN3zvOpXHDgZ18OUILoMI94k0EYKCt3yCQjR8VAlnBvG41WhukBCDlro3RUlxZs_kS9XFxiQlfxTsybZibgvFv5-cAjQsr017MLRwB44wYsvhh6f2hMM5xEpbBRwIwMkWNEG_nJkCgfB7gWIfrRhNTDrS1H-a52IHIccx4DvjgE1B-i6ZmjRoLSkFgQ",
  },
  socials: {
    email: "hello@creatorport.com",
    github: "https://github.com/Jldnjs",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
  skills: [
    { name: "Next.js", bgClass: "bg-[#f3e8ff]", textClass: "text-[#6b21a8]" },
    { name: "React", bgClass: "bg-[#e0f2fe]", textClass: "text-[#075985]" },
    { name: "TypeScript", bgClass: "bg-[#fef3c7]", textClass: "text-[#92400e]" },
    { name: "Tailwind CSS", bgClass: "bg-[#dcfce7]", textClass: "text-[#166534]" },
    { name: "FastAPI", bgClass: "bg-[#ffe4e6]", textClass: "text-[#9f1239]" },
    { name: "PostgreSQL", bgClass: "bg-[#e0f2fe]", textClass: "text-[#075985]" },
    { name: "Docker", bgClass: "bg-[#f3e8ff]", textClass: "text-[#6b21a8]" },
  ],
  experiences: [
    {
      period: "2023 - 현재",
      location: "Seoul, Korea",
      role: "시니어 프로덕트 디자이너 & 풀스택 개발자",
      company: "스마일 스튜디오 (TechBloom Studio)",
      shortDescription:
        "감성적인 프로덕트 라인업을 리드하며 핵심 웹 애플리케이션의 프론트엔드/백엔드 아키텍처를 설계하고 있습니다.",
      description:
        "핵심 웹 애플리케이션의 전면 리디자인과 아키텍처 개편을 주도하여 사용자 리텐션을 25% 향상시켰으며, 사내 최초의 통합 디자인 시스템과 API 표준을 구축했습니다.",
      highlights: [
        "게이미피케이션 온보딩 도입을 통해 초기 사용자 참여율 45% 향상",
        "통합 디자인 시스템 및 공통 UI 컴포넌트 구축으로 개발 생산성 개선",
        "FastAPI + Next.js 기반 풀스택 서비스 배포 및 성능 최적화 주도",
      ],
      highlightIcon: "star",
      tags: ["Next.js", "FastAPI", "Design Systems"],
      icon: "rocket_launch",
    },
    {
      period: "2021 - 2023",
      location: "Seoul, Korea",
      role: "프리랜서 창작자 & UI/UX 엔지니어",
      company: "Creative Minds Studio",
      shortDescription:
        "다양한 클라이언트와 함께 장난감 같은 인터랙티브 웹사이트와 앱을 설계하고 개발했습니다.",
      description:
        "스타트업 및 브랜드 클라이언트를 위한 맞춤형 웹 애플리케이션과 인터랙티브 캠페인 페이지를 제작하며 픽셀 단위의 완성도 높은 프론트엔드를 구현했습니다.",
      highlights: [
        "15개 이상의 스타트업 웹 애플리케이션 기획·디자인·프론트엔드 납품",
        "사용자 테스트 프로토콜 도입으로 UI 수정 반복 주기 20% 단축",
      ],
      highlightIcon: "favorite",
      tags: ["React", "TypeScript", "Prototyping"],
      icon: "palette",
    },
    {
      period: "2019 - 2021",
      location: "Seoul, Korea",
      role: "Frontend Developer",
      company: "WebSpark Solutions",
      shortDescription:
        "복잡한 디자인 시안을 반응형·웹 접근성 표준에 맞춘 고성능 웹 인터페이스로 구현했습니다.",
      description:
        "애니메이션 성능과 재사용성에 초점을 맞춘 모듈형 UI 컴포넌트를 개발하고 웹 프론트엔드 로딩 속도를 개선했습니다.",
      highlights: [
        "여러 프로덕트에서 공통으로 사용하는 모듈형 UI 컴포넌트 라이브러리 구축",
        "에셋 최적화 및 코드 스플리팅을 통해 초기 페이지 로드 속도 30% 개선",
      ],
      highlightIcon: "code_blocks",
      tags: ["React", "CSS/Tailwind", "Animation"],
      icon: "code",
    },
  ],
  education: [
    {
      degree: "컴퓨터공학 / 인터랙션 디자인 학사",
      school: "Design & Tech University",
      period: "Graduated 2019",
    },
  ],
  achievements: [
    {
      title: "Awwwards Honorable Mention",
      year: "2023",
      icon: "star",
      iconColorClass: "text-tertiary",
    },
    {
      title: "Google UX Design & Cloud Certificate",
      year: "2021",
      icon: "verified",
      iconColorClass: "text-secondary",
    },
  ],
};

