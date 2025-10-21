'use client';

import Image from 'next/image';
import { company } from '@/app/constants/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const NosotrosPage = () => {
  return (
    <>
      <Header />

      {/* Hero Section con imagen de fondo */}
      <section className='relative h-64 md:h-72 lg:h-80 pt-10 flex items-center justify-center overflow-hidden'>
        {/* Imagen de fondo con overlay */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/assets/nosotros/nosotros-banner.webp'
            alt={`Equipo de ${company.name}`}
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90'></div>
        </div>

        {/* Contenido centrado */}
        <div className='relative z-10 text-center px-4 max-w-4xl mx-auto'>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-2xl md:text-3xl lg:text-4xl font-semibold text-color-primary-light mb-3 md:mb-4 lg:mb-6'
          >
            Sobre Nosotros
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-xl md:text-2xl text-white/90 font-medium leading-relaxed'
          >
            Conectando personas con sus vehículos ideales
          </motion.p>
        </div>
      </section>

      {/* Sección de contenido principal */}
      <section className='py-20 md:py-24 lg:py-32'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Grid de información */}
          <div className='grid md:grid-cols-2 gap-16 lg:gap-20'>
            {/* Columna izquierda - Historia */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='space-y-8'
            >
              <div>
                <h3 className='text-3xl md:text-4xl font-bold text-white mb-6'>
                  Nuestra Historia
                </h3>
                <div className='space-y-6 text-lg text-neutral-300 leading-relaxed'>
                  <p>
                    Desde nuestros inicios, hemos estado comprometidos con
                    ofrecer la mejor experiencia en la compra y venta de
                    vehículos. Nuestro equipo trabaja día a día para brindar un
                    servicio personalizado y de calidad a cada uno de nuestros
                    clientes.
                  </p>
                  <p>
                    Con años de experiencia en el mercado automotriz, nos hemos
                    consolidado como una empresa confiable que prioriza la
                    satisfacción del cliente, ofreciendo una amplia variedad de
                    vehículos con opciones de financiamiento flexibles.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Columna derecha - Imagen */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div className='relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl'>
                <Image
                  src='/assets/nosotros/nosotros-1.webp'
                  alt={`Equipo de ${company.name}`}
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent'></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sección de compromiso */}
      <section className='pb-20 md:pb-24'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Nuestro Compromiso
            </h2>
            <p className='text-xl text-neutral-300 max-w-3xl mx-auto'>
              Los valores que nos guían en cada interacción con nuestros
              clientes
            </p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {/* Compromiso 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <div className='w-20 h-20 bg-gradient-to-br from-neutral-100 to-neutral-400 rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg
                  className='w-10 h-10 text-black'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                Calidad Garantizada
              </h3>
              <p className='text-neutral-300 leading-relaxed'>
                Todos nuestros vehículos pasan por una exhaustiva revisión
                técnica para garantizar su perfecto funcionamiento.
              </p>
            </motion.div>

            {/* Compromiso 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <div className='w-20 h-20 bg-gradient-to-br from-neutral-100 to-neutral-400 rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg
                  className='w-[52px] h-[52px] text-black'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1'
                  />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                Mejores Precios
              </h3>
              <p className='text-neutral-300 leading-relaxed'>
                Ofrecemos los precios más competitivos del mercado con opciones
                de financiamiento flexibles.
              </p>
            </motion.div>

            {/* Compromiso 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <div className='w-20 h-20 bg-gradient-to-br from-neutral-100 to-neutral-400 rounded-full flex items-center justify-center mx-auto mb-6'>
                <svg
                  className='w-10 h-10 text-black'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.8}
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-white mb-4'>
                Atención Personalizada
              </h3>
              <p className='text-neutral-300 leading-relaxed'>
                Nuestro equipo de expertos te acompaña en cada paso del proceso
                para encontrar el vehículo perfecto.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NosotrosPage;
