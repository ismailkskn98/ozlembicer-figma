'use client';
import MotionLeftView from '@/components/common/motionLeftView';
import MotionRightView from '@/components/common/motionRightView';
import Image from 'next/image';
import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { Dialog, DialogContent, DialogClose, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const VIDEO_ID = 'tZJYbeCH_Ac';

export default function OzlemBicerHero() {
   const [open, setOpen] = useState(false);

   return (
      <main className="relative fluid gridContainer w-full bg-radial from-coffee-dark to-wine-brown pt-12 lg:pt-25 pb-50 overflow-hidden">
         <div className="w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0" />
         <section className="w-full max-w-full xl:max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-10">
            <MotionLeftView className="order-2 lg:order-1 w-full max-w-full lg:max-w-141">
               <article className="w-full flex flex-col items-start gap-7.5 text-ivory-soft">
                  <h1 className="text-[40px] sm:text-[45px] lg:text-[50px] xl:text-[56px] 2xl:text-[64px] leading-10 sm:leading-12 lg:leading-14 xl:leading-18 flex flex-col items-start">
                     Who Is <span className="font-bold">Dr. Ozlem Bicer</span>
                  </h1>
                  <div className="w-full">
                     <p className="text-sm sm:text-base">
                        Dr. Özlem Biçer was born in 1973 in İstanbul. She completed her secondary education at Anakent College in 1991 and graduated from the Faculty of Medicine at Trakya
                        University in 1998. Following her medical degree, she completed a certified training program in hair surgery organized by the Ministry of Health of the Republic of
                        Turkey and received official authorization to perform hair transplantation procedures.
                        <br />
                        <br />
                     </p>
                     <p className="text-sm sm:text-base">
                        In 2002, Dr. Biçer further expanded her expertise through advanced training in France, focusing on hair loss treatments, mesotherapy, and medical aesthetics. <br />
                        <br />
                     </p>
                     <p className="text-sm sm:text-base">
                        Dr. Biçer is a hair transplant surgeon with over 25 years of medical experience. She has been performing both FUE (Follicular Unit Extraction) and FUT (Follicular
                        Unit Transplantation) procedures throughout her career. Between 1999 and 2002, she worked in several private clinics in İstanbul, specializing in aesthetic medicine
                        and hair surgery. Since 2002, she has been performing hair transplantation procedures at her own licensed and authorized clinic.
                        <br />
                        <br />
                     </p>
                  </div>
               </article>
            </MotionLeftView>
            <MotionRightView className="order-1 lg:order-2 w-full max-w-full lg:max-w-140.5">
               <div className="relative group w-full max-w-full lg:max-w-135 2xl:max-w-140.5 mx-auto cursor-pointer" onClick={() => setOpen(true)}>
                  <Image
                     src="/images/about/ozlem-hero-1.png"
                     alt="Dr. Özlem Bicer"
                     width={1200}
                     height={800}
                     className="object-cover lg:object-contain object-[50%_15%] lg:object-center w-full h-fit max-h-100 sm:max-h-130 md:max-h-150 lg:max-h-fit rounded-2xl lg:rounded-4xl"
                  />
                  <div className="absolute left-1/2 top-1/2 -translate-1/2 z-10 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
                     <div className="bg-wine-brown/50 group-hover:scale-105 group-hover:bg-wine-brown/80 transition-all duration-200 flex size-24 items-center justify-center rounded-full">
                        <Play className="size-8 scale-110 stroke-ivory-soft/60 transition-transform duration-200 ease-out group-hover:scale-115" />
                     </div>
                  </div>
               </div>
            </MotionRightView>

            <Dialog open={open} onOpenChange={setOpen}>
               <DialogHeader className="hidden">
                  <DialogTitle />
                  <DialogDescription />
               </DialogHeader>
               <DialogContent
                  showCloseButton={false}
                  className="bg-radial from-coffee-dark to-wine-brown rounded-[10px] p-2.5 h-full max-h-[50vh] md:max-h-[60vh] w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[50vw] flex flex-col items-start gap-2 border-none shadow-none"
               >
                  <DialogClose className="absolute -top-3 -right-3 z-20 rounded-full bg-ivory-soft/95 p-1.5 md:p-2 shadow-md hover:scale-105 transition cursor-pointer">
                     <X className="w-5 h-5 text-black" />
                  </DialogClose>
                  <div className="relative overflow-hidden w-full h-full">
                     {open && (
                        <iframe
                           src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                           title="Dr. Özlem Biçer Video"
                           allow="autoplay; fullscreen; picture-in-picture"
                           allowFullScreen
                           className="size-full rounded-lg border-0"
                        />
                     )}
                  </div>
               </DialogContent>
            </Dialog>
         </section>
      </main>
   );
}
