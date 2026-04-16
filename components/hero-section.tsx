import { InlineLink } from './inline-link';

export function HeroSection() {
  return (
    <section className="space-y-12">
      <header className="stagger-item flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            className="border-primary/5 aspect-square size-[52px] rounded-full border object-cover"
            src="/assets/me-picture.jpg"
            alt="Bartosz Rajchert"
          />
          <div>
            <h1>Bartosz Rajchert</h1>
            <p className="text-primary/80 text-sm tracking-[0.2px]">
              Software / Design Engineer
            </p>
          </div>
        </div>
      </header>
      <div className="text-primary/90 space-y-4 *:leading-6 *:font-[460]">
        <p className="stagger-item">
          Building software with a focus on design, usability, and function.
        </p>
        <p className="stagger-item">
          I work at{' '}
          <InlineLink href="https://www.pwc.com/">
            PwC in the Cloud & Digital
          </InlineLink>{' '}
          department, where I create digital products based on cloud solutions,
          which I enrich with an intuitive interface.
        </p>
        <p className="stagger-item">
          I consider myself a designer at heart with high technical skills, and
          enjoy building highly polished products.
        </p>
        <p className="stagger-item">
          You can reach me on{' '}
          <InlineLink href="https://x.com/bartoszrajchert">X</InlineLink> or by{' '}
          <InlineLink href="https://www.linkedin.com/in/bartoszrajchert/">
            LinkedIn
          </InlineLink>
          .
        </p>
        <p className="stagger-item">
          Check out my cool open-source projects on{' '}
          <InlineLink href="https://github.com/bartoszrajchert">
            GitHub
          </InlineLink>
          .
        </p>
      </div>
    </section>
  );
}
