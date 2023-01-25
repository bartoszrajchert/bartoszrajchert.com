import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMedium
} from '@tabler/icons';
import Button from '@components/Button';

type Props = {
  text?: boolean;
};

const SocialButtons = ({ text = true }: Props) => {
  return (
    <div className="flex gap-3">
      <Button href="https://www.linkedin.com/in/bartoszrajchert/">
        <IconBrandLinkedin />
        {text && ' LinkedIn'}
      </Button>
      <Button href="https://github.com/bartoszrajchert">
        <IconBrandGithub />
        <span className="hidden sm:inline">{text && ' Github'}</span>
      </Button>
      <Button href="https://medium.com/@bartosz.rajchert">
        <IconBrandMedium />
        <span className="hidden sm:inline">{text && ' Medium'}</span>
      </Button>
    </div>
  );
};

export default SocialButtons;
