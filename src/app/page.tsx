'use client';

import TheAccordion from '@/components/TheAccordion';
import TheHeroComponent from '@/components/TheHeroComponent';
import TheStepsComponent from '@/components/TheStepsComponent';
import TheTable from '@/components/TheTable';
import { useRef } from 'react';

export default function Home() {
  const stepsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="font-[family-name:var(--font-geist-sans)] max-w-6xl mx-auto px-4">
      <main className="flex flex-col gap-12 pt-20">
        <TheHeroComponent sectionRef={stepsRef} />
        <TheStepsComponent sectionRef={stepsRef} />
        <TheTable />
        <TheAccordion />
      </main>
    </div>
  );
}
