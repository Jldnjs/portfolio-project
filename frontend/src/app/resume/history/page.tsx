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
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">
            My Journey
          </h1>
          <p className="font-body-base text-body-base text-on-surface-variant">
            A timeline of my professional adventures, building awesome things
            with amazing teams.
          </p>
        </header>

        {/* Timeline Container (PROFILE.experiences 자동 연동) */}
        <div className="relative py-8">
          {PROFILE.experiences.map((exp, idx) => {
            const style = TIMELINE_ACCENTS[idx % TIMELINE_ACCENTS.length];
            return (
              <div
                key={exp.company + exp.period}
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
                  <div className="w-full md:w-1/3 pl-16 md:pl-0 -mt-10 md:mt-0">
                    <div className="md:hidden mb-4">
                      <span
                        className={`inline-block ${style.badgeBg} font-label-caps text-label-caps px-4 py-2 rounded-full font-bold`}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <div className="bg-surface-container-lowest p-8 rounded-3xl cute-shadow border-none">
                      <h3
                        className={`font-headline-md text-headline-md ${style.roleColor} mb-1`}
                      >
                        {exp.role}
                      </h3>
                      <h4
                        className={`font-body-base text-body-base ${style.companyColor} font-bold mb-4`}
                      >
                        {exp.company}
                      </h4>
                      <p className="font-body-base text-body-base text-on-surface-variant mb-6">
                        {exp.description}
                      </p>
                      <ul className="space-y-3">
                        {exp.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span
                              className={`material-symbols-outlined ${style.bulletColor} mt-1 shrink-0`}
                            >
                              {exp.highlightIcon}
                            </span>
                            <span className="font-body-base text-body-base text-on-surface">
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
      </main>
    </>
  );
}
