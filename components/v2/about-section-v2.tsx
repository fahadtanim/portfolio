'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface AboutSectionV2Props {
  summary: string;
}

export function AboutSectionV2({ summary }: AboutSectionV2Props) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      id="about"
      className="flex min-h-screen snap-start items-center justify-center bg-gradient-to-br from-slate-900/50 to-transparent px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl"
      >
        <h2 className="mb-8 text-4xl font-bold text-slate-100 md:text-5xl">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-slate-300 md:text-xl">
          {summary}
        </p>
      </motion.div>
    </motion.section>
  );
}
