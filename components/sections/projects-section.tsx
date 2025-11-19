'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { Project } from '@/types/portfolio';

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="mb-4">
        <h2 className="text-sm font-bold tracking-widest text-slate-200 uppercase">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <li key={project.id} className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:opacity-100!"
              >
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="group/link inline-flex items-baseline text-base leading-tight font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                      href={project.liveUrl || project.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.name} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {project.name}
                        <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-focus-visible/link:-translate-y-1 motion-reduce:transition-none" />
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    {project.description}
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {project.technologies.map((tech) => (
                      <li key={tech} className="mt-2 mr-1.5">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-teal-300"
                      >
                        <ExternalLink className="mr-1 h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-teal-300"
                      >
                        <Github className="mr-1 h-4 w-4" />
                        Source
                      </a>
                    )}
                  </div>
                </div>

                <div className="z-10 sm:order-1 sm:col-span-2">
                  <div className="mt-2 rounded border-2 border-slate-200/10 bg-slate-800/50 p-4 text-center transition group-hover:border-slate-200/30 sm:mt-0">
                    <div className="text-4xl font-bold text-teal-300">
                      {project.name.charAt(0)}
                    </div>
                  </div>
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
