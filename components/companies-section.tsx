import { cn } from '@/lib/utils';

const companies = [
  {
    lightSrc: '/assets/pwc-light.svg',
    darkSrc: '/assets/pwc.svg',
    alt: 'PwC',
    href: 'https://www.pwc.com/',
  },
  {
    lightSrc: '/assets/hsbc-light.svg',
    darkSrc: '/assets/hsbc.svg',
    alt: 'HSBC',
    href: 'https://www.hsbc.com/',
  },
  {
    lightSrc: '/assets/accenture-light.svg',
    darkSrc: '/assets/accenture.svg',
    alt: 'Accenture',
    href: 'https://www.accenture.com/',
  },
  {
    lightSrc: '/assets/movecloser-light.svg',
    darkSrc: '/assets/movecloser.svg',
    alt: 'Move Closer',
    href: 'https://movecloser.co/',
    className: 'h-[18px]',
  },
];

export function CompaniesSection() {
  return (
    <section>
      <h1 className="stagger-item text-primary mb-5 font-[500]">Companies</h1>
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-4">
        {companies.map(({ lightSrc, darkSrc, alt, href, className }) => (
          <a
            key={alt}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${alt} website`}
            className="stagger-item hover:bg-primary/5 flex items-center justify-center rounded-lg p-4 grayscale transition-colors hover:grayscale-0"
          >
            <img
              src={lightSrc}
              alt={alt}
              className={cn('max-h-8 w-auto dark:hidden', className)}
            />
            <img
              src={darkSrc}
              alt=""
              aria-hidden="true"
              className={cn('hidden max-h-8 w-auto dark:block', className)}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
