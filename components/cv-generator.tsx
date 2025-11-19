'use client';

import { Download } from 'lucide-react';
import { PortfolioData } from '@/types/portfolio';

interface CVGeneratorProps {
  data: PortfolioData;
}

export function CVGenerator({ data }: CVGeneratorProps) {
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
    <section
      id="cv"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="mb-4">
        <h2 className="text-sm font-bold tracking-widest text-slate-200 uppercase">
          Resume
        </h2>
      </div>
      <div className="group relative">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="relative z-10">
          <p className="mb-4 text-sm leading-normal text-slate-400">
            Download a PDF version of my resume with all my experience, skills,
            and projects.
          </p>
          <button
            onClick={generateCV}
            className="inline-flex items-center gap-2 rounded-full bg-teal-400/10 px-4 py-2 text-sm leading-5 font-medium text-teal-300 transition-all duration-300 hover:bg-teal-400/20 hover:text-teal-200"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}
