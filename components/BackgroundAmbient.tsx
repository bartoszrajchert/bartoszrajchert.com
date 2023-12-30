import InlineSVG from 'react-inlinesvg';

const BackgroundAmbient = () => {
  return (
    <InlineSVG
      className="absolute left-0 right-0 top-0 -z-10 h-auto w-full"
      src="/assets/background-ambient.svg"
    />
  );
};

export default BackgroundAmbient;
