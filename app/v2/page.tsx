'use client';

import { useEffect } from 'react';
import { getPortfolioData } from '@/lib/data';
import { HeroSectionV2 } from '@/components/v2/hero-section-v2';
import { AboutSectionV2 } from '@/components/v2/about-section-v2';
import { ExperienceSectionV2 } from '@/components/v2/experience-section-v2';
import { ProjectsSectionV2 } from '@/components/v2/projects-section-v2';
import { ContactSectionV2 } from '@/components/v2/contact-section-v2';
import { NavigationDotsV2 } from '@/components/v2/navigation-dots-v2';
import { Spotlight } from '@/components/spotlight';

export default function V2Page() {
  const data = getPortfolioData();

  useEffect(() => {
    // Add v2-scroll class to html element
    document.documentElement.classList.add('v2-scroll');

    // Cleanup on unmount
    return () => {
      document.documentElement.classList.remove('v2-scroll');
    };
  }, []);

  return (
    <>
      <Spotlight />
      <main>
        <HeroSectionV2 data={data} />
        <AboutSectionV2 summary={data.summary} />
        <ExperienceSectionV2 experience={data.experience} />
        <ProjectsSectionV2 projects={data.projects} />
        <ContactSectionV2 data={data} />
        <NavigationDotsV2 />
      </main>
    </>
  );
}
