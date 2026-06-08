import React from 'react';
import Image from 'next/image';
import MotionScrollInView from '@/components/common/motionScrollInView';
import HowToAppointment from '@/components/common/howToAppointment';

const hairWashVideo = {
   videoId: 'G_oVzeLZNLU',
   title: 'Hair Washing After Hair Transplantation',
};

export default function HairWashMain() {
   return (
      <main className="relative fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft via-90% to-stone-beige">
         <section className="relative w-full fluid gridContainer">
            <header className="w-full fluid gridContainer">
               <main
                  id="hair-wash-video"
                  name="hair-wash-video"
                  className="w-full fluid gridContainer bg-linear-to-r from-coffee-dark via-wine-brown to-coffee-dark h-37.5 border-y border-gold py-2.5 text-ivory-soft"
               >
                  <div className="w-full fluid absolute inset-x-0 top-0 h-0.5 bg-gold z-0" />
                  <section className="w-full max-w-full xl:max-w-6xl mx-auto flex items-center justify-between gap-4">
                     <h1 className="flex flex-col text-[28px] sm:text-[32px] leading-tight">{hairWashVideo.title}</h1>
                     <Image
                        src="/images/gallery/Informative-Videos.svg"
                        alt="Hair wash video"
                        width={120}
                        height={120}
                        className="object-contain w-12 min-[330px]:w-14 sm:w-18 lg:w-22.5 h-12 min-[330px]:h-14 sm:h-18 lg:h-22.5"
                     />
                  </section>
               </main>
            </header>

            <MotionScrollInView className="w-full max-w-full xl:max-w-6xl mx-auto py-10 sm:py-16 lg:py-25">
               <article className="w-full max-w-4xl mx-auto bg-radial from-stone-beige to-ivory-soft rounded-[10px] p-2.5 sm:p-4 flex flex-col items-center justify-center shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                  <div className="relative w-full aspect-video overflow-hidden rounded-[5px] bg-coffee-dark">
                     <iframe
                        src={`https://www.youtube-nocookie.com/embed/${hairWashVideo.videoId}?rel=0&modestbranding=1&playsinline=1`}
                        title={hairWashVideo.title}
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                        allowFullScreen
                        loading="lazy"
                        className="absolute inset-0 size-full border-0"
                     />
                  </div>
               </article>
            </MotionScrollInView>
         </section>
         <HowToAppointment className="pt-0 pb-15" />
      </main>
   );
}
