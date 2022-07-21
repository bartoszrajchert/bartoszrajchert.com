import React from 'react';
import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  type?: 'text' | 'icon';
}

const Button = ({ children, type = 'text' }: Props) => {
  return (
    <button
      className={clsx(
        'bg-button hover:bg-button-hover active:bg-button-active py-12 text-white rounded-4',
        {
          'px-24': type === 'text',
          'px-12': type === 'icon'
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
