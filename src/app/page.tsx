'use client';
import { TheAccordion } from '@/components/TheAccordion';
import TheNavbar from '@/components/TheNavbar';
import { useRef } from 'react';

export default function Home() {
  const accordionRef = useRef(null);

  return (
    <div className=" font-[family-name:var(--font-geist-sans)] ">
      <TheNavbar accordionRef={accordionRef} />

      <main className="flex flex-col gap-4 pt-20">
        <h1>Kompyuterni professionallardan o&apos;rganing!</h1>
        {/* Other content */}

        {/* Accordion Section with Ref */}
        <div ref={accordionRef}>
          <TheAccordion />
        </div>
      </main>
    </div>
  );
}
