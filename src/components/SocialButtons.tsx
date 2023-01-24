import {
  IconAt,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMedium
} from '@tabler/icons';
import Button from '@components/Button';

const SocialButtons = () => {
  return (
    <div className="flex gap-3">
      <Button onClick={() => console.log('At')}>
        <IconAt />
      </Button>
      <Button onClick={() => console.log('Linkedin')}>
        <IconBrandLinkedin />
      </Button>
      <Button onClick={() => console.log('Github')}>
        <IconBrandGithub />
      </Button>
      <Button onClick={() => console.log('Medium')}>
        <IconBrandMedium />
      </Button>
    </div>
  );
};

export default SocialButtons;
