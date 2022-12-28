import Button from '@/components/Button';
import { Menu2, Sun } from 'tabler-icons-react';
import InlineSVG from 'react-inlinesvg';

const Navigation = () => {
  return (
    <nav className="fixed z-50 top-12 lg:top-24 left-24 right-24 lg:left-80 lg:right-80">
      <div className="flex justify-between items-center">
        <div className="h-64 lg:h-80">
          <InlineSVG src="/logo.svg" width="auto" height="auto" />
        </div>
        <div className="lg:hidden">
          <Button type="icon">
            <Menu2 />
          </Button>
        </div>
        <div className="hidden lg:space-x-8 lg:flex">
          <Button>Projects</Button>
          <Button>About</Button>
          <Button>Resume</Button>
          <Button type="icon">
            <Sun />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
