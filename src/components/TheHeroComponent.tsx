import { motion } from 'framer-motion';
import { RefObject } from 'react';
interface TheHeroComponentProps {
  sectionRef: RefObject<HTMLDivElement>;
}
const TheHeroComponent = ({ sectionRef }: TheHeroComponentProps) => {
  const scrollToSection = () => {
    if (sectionRef.current) {
      // Check if current exists
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen dark:bg-black-900 dark:text-white px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-6xl font-bold text-center">
        Kompyuterni professionallardan o&lsquo;rganing!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-lg md:text-xl mt-4 text-center max-w-2xl">
        4 yillik tajribaga ega ustozdan sifatli ta&lsquo;lim olish imkoniyatini qo&lsquo;ldan boy
        bermang!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToSection}
          className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg">
          Kursga qo&lsquo;shilish
        </motion.button>
      </motion.div>
    </div>
  );
};

export default TheHeroComponent;
