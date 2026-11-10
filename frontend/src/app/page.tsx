import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-stack-lg pb-stack-lg">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-stack-lg min-h-[70vh] relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary-container/50 via-surface to-surface blur-3xl rounded-full opacity-50"></div>
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden cute-shadow border-4 border-surface-container-lowest mb-stack-md mx-auto">
          <img
            className="w-full h-full object-cover"
            alt="A highly stylized, cute 3D avatar"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzCnx3gnpRLODcLRI2o7bKl6epKLs3z67ZEyG8SuFaTrwtwOIhyKCzk1zP1jUzAPw8EEwFemt1YDPQcQWnS9yi5y5edYId7hYCFTuhaaZ4tVkEs628M8uf-MQY07WYsTLAuy-zYLB4B890uHR6MvW2EbxfA9TVh0X1ec0c2WL5Q8V1xGT3BTKsykSdMx9uex-ArYmhqJI5lR5jMKtBgD5G2w7GaQ4DF7sdO9o-d0IpeRjPHqVhet4LpQ"
          />
        </div>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary-fixed mb-stack-sm max-w-3xl leading-tight">
          안녕하세요! <br className="md:hidden" />
          재미있는 아이디어를 만드는 <br />
          <span className="text-primary relative inline-block">
            크리에이터
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
          입니다.
        </h1>
        <p className="font-body-base text-body-base text-on-surface-variant max-w-xl mx-auto mb-stack-md">
          따뜻한 색감과 부드러운 인터랙션으로 사용자에게 미소를 짓게 하는
          디자인을 추구합니다. 프로그래밍과 디자인의 경계를 넘나들며 놀이 같은
          경험을 설계합니다.
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
      {/* Career Milestones */}
      <section className="py-stack-lg" id="career">
        <h2 className="font-headline-md text-headline-md text-center text-on-surface mb-stack-lg">
          부드러운 발자취
        </h2>
        <div className="max-w-2xl mx-auto space-y-stack-sm relative before:content-[''] before:absolute before:left-8 md:before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-surface-variant before:-translate-x-1/2">
          {/* Milestone 1 */}
          <div className="relative flex items-center md:justify-between group">
            <div className="hidden md:block w-5/12 text-right pr-8">
              <span className="font-label-caps text-label-caps text-secondary bg-secondary-container px-3 py-1 rounded-full">
                2023 - 현재
              </span>
            </div>
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-tertiary-fixed border-4 border-surface flex items-center justify-center cute-shadow z-10 group-hover:scale-125 transition-transform"></div>
            <div className="w-full pl-20 md:pl-8 md:w-5/12">
              <div className="bg-surface-container-low p-6 rounded-3xl cute-shadow transition-transform hover:-translate-y-1">
                <div className="md:hidden mb-2">
                  <span className="font-label-caps text-label-caps text-secondary bg-secondary-container px-3 py-1 rounded-full">
                    2023 - 현재
                  </span>
                </div>
                <h3 className="font-body-base text-body-base font-bold text-on-surface mb-1">
                  스마일 스튜디오 합류
                </h3>
                <p className="font-body-base text-body-base text-sm text-on-surface-variant">
                  시니어 UI 디자이너로 합류하여 감성적인 프로덕트 라인업을 리드하고
                  있습니다.
                </p>
              </div>
            </div>
          </div>
          {/* Milestone 2 */}
          <div className="relative flex items-center md:justify-between flex-row-reverse group">
            <div className="hidden md:block w-5/12 text-left pl-8">
              <span className="font-label-caps text-label-caps text-secondary bg-secondary-container px-3 py-1 rounded-full">
                2021 - 2023
              </span>
            </div>
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-error-container border-4 border-surface flex items-center justify-center cute-shadow z-10 group-hover:scale-125 transition-transform"></div>
            <div className="w-full pl-20 md:pr-8 md:pl-0 md:w-5/12">
              <div className="bg-surface-container-low p-6 rounded-3xl cute-shadow transition-transform hover:-translate-y-1 text-left md:text-right">
                <div className="md:hidden mb-2">
                  <span className="font-label-caps text-label-caps text-secondary bg-secondary-container px-3 py-1 rounded-full">
                    2021 - 2023
                  </span>
                </div>
                <h3 className="font-body-base text-body-base font-bold text-on-surface mb-1">
                  프리랜서 창작자
                </h3>
                <p className="font-body-base text-body-base text-sm text-on-surface-variant">
                  다양한 클라이언트와 함께 장난감 같은 웹사이트와 앱을
                  개발했습니다.
                </p>
              </div>
            </div>
          </div>
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
      {/* Toy Projects (Bento-ish Grid) */}
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
          {/* Large Card */}
          <Link
            href="/project/project1"
            className="md:col-span-2 bg-secondary-container/30 rounded-[2rem] p-8 cute-shadow flex flex-col justify-between group hover:bg-secondary-container/50 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center text-primary cute-shadow">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "32px", fontVariationSettings: "'FILL' 1" }}
                >
                  smart_toy
                </span>
              </div>
              <span className="font-label-caps text-label-caps text-primary bg-primary-fixed px-3 py-1 rounded-full">
                AI Web App
              </span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                말랑말랑 챗봇
              </h3>
              <p className="font-body-base text-body-base text-on-surface-variant mb-6 max-w-md">
                사용자의 감정을 분석하여 따뜻한 위로를 건네는 AI 친구
                서비스입니다. 둥글둥글한 UI가 특징입니다.
              </p>
              <div className="w-full h-48 rounded-2xl overflow-hidden shadow-inner bg-surface">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="A mockup of a mobile app interface"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuHA1YOqUfjATM3u0LXJ98YlXHuo8QeEqwvq9ulFx5Dee6kYJJLcxP2UwTAchbI2fHH_Vzl7XxTPQPEGutek_VoOq-WjhJcCc1LQOH2b2lPwOaXHXU0TYnO3fpUQ6GGXgMlr5Hk22MVsv-2tuSU0drAvRo2wZ0L7GGSKie6u_dlFEq-4j7xO-FYzDViE5y-TF2nI9wpFY0_Iql2OsUw6tITaYwybNUZHOVsWKZNkvyfHU3IejhkATLxQ"
                />
              </div>
            </div>
          </Link>
          {/* Small Card 1 */}
          <Link
            href="/project/project2"
            className="bg-error-container/30 rounded-[2rem] p-8 cute-shadow flex flex-col group hover:bg-error-container/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-error mb-4 cute-shadow">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                favorite
              </span>
            </div>
            <h3 className="font-body-base text-body-base font-bold text-on-surface mb-2 text-xl">
              하트 트래커
            </h3>
            <p className="font-body-base text-body-base text-sm text-on-surface-variant flex-grow">
              매일의 기분을 하트 모양으로 기록하는 소소한 일기장 앱.
            </p>
          </Link>
          {/* Small Card 2 */}
          <Link
            href="/project/habit-sprites"
            className="bg-tertiary-fixed/30 rounded-[2rem] p-8 cute-shadow flex flex-col group hover:bg-tertiary-fixed/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-tertiary mb-4 cute-shadow">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                palette
              </span>
            </div>
            <h3 className="font-body-base text-body-base font-bold text-on-surface mb-2 text-xl">
              해빗 스프라이트
            </h3>
            <p className="font-body-base text-body-base text-sm text-on-surface-variant flex-grow">
              습관 기록을 귀여운 정령 수집으로 풀어낸 마이크로 인터랙션 프로젝트.
            </p>
          </Link>
          {/* Medium Card */}
          <Link
            href="/project/cloud-thoughts"
            className="md:col-span-2 bg-surface-container rounded-[2rem] p-8 cute-shadow flex flex-col md:flex-row gap-6 items-center group hover:bg-surface-container-high transition-colors"
          >
            <div className="w-full md:w-1/2 h-48 rounded-2xl overflow-hidden shadow-inner bg-surface-container-lowest">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="A sleek but soft web dashboard interface design"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaeQsAidqZDYSFIWlrqRmsRU5Hq2fd8ASH7nwGjdELj7HkxdIzk2Ytv5RMchmEwamaJryk7ND-X-xHt6MTn40p6LhCyGyrjoxwc2svqxa3DqTuqrIeNBWHeUOh0Bva-WNmeSobToycybxm9UY5pxr06pMDxrHfNrMxJct-LwEnhuLnCuT4mYaGRi1O0lF4EzMZVLWcvZDaL7S3tMVIF1QsbSczcXMEcAVY-WPxL-2tXbxLoqgZvyRfNQ"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface mb-4 cute-shadow">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  bubble_chart
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2 text-2xl">
                클라우드 쏘츠
              </h3>
              <p className="font-body-base text-body-base text-on-surface-variant">
                딱딱한 감정 데이터를 구름과 비누방울처럼 귀엽게 시각화해주는 실험적인
                대시보드 프로젝트입니다.
              </p>
            </div>
          </Link>
          <Link
            href="/project/liquid-canvas"
            className="bg-error-container/30 rounded-[2rem] p-8 cute-shadow flex flex-col group hover:bg-error-container/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-error mb-4 cute-shadow">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                gesture
              </span>
            </div>
            <h3 className="font-body-base text-body-base font-bold text-on-surface mb-2 text-xl">
              리퀴드 캔버스
            </h3>
            <p className="font-body-base text-body-base text-sm text-on-surface-variant flex-grow">
              커서 움직임에 반응하는 파스텔 유체 역학 WebGL 셰이더 실험.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
