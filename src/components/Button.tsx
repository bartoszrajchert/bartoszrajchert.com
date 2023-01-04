import React from 'react';

interface Props {
  children: React.ReactNode;
  onClick: Function;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <div
      className="bg-blue-light text-blue-normal p-3 rounded cursor-pointer"
      onClick={() => onClick()}
    >
      {children}
    </div>
  );
};

export default Button;
