import SocialButtons from '@/components/SocialButtons';
import { CornerDownRightIcon, ExternalLinkIcon } from 'lucide-react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main className="flex">
      <div className="flex flex-col gap-[62px]">
        <section className="space-y-4">
          <div className="flex gap-2">
            <div className="space-y-3">
              <img
                src="/assets/hi-there.svg"
                alt="Hi there"
                className="w-[120px]"
              />
              <p className="text-[15px]">
                Welcome on my personal space, I’m Bartosz Rajchert. Here you can
                browse my current CV, projects, past projects, see some
                experiments, and read my notes.
              </p>
            </div>
            <img
              className="aspect-square size-[120px] rounded-3xl"
              src="/assets/me-picture.jpg"
              alt="Bartosz Rajchert"
            />
          </div>
          <a
            href="https://withtokun.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-background-highlight space-y-2 rounded-2xl border border-white/25 p-4 shadow-[0_12px_69px_0_rgba(37,154,47,0.06)] transition-all duration-150 hover:border-white/50 hover:shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="size-1 rounded-full bg-[#53FA05]"></div>
                    <div className="absolute -right-0.5 -top-0.5 size-2 animate-ping rounded-full bg-[#53FA05] opacity-60 duration-[2000ms]"></div>
                  </div>
                  <p className="text-2xs font-mono text-white/80">
                    CURRENT SIDE PROJECT
                  </p>
                </div>
                <ExternalLinkIcon className="size-3.5 opacity-80" />
              </div>
              <p>
                Tokun — simple, and easy-to-use tool for working with design
                tokens with powerups.
              </p>
            </div>
          </a>
        </section>
        <section className="space-y-4">
          <div>
            <p className="text-2xs font-mono text-white/80">CURRENT POSITION</p>
            <p>Cloud Delivery Senior Engineer</p>
            <div className="flex items-center gap-1">
              <CornerDownRightIcon className="size-3.5" />
              <p>Focus on Front-End Development</p>
            </div>
          </div>
          <div>
            <p className="text-2xs font-mono text-white/80">COMPANY</p>
            <p>PwC Cloud & Digital</p>
          </div>
          <div>
            <p className="text-2xs font-mono text-white/80">LOCATION</p>
            <p>Warsaw, Poland</p>
          </div>
        </section>
        <section>
          <h1 className="text-2xs mb-4 font-mono text-white/80">
            FEATURED PROJECTS AND EXPERIMENTS
          </h1>
          <div className="space-y-2">
            <div className="border border-white/10 p-4">
              <h2>Tokun</h2>
              <p className="opacity-80">
                Simple, and easy-to-use tool for working with design tokens with
                powerups.
              </p>
            </div>
            <div className="text-2xs px-2 text-white/60">
              <p>
                Cooking more <span className="animate-pulse">.</span>
                <span className="animate-pulse [animation-delay:100ms]">.</span>
                <span className="animate-pulse [animation-delay:200ms]">.</span>
              </p>
            </div>
          </div>
        </section>
        <section>
          <h1 className="text-2xs mb-4 font-mono text-white/80">
            SERVICES I OFFER
          </h1>
          <div className="space-y-2">
            <div className="bg-background-highlight space-y-2 border border-white/5 p-4">
              <h2 className="text-2xs font-mono opacity-80">FREELANCE</h2>
              <h3>Web App Development with design sparkle</h3>
              <p className="opacity-60">
                I develop web applications that fulfill their purpose
                precisely—no excess, no superfluous features. Just clean code,
                intuitive interfaces, and logical solutions.
              </p>
            </div>
            <div className="bg-background-highlight space-y-2 border border-white/5 p-4">
              <h2 className="text-2xs font-mono opacity-80">CONSULTING</h2>
              <h3>
                Setting up Design Tokens, having troubles with something, want a
                second opinion?
              </h3>
              <p className="opacity-60">
                I assist you figure out what to create and how to build it. I
                have strong design fundamentals with practical technical
                expertise, emphasizing the importance of design tokens to make
                it scalable.
              </p>
            </div>
            <div className="bg-background-highlight space-y-2 border border-white/5 p-4">
              <h2 className="text-2xs font-mono opacity-80">COURSE</h2>
              <h3>
                Tailored on-site or online course about Figma and Design Tokens
              </h3>
              <p className="opacity-60">
                I can offer you a customized course on Figma and design tokens,
                specifically designed to enhance your skills in both design and
                development.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h1 className="text-2xs mb-4 font-mono text-white/80">
            COMPANIES I WORK(ED) WITH
          </h1>
          <div className="space-y-2">
            <div className="border border-white/5 p-4">
              <img src="/assets/pwc.svg" alt="PwC" className="pb-4" />
              <div className="flex justify-between pb-2">
                <p>PwC Cloud & Digital</p>
                <p>2025 - Present</p>
              </div>
              <p className="opacity-60">
                Cloud Delivery Senior Engineer with focus on Front-End
                Development.
              </p>
            </div>
            <div className="border border-white/5 p-4">
              <img src="/assets/hsbc.svg" alt="HSBC" className="pb-4" />
              <div className="flex justify-between pb-2">
                <p>HSBC</p>
                <p>2022 - 2025</p>
              </div>
              <p className="opacity-60">
                Creative Technologist working on bridging the gap between design
                and technology.
              </p>
            </div>
            <div className="border border-white/5 p-4">
              <img
                src="/assets/accenture.svg"
                alt="Accenture"
                className="pb-4"
              />
              <div className="flex justify-between pb-2">
                <p>Accenture Song</p>
                <p>2020 - 2022</p>
              </div>
              <p className="opacity-60">
                Product Designer with technology skills.
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <h1 className="text-2xs font-mono text-white/80">ABOUT ME</h1>
          <div className="space-y-2">
            <p>
              From the beginning of my career I was making stuff for big players
              from Fortune 500 list and start-ups. I’ve helped them create
              better products, workflows and tools.
            </p>
            <p>
              I handle everything from brainstorming ideas to UX design and
              development. I create scalable products from the{' '}
              <span className="mx-2 font-mono">git init</span> and enhance the
              ones already existing.
            </p>
            <p>
              Personally, I totally enjoy playing tennis, running, traveling,
              go-karting, and snapping photos!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <img
              src="/assets/first-photo.jpg"
              className="col-span-2 h-[180px] w-full object-cover"
            />
            <img
              src="/assets/second-photo.jpg"
              className="h-[350px] w-full object-cover"
            />
            <img
              src="/assets/third-photo.jpg"
              className="h-[350px] w-full object-cover"
            />
          </div>
        </section>
        <section className="space-y-4">
          <h1 className="text-2xs font-mono text-white/80">CONTACT</h1>
          <p>
            Like what you see? Contact me on LinkedIn or through my other
            platforms.
          </p>
          <div className="flex gap-2">
            <SocialButtons />
          </div>
        </section>
        <section className="space-y-4">
          <div className="relative pb-6">
            <img src="/assets/footer-logo-1.svg" alt="Footer Background" />
            <img
              src="/assets/footer-logo-2.svg"
              alt="Footer Background"
              className="absolute left-[8px] top-[16px]"
            />
          </div>

          <svg
            width="100%"
            height="7"
            viewBox="0 0 456 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="-0.5"
              y1="6.5"
              x2="64.6429"
              y2="6.50001"
              stroke="#2B2B2B"
            />
            <line
              x1="64.6428"
              y1="6"
              x2="129.786"
              y2="6.00001"
              stroke="#5F5F5F"
              strokeWidth="2"
            />
            <line
              x1="129.786"
              y1="5.5"
              x2="194.929"
              y2="5.50001"
              stroke="white"
              strokeWidth="3"
            />
            <line
              x1="194.929"
              y1="5"
              x2="260.072"
              y2="5.00001"
              stroke="#FFB81E"
              strokeWidth="4"
            />
            <line
              x1="260.072"
              y1="4.5"
              x2="325.214"
              y2="4.50001"
              stroke="#D86060"
              strokeWidth="5"
            />
            <line
              x1="325.214"
              y1="4"
              x2="390.357"
              y2="4.00001"
              stroke="#3B46C2"
              strokeWidth="6"
            />
            <line
              x1="390.357"
              y1="3.5"
              x2="455.5"
              y2="3.50001"
              stroke="#3BC251"
              strokeWidth="7"
            />
          </svg>
          <p className="pt-4 text-center">
            © 2025 Bartosz Rajchert ·{' '}
            <a
              href="https://github.com/bartoszrajchert/bartoszrajchert.com"
              className="hover:text-blue-normal underline transition-colors duration-150"
            >
              This website is open-sourced
            </a>
          </p>
        </section>
      </div>
    </main>
  );
};

export default Home;
