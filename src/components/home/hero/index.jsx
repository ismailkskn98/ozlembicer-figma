'use client';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import { cn } from '@/lib/utils';

const heroSlideItems = [
   {
      title: ['Your', 'Expectations Are', 'Our Priority'],
      mobileTitle: ['Your', 'Expectations Are', 'Our Priority'],
      description:
         'According to our philosophy, hair surgery is not only science, art, technology, or numbers.Hair restoration is more than a surgery.  We know that it also directly affects the patient’s emotions. Therefore, your expectations and your emotions are extremely valuable to us.',
      imageSrc: '/images/hero-carousel/hero-1.png',
      imageAlt: 'hero ozlem bicer',
      links: [
         {
            href: '/about-us/clinic-team',
            text: 'Read More About Clinic',
         },
         {
            href: '/contact-us',
            text: 'Book an Appointment',
         },
      ],
   },
   {
      title: ['An Experienced', 'Doctor And', 'Medical Team'],
      mobileTitle: ['An Experienced', 'Doctor And', 'Medical Team'],
      description:
         'According to our philosophy, hair surgery is not only science, art, technology, or numbers.Hair restoration is more than a surgery.  We know that it also directly affects the patient’s emotions. Therefore, your expectations and your emotions are extremely valuable to us.',
      imageSrc: '/images/hero-carousel/hero-2.png',
      imageAlt: 'hero ozlem bicer team',
      links: [
         {
            href: '/about-us/clinic-team',
            text: 'Read More About Clinic',
         },
         {
            href: '/contact-us',
            text: 'Book an Appointment',
         },
      ],
   },
   {
      title: ['Internationally', 'Acclaimed', 'Faculty Member'],
      mobileTitle: ['Internationally', 'Acclaimed', 'Faculty Member'],
      description:
         'According to our philosophy, hair surgery is not only science, art, technology, or numbers.Hair restoration is more than a surgery.  We know that it also directly affects the patient’s emotions. Therefore, your expectations and your emotions are extremely valuable to us.',
      imageSrc: '/images/hero-carousel/hero-3-dene.png',
      imageAlt: 'hero ozlem bicer 2',
      links: [
         {
            href: '/about-us/clinic-team',
            text: 'Read More About Clinic',
         },
         {
            href: '/contact-us',
            text: 'Book an Appointment',
         },
      ],
   },
];

export default function Hero() {
   return (
      <section className="relative fluid gridContainer bg-radial to-wine-brown from-20% from-coffee-dark pt-12 sm:pt-12 lg:pt-16 xl:pt-25 pb-52 md:pb-40 xl:pb-50">
         <div className="w-full fluid absolute inset-x-0 bottom-0 h-px bg-gold z-0" />
         <main className="w-full max-w-full xl:max-w-6xl mx-auto">
            <Swiper
               modules={[EffectFade, Autoplay]}
               effect="fade"
               spaceBetween={50}
               slidesPerView={3}
               loop={true}
               autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
               }}
            >
               {heroSlideItems.map((item, index) => (
                  <SwiperSlide key={index} className="w-full">
                     {({ isActive }) => (
                        <div
                           className={`w-full flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between gap-10 md:gap-15`}
                        >
                           <article className="order-2 lg:order-1 flex flex-col items-center lg:items-start gap-5 xl:gap-7.5 text-ivory-soft min-w-full lg:min-w-102.5">
                              <div
                                 className={`w-full flex items-end justify-start h-auto sm:h-37.5 lg:h-55 xl:h-60 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                              >
                                 <h2 className="hidden lg:flex flex-col items-start text-start justify-end font-bold text-[38px] sm:text-[50px] leading-11 lg:leading-14 xl:leading-15">
                                    {item.title.map((line, lineIndex) => (
                                       <span key={lineIndex} className="block text-nowrap">
                                          {line}
                                       </span>
                                    ))}
                                 </h2>
                                 <h2 className="flex lg:hidden flex-col items-start text-start justify-end font-bold text-[38px] sm:text-[50px] leading-11 lg:leading-14 xl:leading-15">
                                    {item.mobileTitle.map((line, lineIndex) => (
                                       <span key={lineIndex} className="block text-nowrap">
                                          {line}
                                       </span>
                                    ))}
                                 </h2>
                              </div>

                              <div
                                 className={`w-full flex items-start justify-start h-auto lg:h-42.5 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                              >
                                 <p className="line-clamp-6 text-start text-sm sm:text-base w-full max-w-full lg:max-w-100 xl:max-w-87.5">
                                    {item.description}
                                 </p>
                              </div>

                              <div
                                 className={`w-full flex flex-row items-center justify-end gap-3 sm:gap-6 h-auto lg:h-11 transition-all duration-500 mt-4 lg:mt-0 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                              >
                                 {item.links.map((link, linkIndex) => (
                                    <Link
                                       key={linkIndex}
                                       href={link.href}
                                       className={`rounded-[10px] py-2 xl:py-2.5 px-3 xl:px-3.75 text-xs lg:text-sm text-nowrap ${
                                          linkIndex === 0
                                             ? 'border border-ivory-soft text-ivory-soft hover:bg-ivory-soft/70 hover:text-coffee-dark hover:border-transparent transition-colors duration-200'
                                             : 'bg-ivory-soft text-coffee-dark hover:bg-ivory-soft/70 transition-colors duration-200'
                                       }`}
                                    >
                                       {link.text}
                                    </Link>
                                 ))}
                              </div>
                           </article>
                           <Image
                              src={item.imageSrc}
                              alt={item.imageAlt}
                              width={1200}
                              height={800}
                              //   className={`order-1 lg:order-2 object-cover lg:object-size object-center lg:object-top w-full lg:w-145 xl:w-165.5 h-70 sm:h-80 md:h-90 lg:h-110 xl:h-[496.5px] rounded-lg transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                              className={cn(
                                 'order-1 lg:order-2 object-cover lg:object-size object-center lg:object-top w-full lg:w-145 xl:w-165.5 h-80 md:h-110 xl:h-[496.5px] rounded-lg transition-all duration-500',
                                 isActive ? 'opacity-100' : 'opacity-0',
                                 {
                                    'object-top': index !== 0,
                                 },
                              )}
                           />
                        </div>
                     )}
                  </SwiperSlide>
               ))}
            </Swiper>
         </main>
      </section>
   );
}
