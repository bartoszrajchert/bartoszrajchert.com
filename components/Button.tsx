'use client';

import { cn } from 'lib/utils';
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: Function;
  href?: string;
}

function Button({ children, href, onClick, className }: Props) {
  return (
    <a
      className={cn('no-underline', className)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className="bg-blue-light text-blue-normal hover:border-blue-normal dark:bg-dark-button-background flex cursor-pointer items-center justify-center gap-2 rounded border-2 border-transparent p-2 transition-all duration-150"
        onClick={() => (onClick ? onClick() : null)}
      >
        {children}
      </div>
    </a>
  );
}

export default Button;
