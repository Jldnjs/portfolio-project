import Link from "next/link";
import { PROFILE } from "@/data/profile";
import { PROJECTS } from "@/data/projects";

export default function Home() {
  const recentExperiences = PROFILE.experiences.slice(0, 2);
  const [featuredMain, projectSecond, projectThird, projectFourth] = PROJECTS;

  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-stack-lg pb-stack-lg">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-stack-lg min-h-[70vh] relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary-container/50 via-surface to-surface blur-3xl rounded-full opacity-50"></div>
        <div className="w-full max-w-xl aspect-video rounded-[2.5rem] overflow-hidden cute-shadow border-4 border-surface-container-lowest mb-stack-md mx-auto bg-surface-container-lowest">
          <img
            className="w-full h-full object-cover"
            alt={PROFILE.name}
            src={PROFILE.avatars.hero}
          />
        </div>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary-fixed mb-stack-sm max-w-4xl leading-tight">
          {PROFILE.heroGreetingLine1} <br className="md:hidden" />
          {PROFILE.heroGreetingLine2} <br />
          <span className="text-primary relative inline-block">
            {PROFILE.heroHighlightWord}
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-secondary-container -z-10"
              preserveAspectRatio="none"
              viewBox="0 0 100 10"
            >
              <path
                d="M0 5 Q 50 10 100 5"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="4"
              ></path>
            </svg>
          </span>{" "}
          {PROFILE.heroGreetingSuffix}
        </h1>
        <p className="font-body-base text-body-base text-on-surface-variant max-w-2xl mx-auto mb-stack-md">
          {PROFILE.heroBio}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/resume"
            className="bg-primary text-on-primary rounded-full px-8 py-3 font-body-base font-bold cute-button-shadow hover:bg-on-primary-fixed-variant transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined">badge</span>{" "}
            이력서 & 경력 보기
          </Link>
          <Link
            href="/project/list"
            className="bg-secondary-container text-on-secondary-container rounded-full px-8 py-3 font-body-base font-bold cute-button-shadow hover:bg-secondary-fixed-dim transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined">deployed_code</span>{" "}
            프로젝트 둘러보기
          </Link>
        </div>
      </section>

      {/* Career Milestones (PROFILE.experiences 자동 연동) */}
      <section className="py-stack-lg" id="career">
        <h2 className="font-headline-md text-headline-md text-center text-on-surface mb-stack-lg">
          실무 발자취
        </h2>
        <div className="max-w-2xl mx-auto space-y-stack-sm relative before:content-[''] before:absolute before:left-8 md:before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-surface-variant before:-translate-x-1/2">
          {recentExperiences.map((exp, idx) => {
            const isEven = idx % 2 === 1;
            const dotBg =
              idx === 0 ? "bg-tertiary-fixed" : "bg-error-container";

            return (
              <div
                key={exp.company + exp.period}
                className={`relative flex items-center md:justify-between group ${isEven ? "flex-row-reverse" : ""
                  }`}
              >
                <div
                  className={`hidden md:block w-5/12 ${isEven ? "text-left pl-8" : "text-right pr-8"
                    }`}
                >
                  <span className="font-label-caps text-label-caps text-secondary bg-secondary-container px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <div
                  className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full ${dotBg} border-4 border-surface flex items-center justify-center cute-shadow z-10 group-hover:scale-125 transition-transform`}
                ></div>
                <div
                  className={`w-full pl-20 md:w-5/12 ${isEven ? "md:pr-8 md:pl-0" : "md:pl-8"
                    }`}
                >
                  <div
                    className={`bg-surface-container-low p-6 rounded-3xl cute-shadow transition-transform hover:-translate-y-1 ${isEven ? "text-left md:text-right" : ""
                      }`}
                  >
                    <div className="md:hidden mb-2">
                      <span className="font-label-caps text-label-caps text-secondary bg-secondary-container px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="font-body-base text-body-base font-bold text-on-surface mb-1">
                      {exp.company}
                    </h3>
                    <p className="font-body-base text-body-base text-sm text-on-surface-variant">
                      {exp.shortDescription}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-stack-md">
          <Link
            href="/resume/history"
            className="inline-flex items-center gap-2 text-primary font-body-base font-bold hover:underline"
          >
            전체 커리어 & 트러블슈팅 보기
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>

      {/* Featured Projects (실제 3개 프로젝트 직사각형 벤토 그리드) */}
      <section className="py-stack-lg" id="projects">
        <div className="flex flex-col items-center mb-stack-lg">
          <h2 className="font-headline-md text-headline-md text-center text-on-surface mb-2">
            핵심 프로젝트
          </h2>
          <Link
            href="/project/list"
            className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
          >
            전체 프로젝트 자세히 보기
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. Card 1 (PROJECTS[0] - VOC-OPS-MSA) */}
          {featuredMain && (
            <Link
              href={`/project/${featuredMain.slug}`}
              className="bg-secondary-container/30 rounded-[2rem] p-8 cute-shadow flex flex-col justify-between group hover:bg-secondary-container/50 transition-colors"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-14 h-14 rounded-full bg-surface flex items-center justify-center text-primary cute-shadow">
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: "28px",
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      {featuredMain.icon}
                    </span>
                  </div>
                  <span className="font-label-caps text-label-caps text-primary bg-primary-fixed px-3 py-1 rounded-full">
                    {featuredMain.categoryTag}
                  </span>
                </div>
                <h3 className="font-headline-md text-2xl text-on-surface font-bold mb-1">
                  {featuredMain.title}
                </h3>
                <p className="text-xs font-bold text-secondary mb-3">
                  {featuredMain.subtitle} · {featuredMain.period}
                </p>
                <p className="font-body-base text-sm text-on-surface-variant mb-6 leading-relaxed">
                  {featuredMain.summary}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {featuredMain.techStack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-surface text-on-surface rounded-full text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          )}

          {/* 2. Card 2 (PROJECTS[1] - Leo-PLLM) */}
          {projectSecond && (
            <Link
              href={`/project/${projectSecond.slug}`}
              className="bg-primary-fixed/40 rounded-[2rem] p-8 cute-shadow flex flex-col justify-between group hover:bg-primary-fixed/60 transition-colors"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-14 h-14 rounded-full bg-surface flex items-center justify-center text-primary cute-shadow">
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: "28px",
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      {projectSecond.icon}
                    </span>
                  </div>
                  <span className="font-label-caps text-label-caps text-primary bg-surface px-3 py-1 rounded-full">
                    {projectSecond.categoryTag}
                  </span>
                </div>
                <h3 className="font-headline-md text-2xl text-on-surface font-bold mb-1">
                  {projectSecond.title}
                </h3>
                <p className="text-xs font-bold text-secondary mb-3">
                  {projectSecond.subtitle} · {projectSecond.period}
                </p>
                <p className="font-body-base text-sm text-on-surface-variant mb-6 leading-relaxed">
                  {projectSecond.summary}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {projectSecond.techStack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-surface text-on-surface rounded-full text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          )}

          {/* 3. Card 3 (PROJECTS[2] - 스쿨프렌즈) */}
          {projectThird && (
            <Link
              href={`/project/${projectThird.slug}`}
              className="bg-tertiary-fixed/40 rounded-[2rem] p-8 cute-shadow flex flex-col justify-between group hover:bg-tertiary-fixed/60 transition-colors"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-14 h-14 rounded-full bg-surface flex items-center justify-center text-tertiary cute-shadow">
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: "28px",
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      {projectThird.icon}
                    </span>
                  </div>
                  <span className="font-label-caps text-label-caps text-tertiary bg-surface px-3 py-1 rounded-full">
                    {projectThird.categoryTag}
                  </span>
                </div>
                <h3 className="font-headline-md text-2xl text-on-surface font-bold mb-1">
                  {projectThird.title}
                </h3>
                <p className="text-xs font-bold text-secondary mb-3">
                  {projectThird.subtitle} · {projectThird.period}
                </p>
                <p className="font-body-base text-sm text-on-surface-variant mb-6 leading-relaxed">
                  {projectThird.summary}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {projectThird.techStack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-surface text-on-surface rounded-full text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          )}

          {/* 4. Card 4 (PROJECTS[3] - AI 백엔드 포트폴리오 플랫폼) */}
          {projectFourth && (
            <Link
              href={`/project/${projectFourth.slug}`}
              className="bg-error-container/30 rounded-[2rem] p-8 cute-shadow flex flex-col justify-between group hover:bg-error-container/50 transition-colors"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-14 h-14 rounded-full bg-surface flex items-center justify-center text-primary cute-shadow">
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: "28px",
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      {projectFourth.icon}
                    </span>
                  </div>
                  <span className="font-label-caps text-label-caps text-primary bg-surface px-3 py-1 rounded-full">
                    {projectFourth.categoryTag}
                  </span>
                </div>
                <h3 className="font-headline-md text-2xl text-on-surface font-bold mb-1">
                  {projectFourth.title}
                </h3>
                <p className="text-xs font-bold text-secondary mb-3">
                  {projectFourth.subtitle} · {projectFourth.period}
                </p>
                <p className="font-body-base text-sm text-on-surface-variant mb-6 leading-relaxed">
                  {projectFourth.summary}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {projectFourth.techStack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-surface text-on-surface rounded-full text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
