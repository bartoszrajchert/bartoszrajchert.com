import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMedium
} from '@tabler/icons';
import clsx from 'clsx';
import Button from '@components/Button';

type Props = {
  text?: boolean;
};

const SocialButtons = ({ text = true }: Props) => {
  const clsxClass = clsx('hidden', text && 'sm:inline', !text && 'hidden');

  return (
    <div className="flex gap-3 w-full">
      <Button href="https://www.linkedin.com/in/bartoszrajchert/" className='w-full'>
        <IconBrandLinkedin />
        <span className={clsxClass}> LinkedIn</span>
      </Button>
      <Button href="https://github.com/bartoszrajchert" className='w-full'>
        <IconBrandGithub />
        <span className={clsxClass}> GitHub</span>
      </Button>
      <Button href="https://medium.com/@bartosz.rajchert" className='w-full'>
        <IconBrandMedium />
        <span className={clsxClass}> Medium</span>
      </Button>
    </div>
  );
};

export default SocialButtons;
