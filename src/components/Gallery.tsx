'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const galleryImages = [
  {
    src: '/assets/gallery/gallery-1000-1.webp',
    alt: 'Imagen 1 Galería',
  },
  {
    src: '/assets/gallery/gallery-1000-2.webp',
    alt: 'Imagen 2 Galería',
  },
  {
    src: '/assets/gallery/gallery-1000-3.webp',
    alt: 'Imagen 3 Galería',
  },
];

const Gallery = () => {
  const autoplayOptions = {
    delay: 4000,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
  };
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);
  const [clicked, setClicked] = useState(false);

  return (
    <section className='py-16 md:py-20 lg:py-24 relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Título y subtítulo */}
        <div className='text-center mb-12 md:mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4'
          >
            Nuestra Galería
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className='text-neutral-300 max-w-2xl mx-auto text-lg md:text-xl'
          >
            Experiencia y confianza en cada vehículo que ofrecemos
          </motion.p>
        </div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='relative'
        >
          <div
            onMouseUp={() => setClicked(false)}
            onMouseDown={() => setClicked(true)}
            className={`overflow-hidden rounded-2xl relative ${
              clicked ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            ref={emblaRef}
          >
            <div className='flex'>
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className='flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_70%] lg:flex-[0_0_60%] xl:flex-[0_0_50%]'
                >
                  <div className='relative mx-2 sm:mx-4'>
                    <div className='relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl shadow-black/50'>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className='object-cover transition-transform duration-700 hover:scale-105'
                        priority={idx === 0}
                      />
                      {/* Overlay sutil */}
                      <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent'></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Máscaras laterales para desvanecer */}
            <div className='absolute inset-y-0 left-0 w-16 sm:w-20 md:w-24 lg:w-32 xl:w-40 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10'></div>
            <div className='absolute inset-y-0 right-0 w-16 sm:w-20 md:w-24 lg:w-32 xl:w-40 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10'></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
