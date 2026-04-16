'use client';

import { animate, stagger } from 'motion';
import { useEffect } from 'react';

const ITEM_DURATION_SECONDS = 0.5;
const STAGGER_STEP_SECONDS = 0.05;

const prepareElementsForAnimation = (elements: HTMLElement[]) => {
  elements.forEach((element) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(8px)';
  });
};

const revealElements = (elements: HTMLElement[]) => {
  elements.forEach((element) => {
    element.style.opacity = '1';
    element.style.transform = 'none';
  });
};

const isBackForwardNavigation = () => {
  const navigationEntry = window.performance.getEntriesByType(
    'navigation',
  )[0] as PerformanceNavigationTiming | undefined;

  return navigationEntry?.type === 'back_forward';
};

const selector = '.stagger-item';

export function PageStaggerMotion() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(selector),
    );

    if (!elements.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion || isBackForwardNavigation()) {
      revealElements(elements);
      return;
    }

    prepareElementsForAnimation(elements);

    const controls = animate(
      elements,
      { opacity: 1, y: 0 },
      {
        duration: ITEM_DURATION_SECONDS,
        ease: 'easeOut',
        delay: stagger(STAGGER_STEP_SECONDS),
      },
    );

    const revealAndStopAnimation = () => {
      controls.cancel();
      revealElements(elements);
    };

    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted || isBackForwardNavigation()) {
        revealAndStopAnimation();
      }
    };

    const handlePageHide = (event: PageTransitionEvent) => {
      if (event.persisted) {
        revealAndStopAnimation();
      }
    };

    window.addEventListener('pageshow', handlePageShow);
    window.addEventListener('pagehide', handlePageHide);

    return () => {
      revealAndStopAnimation();
      window.removeEventListener('pageshow', handlePageShow);
      window.removeEventListener('pagehide', handlePageHide);
    };
  }, []);

  return null;
}
