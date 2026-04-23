'use client';
import React, { useId, useState } from 'react';
import Image from 'next/image';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { X } from 'lucide-react';
import { Navigation, Autoplay, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Dialog, DialogContent, DialogClose, DialogHeader } from '@/components/ui/dialog';
import PatientResultCard from './patientResultCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';

const localCarouselItems = [
   {
      beforeImage: '/images/patient-results/before.png',
      afterImage: '/images/patient-results/after.png',
      videoId: 'dA8T22ACZUQ',
      technique1: 'FUE',
      technique2: '(Micro Motor)',
      grafts: '3.200',
      afterMonths: '12 Months',
   },
   {
      beforeImage: '/images/patient-results/before.png',
      afterImage: '/images/patient-results/after.png',
      videoId: 'DOSoDn9jTik',
      technique1: 'FUE',
      technique2: '(Micro Motor)',
      grafts: '3.200',
      afterMonths: '12 Months',
   },
   {
      beforeImage: '/images/patient-results/before.png',
      afterImage: '/images/patient-results/after.png',
      videoId: 'eJfmg7s300I',
      technique1: 'FUE',
      technique2: '(Micro Motor)',
      grafts: '3.200',
      afterMonths: '12 Months',
   },
   {
      beforeImage: '/images/patient-results/before.png',
      afterImage: '/images/patient-results/after.png',
      videoId: 'XfbQBWUzApg',
      technique1: 'FUE',
      technique2: '(Micro Motor)',
      grafts: '3.200',
      afterMonths: '12 Months',
   },
   {
      beforeImage: '/images/patient-results/before.png',
      afterImage: '/images/patient-results/after.png',
      videoId: 'YPsYtiYt4pU',
      technique1: 'FUE',
      technique2: '(Micro Motor)',
      grafts: '3.200',
      afterMonths: '12 Months',
   },
   {
      beforeImage: '/images/patient-results/before.png',
      afterImage: '/images/patient-results/after.png',
      videoId: 'VHkHD-hfHJw',
      technique1: 'FUE',
      technique2: '(Micro Motor)',
      grafts: '3.200',
      afterMonths: '12 Months',
   },
   {
      beforeImage: '/images/patient-results/before.png',
      afterImage: '/images/patient-results/after.png',
      videoId: 'sHLV0jLvKVs',
      technique1: 'FUE',
      technique2: '(Micro Motor)',
      grafts: '3.200',
      afterMonths: '12 Months',
   },
   {
      beforeImage: '/images/patient-results/before.png',
      afterImage: '/images/patient-results/after.png',
      videoId: 'WB0I5IlAqjg',
      technique1: 'FUE',
      technique2: '(Micro Motor)',
      grafts: '3.200',
      afterMonths: '12 Months',
   },
   {
      beforeImage: '/images/patient-results/before.png',
      afterImage: '/images/patient-results/after.png',
      videoId: 'twv7tvc9kLk',
      technique1: 'FUE',
      technique2: '(Micro Motor)',
      grafts: '3.200',
      afterMonths: '12 Months',
   },
   {
      beforeImage: '/images/patient-results/before.png',
      afterImage: '/images/patient-results/after.png',
      videoId: 'flJH-2Ubx6w',
      technique1: 'FUE',
      technique2: '(Micro Motor)',
      grafts: '3.200',
      afterMonths: '12 Months',
   },
   {
      beforeImage: '/images/patient-results/before.png',
      afterImage: '/images/patient-results/after.png',
      videoId: 'ruQQ42ZlJVc',
      technique1: 'FUE',
      technique2: '(Micro Motor)',
      grafts: '3.200',
      afterMonths: '12 Months',
   },
];

