'use client';

import { preguntas } from '@/app/constants/constants';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PreguntasHome = () => {
  const [activeAnswer, setActiveAnswer] = useState<string | null>('preg-1');

  const toggleAnswer = (id: string) => {
    if (activeAnswer !== id) {
      setActiveAnswer(id);
    }
  };

  return (
    <section
      id='preguntasSection'
      className='py-10 md:py-16 lg:py-20 relative overflow-hidden'
    >
      {/* Fondo con patrón sutil */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[length:20px_20px]'></div>

      <div className='max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10'>
        {/* Título y subtítulo */}
        <div className='text-center mb-8 md:mb-12 lg:mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className='font-anton tracking-[0.06em] text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent mb-4'
          >
            Preguntas Frecuentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className='text-color-text-light max-w-2xl mx-auto md:text-lg font-medium'
          >
            Resolvemos todas tus dudas sobre nuestros servicios y procesos de
            compra
          </motion.p>
        </div>

        {/* Grid de preguntas */}
        <div className='grid gap-4 md:gap-6'>
          {preguntas.map((pregunta, index) => (
            <motion.div
              key={pregunta.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='group'
            >
              <div
                onClick={() => toggleAnswer(pregunta.id)}
                className={`relative rounded-xl transition-all duration-500 cursor-pointer overflow-hidden backdrop-blur-sm
                  ${
                    activeAnswer === pregunta.id
                      ? 'bg-gradient-to-r from-color-bg-secondary to-color-bg-secondary-dark shadow-xl ring-1 ring-color-primary/30'
                      : 'bg-color-bg-secondary/50 hover:bg-color-bg-secondary/80 hover:shadow-lg'
                  }
                  border border-neutral-700/50 hover:border-neutral-600/70`}
              >
                {/* Línea decorativa superior con gradiente */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-color-primary via-color-primary/80 to-color-primary/40 transition-all duration-500
                  ${
                    activeAnswer === pregunta.id
                      ? 'opacity-100'
                      : 'opacity-0 group-hover:opacity-50'
                  }`}
                ></div>

                <div className='p-5 md:p-6 lg:p-7'>
                  <div className='flex items-start justify-between gap-4'>
                    <div className='flex-1'>
                      <h4
                        className={`text-base md:text-lg lg:text-xl font-bold mb-2 transition-colors duration-300
                         ${
                           activeAnswer === pregunta.id
                             ? 'text-color-title-light'
                             : 'text-color-text-light group-hover:text-color-title-light'
                         }`}
                      >
                        {pregunta.question}
                      </h4>
                    </div>

                    {/* Botón de toggle premium */}
                    <div className='flex-shrink-0'>
                      <div
                        className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-300 ease-out relative overflow-hidden
                          ${
                            activeAnswer === pregunta.id
                              ? 'bg-color-primary shadow-lg shadow-color-primary/25 text-color-title'
                              : 'bg-neutral-700 group-hover:bg-neutral-600 text-color-title-light'
                          }`}
                      >
                        <span className='relative z-10'>
                          <motion.div
                            animate={{
                              rotate: activeAnswer === pregunta.id ? 180 : 0,
                            }}
                            transition={{
                              duration: 0.5,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          >
                            <svg
                              className='w-5 h-5 '
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M19 9l-7 7-7-7'
                              />
                            </svg>
                          </motion.div>
                        </span>

                        {/* Efecto de brillo en hover */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                            activeAnswer === pregunta.id ? 'animate-pulse' : ''
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Contenido expandible */}
                  <AnimatePresence>
                    {activeAnswer === pregunta.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className='overflow-hidden'
                      >
                        <div className='mt-6 pt-6 border-t border-neutral-600/30'>
                          <div className='flex items-start gap-2 md:gap-3'>
                            {/* Icono decorativo */}
                            <div className='flex-shrink-0 w-7 h-7 md:w-9 md:h-9 rounded-full bg-gradient-to-r from-color-primary/20 to-color-primary/10 flex items-center justify-center'>
                              <svg
                                className='w-4 h-4 md:w-5 md:h-5 text-color-primary'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                              >
                                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
                              </svg>
                            </div>

                            {/* Contenido de la respuesta */}
                            <div className='flex-1'>
                              <p className='text-color-text-light leading-relaxed text-sm md:text-base lg:text-lg'>
                                {pregunta.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreguntasHome;
