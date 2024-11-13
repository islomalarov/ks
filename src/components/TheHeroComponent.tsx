import { motion } from 'framer-motion';

const TheHeroComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen dark:bg-black-900 dark:text-white px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-center">
        Добро пожаловать в мир IT
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-lg md:text-xl mt-4 text-center max-w-2xl">
        Осваивайте навыки программирования и технологий будущего с помощью современных инструментов
        и анимаций
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg">
          Начать обучение
        </motion.button>
      </motion.div>
    </div>
  );
};

export default TheHeroComponent;
