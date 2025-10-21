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
        <section className='relative h-64 md:h-72 lg:h-80 pt-10 flex items-center justify-center overflow-hidden'>
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
              Contacto
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
        <section className='py-16 md:py-20 lg:py-24'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Título principal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                Te asesoramos en todo el proceso
              </h2>
              <p className='text-xl text-neutral-300 max-w-2xl mx-auto'>
                No dudes en contactarnos para cualquier consulta
              </p>
            </motion.div>

            {/* Grid de opciones de contacto */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
              {/* WhatsApp */}
              <motion.a
                href={`https://api.whatsapp.com/send?phone=549${company.whatsapp[0]}&text=Hola! Quería hacer una consulta sobre un vehículo`}
                target='_blank'
                rel='noopener noreferrer'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className='group bg-white/5 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:bg-white/10 text-center'
              >
                <div className='w-16 h-16 bg-gradient-to-br from-neutral-100 to-neutral-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300'>
                  <WhatsappFillIcon className='w-8 h-8 text-neutral-900' />
                </div>
                <h3 className='text-2xl font-bold text-white mb-4'>WhatsApp</h3>
                <p className='text-neutral-300 mb-4'>{company.whatsapp[0]}</p>
                <p className='text-neutral-100 font-medium'>Enviar mensaje →</p>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href={`https://www.instagram.com/${company.instagram}/`}
                target='_blank'
                rel='noopener noreferrer'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className='group bg-white/5 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:bg-white/10 text-center'
              >
                <div className='w-16 h-16 bg-gradient-to-br from-neutral-100 to-neutral-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300'>
                  <InstagramIcon className='w-8 h-8 text-neutral-900' />
                </div>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Instagram
                </h3>
                <p className='text-neutral-300 mb-4'>@{company.instagram}</p>
                <p className='text-neutral-100 font-medium'>Seguir →</p>
              </motion.a>

              {/* Ubicación */}
              <motion.a
                href={company.googlemapsLink || ''}
                target='_blank'
                rel='noopener noreferrer'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className='group bg-white/5 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:bg-white/10 text-center'
              >
                <div className='w-16 h-16 bg-gradient-to-br from-neutral-100 to-neutral-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300'>
                  <LocationIcon className='w-8 h-8 text-neutral-900' />
                </div>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Ubicación
                </h3>
                <p className='text-neutral-300 mb-4'>
                  {company.adress}, {company.city}
                </p>
                <p className='text-neutral-100 font-medium'>Ver en Maps →</p>
              </motion.a>
            </div>

            {/* Horarios */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='mb-16'
            >
              <div className='text-center mb-3'>
                <div className='w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <ClockIcon className='w-8 h-8 text-black' />
                </div>
                <h3 className='text-3xl font-bold text-white mb-2'>
                  Horarios de Atención
                </h3>
              </div>

              <div className='flex flex-col items-center justify-center max-w-4xl mx-auto'>
                {company.openDays.map((day, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className='px-6 py-3'
                  >
                    <p className='text-white font-semibold text-lg'>{day}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Mapa */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className='relative'>
                <iframe
                  className='w-full h-64 md:h-80 lg:h-96 rounded-2xl'
                  src={`${company.googlemaps}`}
                  width='100%'
                  height='256'
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ContactoPage;
