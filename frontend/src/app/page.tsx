import Link from "next/link";
import { PROFILE } from "@/data/profile";
import { PROJECTS } from "@/data/projects";

export default function Home() {
  // 메인 화면 타임라인에는 최근 경력 2개를 표시
  const recentExperiences = PROFILE.experiences.slice(0, 2);

  // 메인 화면 벤토 그리드(장난감 상자)에는 앞의 5개 프로젝트를 각 슬롯 디자인에 맞춰 배치
  const [featuredLarge, smallCard1, smallCard2, featuredMedium, smallCard3] =
    PROJECTS;

  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-stack-lg pb-stack-lg">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-stack-lg min-h-[70vh] relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary-container/50 via-surface to-surface blur-3xl rounded-full opacity-50"></div>
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden cute-shadow border-4 border-surface-container-lowest mb-stack-md mx-auto">
          <img
            className="w-full h-full object-cover"
            alt="A highly stylized, cute 3D avatar"
            src={PROFILE.avatars.hero}
          />
        </div>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary-fixed mb-stack-sm max-w-3xl leading-tight">
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
        <p className="font-body-base text-body-base text-on-surface-variant max-w-xl mx-auto mb-stack-md">
          {PROFILE.heroBio}
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/resume"
            className="bg-primary text-on-primary rounded-full px-8 py-3 font-body-base font-bold cute-button-shadow hover:bg-on-primary-fixed-variant transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined">waving_hand</span>{" "}
            반가워요!
          </Link>
        </div>
      </section>

      {/* Career Milestones (PROFILE.experiences 자동 연동) */}
      <section className="py-stack-lg" id="career">
        <h2 className="font-headline-md text-headline-md text-center text-on-surface mb-stack-lg">
          부드러운 발자취
        </h2>
        <div className="max-w-2xl mx-auto space-y-stack-sm relative before:content-[''] before:absolute before:left-8 md:before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-surface-variant before:-translate-x-1/2">
          {recentExperiences.map((exp, idx) => {
            const isEven = idx % 2 === 1;
            const dotBg =
              idx === 0 ? "bg-tertiary-fixed" : "bg-error-container";

            return (
              <div
                key={exp.company + exp.period}
                className={`relative flex items-center md:justify-between group ${
                  isEven ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`hidden md:block w-5/12 ${
                    isEven ? "text-left pl-8" : "text-right pr-8"
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
                  className={`w-full pl-20 md:w-5/12 ${
                    isEven ? "md:pr-8 md:pl-0" : "md:pl-8"
                  }`}
                >
                  <div
                    className={`bg-surface-container-low p-6 rounded-3xl cute-shadow transition-transform hover:-translate-y-1 ${
                      isEven ? "text-left md:text-right" : ""
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
            전체 커리어 타임라인 보기
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>

      {/* Toy Projects (PROJECTS 데이터 자동 연동 벤토 그리드) */}
      <section className="py-stack-lg" id="projects">
        <div className="flex flex-col items-center mb-stack-lg">
          <h2 className="font-headline-md text-headline-md text-center text-on-surface mb-2">
            장난감 상자
          </h2>
          <Link
            href="/project/list"
            className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
          >
            전체 토이 프로젝트 보기
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Large Card (PROJECTS[0]) */}
          {featuredLarge && (
            <Link
              href={`/project/${featuredLarge.slug}`}
              className="md:col-span-2 bg-secondary-container/30 rounded-[2rem] p-8 cute-shadow flex flex-col justify-between group hover:bg-secondary-container/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center text-primary cute-shadow">
                  <span
                    className="material-symbols-outlined"
                    style={{
                      fontSize: "32px",
                      fontVariationSettings: "'FILL' 1",
                    }}
                  >
                    {featuredLarge.icon}
                  </span>
                </div>
                <span className="font-label-caps text-label-caps text-primary bg-primary-fixed px-3 py-1 rounded-full">
                  {featuredLarge.categoryTag}
                </span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                  {featuredLarge.title}
                </h3>
                <p className="font-body-base text-body-base text-on-surface-variant mb-6 max-w-md">
                  {featuredLarge.summary}
                </p>
                {featuredLarge.heroImage && (
                  <div className="w-full h-48 rounded-2xl overflow-hidden shadow-inner bg-surface">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={featuredLarge.heroImageAlt}
                      src={featuredLarge.heroImage}
                    />
                  </div>
                )}
              </div>
            </Link>
          )}

          {/* 2. Small Card 1 (PROJECTS[1]) */}
          {smallCard1 && (
            <Link
              href={`/project/${smallCard1.slug}`}
              className="bg-error-container/30 rounded-[2rem] p-8 cute-shadow flex flex-col group hover:bg-error-container/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-error mb-4 cute-shadow">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {smallCard1.icon}
                </span>
              </div>
              <h3 className="font-body-base text-body-base font-bold text-on-surface mb-2 text-xl">
                {smallCard1.title}
              </h3>
              <p className="font-body-base text-body-base text-sm text-on-surface-variant flex-grow">
                {smallCard1.summary}
              </p>
            </Link>
          )}

          {/* 3. Small Card 2 (PROJECTS[2]) */}
          {smallCard2 && (
            <Link
              href={`/project/${smallCard2.slug}`}
              className="bg-tertiary-fixed/30 rounded-[2rem] p-8 cute-shadow flex flex-col group hover:bg-tertiary-fixed/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-tertiary mb-4 cute-shadow">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {smallCard2.icon}
                </span>
              </div>
              <h3 className="font-body-base text-body-base font-bold text-on-surface mb-2 text-xl">
                {smallCard2.title}
              </h3>
              <p className="font-body-base text-body-base text-sm text-on-surface-variant flex-grow">
                {smallCard2.summary}
              </p>
            </Link>
          )}

          {/* 4. Medium Card (PROJECTS[3]) */}
          {featuredMedium && (
            <Link
              href={`/project/${featuredMedium.slug}`}
              className="md:col-span-2 bg-surface-container rounded-[2rem] p-8 cute-shadow flex flex-col md:flex-row gap-6 items-center group hover:bg-surface-container-high transition-colors"
            >
              {featuredMedium.heroImage && (
                <div className="w-full md:w-1/2 h-48 rounded-2xl overflow-hidden shadow-inner bg-surface-container-lowest">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={featuredMedium.heroImageAlt}
                    src={featuredMedium.heroImage}
                  />
                </div>
              )}
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface mb-4 cute-shadow">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {featuredMedium.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2 text-2xl">
                  {featuredMedium.title}
                </h3>
                <p className="font-body-base text-body-base text-on-surface-variant">
                  {featuredMedium.summary}
                </p>
              </div>
            </Link>
          )}

          {/* 5. Small Card 3 (PROJECTS[4]) */}
          {smallCard3 && (
            <Link
              href={`/project/${smallCard3.slug}`}
              className="bg-error-container/30 rounded-[2rem] p-8 cute-shadow flex flex-col group hover:bg-error-container/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-error mb-4 cute-shadow">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {smallCard3.icon}
                </span>
              </div>
              <h3 className="font-body-base text-body-base font-bold text-on-surface mb-2 text-xl">
                {smallCard3.title}
              </h3>
              <p className="font-body-base text-body-base text-sm text-on-surface-variant flex-grow">
                {smallCard3.summary}
              </p>
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
