import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="flex-grow pt-[120px] pb-stack-lg max-w-container-max mx-auto w-full px-margin-mobile md:px-gutter">
      {/* Profile Header Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-stack-md mb-stack-lg text-center md:text-left relative z-10">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-cute border-4 border-surface-container-lowest shrink-0 relative">
          <img 
            className="w-full h-full object-cover" 
            alt="A brightly lit, high-quality professional portrait of a young creative designer smiling warmly" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWO-CNnb4iMHkc1VxDw5TQhAQEE7v7QIjcslO3BDJx9cH-OLdEWRAIvhgy4V5HTS0euEe960rWjADtH86FvoW_3r5x1qqhCvzeomjTBM6oXLq9Kus2L_4rO22X4g8t3C0WvGvZSdCp3O0oaJFa0XLcTPyTsbcwPbW_QWOmUghiYLNcCY9JBu0BVcCldpRITjWGvnpNKLhSMnLk11L5XfAk2iDkzVtkU5pxizG-ff_Y4kBseZsfVsu1xg" 
            loading="eager" fetchPriority="high"
          />
        </div>
        <div className="flex flex-col items-center md:items-start max-w-2xl">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-unit">Hi, I'm Alex ✨</h1>
          <p className="font-headline-md text-headline-md text-secondary mb-stack-sm">UX/UI Designer &amp; Creative Technologist</p>
          <p className="font-body-base text-body-base text-on-surface-variant mb-stack-sm max-w-xl">
            I build digital experiences that feel like magic. Blending strategic logic with playful aesthetics to create products people love to use. Based in Seoul, open to global opportunities.
          </p>
          {/* Contact & Social Pills */}
          <div className="flex flex-wrap justify-center md:justify-start gap-unit">
            <a className="flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-2 rounded-full font-label-caps text-label-caps hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-cute" href="mailto:hello@creatorport.com">
              <span className="material-symbols-outlined text-[16px]">mail</span> hello@creatorport.com
            </a>
            <a className="flex items-center gap-2 bg-surface-container text-on-surface px-4 py-2 rounded-full font-label-caps text-label-caps hover:bg-surface-variant transition-colors shadow-cute" href="#">
              <span className="material-symbols-outlined text-[16px]">link</span> LinkedIn
            </a>
            <a className="flex items-center gap-2 bg-surface-container text-on-surface px-4 py-2 rounded-full font-label-caps text-label-caps hover:bg-surface-variant transition-colors shadow-cute" href="#">
              <span className="material-symbols-outlined text-[16px]">terminal</span> GitHub
            </a>
          </div>
        </div>
      </section>
      {/* Bento Grid Layout for Resume Info */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Tech Stack / Skills (Cute Pills) */}
        <section className="md:col-span-12 lg:col-span-4 bg-surface-container-low rounded-[32px] p-[1.5rem] shadow-cute relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container opacity-20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm flex items-center gap-2">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>palette</span> Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#dcfce7] text-[#166534] px-4 py-2 rounded-full font-body-base text-sm shadow-sm">Figma</span>
            <span className="bg-[#f3e8ff] text-[#6b21a8] px-4 py-2 rounded-full font-body-base text-sm shadow-sm">React</span>
            <span className="bg-[#e0f2fe] text-[#075985] px-4 py-2 rounded-full font-body-base text-sm shadow-sm">Tailwind CSS</span>
            <span className="bg-[#ffe4e6] text-[#9f1239] px-4 py-2 rounded-full font-body-base text-sm shadow-sm">Framer Motion</span>
            <span className="bg-[#fef3c7] text-[#92400e] px-4 py-2 rounded-full font-body-base text-sm shadow-sm">JavaScript</span>
            <span className="bg-[#f3e8ff] text-[#6b21a8] px-4 py-2 rounded-full font-body-base text-sm shadow-sm">UI/UX Design</span>
            <span className="bg-[#e0f2fe] text-[#075985] px-4 py-2 rounded-full font-body-base text-sm shadow-sm">Design Systems</span>
          </div>
        </section>
        {/* Experience / Career (Pastel Blocks) */}
        <section className="md:col-span-12 lg:col-span-8 bg-surface-container-low rounded-[32px] p-[1.5rem] shadow-cute">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-stack-sm">
            <h2 className="font-headline-md text-headline-md text-primary flex items-center gap-2">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>work</span> Experience
            </h2>
            <Link
              href="/resume/history"
              className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
            >
              상세 타임라인 보기
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
          <div className="flex flex-col gap-4 relative">
            {/* Timeline Line (Decorative) */}
            <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-outline-variant/30 hidden sm:block"></div>
            {/* Item 1 */}
            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <div className="sm:w-1/4 pt-1 hidden sm:block relative">
                <div className="absolute left-[-21px] top-1.5 w-4 h-4 rounded-full bg-primary-container border-4 border-surface-container-low shadow-sm"></div>
                <span className="font-label-caps text-label-caps text-secondary">2022 - Present</span>
              </div>
              <div className="sm:w-3/4 bg-surface-container-lowest p-6 rounded-[24px] shadow-sm hover:shadow-cute transition-shadow duration-300">
                <div className="sm:hidden mb-2">
                  <span className="font-label-caps text-label-caps text-secondary bg-surface-container px-2 py-1 rounded-full">2022 - Present</span>
                </div>
                <h3 className="font-headline-md text-[24px] text-on-surface font-semibold mb-1">Senior Product Designer</h3>
                <p className="font-body-base text-primary font-medium mb-2">TechBloom Studio</p>
                <p className="font-body-base text-on-surface-variant">Led the redesign of the core web application, improving user retention by 25%. Established and maintained the company's first comprehensive design system.</p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <div className="sm:w-1/4 pt-1 hidden sm:block relative">
                <div className="absolute left-[-21px] top-1.5 w-4 h-4 rounded-full bg-secondary-container border-4 border-surface-container-low shadow-sm"></div>
                <span className="font-label-caps text-label-caps text-secondary">2019 - 2022</span>
              </div>
              <div className="sm:w-3/4 bg-surface-container-lowest p-6 rounded-[24px] shadow-sm hover:shadow-cute transition-shadow duration-300">
                <div className="sm:hidden mb-2">
                  <span className="font-label-caps text-label-caps text-secondary bg-surface-container px-2 py-1 rounded-full">2019 - 2022</span>
                </div>
                <h3 className="font-headline-md text-[24px] text-on-surface font-semibold mb-1">UI Designer</h3>
                <p className="font-body-base text-secondary font-medium mb-2">Creative Minds Agency</p>
                <p className="font-body-base text-on-surface-variant">Designed marketing landing pages and interactive campaigns for top-tier clients. Collaborated closely with front-end developers to ensure pixel-perfect implementation.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Education & Awards */}
        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-gutter mt-4">
          {/* Education */}
          <section className="bg-surface-container-low rounded-[32px] p-[1.5rem] shadow-cute">
            <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm flex items-center gap-2">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>school</span> Education
            </h2>
            <div className="bg-surface-container-lowest p-5 rounded-[24px] shadow-sm mb-4">
              <h3 className="font-body-base text-lg font-bold text-on-surface">B.F.A in Interaction Design</h3>
              <p className="font-body-base text-secondary">Design Arts University</p>
              <p className="font-label-caps text-label-caps text-outline mt-2">Graduated 2019</p>
            </div>
          </section>
          {/* Certifications / Awards */}
          <section className="bg-surface-container-low rounded-[32px] p-[1.5rem] shadow-cute">
            <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm flex items-center gap-2">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>workspace_premium</span> Achievements
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 bg-surface-container-lowest p-4 rounded-[24px] shadow-sm">
                <span className="material-symbols-outlined text-tertiary">star</span>
                <div>
                  <h4 className="font-body-base font-semibold text-on-surface">Awwwards Honorable Mention</h4>
                  <p className="font-label-caps text-label-caps text-outline">2023</p>
                </div>
              </li>
              <li className="flex items-center gap-3 bg-surface-container-lowest p-4 rounded-[24px] shadow-sm">
                <span className="material-symbols-outlined text-secondary">verified</span>
                <div>
                  <h4 className="font-body-base font-semibold text-on-surface">Google UX Design Certificate</h4>
                  <p className="font-label-caps text-label-caps text-outline">2021</p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}