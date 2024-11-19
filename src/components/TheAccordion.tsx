'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Data = [
  {
    title: "Kurs qay tartibda o'tiladi?",
    content:
      "O'quv rejasi asosidagi videodarslar telegramdagi kanallarga joylangan. Siz kursni xarid qilganingizdan so'ng o'zingizga qulay vaqt va qurilma orqali videolarni ko'rib, test va topshiriqlarni ishlashingiz mumkin.",
  },
  {
    title: "Kurs uchun nechi oy to'lov qilishim kerak?",
    content:
      "Bizning kurs uchun to'lovni bir marotaba qilasiz. Kurs doirasida yangi videolar yozilsa barcha o'quvchilarga ko'rinadi.",
  },
  {
    title: 'Qancha vaqtda kursni tugataman?',
    content:
      "Kursimiz videodarslar asosida bo'lganligi sababli videolar tegishli kanallarga yuklab, o'rganish uchun tayyor qilib qo'yilgan. Siz istagan vaqtingizda kursga qo'shilib, o'zingizga bog'liq muddatda kursni yakunlashingiz mumkin.",
  },
  {
    title: 'Kurs oxirida sertifikat beriladimi?',
    content:
      "Umuman olganda kursni yakunlaganlarga sertifikat berish reja qilinmagan, sababi berilgan sertifikat tan olinmagandan keyin undan nima foyda? Shu sababli biz ko'proq ko'nikma berishga harakat qilamiz.",
  },
  {
    title: "Kursni tugatsam nimalarga ega bo'laman?",
    content:
      "Siz kursni to'liq yakunlash orqali \"Men kompyuterni yaxshi bilaman!\" deb aytadigan natijaga erishasiz, inshaalloh. O'qish va ishda kompyuterga oid masalalarni o'zingiz mustaqil hal qilishga erishasiz.",
  },
  {
    title: "Kurs bo'yicha qo'shimcha savollarim bor edi...",
    content: "Kurs bo'yicha qo'shimcha savollaringiz bo'lsa Telegramda ustozga yozishingiz mumkin.",
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
