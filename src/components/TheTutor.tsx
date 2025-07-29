import Link from 'next/link';
import TheTitle from './TheTitle';
import Image from 'next/image';
import tutor from '../../public/tutor.webp';

const TheTutor = () => {
  return (
    <div id="tutor" className="target ">
      <TheTitle title="Ustoz haqida" />
      <div className="flex flex-col items-center gap-5">
        <div className="grid justify-items-center gap-3">
          <Image src={tutor} alt="tutor" className="rounded-xl object-cover" />
          <h2 className="text-xl ">Valijon Maxmudov</h2>
        </div>
        <div className="grid justify-items-center gap-3 text-center text-xl">
          <p>
            2020-yildan{' '}
            <Link href="https://t.me/kompyuter_akademiyasi" target="_blank" className="underline">
              Kompyuter Akademiyasi
            </Link>
            ga asos solish asosida kompyuter va IT sohalarida dars berishga kirib kelganman.
          </p>
          <p>
            Hozirga qadar{' '}
            <Link href="https://t.me/ka_projects/90" target="_blank" className="underline">
              10 dan ortiq loyihalar
            </Link>
            ni tayyorlab xalqimizni ilmini oshirish maqsadida e&apos;lon qilib kelmoqdaman.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TheTutor;
