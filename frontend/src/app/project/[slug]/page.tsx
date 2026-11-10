import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, PROJECTS } from "@/data/projects";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

const FEATURE_CARD_STYLES = [
  {
    cardBg: "bg-[#e9ddff]",
    iconBg: "bg-primary text-on-primary",
    titleColor: "text-primary",
  },
  {
    cardBg: "bg-[#ffdf93]",
    iconBg: "bg-tertiary text-on-tertiary",
    titleColor: "text-tertiary",
  },
  {
    cardBg: "bg-[#ece6ee]",
    iconBg: "bg-secondary text-on-secondary",
    titleColor: "text-secondary",
  },
];

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex-grow pt-[120px] pb-stack-lg max-w-container-max mx-auto w-full px-margin-mobile md:px-gutter">
      {/* Back to List Link */}
      <div className="mb-stack-sm">
        <Link
          href="/project/list"
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary font-body-base text-sm font-semibold transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">
            arrow_back
          </span>
          모든 프로젝트 목록으로
        </Link>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mb-stack-xl pt-stack-sm">
        <span className="bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps px-4 py-2 rounded-full mb-stack-sm inline-block shadow-cute">
          {project.badge}
        </span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-stack-sm max-w-3xl leading-tight">
          {project.title}
          {project.subtitle && (
            <>
              <br />
              <span className="text-secondary opacity-80">
                {project.subtitle}
              </span>
            </>
          )}
        </h1>
        <p className="font-body-base text-body-base text-on-surface-variant max-w-2xl mb-stack-md">
          {project.summary}
        </p>

        {/* Action Links (GitHub / Live Demo) */}
        {project.links && (project.links.github || project.links.demo) && (
          <div className="flex flex-wrap justify-center gap-4 mb-stack-lg">
            {project.links.demo && (
              <Link
                href={project.links.demo}
                className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full font-body-base font-bold cute-button-shadow hover:scale-105 transition-transform"
              >
                <span className="material-symbols-outlined text-[20px]">
                  rocket_launch
                </span>
                Live Demo 보기
              </Link>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-surface-container-high text-on-surface px-6 py-3 rounded-full font-body-base font-bold cute-button-shadow hover:bg-secondary-container transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">
                  code
                </span>
                GitHub 저장소
              </a>
            )}
          </div>
        )}

        {project.heroImage && (
          <div className="w-full max-w-5xl aspect-video rounded-[40px] overflow-hidden shadow-cute relative">
            <img
              className="w-full h-full object-cover"
              alt={project.heroImageAlt}
              src={project.heroImage}
              loading="eager"
              fetchPriority="high"
            />
          </div>
        )}
      </section>

      {/* Project Overview / Concept */}
      <section className="mb-stack-xl">
        <div className="bg-surface-container-low rounded-[40px] p-stack-md md:p-stack-lg shadow-cute flex flex-col md:flex-row gap-stack-md items-center">
          <div className={project.conceptImage ? "md:w-1/2" : "w-full"}>
            <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm">
              {project.conceptTitle}
            </h2>
            {project.conceptHighlight && (
              <p className="font-body-base text-body-base text-on-surface font-bold mb-3 text-lg">
                {project.conceptHighlight}
              </p>
            )}
            <p className="font-body-base text-body-base text-on-surface-variant mb-stack-sm leading-relaxed">
              {project.conceptDescription}
            </p>
          </div>
          {project.conceptImage && (
            <div className="md:w-1/2 rounded-4xl overflow-hidden shadow-sm border border-outline-variant/20">
              <img
                className="w-full h-auto object-cover"
                alt={project.conceptImageAlt || project.title}
                src={project.conceptImage}
                loading="eager"
                fetchPriority="high"
              />
            </div>
          )}
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="mb-stack-xl">
        <div className="text-center mb-stack-md">
          <h2 className="font-headline-md text-headline-md text-primary">
            Key Features
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {project.features.map((feature, index) => {
            const style =
              FEATURE_CARD_STYLES[index % FEATURE_CARD_STYLES.length];
            return (
              <div
                key={feature.title}
                className={`${style.cardBg} p-stack-md rounded-[32px] text-center shadow-cute hover:-translate-y-2 transition-transform duration-300`}
              >
                <div
                  className={`${style.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-stack-sm`}
                >
                  <span className="material-symbols-outlined text-[32px]">
                    {feature.icon}
                  </span>
                </div>
                <h3
                  className={`font-body-base text-body-base font-bold ${style.titleColor} mb-unit`}
                >
                  {feature.title}
                </h3>
                <p className="font-body-base text-body-base text-on-surface-variant text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Troubleshooting Section (Optional per project) */}
      {project.troubleshooting && project.troubleshooting.length > 0 && (
        <section className="mb-stack-xl">
          <div className="text-center mb-stack-md">
            <h2 className="font-headline-md text-headline-md text-primary mb-2">
              Troubleshooting
            </h2>
            <p className="font-body-base text-body-base text-on-surface-variant text-sm">
              개발 과정에서 마주한 문제와 해결 과정
            </p>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {project.troubleshooting.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface-container-low rounded-[32px] p-stack-md shadow-cute border border-outline-variant/20"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="bg-error-container text-on-error-container px-3 py-1 rounded-full font-label-caps text-label-caps shrink-0 mt-0.5">
                    Problem
                  </span>
                  <p className="font-body-base text-body-base font-bold text-on-surface">
                    {item.problem}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full font-label-caps text-label-caps shrink-0 mt-0.5">
                    Solution
                  </span>
                  <p className="font-body-base text-body-base text-on-surface-variant">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tech Stack Section */}
      <section className="mb-stack-lg max-w-3xl mx-auto text-center bg-surface-container-low rounded-[2rem] p-stack-md shadow-cute border border-surface-variant">
        <h2 className="font-headline-md text-headline-md text-primary mb-6">
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-6 py-2 bg-primary/10 text-primary rounded-full font-body-base text-body-base font-semibold border border-primary/20 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}

