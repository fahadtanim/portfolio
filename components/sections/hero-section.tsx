'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { PortfolioData } from '@/types/portfolio';

interface HeroSectionProps {
  data: PortfolioData;
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-neon-blue/20 animate-float absolute top-1/4 left-1/4 h-96 w-96 rounded-full blur-3xl" />
        <div
          className="bg-neon-purple/20 animate-float absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full blur-3xl"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-glow mb-6 text-6xl font-bold md:text-8xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="from-neon-blue via-neon-cyan to-neon-purple bg-linear-to-r bg-clip-text text-transparent">
              {data.name}
            </span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground mb-8 text-2xl md:text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {data.title}
          </motion.p>

          <motion.p
            className="text-muted-foreground mx-auto mb-12 max-w-2xl text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {data.summary}
          </motion.p>

          <motion.div
            className="mb-12 flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass neon-border hover:neon-glow rounded-full p-4 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="text-neon-blue h-6 w-6" />
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass neon-border hover:neon-glow rounded-full p-4 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-neon-blue h-6 w-6" />
            </a>
            <a
              href={`mailto:${data.email}`}
              className="glass neon-border hover:neon-glow rounded-full p-4 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="text-neon-blue h-6 w-6" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="animate-bounce"
          >
            <ArrowDown className="text-neon-blue mx-auto h-8 w-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
