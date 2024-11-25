import TheTitle from './TheTitle';
import { Icon } from '@iconify/react';
const advantages = [
  {
    icon: 'uil:6-plus',
    description: "Maktab o'quvchilaridan boshlab ishlayotgan insonlar",
  },
  {
    icon: 'fxemoji:school',
    description: "Istalgan sohada o'qiydigan yoki ishlaydiganlar",
  },
  {
    icon: 'noto:hourglass-done',
    description: 'Qisqa muddatda sifatli ilm olish niyatidagilar',
  },
];

const shouldst = [
  {
    icon: 'noto:man-teacher',
    description: "Kurs 4 yillik tajribaga asoslangan o'quv dasturi asosida tayyorlangan.",
  },
  {
    icon: 'emojione:flag-for-uzbekistan',
    description: "Barcha ma'lumotlar bir muallifga tegishli va o'zbek tilida.",
  },
  {
    icon: 'logos:internetexplorer',
    description: "Onlayn bo'lganligi sababli istalgan vaqtda o'qib tugatishingiz mumkin.",
  },
  {
    icon: 'emojione:money-bag',
    description: "Kursimizning narxi boshqa kurslardan anchagina arzonroq va to'lov faqat 1 marta.",
  },
  {
    icon: 'catppuccin:todo',
    description: "Bizning kursimizning asosi amaliyot hisoblanadi. Zerikishga vaqtingiz bo'lmaydi!",
  },
  {
    icon: 'twemoji:man-office-worker',
    description:
      "Kursimizda o'qish va ish jarayonida kerak bo'ladigan barcha amaliy ko'nikmalar berilgan.",
  },
];

const TheCourse = () => {
  return (
    <div id="course" className="target grid gap-10">
      <TheTitle title="Kurs kimlar uchun?" />
      <div className="flex flex-wrap md:flex-nowrap justify-around text-center gap-10">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className={`grid gap-5 p-5 justify-items-center md:basis-1/4 sm:basis-1/3 ${
              index >= 3 && 'basis-full'
            }`}>
            <Icon icon={advantage.icon} className="text-blue-500 h-16 w-16" />
            <p className="text-xl">{advantage.description}</p>
          </div>
        ))}
      </div>
      <TheTitle title="Nega aynan bizni kursimizni o'qishingiz kerak?" />
      <div className="flex justify-around flex-wrap gap-10 text-center pb-8">
        {shouldst.map((should, index) => (
          <div
            key={index}
            className={`grid gap-2 p-5 justify-items-center md:basis-1/4 sm:basis-1/3 ${
              index >= 3 && 'basis-full'
            }`}>
            <Icon icon={should.icon} className="h-16 w-16" />
            <p className="text-xl">{should.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheCourse;
