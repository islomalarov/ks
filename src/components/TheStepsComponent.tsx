import { RefObject } from 'react';

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
      <h2 className="text-2xl font-bold text-center">
        Kursga qanday qo&apos;shilsam bo&apos;ladi?
      </h2>
      <p className="text-center text-lg ">
        Bizning kursimizga qo&apos;shilish ketma-ketligi quyidagicha:
      </p>

      <div className="relative md:max-w-2xl flex flex-col gap-12">
        {steps.map((step, index) => (
          <div key={index} className={`flex items-start gap-4 `}>
            <div className="relative">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white text-lg font-semibold">
                {step.number}
              </span>
              {index < steps.length - 1 && (
                <div className="absolute top-10 h-full w-px bg-gray-300 left-1/2 -translate-x-1/2"></div>
              )}
            </div>
            <div className="">
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheStepsComponent;
