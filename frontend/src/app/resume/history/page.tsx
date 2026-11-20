import Link from "next/link";
import { PROFILE } from "@/data/profile";

const TIMELINE_ACCENTS = [
  {
    badgeBg: "bg-tertiary-fixed text-on-tertiary-fixed",
    circleBg: "bg-primary-container text-on-primary-container",
    roleColor: "text-primary",
    companyColor: "text-secondary",
    bulletColor: "text-tertiary-container",
    tagBg: "bg-primary-fixed-dim text-on-primary-fixed",
  },
  {
    badgeBg: "bg-secondary-fixed text-on-secondary-fixed",
    circleBg: "bg-secondary-container text-on-secondary-container",
    roleColor: "text-secondary",
    companyColor: "text-primary",
    bulletColor: "text-secondary-container",
    tagBg: "bg-secondary-fixed-dim text-on-secondary-fixed",
  },
  {
    badgeBg: "bg-primary-fixed text-on-primary-fixed",
    circleBg: "bg-tertiary-container text-on-tertiary-container",
    roleColor: "text-tertiary",
    companyColor: "text-secondary",
    bulletColor: "text-primary-container",
    tagBg: "bg-surface-variant text-on-surface-variant",
  },
];

export default function ResumeHistoryPage() {
  return (
    <>
      {/* Background Blobs for Cute Aesthetic */}
      <div className="blob bg-tertiary-fixed w-96 h-96 rounded-full top-20 -left-20"></div>
      <div className="blob bg-primary-fixed-dim w-80 h-80 rounded-full top-1/3 -right-20"></div>
      <div className="blob bg-secondary-fixed w-96 h-96 rounded-full bottom-20 left-1/4"></div>

      {/* Main Content Canvas */}
      <main className="md:pt-stack-xl pt-24 pb-stack-xl px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full">
        <div className="mb-stack-sm">
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary font-body-base text-sm font-semibold transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">
              arrow_back
            </span>
            이력서 요약으로 돌아가기
          </Link>
        </div>
        <header className="text-center mb-stack-lg max-w-2xl mx-auto">
          <span className="inline-block bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps px-4 py-1.5 rounded-full mb-3">
            {PROFILE.careerSummary.company} · {PROFILE.careerSummary.period}
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">
            Career Journey
          </h1>
          <p className="font-body-base text-body-base text-on-surface-variant">
            {PROFILE.careerSummary.description} — 신규 서비스 구축부터 외부 연동,
            레거시 운영 및 트러블슈팅까지의 기록입니다.
          </p>
        </header>

        {/* Timeline Container */}
        <div className="relative py-8">
          {PROFILE.experiences.map((exp, idx) => {
            const style = TIMELINE_ACCENTS[idx % TIMELINE_ACCENTS.length];
            return (
              <div
                key={exp.role + exp.period}
                className="timeline-item relative mb-stack-lg last:mb-0"
              >
                <div className="timeline-line"></div>
                <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-16">
                  <div className="hidden md:block w-1/3 text-right pt-6">
                    <span
                      className={`inline-block ${style.badgeBg} font-label-caps text-label-caps px-4 py-2 rounded-full font-bold`}
                    >
                      {exp.period}
                    </span>
                    <div className="font-body-base text-body-base text-on-surface-variant mt-2 font-medium">
                      {exp.location}
                    </div>
                  </div>
                  <div
                    className={`relative z-10 w-12 h-12 rounded-full ${style.circleBg} flex items-center justify-center shrink-0 border-4 border-surface shadow-lg mt-2 md:mt-0 ml-4 md:ml-0 cute-shadow`}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {exp.icon}
                    </span>
                  </div>
                  <div className="w-full md:w-1/2 pl-16 md:pl-0 -mt-10 md:mt-0">
                    <div className="md:hidden mb-4">
                      <span
                        className={`inline-block ${style.badgeBg} font-label-caps text-label-caps px-4 py-2 rounded-full font-bold`}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <div className="bg-surface-container-lowest p-8 rounded-3xl cute-shadow border-none">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                        <h3
                          className={`font-headline-md text-2xl ${style.roleColor} font-bold`}
                        >
                          {exp.role}
                        </h3>
                        {exp.serviceUrl && (
                          <a
                            href={exp.serviceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-primary bg-primary-fixed/60 hover:bg-primary-fixed px-3 py-1 rounded-full transition-colors"
                          >
                            서비스 보기
                            <span className="material-symbols-outlined text-[14px]">
                              open_in_new
                            </span>
                          </a>
                        )}
                      </div>
                      <h4
                        className={`font-body-base text-body-base ${style.companyColor} font-bold mb-4`}
                      >
                        {exp.location}
                      </h4>
                      <p className="font-body-base text-body-base text-on-surface-variant mb-6">
                        {exp.description}
                      </p>
                      <ul className="space-y-3">
                        {exp.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span
                              className={`material-symbols-outlined ${style.bulletColor} mt-0.5 shrink-0`}
                            >
                              {exp.highlightIcon}
                            </span>
                            <span className="font-body-base text-body-base text-on-surface text-sm leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-2 mt-6 flex-wrap">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`${style.tagBg} font-label-caps text-label-caps px-3 py-1 rounded-full`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Troubleshooting Detail Section */}
        <section id="troubleshooting" className="mt-stack-xl">
          <div className="text-center mb-stack-md">
            <span className="inline-block bg-error-container text-on-error-container font-label-caps text-label-caps px-4 py-1.5 rounded-full mb-3">
              Problem Solving
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mb-2">
              실무 문제 해결 경험
            </h2>
            <p className="font-body-base text-body-base text-on-surface-variant">
              서비스 운영과 트래픽 대응 중 마주한 기술적 장애의 원인을 추적하고
              해결한 기록입니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {PROFILE.troubleshooting.map((item) => (
              <div
                key={item.id}
                className="bg-surface-container-lowest rounded-[32px] p-8 cute-shadow flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full font-label-caps text-label-caps mb-3">
                    {item.badge}
                  </span>
                  <h3 className="font-headline-md text-xl text-primary font-bold mb-5">
                    {item.title}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="bg-error-container/25 p-4 rounded-2xl">
                      <span className="font-bold text-error block mb-1">
                        문제 (Problem)
                      </span>
                      <p className="text-on-surface leading-relaxed">
                        {item.problem}
                      </p>
                    </div>
                    <div className="bg-surface-container p-4 rounded-2xl">
                      <span className="font-bold text-secondary block mb-1">
                        원인 (Cause)
                      </span>
                      <p className="text-on-surface-variant leading-relaxed">
                        {item.cause}
                      </p>
                    </div>
                    <div className="bg-primary-fixed/40 p-4 rounded-2xl">
                      <span className="font-bold text-primary block mb-1">
                        해결 (Solution)
                      </span>
                      <p className="text-on-surface leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                    <div className="bg-tertiary-fixed/40 p-4 rounded-2xl">
                      <span className="font-bold text-tertiary block mb-1">
                        결과 (Result)
                      </span>
                      <p className="text-on-surface leading-relaxed">
                        {item.result}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
