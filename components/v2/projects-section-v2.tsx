'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/types/portfolio';

interface ProjectsSectionV2Props {
  projects: Project[];
}

export function ProjectsSectionV2({ projects }: ProjectsSectionV2Props) {
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
      id="projects"
      className="scrollable min-h-screen snap-start overflow-y-auto bg-linear-to-br from-purple-900/20 to-transparent px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-4xl font-bold text-slate-100 md:text-5xl"
        >
          Projects
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-slate-800/50 to-slate-800/30 p-6 backdrop-blur-sm transition-all duration-300 hover:from-slate-800/70 hover:to-slate-800/50"
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 rounded-full bg-teal-400/20 px-3 py-1 text-xs font-medium text-teal-300">
                  Featured
                </div>
              )}

              <h3 className="mb-3 text-xl font-bold text-slate-100 md:text-2xl">
                {project.name}
              </h3>

              <p className="mb-4 text-slate-300">{project.description}</p>

              <ul className="mb-4 space-y-2">
                {project.highlights.slice(0, 3).map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start text-sm text-slate-400"
                  >
                    <span className="mt-1.5 mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-purple-400/10 px-3 py-1 text-xs font-medium text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 text-sm font-medium text-teal-300 transition-colors hover:text-teal-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-slate-200"
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
