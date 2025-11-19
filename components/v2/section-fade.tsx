'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface SectionFadeProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionFade({ children, className = '' }: SectionFadeProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger animation each time section comes into view
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.3, // Trigger when 30% visible
        rootMargin: '0px',
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {children}
    </motion.section>
  );
}
