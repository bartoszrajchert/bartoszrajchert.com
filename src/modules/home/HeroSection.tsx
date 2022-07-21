import Socials from '@/components/Socials';

const HeroSection = () => {
  return (
    <div className="h-screen flex items-center">
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
          <img src="/circle.svg" alt="Circle" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
