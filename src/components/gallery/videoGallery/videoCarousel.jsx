'use client';
import React, { useId } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import Image from 'next/image';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Play, X } from 'lucide-react';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

function VideoCard({ item, index }) {
   const thumbnail = item.thumbnail || `https://i.ytimg.com/vi/${item.videoId}/mqdefault.jpg`;

   return (
      <Dialog>
         <DialogTrigger asChild className="cursor-pointer!">
            <div className="relative group aspect-6/5 bg-radial from-stone-beige to-ivory-soft rounded-[10px] p-2.5 flex! flex-col items-center! justify-between! gap-2 cursor-pointer overflow-hidden shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
               <Image
                  src={thumbnail}
                  alt={item.title || `Video ${index + 1}`}
                  width={320}
                  height={180}
                  className="relative z-10 object-cover object-center w-full rounded-[5px] aspect-28/15"
               />
               <div className="absolute inset-x-0 top-1/3 -translate-y-1/3 z-20 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
                  <div className="bg-stone-beige/50 flex size-14 items-center justify-center rounded-full">
                     <Play className="size-5 scale-110 stroke-ivory-soft transition-transform duration-200 ease-out group-hover:scale-115" />
                  </div>
               </div>
               <div className="w-full bg-wine-brown p-2.5 rounded-[5px] aspect-14/3 flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center text-center relative z-50 text-ivory-soft text-[10px]">
                     <h4 className="font-bold uppercase line-clamp-1">{item.title || ''}</h4>
                  </div>
               </div>
            </div>
         </DialogTrigger>
         <DialogContent
            showCloseButton={false}
            className="bg-radial from-stone-beige to-ivory-soft rounded-[10px] p-2.5 h-full max-h-[50vh] md:max-h-[60vh] w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[50vw] flex flex-col items-start gap-2 border-none shadow-none"
         >
            <DialogClose className="absolute -top-3 -right-3 z-20 rounded-full bg-ivory-soft/95 p-1.5 md:p-2 shadow-md hover:scale-105 transition cursor-pointer">
               <X className="w-5 h-5 text-black" />
            </DialogClose>
            <div className="relative overflow-hidden w-full h-full">
               <iframe
                  src={`https://www.youtube-nocookie.com/embed/${item.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title={item.title || 'Video'}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="size-full rounded-lg border-0"
               />
            </div>
            <DialogHeader className="hidden">
               <DialogTitle />
               <DialogDescription />
            </DialogHeader>
         </DialogContent>
      </Dialog>
   );
}

export default function VideoCarousel({ videos = [], showNavigation = true, delay = 4000, rows = 2 }) {
   const id = useId();
   const prevId = `video-prev-${id}`;
   const nextId = `video-next-${id}`;

   return (
      <div className="w-full xl:max-w-262 mx-auto flex flex-col items-center justify-center gap-5 sm:gap-7">
         <Swiper
            modules={[Navigation, Autoplay, ...(rows > 1 ? [Grid] : [])]}
            grid={rows > 1 ? { rows, fill: 'row' } : undefined}
            breakpoints={{
               900: { slidesPerView: 3, spaceBetween: 50 },
               500: { slidesPerView: 2, spaceBetween: 20 },
               100: { slidesPerView: 1.3, spaceBetween: 15 },
            }}
            centeredSlides={rows === 1}
            centeredSlidesBounds={rows === 1}
            navigation={showNavigation ? { prevEl: `#${prevId}`, nextEl: `#${nextId}` } : false}
            rewind={rows > 1}
            autoplay={{ delay, disableOnInteraction: false, pauseOnMouseEnter: true }}
            observer={true}
            observeParents={true}
            className="w-full"
         >
            {videos.map((item, index) => (
               <SwiperSlide className="py-3 w-full" key={index}>
                  <VideoCard item={item} index={index} />
               </SwiperSlide>
            ))}
         </Swiper>
         {showNavigation && (
            <article className="flex items-center justify-center gap-6">
               <div id={prevId} className="p-1.5 cursor-pointer hover:bg-gold/50 transition duration-200 rounded-full">
                  <IoIosArrowDropleft className="w-5 h-5 text-coffee-dark" />
               </div>
               <div id={nextId} className="p-1.5 cursor-pointer hover:bg-gold/50 transition duration-200 rounded-full">
                  <IoIosArrowDropright className="w-5 h-5 text-coffee-dark" />
               </div>
            </article>
         )}
      </div>
   );
}