export default function PatientResultCarousel({ carouselItems = [], showNavigation = true, delay = 4000, slidesPerView = 3, rows = 1 }) {
   const id = useId();
   const prevId = `patient-prev-${id}`;
   const nextId = `patient-next-${id}`;
   const defaultCarouselItems = carouselItems.length > 0 ? carouselItems : localCarouselItems;
   const [selectedItem, setSelectedItem] = useState(null);
   const [selectedIndex, setSelectedIndex] = useState(null);

   return (
      <div className="w-full xl:max-w-262 mx-auto flex flex-col items-center justify-center gap-5 sm:gap-7">
         <Swiper
            modules={[Navigation, Autoplay, ...(rows > 1 ? [Grid] : [])]}
            grid={rows > 1 ? { rows, fill: 'row' } : undefined}
            slidesPerView={slidesPerView}
            slidesPerGroup={1}
            breakpoints={{
               900: { slidesPerView: 3, spaceBetween: 50 },
               500: { slidesPerView: 2, spaceBetween: 20 },
               100: { slidesPerView: 1.3, spaceBetween: 15 },
            }}
            centeredSlides={rows === 1}
            centeredSlidesBounds={rows === 1}
            navigation={showNavigation ? { prevEl: `#${prevId}`, nextEl: `#${nextId}` } : false}
            loop={rows === 1}
            rewind={rows > 1}
            autoplay={{
               delay: delay,
               disableOnInteraction: false,
               pauseOnMouseEnter: true,
            }}
            observer={true}
            observeParents={true}
            className="w-full relative"
         >
            {defaultCarouselItems.map((item, index) => (
               <SwiperSlide className="py-3 w-full" key={index}>
                  <div
                     role="button"
                     tabIndex={0}
                     onClick={() => {
                        setSelectedItem(item);
                        setSelectedIndex(index);
                     }}
                     onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                           setSelectedItem(item);
                           setSelectedIndex(index);
                        }
                     }}
                     className="cursor-pointer"
                  >
                     <PatientResultCard item={item} index={index} />
                  </div>
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
         <Dialog
            open={!!selectedItem}
            onOpenChange={(open) => {
               if (!open) {
                  setSelectedItem(null);
                  setSelectedIndex(null);
               }
            }}
         >
            {selectedItem && (
               <>
                  <DialogHeader className="hidden">
                     <DialogTitle></DialogTitle>
                     <DialogDescription></DialogDescription>
                  </DialogHeader>
                  <DialogContent showCloseButton={false} className="max-w-[90vw] md:max-w-150 p-0 border-0 bg-transparent shadow-none animate-in zoom-in-95 fade-in duration-200">
                     <DialogClose className="absolute -top-3 -right-3 z-20 rounded-full bg-white/95 p-1.5 md:p-2 shadow-md hover:scale-105 transition cursor-pointer">
                        <X className="w-5 h-5 text-black" />
                     </DialogClose>
                     {selectedItem.videoId ? (
                        <section className="bg-linear-to-b from-stone-beige to-ivory-soft rounded-[10px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] p-4 md:p-5 w-full max-w-205">
                           <div className="w-full h-full flex flex-col items-center justify-between rounded-[10px] gap-4 md:gap-6">
                              <div className="relative w-full aspect-274/240 rounded-[5px] overflow-hidden bg-black">
                                 <iframe
                                    src={`https://www.youtube-nocookie.com/embed/${selectedItem.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                                    title="Patient result video"
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full border-0"
                                 />
                              </div>
                              <article className="w-full grid grid-cols-3 place-content-stretch justify-items-stretch bg-coffee-dark text-ivory-soft rounded-[5px] px-4 py-3 min-h-96px">
                                 <div className="relative flex flex-col items-center justify-center text-center gap-px">
                                    <h5 className="font-bold text-sm md:text-base">TECHNIQUE</h5>
                                    <Image src="/images/heroCard-line.webp" alt="line" width={60} height={5} className="h-fit object-contain object-center w-16" />
                                    <p className="text-xs md:text-sm">
                                       {selectedItem.technique1}
                                       <br />
                                       {selectedItem.technique2}
                                    </p>
                                 </div>
                                 <div className="relative flex flex-col items-center justify-center text-center gap-px">
                                    <h5 className="font-bold text-sm md:text-base">GRAFTS</h5>
                                    <Image src="/images/heroCard-line.webp" alt="line" width={60} height={5} className="h-fit object-contain object-center w-16" />
                                    <p className="text-xs md:text-sm">{selectedItem.grafts}</p>
                                 </div>
                                 <div className="relative flex flex-col items-center justify-center text-center gap-px">
                                    <h5 className="font-bold text-sm md:text-base">AFTER</h5>
                                    <Image src="/images/heroCard-line.webp" alt="line" width={60} height={5} className="h-fit object-contain object-center w-16" />
                                    <p className="text-xs md:text-sm">{selectedItem.afterMonths}</p>
                                 </div>
                              </article>
                           </div>
                        </section>
                     ) : (
                        <PatientResultCard item={selectedItem} index={selectedIndex ?? 0} large />
                     )}
                  </DialogContent>
               </>
            )}
         </Dialog>
      </div>
   );
}
