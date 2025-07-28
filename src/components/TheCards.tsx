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
    price: "200 000 so'm*",
    lessons: [
      { description: 'Videodarslar (+yangi)', includes: true },
      { description: 'Darsga oid dastur va qo’llanmalar', includes: true },
      { description: 'Darsga tegishli test va topshiriqlar', includes: false },
      { description: 'Ustoz nazoratidagi savol-javob guruhi', includes: false },
      { description: 'Ustoz bilan jonli darslar', includes: false },
      { description: 'Turli musobaqa va imtihonlar', includes: false },
    ],
  },
  {
    title: 'Sinov+',
    price: "250 000 so'm*",
    lessons: [
      { description: 'Videodarslar (+yangi)', includes: true },
      { description: 'Darsga oid dastur va qo’llanmalar', includes: true },
      { description: 'Darsga tegishli test va topshiriqlar', includes: true },
      { description: 'Ustoz nazoratidagi savol-javob guruhi', includes: false },
      { description: 'Ustoz bilan jonli darslar', includes: false },
      { description: 'Turli musobaqa va imtihonlar', includes: false },
    ],
  },
  {
    title: 'Ustoz+ ',
    price: "350 000 so'm*",
    lessons: [
      { description: 'Videodarslar (+yangi)', includes: true },
      { description: 'Darsga oid dastur va qo’llanmalar', includes: true },
      { description: 'Darsga tegishli test va topshiriqlar', includes: true },
      { description: 'Ustoz nazoratidagi savol-javob guruhi', includes: true },
      { description: 'Ustoz bilan jonli darslar', includes: true },
      { description: 'Turli musobaqa va imtihonlar', includes: true },
      { description: 'Sertifikat olish imkoniyati', includes: true },
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
            className={cn(
              'max-w-[320px] grid content-between shadow-black dark:shadow-white',
              className,
            )}
            {...props}>
            <div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{tariff.title}</CardTitle>
                <CardDescription>{tariff.price}</CardDescription>
                <Separator />
              </CardHeader>
              <CardContent className="grid gap-4">
                {tariff.lessons.map((lesson, lessonIndex) => (
                  <div key={lessonIndex} className="flex gap-4 items-center">
                    {lesson.includes ? (
                      <Check className="text-green-500" />
                    ) : (
                      <X className="text-red-500" />
                    )}
                    <CardDescription>{lesson.description}</CardDescription>
                  </div>
                ))}
              </CardContent>
            </div>
            <CardFooter className="">
              <Link href="https://t.me/wmteam95" target="_blank" className="w-full">
                <Button className="w-full">
                  <Check /> Qo&apos;shilish
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <p className="text-center text-xl">
        *Juma kunlari, maktab oʻquvchilariga <b>10%</b>, ayol va qizlar uchun <b>20%</b> lik
        chegirmalarimiz mavjud.
      </p>
    </div>
  );
}
