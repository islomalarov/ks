import * as React from 'react';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import TheTitle from './TheTitle';
import { Icon } from '@iconify/react';
import Autoplay from 'embla-carousel-autoplay';
const emblems = [
  {
    id: 1,
    icon: 'vscode-icons:file-type-excel',
    title: 'Excel',
  },
  {
    id: 2,
    icon: 'vscode-icons:file-type-word',
    title: 'Word',
  },
  {
    id: 3,
    icon: 'vscode-icons:file-type-powerpoint',
    title: 'PowerPoint',
  },
  {
    id: 4,
    icon: 'simple-icons:googlesheets',
    title: 'Sheets',
  },
  {
    id: 5,
    icon: 'simple-icons:googledocs',
    title: 'Docs',
  },
  {
    id: 6,
    icon: 'simple-icons:googleslides',
    title: 'Slides',
  },
  {
    id: 7,
    icon: 'logos:chrome',
    title: 'Chrome',
  },
  {
    id: 8,
    icon: 'logos:google-icon',
    title: 'Google',
  },
  {
    id: 9,
    icon: 'vscode-icons:file-type-pdf2',
    title: 'PDF',
  },
  {
    id: 10,
    icon: 'flat-color-icons:video-call',
    title: 'Video',
  },
  {
    id: 11,
    icon: 'flat-color-icons:edit-image',
    title: 'Rasm',
  },
  {
    id: 12,
    icon: 'flat-color-icons:audio-file',
    title: 'Audio',
  },
  {
    id: 13,
    icon: 'arcticons:openai-chatgpt',
    title: 'ChatGPT',
  },
  {
    id: 14,
    icon: 'openmoji:winrar',
    title: 'WinRAR',
  },
  {
    id: 15,
    icon: 'logos:google-gmail',
    title: 'Gmail',
  },
  {
    id: 16,
    icon: 'logos:zoom-icon',
    title: 'Zoom',
  },
  {
    id: 17,
    icon: 'arcticons:microsoft-defender',
    title: 'Defender',
  },
  {
    id: 18,
    icon: 'simple-icons:googleforms',
    title: 'Forms',
  },
  {
    id: 18,
    icon: 'arcticons:appsheet',
    title: 'AppSheet',
  },
];

export function TheCarousel() {
  return (
    <div>
      <TheTitle title="Kursimiz davomida quyidagi dasturlarda ishlashni o'rganasiz:" />
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full mx-auto max-w-56 xs:max-w-sm sm:max-w-xl md:max-w-2xl ">
        <CarouselContent className="">
          {emblems.map((emblem, index) => (
            <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 ">
              <div className="p-1">
                <Card className="shadow-black dark:shadow-white">
                  <CardContent className="flex flex-col gap-2 aspect-square items-center justify-center p-6">
                    <Icon icon={emblem.icon} className="h-14 w-14 text-blue-500" />
                    <CardDescription className="text-sm ">{emblem.title}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
