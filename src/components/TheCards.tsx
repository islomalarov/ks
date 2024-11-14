import { Check, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const tariffs = [
  {
    title: 'Mustaqil',
    description: "150 000 so'm",
    lessons: [
      { decription: 'Videodarslar (+yangi)', includes: true },
      { decription: 'Darsga oid dastur va qo’llanmalar', includes: true },
      { decription: 'Darsga tegishli test va topshiriqlar', includes: false },
      { decription: 'Ustoz nazoratidagi savol-javob guruhi', includes: false },
      { decription: 'Ustoz bilan jonli darslar', includes: false },
      { decription: 'Turli musobaqa va imtihonlar', includes: false },
    ],
  },
  {
    title: 'Sinov+',
    description: "200 000 so'm",
    lessons: [
      { decription: 'Videodarslar (+yangi)', includes: true },
      { decription: 'Darsga oid dastur va qo’llanmalar', includes: true },
      { decription: 'Darsga tegishli test va topshiriqlar', includes: true },
      { decription: 'Ustoz nazoratidagi savol-javob guruhi', includes: false },
      { decription: 'Ustoz bilan jonli darslar', includes: false },
      { decription: 'Turli musobaqa va imtihonlar', includes: false },
    ],
  },
  {
    title: 'Ustoz+ ',
    description: "300 000 so'm",
    lessons: [
      { decription: 'Videodarslar (+yangi)', includes: true },
      { decription: 'Darsga oid dastur va qo’llanmalar', includes: true },
      { decription: 'Darsga tegishli test va topshiriqlar', includes: true },
      { decription: 'Ustoz nazoratidagi savol-javob guruhi', includes: true },
      { decription: 'Ustoz bilan jonli darslar', includes: true },
      { decription: 'Turli musobaqa va imtihonlar', includes: true },
    ],
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function TheCards({ className, ...props }: CardProps) {
  return (
    <div id="tariflar" className="grid items-center gap-3">
      <h2 className="text-center font-bold text-3xl">Tariflar</h2>
      <p className="text-center">O`&apos;zingiz uchun qulay tarifni tanlang:</p>
      <div className="flex flex-wrap gap-4 justify-center">
        {tariffs.map((tariff, index) => (
          <Card
            key={index}
            className={cn('max-w-[320px] shadow-black dark:shadow-white', className)}
            {...props}>
            <CardHeader className="text-center">
              <CardTitle>{tariff.title}</CardTitle>
              <CardDescription>{tariff.description}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {tariff.lessons.map((lesson, lessonIndex) => (
                <div key={lessonIndex} className="flex gap-4 ">
                  {lesson.includes ? <Check size={24} /> : <X className="text-slate-400" />}
                  <CardDescription>{lesson.decription}</CardDescription>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Check /> Qo`&apos;shilish
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
