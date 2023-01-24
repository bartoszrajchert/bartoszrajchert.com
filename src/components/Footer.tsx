import SocialButtons from '@components/SocialButtons';

const Footer = () => {
  return (
    <footer className="mt-24 bg-white">
      <div className="page-width-adjustment mx-auto justify-between space-y-16 py-20 md:flex md:space-y-0">
        <div className="">
          <h2 className="text-header-md">Like what you see?</h2>
          <p className="mt-3">
            Contact with me at{' '}
            <a href="mailto:bartosz.rajchert@gmail.com">
              bartosz.rajchert@gmail.com
            </a>{' '}
            <br />
            or, through my other platforms.
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-header-md">Let’s connect</h2>
          <SocialButtons />
        </div>
      </div>
      <div className="border-t-2 border-background py-6 text-center">
        <p>
          Designed and{' '}
          <a href="https://github.com/bartoszrajchert/bartoszrajchert.github.io">
            Handcoded
          </a>{' '}
          with ♥ by Bartosz Rajchert © 2022 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
