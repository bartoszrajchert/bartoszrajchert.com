import Button from '@/components/Button';
import {
  At,
  BrandGithub,
  BrandLinkedin,
  BrandMedium
} from 'tabler-icons-react';

const Socials = () => {
  return (
    <div className="space-x-8">
      <Button type="icon">
        <At />
      </Button>
      <Button type="icon">
        <BrandLinkedin />
      </Button>
      <Button type="icon">
        <BrandGithub />
      </Button>
      <Button type="icon">
        <BrandMedium />
      </Button>
    </div>
  );
};

export default Socials;
