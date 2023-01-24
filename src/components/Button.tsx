import React from 'react';

interface Props {
  children: React.ReactNode;
  onClick: Function;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <div
      className="cursor-pointer rounded bg-blue-light p-3 text-blue-normal"
      onClick={() => onClick()}
    >
      {children}
    </div>
  );
};

export default Button;
