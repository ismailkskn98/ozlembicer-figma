import React from 'react';
import Image from 'next/image';
import VideoCarousel from './videoCarousel';
import MotionScrollInView from '@/components/common/motionScrollInView';

export default function VideoGallerySection({ id, title, iconSrc = '/images/before-after-icon-nobg-white.svg', videos = [], delay = 4000 }) {
   return (
      <section className="relative w-full fluid gridContainer">
         <header className="w-full fluid gridContainer">
            <main id={id} name={id} className="w-full fluid gridContainer bg-linear-to-r from-coffee-dark via-wine-brown to-coffee-dark h-37.5 border-y border-gold py-2.5 text-ivory-soft">
               <div className="w-full fluid absolute inset-x-0 top-0 h-0.5 bg-gold z-0" />
               <section className="w-full max-w-full xl:max-w-6xl mx-auto flex items-center justify-between gap-4">
                  <h2 className="flex flex-col text-[32px]">{title}</h2>
                  {iconSrc && (
                     <Image src={iconSrc} alt={id} width={120} height={120} className="object-contain w-12 min-[330px]:w-14 sm:w-18 lg:w-22.5 h-12 min-[330px]:h-14 sm:h-18 lg:h-22.5" />
                  )}
               </section>
            </main>
         </header>
         <MotionScrollInView className="w-full max-w-full xl:max-w-6xl mx-auto py-10 sm:py-16 lg:py-25">
            <VideoCarousel videos={videos} delay={delay} />
         </MotionScrollInView>
      </section>
   );
}
