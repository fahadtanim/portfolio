'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PortfolioData } from '@/types/portfolio';
import { Typewriter } from './typewriter';

interface NavigationProps {
  data: PortfolioData;
}

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

export function Navigation({ data }: NavigationProps) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="mb-8">
          <Image
            src="/images/Gemini_Generated_Image_i89hyvi89hyvi89h.png"
            alt={data.name}
            width={150}
            height={150}
            className="rounded-full border-2 border-teal-400/20"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">{data.name}</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          <Typewriter text={data.title} delay={50} />
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          {data.summary.slice(0, 150)}...
        </p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  className="group flex items-center py-3"
                  href={`#${section.id}`}
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold tracking-widest text-slate-500 uppercase group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    {section.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="mt-8 ml-1 flex items-center" aria-label="Social media">
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-slate-200"
            href={data.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-slate-200"
            href={data.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a
            className="block hover:text-slate-200"
            href={`mailto:${data.email}`}
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </header>
  );
}
