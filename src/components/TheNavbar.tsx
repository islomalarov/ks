'use client';

import { RefObject, useState } from 'react';
import { Menu, CircleX } from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from './ui/theme-toggle';

interface TheNavbarProps {
  accordionRef: RefObject<HTMLDivElement>
}

const TheNavbar = ({ accordionRef }:TheNavbarProps) => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, title: 'Kurs haqida', link: '/' },
    { id: 2, title: "O'quv Dasturi", link: '#about' },
    { id: 3, title: 'Ustoz haqida', link: '#services' },
    { id: 4, title: 'Tariflar', link: '#experience' },
    { id: 5, title: 'FAQ', link: '#faqs' },
  ];

  const scrollToAccordion = () => {
    if (accordionRef.current) {
      accordionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setNav(false); // Закрывает меню после клика
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-black  h-20 z-10">
      <div className="container mx-auto px-4 flex gap-2 h-full justify-between items-center ">
        <Link href="/" className="text-3xl font-bold">
          KS
        </Link>
        <nav className="hidden md:flex gap-4">
          {links.map(({ id, title, link }) => (
            <Link
              key={id}
              href={link}
              onClick={scrollToAccordion}
              className="capitalize hover:scale-105  duration-200">
              {title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="https://t.me/wmteam95"
            target="_blank"
            className=" bg-sky-500 text-white text-center rounded-md py-1 px-3 flex items-center">
            O&apos;rganishni boshlash!
          </Link>
          <ModeToggle />
          <div className="md:hidden z-10">
            {nav ? (
                <CircleX onClick={() => setNav(!nav)} size={30} />

            ) : (
              <Menu onClick={() => setNav(!nav)} size={30} />
            )}
          </div>
        </div>

        {nav && (
          <nav className="flex flex-col gap-10 justify-center items-center absolute top-0 left-0 w-full h-screen bg-white dark:bg-black ">
            {links.map(({ id, title, link }) => (
              <Link
                href={link}
                key={id}
                onClick={scrollToAccordion}
                className="capitalize  hover:scale-105  duration-200">
                {title}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default TheNavbar;
