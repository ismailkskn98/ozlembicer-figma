'use client';
import React from 'react';
import HeroCards from './heroCards';
import MotionScrollInView from '@/components/common/motionScrollInView';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const logoImages = [
   { src: '/images/logoCarousel/logo-1.png', number: 1 },
   { src: '/images/logoCarousel/logo-2.png', number: 2 },
   { src: '/images/logoCarousel/logo-5.png', number: 5 },
   { src: '/images/logoCarousel/logo-4.png', number: 4 },
   { src: '/images/logoCarousel/logo-3.png', number: 3 },
   { src: '/images/logoCarousel/logo-6.png', number: 6 },
   { src: '/images/logoCarousel/logo-7.png', number: 7 },
   { src: '/images/logoCarousel/logo-8.png', number: 8 },
   { src: '/images/logoCarousel/logo-9.png', number: 9 },
   { src: '/images/logoCarousel/logo-10.png', number: 10 },
   { src: '/images/logoCarousel/logo-11.png', number: 11 },
   { src: '/images/logoCarousel/logo-12.png', number: 12 },
   { src: '/images/logoCarousel/logo-13.png', number: 13 },
   { src: '/images/logoCarousel/logo-14.png', number: 14 },
   { src: '/images/logoCarousel/logo-15.png', number: 15 },
   { src: '/images/logoCarousel/logo-16.png', number: 16 },
   { src: '/images/logoCarousel/logo-17.png', number: 17 },
   { src: '/images/logoCarousel/logo-18.png', number: 18 },
   { src: '/images/logoCarousel/logo-20.png', number: 20 },
   { src: '/images/logoCarousel/logo-23.png', number: 23 },
   { src: '/images/logoCarousel/logo-21.png', number: 21 },
   { src: '/images/logoCarousel/logo-22.png', number: 22 },
   { src: '/images/logoCarousel/logo-19.png', number: 19 },
   { src: '/images/logoCarousel/logo-24.png', number: 24 },
   { src: '/images/logoCarousel/logo-25.png', number: 25 },
   { src: '/images/logoCarousel/logo-26.png', number: 26 },
];

export default function HeroLogoCarousel({ isBgGradient = true }) {
   const t = useTranslations('HomePage.logoCarousel');
   return (
      <section className={`fluid gridContainer relative w-full pt-50 md:pt-32.5 pb-12 sm:pb-15 ${isBgGradient ? 'bg-linear-to-t from-ivory-soft to-stone-beige' : ''}`}>
         <HeroCards />
         <main className="w-full max-w-full xl:max-w-312.5 mx-auto">
            <MotionScrollInView className="w-full flex flex-col items-center gap-7.5">
               <p className="text-center text-[20px] text-coffee-dark">
                  {t.rich('heading', {
                     bold: (chunks) => <span className="font-bold">{chunks}</span>,
                  })}
               </p>
               <Swiper
                  modules={[Autoplay]}
                  spaceBetween={50}
                  slidesPerView={4}
                  slidesPerGroup={4}
                  speed={1500}
                  autoplay={{
                     delay: 2000,
                     disableOnInteraction: false,
                  }}
                  loop={false}
                  className="w-full"
                  breakpoints={{
                     0: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                     },
                     640: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                     },
                  }}
               >
                  {logoImages.map((logo, index) => (
                     <SwiperSlide key={index}>
                        <Image src={logo.src} alt={t('logoAlt', { number: logo.number })} width={300} height={128} className="w-fit h-14 sm:h-20 object-contain mx-auto" />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </MotionScrollInView>
         </main>
      </section>
   );
}
