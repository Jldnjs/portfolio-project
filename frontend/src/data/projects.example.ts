export type ProjectCategory = "AI & RAG" | "MSA & Backend";

export interface ProjectFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProjectArchitectureNote {
  title: string;
  description: string;
}

export interface ProjectTroubleshooting {
  title: string;
  problem: string;
  cause?: string;
  solution: string;
  result?: string;
}

export interface ProjectDiagram {
  title: string;
  description: string;
  src: string;
  alt: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  subtitle?: string;
  period: string;
  badge: string;
  category: ProjectCategory;
  categoryTag: string;
  icon: string;
  summary: string;
  heroIcon: string;
  heroAccentClass: string;
  conceptTitle: string;
  conceptHighlight?: string;
  conceptDescription: string;
  architectureNotes: ProjectArchitectureNote[];
  diagrams?: ProjectDiagram[];
  features: ProjectFeature[];
  troubleshooting: ProjectTroubleshooting[];
  techStack: string[];
  links?: {
    github?: string;
    demo?: string;
  };
}

/**
 * 프로젝트 데이터 템플릿
 * 이 파일을 `projects.ts`로 복사한 뒤 본인 프로젝트 정보로 수정하세요.
 */
export const PROJECTS: ProjectItem[] = [
  {
    slug: "sample-ai-project",
    title: "샘플 AI 프로젝트",
    subtitle: "(Sample AI Project)",
    period: "2026.01 - 2026.02",
    badge: "AI & RAG",
    category: "AI & RAG",
    categoryTag: "AI & RAG",
    icon: "smart_toy",
    heroIcon: "smart_toy",
    heroAccentClass: "bg-secondary-container/40 text-primary",
    summary: "여기에 프로젝트 한줄 요약을 작성하세요.",
    conceptTitle: "Project Overview",
    conceptHighlight: "핵심 아키텍처 한줄 강조",
    conceptDescription: "프로젝트 배경 및 설계 의도를 작성하세요.",
    architectureNotes: [
      {
        title: "아키텍처 결정 사항",
        description: "기술 선택 이유와 구조 설계 내용을 작성하세요.",
      },
    ],
    features: [
      {
        icon: "bolt",
        title: "핵심 기능 1",
        description: "기능 설명을 작성하세요.",
      },
    ],
    troubleshooting: [
      {
        title: "트러블슈팅 제목",
        problem: "발생한 문제를 작성하세요.",
        cause: "원인을 작성하세요.",
        solution: "해결 방법을 작성하세요.",
        result: "개선 결과를 작성하세요.",
      },
    ],
    techStack: ["FastAPI", "Python", "PostgreSQL", "Next.js"],
    links: {
      github: "https://github.com/username/repo",
    },
  },
];

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

