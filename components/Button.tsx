import React from 'react';

interface Props {
  children: React.ReactNode;
  onClick?: Function;
  href?: string;
}

const Button = ({ children, href, onClick }: Props) => {
  return (
    <a href={href}>
      <div
        className="cursor-pointer rounded border-2 border-transparent bg-blue-light p-3 text-blue-normal hover:border-blue-normal"
        onClick={() => (onClick ? onClick() : null)}
      >
        {children}
      </div>
    </a>
  );
};

export default Button;
