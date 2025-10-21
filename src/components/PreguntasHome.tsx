'use client';

import { preguntas } from '@/app/constants/constants';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PreguntasHome = () => {
  const [activeAnswer, setActiveAnswer] = useState<string | null>('preg-1');

  const toggleAnswer = (id: string) => {
    setActiveAnswer(activeAnswer === id ? null : id);
  };

  return (
    <section className='py-16 md:py-20 lg:py-24 relative'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Título y subtítulo */}
        <div className='text-center mb-12 md:mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4'
          >
            Preguntas Frecuentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className='text-neutral-300 max-w-2xl mx-auto text-lg md:text-xl'
          >
            Resolvemos todas tus dudas sobre nuestros servicios y procesos
          </motion.p>
        </div>

        {/* Lista de preguntas */}
        <div className='space-y-4'>
          {preguntas.map((pregunta, index) => (
            <motion.div
              key={pregunta.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border rounded-lg overflow-hidden duration-300 ${
                activeAnswer === pregunta.id
                  ? 'border-neutral-600 bg-neutral-900/30 shadow-lg'
                  : 'border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <button
                onClick={() => toggleAnswer(pregunta.id)}
                className={`bg-white/5 backdrop-blur-sm w-full px-6 py-4 text-left flex items-center justify-between transition-colors duration-300 ${
                  activeAnswer === pregunta.id
                    ? 'bg-neutral-800/50'
                    : 'hover:bg-neutral-900/50'
                }`}
              >
                <h3 className='text-xl md:text-2xl font-semibold text-white pr-4'>
                  {pregunta.question}
                </h3>
                <motion.div
                  animate={{
                    rotate: activeAnswer === pregunta.id ? 45 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    activeAnswer === pregunta.id
                      ? 'bg-white text-black'
                      : 'bg-neutral-700 hover:bg-neutral-600 text-white'
                  }`}
                >
                  <svg
                    className='w-4 h-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 4v16m8-8H4'
                    />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {activeAnswer === pregunta.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className='overflow-hidden'
                  >
                    <div className='px-6 pb-4 border-t border-neutral-800 bg-white/0 backdrop-blur-sm'>
                      <p className='text-neutral-300 leading-relaxed pt-4 text-base md:text-lg'>
                        {pregunta.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreguntasHome;
