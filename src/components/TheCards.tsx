import { useEffect, useState } from 'react';
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
import { supabase } from '@/lib/supabaseClient';

interface Lesson {
  description: string;
  includes: boolean;
}

interface Tariff {
  id: number;
  title: string;
  price: string;
  lessons: Lesson[];
}

type CardProps = React.ComponentProps<typeof Card>;

export function TheCards({ className, ...props }: CardProps) {
  const [tariffs, setTariffs] = useState<Tariff[]>([]);

  useEffect(() => {
    const fetchTariffs = async () => {
      const { data, error } = await supabase.from('tariffs').select('*');
      if (error) {
        console.error('Error fetching tariffs:', error);
      } else {
        setTariffs(data as Tariff[]);
      }
    };

    fetchTariffs();
  }, []);

  return (
    <div id="tariffs" className="target grid gap-4">
      <TheTitle title="Tariflar" />
      <p className="text-center text-xl">
        O&apos;zingizga ma&apos;qul kelgan tarif bo&apos;yicha <b>bir marotaba</b> to&apos;lov
        qiling:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {tariffs.map((tariff, index) => (
          <Card
            key={index}
            className={cn('grid content-between shadow-black dark:shadow-white', className)}
            {...props}>
            <div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{tariff.title}</CardTitle>
                <CardDescription>{tariff.price} so'm*</CardDescription>
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
