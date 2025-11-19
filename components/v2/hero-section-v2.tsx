'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Typewriter } from '@/components/typewriter';
import { PortfolioData } from '@/types/portfolio';

interface HeroSectionV2Props {
  data: PortfolioData;
}

export function HeroSectionV2({ data }: HeroSectionV2Props) {
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
      id="hero"
      className="flex min-h-screen snap-start items-center justify-center bg-gradient-to-br from-purple-900/20 to-transparent px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center text-center">
        {/* Profile Picture */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={
            isVisible ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
          }
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-teal-400 shadow-lg shadow-teal-400/50">
            <Image
              src="/images/Gemini_Generated_Image_i89hyvi89hyvi89h.png"
              alt={data.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 text-5xl font-bold text-slate-100 md:text-6xl lg:text-7xl"
        >
          {data.name}
        </motion.h1>

        {/* Title with Typewriter */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6 text-2xl text-teal-400 md:text-3xl"
        >
          {isVisible && <Typewriter text={data.title} />}
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-2xl text-lg text-slate-300"
        >
          {data.summary}
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12"
        >
          <div className="animate-bounce text-teal-400">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
