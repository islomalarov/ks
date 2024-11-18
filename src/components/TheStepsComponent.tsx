import { RefObject } from 'react';
import TheTitle from './TheTitle';
import { Separator } from './ui/separator';
interface TheStepsComponentProps {
  sectionRef: RefObject<HTMLDivElement>;
}
const TheStepsComponent = ({ sectionRef }: TheStepsComponentProps) => {
  const steps = [
    {
      number: '1',
      title: 'Kurs bilan tanishib chiqing',
      description:
        "Kursda o'rgatilgan mavzular bilan tanishish, kursni o'tilish tartibi va boshqa kerakli ma'lumotlarni ko'rib chiqing.",
    },
    {
      number: '2',
      title: "Ustozga murojaat qiling va to'lovni amalga oshiring",
      description:
        "Buning uchun telegramda @wmteam95 ga yozib yuboring, admin tomonidan berilgan kartaga tarifga mos to'lovni o'tkazasiz va chekni adminga jo'natasiz.",
    },
    {
      number: '3',
      title: "O'zingiz haqida ma'lumot qoldiring",
      description:
        "To'lov o'tgandan so'ng admin sizga tegishli guruh va kanallarga qo'shadi, ungacha siz ustozga umumiy statistika hosil qilish uchun o'zingiz haqida qisqacha ma'lumot yozib yuboring.",
    },
    {
      number: '4',
      title: "O'qishni boshlang!",
      description: "Hamma ishlar hal qilingandan so'ng o'qishni boshlashingiz mumkin!",
    },
  ];

  return (
    <div ref={sectionRef} className="flex flex-col items-center justify-center gap-8">
      <TheTitle title="Kursga qanday qo'shilsam bo'ladi?" />

      <p className="text-center text-lg ">
        Bizning kursimizga qo&apos;shilish ketma-ketligi quyidagicha:
      </p>

      <div className="relative md:max-w-2xl flex flex-col gap-12">
        {steps.map((step, index) => (
          <div key={index} className="grid gap-3">
            <div className="grid justify-items-center gap-4 md:flex items-center">
              <div className="relative">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white text-lg font-semibold">
                  {step.number}
                </span>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="">{step.description}</p>
              </div>
            </div>
            <Separator />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheStepsComponent;
