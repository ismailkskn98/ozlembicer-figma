'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Play, X } from 'lucide-react';

export default function HowDoesItWorksMobilCarousel({ images = [], videos = [] }) {
   const items = videos.length > 0 ? videos : images;
   const isVideo = videos.length > 0;

   return (
      <section className="min-[900px]:hidden w-full col-span-full">
         <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={3}
            breakpoints={{
               900: {
                  slidesPerView: 3,
                  spaceBetween: 50,
               },
               600: {
                  slidesPerView: 3,
                  spaceBetween: 20,
               },
               100: {
                  slidesPerView: 1.3,
                  spaceBetween: 15,
               },
            }}
            centeredSlides={true}
            centeredSlidesBounds={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full"
         >
            {items.map((item, index) => (
               <SwiperSlide key={index} className="py-3">
                  <Dialog>
                     <DialogTrigger asChild className="cursor-pointer!">
                        <div className="relative group aspect-6/4 bg-radial from-stone-beige to-ivory-soft rounded-[10px] p-2.5 flex flex-col items-center justify-between gap-2 cursor-pointer overflow-hidden shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                           {isVideo ? (
                              <video src={item.src} className="relative z-10 object-cover object-center rounded-[5px] w-full h-full" muted loop playsInline autoPlay />
                           ) : (
                              <Image src={item.src} alt={item.alt} width={600} height={400} className="relative z-10 object-cover object-center rounded-[5px] w-full h-full" />
                           )}
                           <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
                              <div className="bg-black/20 flex size-14 items-center justify-center rounded-full">
                                 <Play className="size-5 scale-110 stroke-black/35 transition-transform duration-200 ease-out group-hover:scale-115" />
                              </div>
                           </div>
                        </div>
                     </DialogTrigger>
                     <DialogContent
                        showCloseButton={false}
                        className="bg-radial from-stone-beige to-ivory-soft rounded-[10px] p-2.5 h-full max-h-[40vh] md:max-h-[40vh] w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[50vw] flex flex-col items-start gap-2 border-none shadow-none"
                     >
                        <DialogClose className="absolute -top-3 -right-3 z-20 rounded-full bg-white/95 p-1.5 md:p-2 shadow-md hover:scale-105 transition cursor-pointer">
                           <X className="w-5 h-5 text-black" />
                        </DialogClose>
                        <div className="relative overflow-hidden w-full h-full">
                           {isVideo ? (
                              <video src={item.src} className="size-full rounded-lg object-cover" controls autoPlay playsInline />
                           ) : (
                              <Image src={item.src} alt={item.alt} fill className="object-cover rounded-lg" />
                           )}
                        </div>
                        <DialogHeader className="hidden">
                           <DialogTitle></DialogTitle>
                           <DialogDescription></DialogDescription>
                        </DialogHeader>
                     </DialogContent>
                  </Dialog>
               </SwiperSlide>
            ))}
         </Swiper>
      </section>
   );
}
