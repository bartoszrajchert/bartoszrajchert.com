import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMedium
} from '@tabler/icons';
import Button from '@components/Button';

const SocialButtons = () => {
  return (
    <div className="flex gap-3">
      <Button href="https://www.linkedin.com/in/bartoszrajchert/">
        <IconBrandLinkedin />
      </Button>
      <Button href="https://github.com/bartoszrajchert">
        <IconBrandGithub />
      </Button>
      <Button href="https://medium.com/@bartosz.rajchert">
        <IconBrandMedium />
      </Button>
    </div>
  );
};

export default SocialButtons;
