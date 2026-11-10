"use client";

import Link from "next/link";
import { useState } from "react";
import { PROJECTS, ProjectCategory } from "@/data/projects";

type FilterOption = "All Magic" | ProjectCategory;

const FILTER_BUTTONS: {
  label: FilterOption;
  bgClass: string;
  borderClass: string;
}[] = [
  {
    label: "All Magic",
    bgClass: "bg-primary-container text-on-primary-container",
    borderClass: "border-primary/20",
  },
  {
    label: "AI Dreams",
    bgClass: "bg-secondary-container text-on-secondary-container",
    borderClass: "border-secondary/20",
  },
  {
    label: "Web Playgrounds",
    bgClass: "bg-tertiary-container text-on-tertiary-container",
    borderClass: "border-tertiary/20",
  },
  {
    label: "Design Doodles",
    bgClass: "bg-error-container text-on-error-container",
    borderClass: "border-error/20",
  },
];

export default function ProjectListPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<FilterOption>("All Magic");

  const filteredProjects =
    selectedCategory === "All Magic"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedCategory);

  return (
    <main className="flex-grow pt-24 pb-32 md:pt-32 md:pb-16 px-margin-mobile md:px-8 max-w-container-max mx-auto w-full">
      {/* Header Section */}
      <header className="text-center mb-stack-lg">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-unit">
          My Magical Projects
        </h1>
        <p className="font-body-base text-body-base text-on-surface-variant max-w-2xl mx-auto">
          Explore a collection of things I&apos;ve built. From clever AI
          experiments to playful web interfaces.
        </p>
      </header>
      {/* Filter Buttons (Cute Style) */}
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
      {/* Portfolio Grid (Cute Style Cards) */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/project/${project.slug}`}
            className="bg-surface rounded-[2rem] p-6 shadow-ambient-warm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col"
          >
            <div className="rounded-xl overflow-hidden mb-6 h-48 relative bg-surface-container-highest flex items-center justify-center">
              {project.heroIcon ? (
                <span
                  className="material-symbols-outlined text-[80px] text-primary/30"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {project.heroIcon}
                </span>
              ) : (
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={project.heroImageAlt}
                  src={project.heroImage}
                  loading="eager"
                  fetchPriority="high"
                />
              )}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-label-caps font-label-caps text-primary">
                {project.categoryTag}
              </div>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2">
              {project.title}
            </h3>
            <p className="font-body-base text-body-base text-on-surface-variant flex-grow mb-4">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-surface-container-highest text-on-surface rounded-full text-label-caps font-label-caps"
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
