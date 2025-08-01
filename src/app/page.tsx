'use client';

import TheAccordion from '@/components/TheAccordion';
import { TheCards } from '@/components/TheCards';
import { TheCarousel } from '@/components/TheCarousel';
import TheCourse from '@/components/TheCoure';
import TheHeroComponent from '@/components/TheHeroComponent';
import TheStepsComponent from '@/components/TheStepsComponent';
import TheTable from '@/components/TheTable';
import TheTutor from '@/components/TheTutor';
import TheVideoPlayer from '@/components/TheVideoPlayer';
import { useScroll, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useRef } from 'react';

export default function Home() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const { resolvedTheme } = useTheme();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-12">
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          zIndex: 50,
          backgroundColor: resolvedTheme === 'dark' ? '#2563EB' : '#000000',
        }}
      />
      <TheHeroComponent sectionRef={stepsRef} />
      <TheCourse />
      <TheCarousel />
      <TheTable />
      <TheTutor />
      <TheCards />
      <TheVideoPlayer videoId="kuwjgG3aSpo" />
      <TheStepsComponent sectionRef={stepsRef} />
      <TheAccordion />
    </div>
  );
}
