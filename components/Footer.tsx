import SocialButtons from '@components/SocialButtons';

const Footer = () => {
  return (
    <footer className="mt-24 bg-white dark:bg-black">
      <div className="page-width-adjustment justify-between space-y-16 py-20 sm:mx-auto sm:flex sm:space-y-0">
        <div className="">
          <h2 className="text-header-md">Like what you see?</h2>
          <p className="mt-3">
            Contact me on{' '}
            <a href="https://www.linkedin.com/in/bartoszrajchert/">LinkedIn</a>{' '}
            <br />
            or through my other platforms.
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-header-md">Let’s connect</h2>
          <SocialButtons text={false} />
        </div>
      </div>
      <div className="border-t-2 border-background py-6 dark:border-dark-background sm:text-center">
        <p className="px-4">
          Designed and{' '}
          <a href="https://github.com/bartoszrajchert/bartoszrajchert.github.io">
            Handcoded
          </a>{' '}
          with ♥ by Bartosz Rajchert © 2023 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
