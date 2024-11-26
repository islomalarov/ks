'use client';

import TheAccordion from '@/components/TheAccordion';
import { TheCards } from '@/components/TheCards';
import { TheCarousel } from '@/components/TheCarousel';
import TheCourse from '@/components/TheCoure';
import TheHeroComponent from '@/components/TheHeroComponent';
import TheStepsComponent from '@/components/TheStepsComponent';
import TheTable from '@/components/TheTable';
import TheTutor from '@/components/TheTutor';
import { useRef } from 'react';

export default function Home() {
  const stepsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="font-[family-name:var(--font-geist-sans)] max-w-5xl mx-auto px-4">
      <main className="flex flex-col gap-12 pt-20">
        <TheHeroComponent sectionRef={stepsRef} />
        <TheCourse />
        <TheCarousel />
        <TheTable />
        <TheTutor />
        <TheStepsComponent sectionRef={stepsRef} />
        <TheCards />
        <TheAccordion />
      </main>
    </div>
  );
}
