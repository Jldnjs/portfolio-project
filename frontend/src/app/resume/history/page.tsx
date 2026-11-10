import Link from "next/link";

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
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">My Journey</h1>
          <p className="font-body-base text-body-base text-on-surface-variant">A timeline of my professional adventures, building awesome things with amazing teams.</p>
        </header>
        {/* Timeline Container */}
        <div className="relative py-8">
          {/* Experience Item 1 */}
          <div className="timeline-item relative mb-stack-lg last:mb-0">
            <div className="timeline-line"></div>
            <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-16">
              <div className="hidden md:block w-1/3 text-right pt-6">
                <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed font-label-caps text-label-caps px-4 py-2 rounded-full font-bold">2021 - Present</span>
                <div className="font-body-base text-body-base text-on-surface-variant mt-2 font-medium">San Francisco, CA</div>
              </div>
              <div className="relative z-10 w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 border-4 border-surface shadow-lg mt-2 md:mt-0 ml-4 md:ml-0 cute-shadow">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>rocket_launch</span>
              </div>
              <div className="w-full md:w-1/3 pl-16 md:pl-0 -mt-10 md:mt-0">
                <div className="md:hidden mb-4">
                  <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed font-label-caps text-label-caps px-4 py-2 rounded-full font-bold">2021 - Present</span>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-3xl cute-shadow border-none">
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">Lead UX Designer</h3>
                  <h4 className="font-body-base text-body-base text-secondary font-bold mb-4">TechNova Innovations</h4>
                  <p className="font-body-base text-body-base text-on-surface-variant mb-6">Spearheaded the redesign of the core SaaS platform, focusing on intuitive workflows and playful micro-interactions to boost user retention.</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-tertiary-container mt-1 shrink-0">star</span>
                      <span className="font-body-base text-body-base text-on-surface">Increased user engagement by 45% through gamified onboarding.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-tertiary-container mt-1 shrink-0">star</span>
                      <span className="font-body-base text-body-base text-on-surface">Managed a team of 4 junior designers, establishing a unified design system.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-tertiary-container mt-1 shrink-0">star</span>
                      <span className="font-body-base text-body-base text-on-surface">Collaborated directly with engineering to ensure pixel-perfect implementation.</span>
                    </li>
                  </ul>
                  <div className="flex gap-2 mt-6 flex-wrap">
                    <span className="bg-primary-fixed-dim text-on-primary-fixed font-label-caps text-label-caps px-3 py-1 rounded-full">Figma</span>
                    <span className="bg-primary-fixed-dim text-on-primary-fixed font-label-caps text-label-caps px-3 py-1 rounded-full">Design Systems</span>
                    <span className="bg-primary-fixed-dim text-on-primary-fixed font-label-caps text-label-caps px-3 py-1 rounded-full">Leadership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Experience Item 2 */}
          <div className="timeline-item relative mb-stack-lg last:mb-0">
            <div className="timeline-line"></div>
            <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-16">
              <div className="hidden md:block w-1/3 text-right pt-6">
                <span className="inline-block bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps px-4 py-2 rounded-full font-bold">2018 - 2021</span>
                <div className="font-body-base text-body-base text-on-surface-variant mt-2 font-medium">New York, NY</div>
              </div>
              <div className="relative z-10 w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 border-4 border-surface shadow-lg mt-2 md:mt-0 ml-4 md:ml-0 cute-shadow">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>palette</span>
              </div>
              <div className="w-full md:w-1/3 pl-16 md:pl-0 -mt-10 md:mt-0">
                <div className="md:hidden mb-4">
                  <span className="inline-block bg-secondary-fixed text-on-secondary-fixed font-label-caps text-label-caps px-4 py-2 rounded-full font-bold">2018 - 2021</span>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-3xl cute-shadow border-none">
                  <h3 className="font-headline-md text-headline-md text-secondary mb-1">UI/UX Designer</h3>
                  <h4 className="font-body-base text-body-base text-primary font-bold mb-4">Creative Cloud Agency</h4>
                  <p className="font-body-base text-body-base text-on-surface-variant mb-6">Crafted bespoke digital experiences for varied clients, blending robust usability with vibrant, modern aesthetics.</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary-container mt-1 shrink-0">favorite</span>
                      <span className="font-body-base text-body-base text-on-surface">Delivered 15+ full-scale web apps for startup clients.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary-container mt-1 shrink-0">favorite</span>
                      <span className="font-body-base text-body-base text-on-surface">Introduced user testing protocols, reducing iteration cycles by 20%.</span>
                    </li>
                  </ul>
                  <div className="flex gap-2 mt-6 flex-wrap">
                    <span className="bg-secondary-fixed-dim text-on-secondary-fixed font-label-caps text-label-caps px-3 py-1 rounded-full">Prototyping</span>
                    <span className="bg-secondary-fixed-dim text-on-secondary-fixed font-label-caps text-label-caps px-3 py-1 rounded-full">User Research</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Experience Item 3 */}
          <div className="timeline-item relative mb-stack-lg last:mb-0">
            <div className="timeline-line"></div>
            <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-16">
              <div className="hidden md:block w-1/3 text-right pt-6">
                <span className="inline-block bg-primary-fixed text-on-primary-fixed font-label-caps text-label-caps px-4 py-2 rounded-full font-bold">2016 - 2018</span>
                <div className="font-body-base text-body-base text-on-surface-variant mt-2 font-medium">Austin, TX</div>
              </div>
              <div className="relative z-10 w-12 h-12 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center shrink-0 border-4 border-surface shadow-lg mt-2 md:mt-0 ml-4 md:ml-0 cute-shadow">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>code</span>
              </div>
              <div className="w-full md:w-1/3 pl-16 md:pl-0 -mt-10 md:mt-0">
                <div className="md:hidden mb-4">
                  <span className="inline-block bg-primary-fixed text-on-primary-fixed font-label-caps text-label-caps px-4 py-2 rounded-full font-bold">2016 - 2018</span>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-3xl cute-shadow border-none">
                  <h3 className="font-headline-md text-headline-md text-tertiary mb-1">Frontend Developer</h3>
                  <h4 className="font-body-base text-body-base text-secondary font-bold mb-4">WebSpark Solutions</h4>
                  <p className="font-body-base text-body-base text-on-surface-variant mb-6">Translated complex design comps into responsive, accessible HTML/CSS/JS with a focus on animation performance.</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary-container mt-1 shrink-0">code_blocks</span>
                      <span className="font-body-base text-body-base text-on-surface">Built modular UI components used across multiple products.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary-container mt-1 shrink-0">code_blocks</span>
                      <span className="font-body-base text-body-base text-on-surface">Optimized page load speeds by 30% through asset management.</span>
                    </li>
                  </ul>
                  <div className="flex gap-2 mt-6 flex-wrap">
                    <span className="bg-surface-variant text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">React</span>
                    <span className="bg-surface-variant text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">CSS/Sass</span>
                    <span className="bg-surface-variant text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">Animation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}