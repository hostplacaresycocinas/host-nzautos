'use client';

import { company } from '@/app/constants/constants';
import ClockIcon from '@/components/icons/ClockIcon';
import LocationIcon from '@/components/icons/LocationIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import WhatsappFillIcon from '@/components/icons/WhatsappFillIcon';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const ContactoPage = () => {
  return (
    <>
      <Header />
      <div className=''>
        {/* Hero Section con imagen de fondo */}
        <section className='relative h-44 md:h-60 lg:h-72 flex items-center justify-center overflow-hidden'>
          {/* Imagen de fondo con overlay */}
          <div className='absolute inset-0 z-0'>
            <Image
              src='/assets/contacto/contacto-banner.webp'
              alt={`Contacto de ${company.name}`}
              fill
              className='object-cover'
              priority
            />
            <div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80'></div>
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
              Contactate con nosotros para obtener más información
            </motion.p>
          </div>
        </section>

        {/* Información de contacto principal */}
        <section className='mt-8 mb-16 md:mt-12 md:mb-24'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
              {/* Columna izquierda - Información de contacto */}
              <div className='space-y-8'>
                {/* Tarjetas de contacto */}
                <div className='space-y-6'>
                  {/* WhatsApp */}
                  <motion.a
                    href={`https://api.whatsapp.com/send?phone=549${company.whatsapp[0]}&text=Hola! Quería hacer una consulta sobre un vehículo`}
                    target='_blank'
                    rel='noopener noreferrer'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='group flex items-center p-4 md:p-6 bg-color-bg-secondary rounded-2xl shadow-lg hover:shadow-xl transition-colors duration-300 border border-neutral-500 hover:border-color-primary/30'
                  >
                    <div className='flex-shrink-0 w-14 h-14 bg-gradient-to-l from-neutral-700 to-neutral-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ease-in-out relative overflow-hidden'>
                      <span className='relative z-10'>
                        <WhatsappFillIcon className='w-7 h-7 text-white' />
                      </span>
                      <div className='absolute inset-0 bg-gradient-to-l from-neutral-600 to-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl'></div>
                    </div>
                    <div className='ml-6 flex-1'>
                      <h3 className='text-lg font-semibold text-color-title-light group-hover:text-color-primary transition-colors'>
                        WhatsApp
                      </h3>
                      <p className='text-color-text-light'>
                        {company.whatsapp[0]}
                      </p>
                      <p className='text-sm text-color-primary font-medium mt-1'>
                        Mensaje directo →
                      </p>
                    </div>
                  </motion.a>

                  {/* Instagram */}
                  <motion.a
                    href={`https://www.instagram.com/${company.instagram}/`}
                    target='_blank'
                    rel='noopener noreferrer'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className='group flex items-center p-4 md:p-6 bg-color-bg-secondary rounded-2xl shadow-lg hover:shadow-xl transition-colors duration-300 border border-neutral-500 hover:border-color-primary/30'
                  >
                    <div className='flex-shrink-0 w-14 h-14 bg-gradient-to-l from-neutral-700 to-neutral-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ease-in-out relative overflow-hidden'>
                      <span className='relative z-10'>
                        <InstagramIcon className='w-7 h-7 text-white' />
                      </span>
                      <div className='absolute inset-0 bg-gradient-to-l from-neutral-600 to-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl'></div>
                    </div>
                    <div className='ml-6 flex-1'>
                      <h3 className='text-lg font-semibold text-color-title-light group-hover:text-color-primary transition-colors'>
                        Instagram
                      </h3>
                      <p className='text-color-text-light'>
                        @{company.instagram}
                      </p>
                      <p className='text-sm text-color-primary font-medium mt-1'>
                        Seguinos →
                      </p>
                    </div>
                  </motion.a>

                  {/* Ubicación */}
                  <motion.a
                    href={company.googlemapsLink || ''}
                    target='_blank'
                    rel='noopener noreferrer'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className='group flex items-center p-4 md:p-6 bg-color-bg-secondary rounded-2xl shadow-lg hover:shadow-xl transition-colors duration-300 border border-neutral-500 hover:border-color-primary/30'
                  >
                    <div className='flex-shrink-0 w-14 h-14 bg-gradient-to-l from-neutral-700 to-neutral-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ease-in-out relative overflow-hidden'>
                      <span className='relative z-10'>
                        <LocationIcon className='w-7 h-7 text-white' />
                      </span>
                      <div className='absolute inset-0 bg-gradient-to-l from-neutral-600 to-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl'></div>
                    </div>
                    <div className='ml-6 flex-1'>
                      <h3 className='text-lg font-semibold text-color-title-light group-hover:text-color-primary transition-colors'>
                        Ubicación
                      </h3>
                      <p className='text-color-text-light'>
                        {company.adress}, {company.city}
                      </p>
                      <p className='text-sm text-color-primary font-medium mt-1'>
                        Ver en Google Maps →
                      </p>
                    </div>
                  </motion.a>
                </div>
              </div>

              {/* Columna derecha - Horarios y mapa */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, margin: '0px 100px -100px 0px' }}
                className='space-y-8'
              >
                {/* Horarios */}
                <div className='bg-color-bg-secondary rounded-2xl shadow-lg p-8 border border-neutral-500'>
                  <div className='flex items-center mb-6'>
                    <div className='w-12 h-12 bg-gradient-to-l from-neutral-700 to-neutral-500 rounded-xl flex items-center justify-center'>
                      <ClockIcon className='w-6 h-6 text-white' />
                    </div>
                    <h3 className='text-2xl font-bold text-color-title-light ml-4'>
                      Horarios de atención
                    </h3>
                  </div>

                  <div className='relative flex flex-col gap-2 sm:gap-3'>
                    {company.openDays.map((day, index) => (
                      <div key={index}>
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.4 + index * 0.1,
                          }}
                          viewport={{ once: true }}
                          className='flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-color-bg-secondary-dark/80 to-color-bg-secondary/80 rounded-xl sm:rounded-2xl border border-neutral-800'
                        >
                          <div className='flex items-center space-x-2 sm:space-x-4'>
                            <div className='w-2 h-2 sm:w-3 sm:h-3 bg-color-primary rounded-full shadow-sm'></div>
                            <span className='font-bold text-color-title-light text-sm sm:text-base lg:text-lg'>
                              {day}
                            </span>
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              <div className='bg-color-bg-secondary rounded-2xl shadow-lg overflow-hidden border border-neutral-500 lg:col-span-2'>
                <div className='relative'>
                  <iframe
                    className='w-full h-64 md:h-80 lg:h-96'
                    src={`${company.googlemaps}`}
                    width='100%'
                    height='256'
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ContactoPage;
