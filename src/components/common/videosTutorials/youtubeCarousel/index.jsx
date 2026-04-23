'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import Image from 'next/image';
import ModalVideo from './modalVideo';
import youtubeCacheVideos from '@/youtube.json';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { Play } from 'lucide-react';

export default function YoutubeCarousel({ videos = [] }) {
   if (!videos || videos.length === 0) {
      videos = youtubeCacheVideos;
   }

   return (
      <section className="w-full max-w-full xl:max-w-262 mx-auto flex flex-col items-center justify-center gap-y-5 sm:gap-y-7">
         <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={3}
            breakpoints={{
               900: { slidesPerView: 3, spaceBetween: 50 },
               500: { slidesPerView: 2, spaceBetween: 20 },
               100: { slidesPerView: 1.3, spaceBetween: 15 },
            }}
            centeredSlides={true}
            centeredSlidesBounds={true}
            scrollbar={{ draggable: true }}
            navigation={{
               prevEl: '#youtube-prev',
               nextEl: '#youtube-next',
            }}
            loop={true}
            autoplay={{
               delay: 3000,
               disableOnInteraction: false,
            }}
            className="w-full"
         >
            {videos.map((item, i) => (
               <SwiperSlide key={i} className="w-full py-3">
                  <ModalVideo
                     title={item.snippet.title}
                     description={item.snippet.description}
                     videoSrc={`https://www.youtube.com/embed/${item.id.videoId}?si=oTPj5Q6sfN3Vuxav`}
                     thumbnail={item.snippet.thumbnails.medium}
                  >
                     <div className="relative group aspect-6/5 bg-radial from-stone-beige to-ivory-soft rounded-[10px] p-2.5 flex! flex-col items-center! justify-between! gap-2 sm:gap-5 cursor-pointer overflow-hidden shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                        <Image
                           src={item.snippet.thumbnails.medium.url}
                           alt={item.snippet.title}
                           width={item.snippet.thumbnails.medium.width}
                           height={item.snippet.thumbnails.medium.height}
                           className="relative z-10 object-cover object-center w-full rounded-[5px] aspect-28/15"
                        />
                        <div className="absolute inset-x-0 top-1/3 -translate-y-1/3 z-20 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100 ">
                           <div className="bg-stone-beige/50 flex size-14 items-center justify-center rounded-full">
                              <Play className="size-5 scale-110 stroke-ivory-soft transition-transform duration-200 ease-out group-hover:scale-115" />
                           </div>
                        </div>
                        <div className="w-full bg-wine-brown p-2.5 rounded-[5px] aspect-14/3 flex items-center justify-center">
                           <div className="flex flex-col items-center justify-center text-center relative z-50 text-ivory-soft text-[10px]">
                              <h4 className="font-bold uppercase line-clamp-1"> {item.snippet.title}</h4>
                              {item.snippet.description.length > 0 && <p className="sm:block hidden lowercase line-clamp-2">{item.snippet.description}</p>}
                           </div>
                        </div>
                     </div>
                  </ModalVideo>
               </SwiperSlide>
            ))}
         </Swiper>
         <div className="flex items-center justify-center gap-6">
            <div id="youtube-prev" className="p-1.5 cursor-pointer hover:bg-gold/50 transition duration-200 rounded-full">
               <IoIosArrowDropleft className="w-5 h-5 text-coffee-dark" />
            </div>
            <div id="youtube-next" className="p-1.5 cursor-pointer hover:bg-gold/50 transition duration-200 rounded-full">
               <IoIosArrowDropright className="w-5 h-5 text-coffee-dark" />
            </div>
         </div>
      </section>
   );
}
