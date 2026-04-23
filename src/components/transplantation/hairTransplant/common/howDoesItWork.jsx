'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Play, X } from 'lucide-react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import HowDoesItWorksMobilCarousel from './howDoesItWorksMobilCarousel';

export default function HowDoesItWork({ images = [], videos = [], title = [], content = [], children, className }) {
   const [activeVideoId, setActiveVideoId] = useState(null);

   const RecursiveList = ({ items }) => {
      return (
         <ul className="list-disc list-outside pl-5 text-sm lg:text-base">
            {items.map((item, index) => (
               <li key={index}>
                  {item.text || item}
                  {item.children && <RecursiveList items={item.children} />}
               </li>
            ))}
         </ul>
      );
   };
   return (
      <main className={cn('w-full max-w-6xl mx-auto gap-6 grid grid-cols-1 min-[900px]:grid-cols-3 text-coffee-dark', className)}>
         <section className="hidden min-[900px]:flex flex-col items-start gap-2.5 h-full">
            {videos.length > 0
               ? videos.map((video, index) => (
                    <button
                       key={index}
                       type="button"
                       onClick={() => setActiveVideoId(video.videoId)}
                       className="relative group w-full overflow-hidden rounded-[5px] cursor-pointer aspect-368/280"
                    >
                       <Image src={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`} alt={video.alt || `Video ${index + 1}`} fill className="object-cover" />
                       <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-200" />
                       <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100 ">
                          <div className="bg-stone-beige/50 flex size-14 items-center justify-center rounded-full">
                             <Play className="size-5 scale-110 stroke-ivory-soft transition-transform duration-200 ease-out group-hover:scale-115" />
                          </div>
                       </div>
                    </button>
                 ))
               : images.map((image, index) => (
                    <div key={index} className="relative w-full overflow-hidden aspect-368/280">
                       <Image src={image.src} alt={image.alt} fill className="object-cover" />
                    </div>
                 ))}
         </section>

         <Dialog
            open={!!activeVideoId}
            onOpenChange={(o) => {
               if (!o) setActiveVideoId(null);
            }}
         >
            <DialogHeader className="hidden">
               <DialogTitle />
               <DialogDescription />
            </DialogHeader>
            <DialogContent
               showCloseButton={false}
               className="bg-radial from-stone-beige to-ivory-soft rounded-[10px] p-2.5 h-full max-h-[50vh] md:max-h-[60vh] w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[50vw] flex flex-col items-start gap-2 border-none shadow-none"
            >
               <DialogClose className="absolute -top-3 -right-3 z-20 rounded-full bg-ivory-soft/95 p-1.5 md:p-2 shadow-md hover:scale-105 transition cursor-pointer">
                  <X className="w-5 h-5 text-black" />
               </DialogClose>
               <div className="relative overflow-hidden w-full h-full">
                  {activeVideoId && (
                     <iframe
                        src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                        title="Video"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        className="size-full rounded-lg border-0"
                     />
                  )}
               </div>
            </DialogContent>
         </Dialog>
         <section
            className={cn('w-full flex flex-col items-start gap-6', {
               'col-span-1 min-[900px]:col-span-3': videos.length === 0 && images.length === 0,
               'min-[900px]:col-span-2': videos.length > 0 || images.length > 0,
            })}
         >
            {title.length > 0 && content.length > 0 && (
               <article className="w-full flex flex-col items-start gap-4 lg:gap-9">
                  <h3 className="text-base lg:text-[20px] font-bold flex flex-col items-start leading-6">
                     {title.map((text, index) => (
                        <span key={index}>{text}</span>
                     ))}
                  </h3>
                  <div className="w-full flex flex-col items-start gap-4">
                     {content.map((item, index) => {
                        if (item.type === 'heading') {
                           return (
                              <h4 key={index} className="text-sm lg:text-base font-bold -mb-3">
                                 {item.value}
                              </h4>
                           );
                        }
                        if (item.type === 'paragraph') {
                           return (
                              <p key={index} className="text-sm lg:text-base">
                                 {item.value}
                              </p>
                           );
                        }
                        if (item.type === 'list') {
                           return <RecursiveList key={index} items={item.value} />;
                        }
                        return null;
                     })}
                  </div>
               </article>
            )}
            {children}
         </section>
         <HowDoesItWorksMobilCarousel images={images} videos={videos} />
      </main>
   );
}
