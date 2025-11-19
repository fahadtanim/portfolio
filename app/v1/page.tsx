import { getPortfolioData } from '@/lib/data';
import { Navigation } from '@/components/navigation';
import { Spotlight } from '@/components/spotlight';
import { AboutSection } from '@/components/sections/about-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { CVGenerator } from '@/components/cv-generator';

export default function Home() {
  const data = getPortfolioData();

  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <Spotlight />
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Navigation data={data} />
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <AboutSection summary={data.summary} />
          <ExperienceSection experience={data.experience} />
          <ProjectsSection projects={data.projects} />
          <CVGenerator data={data} />

          <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>
              Built with{' '}
              <a
                href="https://nextjs.org/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
              >
                Next.js
              </a>{' '}
              and{' '}
              <a
                href="https://tailwindcss.com/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
              >
                Tailwind CSS
              </a>
              , deployed with{' '}
              <a
                href="https://vercel.com/"
                className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                target="_blank"
                rel="noreferrer noopener"
              >
                Vercel
              </a>
              .
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
