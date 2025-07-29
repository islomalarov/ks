'use client';

import { useState } from 'react';
import Link from 'next/link';
import TheActions from './TheActions';
import { motion } from 'framer-motion';

const TheNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: '100vh' },
    exit: { opacity: 0, height: 0 },
  };

  const links = [
    { id: 1, title: 'Kurs haqida', link: '#course' },
    { id: 2, title: "O'quv dasturi", link: '#table' },
    { id: 3, title: 'Ustoz haqida', link: '#tutor' },
    { id: 4, title: 'Tariflar', link: '#tariffs' },
    { id: 5, title: 'FAQ', link: '#faqs' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-black h-20 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex gap-2 h-full justify-between items-center ">
        <Link href="/" className="text-3xl font-bold z-10">
          KS
        </Link>
        <nav className="hidden lg:flex gap-4">
          {links.map(({ id, title, link }) => (
            <Link key={id} href={link} className="font-bold text-xl hover:scale-105  duration-200">
              {title}
            </Link>
          ))}
        </nav>
        <TheActions openMenu={openMenu} setOpenMenu={setOpenMenu} />

        {openMenu && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-10 justify-center text-center absolute top-0 right-0 w-full bg-white dark:bg-black">
            {links.map(({ id, title, link }) => (
              <Link
                href={link}
                key={id}
                onClick={() => setOpenMenu(false)}
                className=" text-xl hover:scale-105 duration-200">
                {title}
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default TheNavbar;
