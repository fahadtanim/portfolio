'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Experience } from '@/types/portfolio';
import { formatDate } from '@/lib/utils';

interface ExperienceSectionV2Props {
  experience: Experience[];
}

export function ExperienceSectionV2({ experience }: ExperienceSectionV2Props) {
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
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      id="experience"
      className="scrollable min-h-screen snap-start overflow-y-auto bg-linear-to-br from-slate-900/50 to-transparent px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-4xl font-bold text-slate-100 md:text-5xl"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="group relative rounded-2xl bg-slate-800/30 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/50"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-100 md:text-2xl">
                  {exp.position}
                </h3>
                <p className="mt-2 text-lg text-teal-400">{exp.company}</p>
                <p className="mt-1 text-sm text-slate-400">
                  {formatDate(exp.startDate)} -{' '}
                  {exp.current ? 'Present' : formatDate(exp.endDate!)} •{' '}
                  {exp.location}
                </p>
              </div>

              <p className="mb-4 text-slate-300">{exp.description}</p>

              <ul className="mb-4 space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start text-sm text-slate-400"
                  >
                    <span className="mt-1.5 mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
