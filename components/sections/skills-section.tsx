'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Skills } from '@/types/portfolio';

interface SkillsSectionProps {
  skills: Skills;
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const categories = [
    { title: 'Languages', items: skills.languages, color: 'neon-blue' },
    { title: 'Frameworks', items: skills.frameworks, color: 'neon-cyan' },
    { title: 'Tools', items: skills.tools, color: 'neon-purple' },
    { title: 'Libraries', items: skills.libraries, color: 'neon-pink' },
    { title: 'Practices', items: skills.practices, color: 'neon-blue' },
  ];

  return (
    <section ref={ref} className="px-6 py-20" id="skills">
      <div className="container mx-auto">
        <motion.h2
          className="text-glow mb-16 text-center text-4xl font-bold md:text-6xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="from-neon-blue to-neon-purple bg-linear-to-r bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass neon-border rounded-2xl p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className={`mb-4 text-2xl font-bold text-${category.color}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, itemIndex) => (
                  <motion.span
                    key={item}
                    className="bg-card border-border hover:neon-border cursor-default rounded-full border px-3 py-1 text-sm transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + itemIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
