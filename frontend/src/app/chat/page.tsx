"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { PROJECTS } from "@/data/projects";

interface ChatLink {
  label: string;
  href: string;
}

interface ChatMessage {
  id: string;
  role: "assistant" | "user";
  content: string;
  links?: ChatLink[];
}

const SUGGESTED_QUESTIONS = [
  "어떤 기술 스택을 주로 사용하나요?",
  "대표 토이 프로젝트를 소개해 주세요",
  "트러블슈팅 경험이 궁금해요",
  "경력과 이력서를 보고 싶어요",
];

function buildLocalPortfolioReply(question: string): {
  content: string;
  links?: ChatLink[];
} {
  const q = question.toLowerCase();

  if (
    q.includes("스택") ||
    q.includes("기술") ||
    q.includes("skill") ||
    q.includes("stack")
  ) {
    return {
      content:
        "프론트엔드는 Next.js(App Router), React, TypeScript, Tailwind CSS를 주로 다루며, 백엔드는 FastAPI, SQLAlchemy(Async), PostgreSQL, Docker Compose 기반의 풀스택 아키텍처를 설계하고 구현합니다.",
      links: [
        { label: "이력서 및 기술 스택 보기", href: "/resume" },
        { label: "전체 프로젝트 목록", href: "/project/list" },
      ],
    };
  }

  if (
    q.includes("트러블") ||
    q.includes("문제") ||
    q.includes("어려웠") ||
    q.includes("해결")
  ) {
    const withTroubleshooting = PROJECTS.filter(
      (p) => p.troubleshooting && p.troubleshooting.length > 0
    );
    const summaryLines = withTroubleshooting
      .map(
        (p) =>
          `• [${p.title}] ${p.troubleshooting![0].problem} → ${p.troubleshooting![0].solution}`
      )
      .join("\n\n");

    return {
      content:
        summaryLines ||
        "각 토이 프로젝트 상세 페이지의 Troubleshooting 섹션에서 문제 정의와 해결 과정을 확인하실 수 있습니다.",
      links: withTroubleshooting.map((p) => ({
        label: `${p.title} 상세 보기`,
        href: `/project/${p.slug}`,
      })),
    };
  }

  if (
    q.includes("이력") ||
    q.includes("경력") ||
    q.includes("resume") ||
    q.includes("커리어") ||
    q.includes("연락")
  ) {
    return {
      content:
        "이력서 요약 페이지에서 핵심 기술 스택과 경력 요약을 확인하실 수 있고, 상세 타임라인 페이지에서는 연도별 주요 성과와 담당 역할을 자세히 보실 수 있습니다.",
      links: [
        { label: "이력서 요약 (/resume)", href: "/resume" },
        { label: "상세 경력 타임라인 (/resume/history)", href: "/resume/history" },
      ],
    };
  }

  if (
    q.includes("프로젝트") ||
    q.includes("project") ||
    q.includes("토이") ||
    q.includes("포트폴리오")
  ) {
    const topProjects = PROJECTS.slice(0, 3);
    const listText = topProjects
      .map((p) => `• ${p.title}: ${p.summary}`)
      .join("\n");
    return {
      content: `현재 포트폴리오에는 총 ${PROJECTS.length}개의 토이 프로젝트가 등록되어 있습니다!\n\n${listText}`,
      links: [
        ...topProjects.map((p) => ({
          label: `${p.title} 보러가기`,
          href: `/project/${p.slug}`,
        })),
        { label: "전체 프로젝트 목록 보기", href: "/project/list" },
      ],
    };
  }

  // 특정 프로젝트 이름 검색
  const matchedProject = PROJECTS.find(
    (p) =>
      q.includes(p.title.toLowerCase()) ||
      q.includes(p.slug.toLowerCase()) ||
      (p.subtitle && q.includes(p.subtitle.toLowerCase()))
  );

  if (matchedProject) {
    return {
      content: `${matchedProject.title} 프로젝트는 "${matchedProject.summary}"를 목표로 개발했습니다. 주요 사용 기술은 ${matchedProject.techStack.join(", ")} 입니다.`,
      links: [
        {
          label: `${matchedProject.title} 상세 페이지`,
          href: `/project/${matchedProject.slug}`,
        },
      ],
    };
  }

  return {
    content:
      "궁금하신 점을 자유롭게 물어보세요! 기술 스택, 토이 프로젝트 소개, 트러블슈팅 경험, 혹은 이력서/경력에 대해 안내해 드릴 수 있습니다.",
    links: [
      { label: "토이 프로젝트 둘러보기", href: "/project/list" },
      { label: "이력서 확인하기", href: "/resume" },
    ],
  };
}

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "안녕하세요! 👋 CreatorPort AI 어시스턴트입니다. 제 기술 스택이나 토이 프로젝트, 문제 해결 경험, 경력에 대해 궁금한 점이 있으신가요? 아래 추천 질문을 눌러보시거나 편하게 질문해 주세요!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/api/v1/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages((prev) => [
          ...prev,
          {
            id: `ai-${Date.now()}`,
            role: "assistant",
            content: data.reply,
            links: data.links,
          },
        ]);
        setIsLoading(false);
        return;
      }
    } catch {
      // 백엔드 미실행 시 로컬 포트폴리오 데이터 기반 응답으로 자연스럽게 폴백
    }

    setTimeout(() => {
      const fallback = buildLocalPortfolioReply(trimmed);
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          role: "assistant",
          content: fallback.content,
          links: fallback.links,
        },
      ]);
      setIsLoading(false);
    }, 350);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Main Chat Container */}
      <main className="flex-1 flex flex-col max-w-[800px] w-full mx-auto pt-24 pb-8 px-4 min-h-[calc(100vh-80px)] relative z-10">
        {/* Chat Header Area (Avatar) */}
        <div className="flex flex-col items-center justify-center mb-6 pt-stack-sm animate-fade-in-down">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-4 border-surface-container cute-shadow">
            <img
              className="w-full h-full object-cover"
              alt="A highly detailed portrait of a creative professional"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8qXmR7wbrNdwyoeK6FF63stmx4edAef0jqjTdI4SwPbzqmhifkaXI_WqX4CmHN3zvOpXHDgZ18OUILoMI94k0EYKCt3yCQjR8VAlnBvG41WhukBCDlro3RUlxZs_kS9XFxiQlfxTsybZibgvFv5-cAjQsr017MLRwB44wYsvhh6f2hMM5xEpbBRwIwMkWNEG_nJkCgfB7gWIfrRhNTDrS1H-a52IHIccx4DvjgE1B-i6ZmjRoLSkFgQ"
            />
          </div>
          <h1 className="font-headline-md text-headline-md text-primary">
            Ask me anything
          </h1>
          <p className="font-body-base text-body-base text-on-surface-variant text-center max-w-md">
            포트폴리오와 토이 프로젝트 데이터를 학습한 AI 어시스턴트입니다.
            궁금한 점을 자유롭게 물어보세요!
          </p>
        </div>

        {/* Suggested Questions (Chips) */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {SUGGESTED_QUESTIONS.map((question) => (
            <button
              key={question}
              type="button"
              onClick={() => sendMessage(question)}
              disabled={isLoading}
              className="bg-surface-container-high text-primary hover:bg-secondary-fixed-dim transition-colors px-4 py-2 rounded-full font-body-base text-xs font-bold shadow-sm cursor-pointer disabled:opacity-50"
            >
              {question}
            </button>
          ))}
        </div>

        {/* Chat Messages Area */}
        <div
          className="flex-1 overflow-y-auto hide-scrollbar flex flex-col gap-4 pb-4 px-2"
          id="chat-container"
        >
          {messages.map((msg) =>
            msg.role === "assistant" ? (
              <div
                key={msg.id}
                className="flex gap-3 max-w-[85%] self-start animate-fade-in-up"
              >
                <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-primary">
                    smart_toy
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="bg-secondary-fixed text-on-secondary-fixed p-4 rounded-2xl rounded-tl-sm shadow-sm font-body-base text-body-base whitespace-pre-line">
                    {msg.content}
                  </div>
                  {msg.links && msg.links.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {msg.links.map((link) => (
                        <Link
                          key={link.href + link.label}
                          href={link.href}
                          className="inline-flex items-center gap-1 bg-surface-container-lowest text-primary border border-primary/20 hover:bg-primary hover:text-on-primary transition-colors px-3 py-1.5 rounded-full text-xs font-bold shadow-sm"
                        >
                          <span>{link.label}</span>
                          <span className="material-symbols-outlined text-[14px]">
                            arrow_forward
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div
                key={msg.id}
                className="flex gap-3 max-w-[85%] self-end flex-row-reverse animate-fade-in-up"
              >
                <div className="bg-primary text-on-primary p-4 rounded-2xl rounded-tr-sm shadow-sm font-body-base text-body-base">
                  {msg.content}
                </div>
              </div>
            )
          )}

          {isLoading && (
            <div className="flex gap-3 max-w-[85%] self-start animate-fade-in-up">
              <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0 mt-1">
                <span className="material-symbols-outlined text-primary">
                  smart_toy
                </span>
              </div>
              <div className="bg-secondary-fixed text-on-secondary-fixed px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm font-body-base text-sm">
                답변을 작성하고 있어요...
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <form
          onSubmit={handleSubmit}
          className="mt-4 bg-surface-container-lowest p-2 rounded-[24px] cute-shadow flex items-center border border-surface-container-high relative z-20"
        >
          <span className="p-3 text-outline shrink-0">
            <span className="material-symbols-outlined">chat_bubble</span>
          </span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-body-base font-body-base text-on-surface placeholder:text-outline p-2 h-12"
            placeholder="기술 스택, 토이 프로젝트, 경력에 대해 물어보세요..."
            type="text"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-primary text-on-primary w-12 h-12 rounded-full flex items-center justify-center shrink-0 hover:bg-surface-tint transition-all active:scale-95 shadow-md ml-2 group disabled:opacity-50 cursor-pointer"
          >
            <span
              className="material-symbols-outlined group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              send
            </span>
          </button>
        </form>
      </main>
      {/* Background Decoration (Cute Style) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-secondary-container opacity-20 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-tertiary-container opacity-10 blur-3xl"></div>
      </div>
    </>
  );
}
