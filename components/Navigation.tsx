'use client';

import { useEffect, useState } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`w-full transition-colors duration-75 border-white/10 border-b px-4 sticky top-0 z-10 ${isScrolled ? 'dark:bg-dark-background/60 backdrop-blur-sm' : ''}`}>
      <div className="m-auto max-w-[456px] flex justify-between items-center px-4 border-white/10 py-3 border-l border-r border-dashed">
        <div className="flex gap-2 items-center text-[15px]">
          <h1 className="font-bold">Bartosz Rajchert</h1>
          <h2 className="hidden min-[325px]:block">Software Designer</h2>
        </div>
      </div>
    </div>
  );
}