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
import { Separator } from '@/components/ui/separator';
import TheTitle from './TheTitle';
import Link from 'next/link';

const tariffs = [
  {
    title: 'Mustaqil',
    price: "200 000 so'm",
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
    price: "250 000 so'm",
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
    price: "350 000 so'm",
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
    <div id="tariffs" className="target grid items-center gap-3">
      <TheTitle title="Tariflar" />
      <p className="text-center text-xl">
        O&apos;zingizga ma&apos;qul kelgan tarif bo&apos;yicha <b>bir marotaba</b> to&apos;lov
        qiling:
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        {tariffs.map((tariff, index) => (
          <Card
            key={index}
            className={cn('max-w-[320px] shadow-black dark:shadow-white', className)}
            {...props}>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">{tariff.title}</CardTitle>
              <CardDescription>{tariff.price}</CardDescription>
              <Separator />
            </CardHeader>
            <CardContent className="grid gap-4 ">
              {tariff.lessons.map((lesson, lessonIndex) => (
                <div key={lessonIndex} className="flex gap-4 items-center">
                  {lesson.includes ? (
                    <Check className="text-green-500 text-2xl " />
                  ) : (
                    <X className="text-red-500" />
                  )}
                  <CardDescription>{lesson.decription}</CardDescription>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Link href="https://t.me/wmteam95" target="_blank" className="w-full">
                <Button className="w-full">
                  <Check /> Qo&apos;shilish
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
