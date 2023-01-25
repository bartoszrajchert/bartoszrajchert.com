import React from 'react';

interface Props {
  children: React.ReactNode;
  onClick?: Function;
  href?: string;
}

const Button = ({ children, href, onClick }: Props) => {
  return (
    <>
      <a className="no-underline" href={href}>
        <div
          className="flex cursor-pointer gap-2 rounded border-2 border-transparent bg-blue-light p-3 text-blue-normal hover:border-blue-normal dark:bg-dark-button-background"
          onClick={() => (onClick ? onClick() : null)}
        >
          {children}
        </div>
      </a>
    </>
  );
};

export default Button;
