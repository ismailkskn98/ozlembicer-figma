import Image from 'next/image';
import React from 'react';
import PhotoGallery from './clinicGallery';
import MotionRightView from '@/components/common/motionRightView';
import MotionLeftView from '@/components/common/motionLeftView';
import ClinicVideo from './clinicVideo';

export default function Clinic() {
   return (
      <section className="relative fluid gridContainer w-full bg-wine-brown pt-12 sm:pt-18.25 pb-20 sm:pb-25 lg:pb-36">
         <div className="w-full fluid absolute inset-x-0 top-0 h-0.5 bg-gold z-0" />
         <div className="w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0" />
         <main className="w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-start gap-4">
            <h2 className="text-ivory-soft text-[32px]">Clinic</h2>
            <div className="w-full grid lg:grid-cols-2 justify-items-stretch gap-12 xl:gap-32">
               <MotionLeftView className="order-2 lg:order-1 flex-1 w-full lg:max-w-120 flex">
                  <PhotoGallery />
               </MotionLeftView>
               <MotionRightView className="relative w-full order-1 lg:order-2 mx-auto h-full max-h-120 min-h-120 lg:min-h-157 lg:max-h-157.5 flex-1 rounded-[5px] lg:rounded-[5px]">
                  <ClinicVideo />
               </MotionRightView>
            </div>
         </main>
      </section>
   );
}
