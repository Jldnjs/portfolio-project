import Link from "next/link";
import { PROFILE } from "@/data/profile";

export default function ResumePage() {
  return (
    <main className="flex-grow pt-[120px] pb-stack-lg max-w-container-max mx-auto w-full px-margin-mobile md:px-gutter">
      {/* Profile Header Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-stack-md mb-stack-lg text-center md:text-left relative z-10">
        {/* <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-cute border-4 border-surface-container-lowest shrink-0 relative">
          <img
            className="w-full h-full object-cover"
            alt={PROFILE.name}
            src={PROFILE.avatars.resume}
            loading="eager"
            fetchPriority="high"
          />
        </div> */}
        <div className="flex flex-col items-center md:items-start max-w-2xl">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-unit">
            {PROFILE.name}
          </h1>
          <p className="font-headline-md text-headline-md text-secondary mb-stack-sm text-xl md:text-2xl">
            {PROFILE.headline}
          </p>
          <p className="font-body-base text-body-base text-on-surface-variant mb-stack-sm max-w-xl">
            {PROFILE.resumeBio}
          </p>
          {/* Contact & Social Pills (전화번호 비공개, 이메일/GitHub/블로그 노출) */}
          <div className="flex flex-wrap justify-center md:justify-start gap-unit">
            <a
              className="flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-2 rounded-full font-label-caps text-label-caps hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-cute"
              href={`mailto:${PROFILE.socials.email}`}
            >
              <span className="material-symbols-outlined text-[16px]">
                mail
              </span>{" "}
              {PROFILE.socials.email}
            </a>
            <a
              className="flex items-center gap-2 bg-surface-container text-on-surface px-4 py-2 rounded-full font-label-caps text-label-caps hover:bg-surface-variant transition-colors shadow-cute"
              href={PROFILE.socials.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[16px]">
                terminal
              </span>{" "}
              GitHub
            </a>
            <a
              className="flex items-center gap-2 bg-surface-container text-on-surface px-4 py-2 rounded-full font-label-caps text-label-caps hover:bg-surface-variant transition-colors shadow-cute"
              href={PROFILE.socials.blog}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[16px]">
                edit_note
              </span>{" "}
              Tistory Blog
            </a>
          </div>
        </div>
      </section>

      {/* Bento Grid Layout for Resume Info */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Tech Stack / Skills */}
        <section className="md:col-span-12 lg:col-span-4 bg-surface-container-low rounded-[32px] p-[1.5rem] shadow-cute relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container opacity-20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm flex items-center gap-2">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              code
            </span>{" "}
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {PROFILE.skills.map((skill) => (
              <span
                key={skill.name}
                className={`${skill.bgClass} ${skill.textClass} px-4 py-2 rounded-full font-body-base text-sm shadow-sm font-medium`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        {/* Experience / Career */}
        <section className="md:col-span-12 lg:col-span-8 bg-surface-container-low rounded-[32px] p-[1.5rem] shadow-cute">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h2 className="font-headline-md text-headline-md text-primary flex items-center gap-2">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                work
              </span>{" "}
              Career
            </h2>
            <Link
              href="/resume/history"
              className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
            >
              상세 타임라인 보기
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="mb-stack-sm flex flex-wrap items-center gap-2 text-sm text-on-surface-variant">
            <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full font-bold">
              {PROFILE.careerSummary.company}
            </span>
            <span className="font-semibold">{PROFILE.careerSummary.period}</span>
            <span>· {PROFILE.careerSummary.description}</span>
          </div>

          <div className="flex flex-col gap-4 relative">
            <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-outline-variant/30 hidden sm:block"></div>
            {PROFILE.experiences.map((exp, idx) => (
              <div
                key={exp.role + exp.period}
                className="flex flex-col sm:flex-row gap-4 relative z-10"
              >
                <div className="sm:w-1/4 pt-1 hidden sm:block relative">
                  <div
                    className={`absolute left-[-21px] top-1.5 w-4 h-4 rounded-full ${idx === 0
                        ? "bg-primary-container"
                        : "bg-secondary-container"
                      } border-4 border-surface-container-low shadow-sm`}
                  ></div>
                  <span className="font-label-caps text-label-caps text-secondary">
                    {exp.period}
                  </span>
                </div>
                <div className="sm:w-3/4 bg-surface-container-lowest p-6 rounded-[24px] shadow-sm hover:shadow-cute transition-shadow duration-300">
                  <div className="sm:hidden mb-2">
                    <span className="font-label-caps text-label-caps text-secondary bg-surface-container px-2 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-[20px] text-on-surface font-semibold mb-1">
                    {exp.role}
                  </h3>
                  <p className="font-body-base text-sm text-on-surface-variant mb-3">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-surface-container text-on-surface-variant px-2.5 py-0.5 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Troubleshooting & Education */}
        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-gutter mt-4">
          {/* Problem Solving / Troubleshooting */}
          <section className="bg-surface-container-low rounded-[32px] p-[1.5rem] shadow-cute">
            <div className="flex items-center justify-between gap-2 mb-stack-sm">
              <h2 className="font-headline-md text-headline-md text-primary flex items-center gap-2">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  build
                </span>{" "}
                Troubleshooting
              </h2>
              <Link
                href="/resume/history#troubleshooting"
                className="text-xs font-bold text-primary hover:underline"
              >
                자세히 보기 →
              </Link>
            </div>
            <ul className="space-y-3">
              {PROFILE.troubleshooting.map((item) => (
                <li
                  key={item.id}
                  className="bg-surface-container-lowest p-5 rounded-[24px] shadow-sm"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="bg-error-container text-on-error-container px-3 py-0.5 rounded-full font-label-caps text-label-caps">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-body-base font-bold text-on-surface mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body-base text-sm text-on-surface-variant">
                    {item.result}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* Education */}
          <section className="bg-surface-container-low rounded-[32px] p-[1.5rem] shadow-cute">
            <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm flex items-center gap-2">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                school
              </span>{" "}
              Education
            </h2>
            <div className="space-y-4">
              {PROFILE.education.map((edu) => (
                <div
                  key={edu.school + edu.degree}
                  className="bg-surface-container-lowest p-5 rounded-[24px] shadow-sm"
                >
                  <h3 className="font-body-base text-base font-bold text-on-surface">
                    {edu.degree}
                  </h3>
                  <p className="font-label-caps text-label-caps text-secondary mt-1">
                    {edu.school} · {edu.period}
                  </p>
                  {edu.description && (
                    <p className="font-body-base text-sm text-on-surface-variant mt-2 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Growth Plan & Contributions (PDF Page 11) */}
        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-gutter mt-4">
          <section className="bg-surface-container-low rounded-[32px] p-[1.5rem] shadow-cute">
            <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm flex items-center gap-2">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                trending_up
              </span>{" "}
              성장 계획
            </h2>
            <ul className="space-y-2.5">
              {PROFILE.growthPlan.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 bg-surface-container-lowest p-4 rounded-2xl shadow-sm text-sm text-on-surface"
                >
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                    check_circle
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-surface-container-low rounded-[32px] p-[1.5rem] shadow-cute">
            <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm flex items-center gap-2">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                handshake
              </span>{" "}
              기여 방안
            </h2>
            <ul className="space-y-2.5">
              {PROFILE.contributions.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 bg-surface-container-lowest p-4 rounded-2xl shadow-sm text-sm text-on-surface"
                >
                  <span className="material-symbols-outlined text-tertiary text-[18px] mt-0.5">
                    bolt
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
