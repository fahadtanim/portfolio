'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { PortfolioData } from '@/types/portfolio';

interface ContactSectionV2Props {
  data: PortfolioData;
}

export function ContactSectionV2({ data }: ContactSectionV2Props) {
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

  const generateCV = async () => {
    try {
      const response = await fetch('/api/generate-cv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to generate CV');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${data.name.replace(/\s+/g, '_')}_CV.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error generating CV:', error);
      alert('Failed to generate CV. Please try again.');
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      id="contact"
      className="flex min-h-screen snap-start items-center justify-center bg-gradient-to-br from-purple-900/20 to-transparent px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-4xl font-bold text-slate-100 md:text-5xl"
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-12 max-w-2xl text-lg text-slate-300"
        >
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12 flex justify-center gap-6"
        >
          <a
            href={data.github}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex h-16 w-16 items-center justify-center rounded-full bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-teal-400/20"
          >
            <Github className="h-6 w-6 text-slate-400 transition-colors group-hover:text-teal-300" />
          </a>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex h-16 w-16 items-center justify-center rounded-full bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-teal-400/20"
          >
            <Linkedin className="h-6 w-6 text-slate-400 transition-colors group-hover:text-teal-300" />
          </a>
          <a
            href={`mailto:${data.email}`}
            className="group flex h-16 w-16 items-center justify-center rounded-full bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-teal-400/20"
          >
            <Mail className="h-6 w-6 text-slate-400 transition-colors group-hover:text-teal-300" />
          </a>
        </motion.div>

        {/* CV Download */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={generateCV}
          className="group inline-flex items-center gap-3 rounded-full bg-teal-400/10 px-8 py-4 text-lg font-medium text-teal-300 transition-all duration-300 hover:scale-105 hover:bg-teal-400/20"
        >
          <Download className="h-5 w-5 transition-transform group-hover:translate-y-1" />
          Download Resume
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-sm text-slate-500"
        >
          {data.email} • {data.location}
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
