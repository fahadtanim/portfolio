'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollContainerProps {
  children: React.ReactNode;
}

export function ScrollContainer({ children }: ScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [sectionCount, setSectionCount] = useState(0);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = Array.from(
      container.querySelectorAll('section')
    ) as HTMLElement[];
    sectionsRef.current = sections;
    setSectionCount(sections.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const index = sections.indexOf(entry.target as HTMLElement);
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      {
        threshold: [0, 0.5, 1],
        rootMargin: '-10% 0px -10% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    const section = sectionsRef.current[index];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div
        ref={containerRef}
        className="h-screen w-full snap-y snap-mandatory overflow-x-hidden overflow-y-auto scroll-smooth"
      >
        {children}
      </div>

      {/* Navigation Dots */}
      <nav className="fixed top-1/2 right-8 z-50 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
        {Array.from({ length: sectionCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              activeSection === index
                ? 'scale-125 bg-teal-400'
                : 'bg-slate-600 hover:bg-slate-400'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </nav>
    </>
  );
}
