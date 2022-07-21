import Socials from '@/components/Socials';

const Footer = () => {
  return (
    <div>
      <div className="mb-112 flex flex-col justify-center items-center gap-80">
        <div className="flex justify-around w-full">
          <div>
            <p className="text-24 font-serif mb-20">
              Interested in learning more?
            </p>
            <p>
              Contact with me at{' '}
              <a href="mailto:bartosz.rajchert@gmail.com">
                bartosz.rajchert@gmail.com
              </a>
              <br />
              or, better, through my other platforms.
            </p>
          </div>
          <div>
            <p className="text-24 font-serif mb-20">Let’s connect</p>
            <Socials />
          </div>
        </div>
        <div className="">
          <p>© 2022 Bartosz Rajchert All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
