import Socials from '@/components/Socials';
import InlineSVG from 'react-inlinesvg';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-darkBackgroundGradient-from to-darkBackgroundGradient-to relative py-80 flex items-center lg:h-screen">
      <div className="container-content">
        <div className="flex justify-between items-center w-full">
          <div className="lg:w-3/6">
            <h1 className="mb-8">
              Hello! I’m <span className="text-accent">Bartosz Rajchert</span>
            </h1>
            <p className="text-16 mb-12 lg:text-24">
              A Product Designer and Front-End Developer who is delivering high
              quality end-to-end projects.
            </p>
            <p className="text-16 mb-24 lg:text-24">
              Currently working at <b>Accenture Song in Warsaw</b>
            </p>
            <Socials />
          </div>
          <div className="hidden w-1/4 lg:block">
            <InlineSVG src="/circle.svg" width="auto" height="auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
