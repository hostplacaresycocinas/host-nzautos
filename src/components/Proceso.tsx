'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Proceso = () => {
  return (
    <section className='flex flex-col items-center justify-center py-16 md:py-20 lg:py-24'>
      <div className='max-w-7xl w-full px-4 md:px-8'>
        <div className='lg:relative flex justify-center lg:justify-start'>
          {/* Contenedor relativo para imagen y textos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='lg:relative w-full flex flex-col items-center justify-center gap-8 lg:gap-0'
          >
            {/* Imagen circular - solo visible en lg */}
            <div className='hidden lg:flex relative items-center h-[500px] w-full rounded-full overflow-hidden mx-auto'>
              <Image
                src='/assets/proceso/proceso-1.webp'
                alt='Proceso'
                width={500}
                height={500}
                className='object-contain'
                priority
              />
            </div>

            {/* Beneficio 01 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              className='lg:absolute lg:mr-40 lg:right-0 lg:top-0 flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-5 text-center lg:text-left'
            >
              {/* Círculo con número */}
              <div className='flex-shrink-0 relative z-10'>
                <div className='w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-white to-neutral-400 flex items-center justify-center shadow-lg shadow-neutral-500/30'>
                  <span className='text-black font-bold text-lg md:text-xl'>
                    01
                  </span>
                </div>
              </div>

              {/* Contenido de texto */}
              <div className='pt-2'>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-white'>
                  Mejor precio garantizado
                </h3>
                <p className='text-sm md:text-base lg:text-lg text-neutral-300 leading-relaxed max-w-md md:max-w-lg lg:max-w-xl'>
                  Con nuestro modelo de negocios y trayectoria en el mercado nos
                  ahorramos costos operativos para garantizarte un precio
                  acorde.
                </p>
              </div>
            </motion.div>

            {/* Beneficio 02 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='lg:absolute lg:mr-20 lg:right-0 lg:top-0 lg:h-full flex items-center justify-center lg:justify-end'
            >
              <div className='flex flex-col lg:flex-row items-center gap-5 text-center lg:text-left'>
                {/* Círculo con número */}
                <div className='flex-shrink-0 relative z-10 right-0'>
                  <div className='w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-white to-neutral-400 flex items-center justify-center shadow-lg shadow-neutral-500/30'>
                    <span className='text-black font-bold text-lg md:text-xl'>
                      02
                    </span>
                  </div>
                </div>

                {/* Contenido de texto */}
                <div className='pt-2'>
                  <h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-white'>
                    Revisión y acomodación
                  </h3>
                  <p className='text-sm md:text-base lg:text-lg text-neutral-300 leading-relaxed max-w-md md:max-w-lg lg:max-w-xl'>
                    Todos los vehículos pasan por una exhaustiva revisión, para
                    garantizar un óptimo funcionamiento de los vehículos.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Beneficio 03 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='lg:absolute lg:mr-40 lg:right-0 lg:bottom-0 flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-5 text-center lg:text-left'
            >
              {/* Círculo con número */}
              <div className='flex-shrink-0 relative z-10'>
                <div className='w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-white to-neutral-400 flex items-center justify-center shadow-lg shadow-neutral-500/30'>
                  <span className='text-black font-bold text-lg md:text-xl'>
                    03
                  </span>
                </div>
              </div>

              {/* Contenido de texto */}
              <div className='pt-2'>
                <h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-white'>
                  Documentación ágil
                </h3>
                <p className='text-sm md:text-base lg:text-lg text-neutral-300 leading-relaxed max-w-md md:max-w-lg lg:max-w-xl'>
                  Te ofrecemos operaciones rápidas para que puedas disfrutar de
                  tu nuevo vehículo sin preocupaciones extra.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Proceso;
