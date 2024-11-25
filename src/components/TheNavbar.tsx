'use client';

import { useState } from 'react';
import Link from 'next/link';

import TheActions from './TheActions';

const TheNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const links = [
    { id: 1, title: 'Kurs haqida', link: '#course' },
    { id: 2, title: "O'quv dasturi", link: '#table' },
    { id: 3, title: 'Ustoz haqida', link: '#tutor' },
    { id: 4, title: 'Tariflar', link: '#tariffs' },
    { id: 5, title: 'FAQ', link: '#faqs' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-black  h-20 z-10">
      <div className="max-w-6xl mx-auto px-4 flex gap-2 h-full justify-between items-center ">
        <Link href="/" className="text-3xl font-bold z-10">
          KS
        </Link>
        <nav className="hidden md:flex gap-4">
          {links.map(({ id, title, link }) => (
            <Link key={id} href={link} className="font-bold text-xl hover:scale-105  duration-200">
              {title}
            </Link>
          ))}
        </nav>
        <TheActions openMenu={openMenu} setOpenMenu={setOpenMenu} />

        {openMenu && (
          <nav className="flex flex-col gap-10 justify-center items-center absolute top-0 left-0 w-full h-screen bg-white dark:bg-black ">
            {links.map(({ id, title, link }) => (
              <Link
                href={link}
                key={id}
                // to={link}
                // smooth={true}
                // offset={-80} // Учитываем высоту навбара
                // duration={500}
                onClick={() => setOpenMenu(false)}
                className="capitalize text-xl  hover:scale-105  duration-200">
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
