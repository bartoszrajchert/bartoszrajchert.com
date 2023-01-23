import clsx from 'clsx';
import { useState } from 'react';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="lg:flex justify-between items-center py-4">
      <div className="flex justify-between items-center">
        <p className="text-header-sm">Bartosz Rajchert</p>
        <svg
          className={clsx('ham hamRotate ham4 lg:hidden', {
            active: showMenu
          })}
          viewBox="0 0 100 100"
          width="40"
          onClick={() => setShowMenu(!showMenu)}
        >
          <path
            className="line top"
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
          />
          <path className="line middle" d="m 70,50 h -40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
          />
        </svg>
      </div>
      <div
        className={clsx('lg:block', {
          hidden: !showMenu
        })}
      >
        <ul className="flex gap-4 underline">
          <li>About</li>
          <li>Projects</li>
          <li>Book notes</li>
          <li>Resume</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
