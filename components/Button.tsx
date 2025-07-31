'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: Function;
  href?: string;
}

export default function Button({ children, href, onClick, className }: Props) {
  return (
    <a
      className={cn('no-underline', className)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className="flex cursor-pointer items-center justify-center gap-2 rounded border-2 border-transparent bg-blue-light bg-dark-button-background p-2 text-blue-normal transition-all duration-150 hover:border-blue-normal"
        onClick={() => (onClick ? onClick() : null)}
      >
        {children}
      </div>
    </a>
  );
}
