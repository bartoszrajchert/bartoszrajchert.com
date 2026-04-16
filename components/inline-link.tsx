import React from 'react';

interface InlineLinkProps extends React.PropsWithChildren {
  href: string;
}

export function InlineLink({ children, href }: InlineLinkProps) {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="decoration-primary/40 hover:text-primary hover:decoration-primary underline underline-offset-4 transition-colors"
    >
      {children}
    </a>
  );
}
