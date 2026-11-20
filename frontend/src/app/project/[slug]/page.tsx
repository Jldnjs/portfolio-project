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
      <section className="flex flex-col items-center text-center mb-stack-lg pt-stack-sm">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-stack-sm">
          <span className="bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps px-4 py-2 rounded-full inline-block shadow-cute">
            {project.badge}
          </span>
          <span className="bg-surface-container-high text-secondary font-label-caps text-label-caps px-4 py-2 rounded-full inline-block">
            {project.period}
          </span>
        </div>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-stack-sm max-w-4xl leading-tight">
          {project.title}
          {project.subtitle && (
            <>
              <br />
              <span className="text-secondary opacity-80 text-3xl md:text-4xl">
                {project.subtitle}
              </span>
            </>
          )}
        </h1>
        <p className="font-body-base text-body-base text-on-surface-variant max-w-2xl mb-stack-md">
          {project.summary}
        </p>

        {/* Action Links (GitHub / Live Service) */}
        {project.links && (project.links.github || project.links.demo) && (
          <div className="flex flex-wrap justify-center gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full font-body-base font-bold cute-button-shadow hover:scale-105 transition-transform"
              >
                <span className="material-symbols-outlined text-[20px]">
                  code
                </span>
                GitHub 저장소 보기
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-6 py-3 rounded-full font-body-base font-bold cute-button-shadow hover:scale-105 transition-transform"
              >
                <span className="material-symbols-outlined text-[20px]">
                  open_in_new
                </span>
                실제 서비스 바로가기
              </a>
            )}
          </div>
        )}
      </section>

      {/* Project Overview & Architecture Decisions */}
      <section className="mb-stack-xl">
        <div className="bg-surface-container-low rounded-[40px] p-stack-md md:p-stack-lg shadow-cute">
          <h2 className="font-headline-md text-headline-md text-primary mb-2">
            {project.conceptTitle}
          </h2>
          {project.conceptHighlight && (
            <p className="font-body-base text-body-base text-secondary font-bold mb-4 text-lg">
              {project.conceptHighlight}
            </p>
          )}
          <p className="font-body-base text-body-base text-on-surface-variant mb-stack-md leading-relaxed">
            {project.conceptDescription}
          </p>

          {project.architectureNotes.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-outline-variant/20">
              {project.architectureNotes.map((note) => (
                <div
                  key={note.title}
                  className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm"
                >
                  <h3 className="font-body-base font-bold text-primary mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px]">
                      architecture
                    </span>
                    {note.title}
                  </h3>
                  <p className="font-body-base text-sm text-on-surface-variant leading-relaxed">
                    {note.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Architecture & ERD Diagrams */}
      {project.diagrams && project.diagrams.length > 0 && (
        <section className="mb-stack-xl">
          <div className="text-center mb-stack-md">
            <h2 className="font-headline-md text-headline-md text-primary mb-2">
              Architecture &amp; ERD
            </h2>
            <p className="font-body-base text-body-base text-on-surface-variant text-sm">
              이미지를 클릭하면 새 창에서 원본 크기로 자세히 보실 수 있습니다.
            </p>
          </div>
          <div
            className={`grid grid-cols-1 ${
              project.diagrams.length > 1 ? "lg:grid-cols-2" : "max-w-4xl mx-auto"
            } gap-gutter`}
          >
            {project.diagrams.map((diagram) => (
              <div
                key={diagram.title}
                className="bg-surface-container-low rounded-[32px] p-6 shadow-cute border border-outline-variant/20 flex flex-col"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-headline-md text-lg font-bold text-primary">
                    {diagram.title}
                  </h3>
                  <a
                    href={diagram.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary bg-primary-fixed/60 hover:bg-primary-fixed px-3 py-1 rounded-full transition-colors shrink-0"
                  >
                    크게 보기
                    <span className="material-symbols-outlined text-[14px]">
                      open_in_new
                    </span>
                  </a>
                </div>
                <p className="font-body-base text-xs text-on-surface-variant mb-4 leading-relaxed">
                  {diagram.description}
                </p>
                <a
                  href={diagram.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant/20 hover:opacity-95 transition-opacity"
                >
                  <img
                    src={diagram.src}
                    alt={diagram.alt}
                    className="w-full h-auto object-contain"
                  />
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

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
                <p className="font-body-base text-body-base text-on-surface-variant text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Troubleshooting Section */}
      {project.troubleshooting.length > 0 && (
        <section className="mb-stack-xl">
          <div className="text-center mb-stack-md">
            <h2 className="font-headline-md text-headline-md text-primary mb-2">
              Troubleshooting
            </h2>
            <p className="font-body-base text-body-base text-on-surface-variant text-sm">
              설계 및 운영 과정에서 마주한 문제와 해결 과정
            </p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {project.troubleshooting.map((item) => (
              <div
                key={item.title}
                className="bg-surface-container-low rounded-[32px] p-stack-md shadow-cute border border-outline-variant/20 space-y-3"
              >
                <h3 className="font-headline-md text-xl text-primary font-bold mb-3">
                  {item.title}
                </h3>
                <div className="bg-error-container/25 p-4 rounded-2xl">
                  <span className="font-bold text-error text-xs uppercase tracking-wider block mb-1">
                    Problem
                  </span>
                  <p className="font-body-base text-sm text-on-surface">
                    {item.problem}
                  </p>
                </div>
                {item.cause && (
                  <div className="bg-surface-container p-4 rounded-2xl">
                    <span className="font-bold text-secondary text-xs uppercase tracking-wider block mb-1">
                      Cause
                    </span>
                    <p className="font-body-base text-sm text-on-surface-variant">
                      {item.cause}
                    </p>
                  </div>
                )}
                <div className="bg-primary-fixed/40 p-4 rounded-2xl">
                  <span className="font-bold text-primary text-xs uppercase tracking-wider block mb-1">
                    Solution
                  </span>
                  <p className="font-body-base text-sm text-on-surface">
                    {item.solution}
                  </p>
                </div>
                {item.result && (
                  <div className="bg-tertiary-fixed/40 p-4 rounded-2xl">
                    <span className="font-bold text-tertiary text-xs uppercase tracking-wider block mb-1">
                      Result
                    </span>
                    <p className="font-body-base text-sm text-on-surface font-medium">
                      {item.result}
                    </p>
                  </div>
                )}
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
