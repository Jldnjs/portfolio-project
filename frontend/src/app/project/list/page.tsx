"use client";

import Link from "next/link";
import { useState } from "react";
import { PROJECTS, ProjectCategory } from "@/data/projects";

type FilterOption = "All" | ProjectCategory;

const FILTER_BUTTONS: {
  label: FilterOption;
  bgClass: string;
  borderClass: string;
}[] = [
  {
    label: "All",
    bgClass: "bg-primary-container text-on-primary-container",
    borderClass: "border-primary/20",
  },
  {
    label: "AI & RAG",
    bgClass: "bg-secondary-container text-on-secondary-container",
    borderClass: "border-secondary/20",
  },
  {
    label: "MSA & Backend",
    bgClass: "bg-tertiary-container text-on-tertiary-container",
    borderClass: "border-tertiary/20",
  },
];

export default function ProjectListPage() {
  const [selectedCategory, setSelectedCategory] = useState<FilterOption>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedCategory);

  return (
    <main className="flex-grow pt-24 pb-32 md:pt-32 md:pb-16 px-margin-mobile md:px-8 max-w-container-max mx-auto w-full">
      {/* Header Section */}
      <header className="text-center mb-stack-lg">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-unit">
          Projects
        </h1>
        <p className="font-body-base text-body-base text-on-surface-variant max-w-2xl mx-auto">
          운영 안정성이 검증된 Java/Spring 백엔드 서비스부터 FastAPI와 RAG 기반의
          AI 파이프라인까지 직접 설계하고 구축한 프로젝트입니다.
        </p>
      </header>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-stack-lg">
        {FILTER_BUTTONS.map((btn) => {
          const isActive = selectedCategory === btn.label;
          return (
            <button
              key={btn.label}
              onClick={() => setSelectedCategory(btn.label)}
              className={`px-6 py-2 ${btn.bgClass} rounded-full font-body-base text-body-base shadow-ambient-warm hover:-translate-y-1 transition-all border-b-2 ${btn.borderClass} ${
                isActive
                  ? "font-bold opacity-100 scale-105 ring-2 ring-primary/30"
                  : "opacity-80 hover:opacity-100"
              }`}
            >
              {btn.label}
            </button>
          );
        })}
      </div>

      {/* Portfolio Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/project/${project.slug}`}
            className="bg-surface rounded-[2rem] p-6 shadow-ambient-warm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col"
          >
            <div
              className={`rounded-2xl overflow-hidden mb-6 h-44 relative flex items-center justify-center ${project.heroAccentClass}`}
            >
              <span
                className="material-symbols-outlined text-[72px] group-hover:scale-110 transition-transform duration-300"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {project.heroIcon}
              </span>
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-label-caps font-label-caps text-primary">
                {project.categoryTag}
              </div>
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-secondary">
                {project.period}
              </div>
            </div>
            <h3 className="font-headline-md text-2xl font-bold text-primary mb-1">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-xs font-semibold text-secondary mb-3">
                {project.subtitle}
              </p>
            )}
            <p className="font-body-base text-sm text-on-surface-variant flex-grow mb-4 leading-relaxed">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-surface-container-highest text-on-surface rounded-full text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
