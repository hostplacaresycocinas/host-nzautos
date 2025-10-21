'use client';

import { company } from '@/app/constants/constants';
import Link from 'next/link';
import HeroCarousel from './HeroCarousel';
import { motion } from 'framer-motion';
import ArrowIcon from './icons/ArrowIcon';

const HeroHome = () => {
  return (
    <section id='inicioSection' className='flex justify-center overflow-hidden'>
      <div className={`max-w-[1920px] w-full flex flex-col items-center z-10`}>
        <div className='flex justify-center max-w-6xl lg:max-w-[1920px] w-full mx-4 sm:mx-6 md:mx-8 lg:mx-10'>
          <article className='h-[520px] md:h-[550px] lg:h-[700px] xl:h-[800px] relative w-full flex flex-col items-center justify-center md:min-w-[430px] lg:min-w-[540px] z-20'>
            <HeroCarousel />
            <div
              className={`absolute w-full h-full top-0 -right-0 bg-black/65 md:bg-black/75 -z-20`}
            ></div>

            {/* Máscara inferior para desvanecimiento sutil */}
            <div className='absolute bottom-0 left-0 w-full h-5 bg-gradient-to-t from-color-bg-secondary-dark via-color-bg-secondary-dark/60 to-transparent -z-10'></div>

            <div className='font-rubik flex flex-col md:gap-1 lg:gap-1.5 items-center mb-1 pt-10 md:pt-5'>
              <div className='md:gap-3 text-nowrap '>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className='text-3xl font-bold lg:font-semibold sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent'
                >
                  Encontrá tu auto ideal
                </motion.h2>
              </div>
              <div className='md:gap-3 text-nowrap lg:mb-1'>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className='text-3xl font-bold lg:font-semibold sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent'
                >
                  con nosotros
                </motion.h2>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-lg lg:text-xl xl:text-2xl text-center text-color-text-light mx-4 max-w-md sm:max-w-md lg:max-w-lg xl:max-w-2xl'
            >
              Autos de calidad, financiación accesible y asesoramiento. ¡Hacenos
              tu consulta!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='flex flex-col sm:flex-row mt-4 md:mt-3 lg:mt-4 xl:mt-5 gap-3 sm:gap-4 mb-2 md:mb-1 lg:mb-0'
            >
              <Link
                href='/catalogo'
                className={`${
                  company.dark
                    ? 'text-color-title bg-gradient-to-r from-neutral-100 via-neutral-100 to-neutral-100 shadow-lg shadow-neutral-800/50 ring-2 ring-neutral-100'
                    : 'text-color-title bg-gradient-to-r from-neutral-100 via-neutral-100 to-neutral-100 shadow-lg shadow-neutral-800/50 ring-2 ring-neutral-100'
                } lg:text-lg font-bold transition-all duration-300 ease-in-out py-3 md:py-3.5 lg:py-4 px-6 md:px-8 rounded-lg relative overflow-hidden group flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-neutral-700/60`}
              >
                <span className='relative z-10'>Ver Catálogo</span>
                <ArrowIcon className='relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
                <div className='absolute inset-0 bg-gradient-to-r from-neutral-100 via-neutral-100 to-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'></div>
              </Link>
              <Link
                href='/contacto'
                className={`${
                  company.dark
                    ? 'backdrop-blur-sm bg-white/5 text-white font-medium ring-2 ring-neutral-500/50 hover:ring-neutral-400/70'
                    : 'backdrop-blur-sm bg-white/5 text-white font-medium ring-2 ring-neutral-500/50 hover:ring-neutral-400/70'
                } lg:text-lg transition-all duration-300 ease-in-out py-3 md:py-3.5 lg:py-4 px-6 md:px-8 rounded-lg relative overflow-hidden group flex items-center justify-center gap-2 hover:bg-white/10`}
              >
                <span className='relative z-10'>Contactanos</span>
                <ArrowIcon className='relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
                <div className='absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'></div>
              </Link>
            </motion.div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
