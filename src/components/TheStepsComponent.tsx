import { RefObject } from 'react';
import TheTitle from './TheTitle';
import { StepsContent, StepsItem, StepsList, StepsRoot } from '@/components/ui/steps';
import Link from 'next/link';
interface TheStepsComponentProps {
  sectionRef: RefObject<HTMLDivElement>;
}
const TheStepsComponent = ({ sectionRef }: TheStepsComponentProps) => {
  const steps = [
    {
      number: 0,
      title: 'Kurs bilan tanishib chiqing',
      description:
        "Kursda o'rgatilgan mavzular bilan tanishish, kursni o'tilish tartibi va boshqa kerakli ma'lumotlarni ko'rib chiqing.",
    },
    {
      number: 1,
      title: "Ustozga murojaat qiling va to'lovni amalga oshiring",
      description:
        "Buning uchun telegramda [ustoz]ga yozib yuboring, admin tomonidan berilgan kartaga tarifga mos to'lovni o'tkazasiz va chekni adminga jo'natasiz.",
    },
    {
      number: 2,
      title: "O'zingiz haqida ma'lumot qoldiring",
      description:
        "To'lov o'tgandan so'ng admin sizga tegishli guruh va kanallarga qo'shadi, ungacha siz ustozga umumiy statistika hosil qilish uchun o'zingiz haqida qisqacha ma'lumot yozib yuboring.",
    },
    {
      number: 3,
      title: "O'qishni boshlang!",
      description: "Hamma ishlar hal qilingandan so'ng o'qishni boshlashingiz mumkin!",
    },
  ];
  function parseDescription(description: string) {
    return (
      <p>
        {description.split('[ustoz]').map((part, i) =>
          i === 1 ? (
            <span key={i}>
              <Link href="https://t.me/wmteam95" target="_blank" className="underline">
                ustoz
              </Link>
              <span>{part}</span>
            </span>
          ) : (
            part
          ),
        )}
      </p>
    );
  }
  return (
    <div ref={sectionRef} className="target grid gap-5">
      <TheTitle title="Kursga qanday qo'shilsam bo'ladi?" />
      <p className="text-center text-xl">
        Bizning kursimizga qo&apos;shilish ketma-ketligi quyidagicha:
      </p>
      <StepsRoot className="max-w-5xl mx-auto hidden md:flex" defaultValue={1} count={4}>
        <StepsList className="text-xl">
          <StepsItem index={0} />
          <StepsItem index={1} />
          <StepsItem index={2} />
          <StepsItem index={3} />
        </StepsList>
        {steps.map((step) => (
          <StepsContent
            className="text-center text-xl grid gap-5"
            key={step.number}
            index={step.number}>
            <h3 className="font-bold">{step.title}</h3>
            {parseDescription(step.description)}
          </StepsContent>
        ))}
      </StepsRoot>
      <StepsRoot
        className="max-w-3xl mx-auto flex gap-5 md:hidden"
        orientation="vertical"
        height="400px"
        defaultValue={1}
        count={4}>
        <StepsList>
          <StepsItem index={0} />
          <StepsItem index={1} />
          <StepsItem index={2} />
          <StepsItem index={3} />
        </StepsList>
        {steps.map((step) => (
          <StepsContent
            className="text-center grid content-center gap-5"
            key={step.number}
            index={step.number}>
            <h3 className="font-bold">{step.title}</h3>
            {parseDescription(step.description)}
          </StepsContent>
        ))}
      </StepsRoot>
    </div>
  );
};

export default TheStepsComponent;
