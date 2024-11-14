'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Data = [
  {
    title: 'What is Frontend Mentor, and how will it help me?',
    content:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    title: 'Is Frontend Mentor free?',
    content:
      'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.',
  },
  {
    title: 'Can I use Frontend Mentor projects in my portfolio?',
    content:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    content:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

const TheAccordion = () => {
  return (
    <Accordion id="faqs" type="single" collapsible>
      <h2 className="text-4xl text-center">Ko&apos;p beriladigan savollar</h2>
      {Data.map((data) => (
        <AccordionItem key={data.title} value={data.title}>
          <AccordionTrigger>{data.title}</AccordionTrigger>
          <AccordionContent>{data.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default TheAccordion;
