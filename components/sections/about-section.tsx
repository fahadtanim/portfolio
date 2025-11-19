'use client';

import { motion } from 'framer-motion';

export function AboutSection({ summary }: { summary: string }) {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="mb-4">
        <h2 className="text-sm font-bold tracking-widest text-slate-200 uppercase">
          About
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-4 leading-relaxed text-slate-400">{summary}</p>
        <p className="mb-4 leading-relaxed text-slate-400">
          My main focus these days is building accessible, inclusive products
          and digital experiences at{' '}
          <a
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="#"
            target="_blank"
            rel="noreferrer noopener"
          >
            my current company
          </a>
          . I most enjoy building software in the sweet spot where design and
          engineering meet — things that look good but are also built well under
          the hood.
        </p>
        <p className="leading-relaxed text-slate-400">
          When I&apos;m not at the computer, I&apos;m usually rock climbing,
          hanging out with my wife and two cats, or running around Hyrule
          searching for Korok seeds.
        </p>
      </motion.div>
    </section>
  );
}
