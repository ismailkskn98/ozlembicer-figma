import MotionLeftView from '@/components/common/motionLeftView';
import MotionRightView from '@/components/common/motionRightView';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import React from 'react';

export default function AestheticAndArt() {
   const a = 5;
   return (
      <section className="relative fluid gridContainer w-full py-15 lg:py-25 bg-radial from-coffee-dark to-wine-brown overflow-hidden">
         <div className="w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0" />
         <div className="w-full fluid absolute inset-x-0 top-0 h-0.5 bg-gold z-0" />
         <main className="relative z-20 w-full max-w-full xl:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            <MotionLeftView className="flex order-2 lg:order-1">
               <article className="flex-1 flex flex-col item-start justify-between gap-5 sm:gap-7.5 text-ivory-soft">
                  <h2 className="text-[30px] sm:text-[48px] xl:text-[64px] flex flex-col leading-8 sm:leading-13 xl:leading-20">
                     Aesthetic Is
                     <br />
                     <span className="font-bold">
                        Where Art and
                        <br />
                        Medicine Meets
                     </span>
                  </h2>
                  <div className="w-full flex flex-col items-start text-start lg:max-w-134">
                     <p className="">
                        Since 1998, I have been dedicated to the field of hair restoration and hair transplantation. At
                        my clinic, we provide a high standard of medical care and professional expertise, with a clear
                        focus on achieving natural, healthy, and long-lasting results for our patients.
                     </p>
                     <br />
                     <p className="">
                        Over the years, we have built a strong reputation by combining surgical experience, advanced
                        technology, and strict adherence to safe and ethical medical practices. Every treatment is
                        carefully planned and tailored to the individual needs of each patient.
                     </p>
                     <br />
                     <p className="">
                        If you are seeking a world-class hair transplant clinic that prioritizes medical excellence,
                        natural outcomes, and patient care, my experienced medical team and I are here to guide you
                        through every step of your journey.
                        <br />
                        Özlem Biçer, M.D.
                     </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-3 lg:gap-6">
                     <Link
                        href="/about-us/dr-ozlem-bicer"
                        className="rounded-[10px] py-2 xl:py-2.5 px-3 xl:px-3.75 text-xs lg:text-sm border border-ivory-soft text-ivory-soft hover:bg-ivory-soft/70 hover:text-coffee-dark hover:border-transparent transition-colors duration-200"
                     >
                        Read More About Dr.Bicer
                     </Link>
                     <Link
                        href="/contact"
                        className="rounded-[10px] py-2 xl:py-2.5 px-3 xl:px-3.75 text-xs lg:text-sm bg-ivory-soft text-coffee-dark hover:bg-ivory-soft/70 transition-colors duration-200"
                     >
                        Book an Appointment
                     </Link>
                  </div>
               </article>
            </MotionLeftView>
            <MotionRightView className="w-full mx-auto max-w-full lg:max-w-141 h-full order-1 lg:order-2">
               <div className="relative w-full h-120 lg:h-180 xl:h-199 rounded-2xl lg:rounded-4xl overflow-hidden">
                  <Image
                     src="/images/aestheticAndArt.png"
                     alt="aesthetic and art"
                     fill
                     className="object-cover lg:object-contain object-center w-full h-full rounded-2xl lg:rounded-4xl"
                  />
               </div>
            </MotionRightView>
         </main>
      </section>
   );
}
