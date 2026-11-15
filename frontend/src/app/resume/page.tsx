import Link from "next/link";
import { PROFILE } from "@/data/profile";

export default function ResumePage() {
  return (
    <main className="flex-grow pt-[120px] pb-stack-lg max-w-container-max mx-auto w-full px-margin-mobile md:px-gutter">
      {/* Profile Header Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-stack-md mb-stack-lg text-center md:text-left relative z-10">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-cute border-4 border-surface-container-lowest shrink-0 relative">
          <img
            className="w-full h-full object-cover"
            alt={PROFILE.name}
            src={PROFILE.avatars.resume}
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="flex flex-col items-center md:items-start max-w-2xl">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-unit">
            {PROFILE.name}
          </h1>
          <p className="font-headline-md text-headline-md text-secondary mb-stack-sm">
            {PROFILE.headline}
          </p>
          <p className="font-body-base text-body-base text-on-surface-variant mb-stack-sm max-w-xl">
            {PROFILE.resumeBio}
          </p>
          {/* Contact & Social Pills */}
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
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[16px]">
                link
              </span>{" "}
              LinkedIn
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
          </div>
        </div>
      </section>

      {/* Bento Grid Layout for Resume Info */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Tech Stack / Skills (Cute Pills - PROFILE.skills 연동) */}
        <section className="md:col-span-12 lg:col-span-4 bg-surface-container-low rounded-[32px] p-[1.5rem] shadow-cute relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container opacity-20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm flex items-center gap-2">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              palette
            </span>{" "}
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {PROFILE.skills.map((skill) => (
              <span
                key={skill.name}
                className={`${skill.bgClass} ${skill.textClass} px-4 py-2 rounded-full font-body-base text-sm shadow-sm`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        {/* Experience / Career (Pastel Blocks - PROFILE.experiences 연동) */}
        <section className="md:col-span-12 lg:col-span-8 bg-surface-container-low rounded-[32px] p-[1.5rem] shadow-cute">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-stack-sm">
            <h2 className="font-headline-md text-headline-md text-primary flex items-center gap-2">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                work
              </span>{" "}
              Experience
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
          <div className="flex flex-col gap-4 relative">
            {/* Timeline Line (Decorative) */}
            <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-outline-variant/30 hidden sm:block"></div>
            {PROFILE.experiences.slice(0, 2).map((exp, idx) => (
              <div
                key={exp.company + exp.period}
                className="flex flex-col sm:flex-row gap-4 relative z-10"
              >
                <div className="sm:w-1/4 pt-1 hidden sm:block relative">
                  <div
                    className={`absolute left-[-21px] top-1.5 w-4 h-4 rounded-full ${
                      idx === 0
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
                  <h3 className="font-headline-md text-[24px] text-on-surface font-semibold mb-1">
                    {exp.role}
                  </h3>
                  <p
                    className={`font-body-base ${
                      idx === 0 ? "text-primary" : "text-secondary"
                    } font-medium mb-2`}
                  >
                    {exp.company}
                  </p>
                  <p className="font-body-base text-on-surface-variant">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Awards */}
        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-gutter mt-4">
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
            {PROFILE.education.map((edu) => (
              <div
                key={edu.school + edu.degree}
                className="bg-surface-container-lowest p-5 rounded-[24px] shadow-sm mb-4 last:mb-0"
              >
                <h3 className="font-body-base text-lg font-bold text-on-surface">
                  {edu.degree}
                </h3>
                <p className="font-body-base text-secondary">{edu.school}</p>
                <p className="font-label-caps text-label-caps text-outline mt-2">
                  {edu.period}
                </p>
              </div>
            ))}
          </section>

          {/* Certifications / Awards */}
          <section className="bg-surface-container-low rounded-[32px] p-[1.5rem] shadow-cute">
            <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm flex items-center gap-2">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                workspace_premium
              </span>{" "}
              Achievements
            </h2>
            <ul className="space-y-3">
              {PROFILE.achievements.map((ach) => (
                <li
                  key={ach.title}
                  className="flex items-center gap-3 bg-surface-container-lowest p-4 rounded-[24px] shadow-sm"
                >
                  <span
                    className={`material-symbols-outlined ${ach.iconColorClass}`}
                  >
                    {ach.icon}
                  </span>
                  <div>
                    <h4 className="font-body-base font-semibold text-on-surface">
                      {ach.title}
                    </h4>
                    <p className="font-label-caps text-label-caps text-outline">
                      {ach.year}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
