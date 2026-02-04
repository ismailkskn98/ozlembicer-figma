"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import Image from "next/image";
import ModalVideo from "./modalVideo";
import youtubeCacheVideos from "@/youtube.json";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export default function YoutubeCarousel({ videos = [] }) {
  if (!videos || videos.length === 0) {
    videos = youtubeCacheVideos;
  }

  return (
    <section className="w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-center justify-center gap-y-6 sm:gap-y-7">
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={3}
        breakpoints={{
          900: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          100: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
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
          <SwiperSlide key={i} className="w-full">
            <div className="relative group h-full bg-ivory-soft rounded-[10px] p-2.5 flex! flex-col items-center! justify-between! gap-2.5 cursor-pointer overflow-hidden">
              <Image
                src={item.snippet.thumbnails.medium.url}
                alt={item.snippet.title}
                width={item.snippet.thumbnails.medium.width}
                height={item.snippet.thumbnails.medium.height}
                className="relative z-10 object-cover object-center w-full rounded-[5px] h-40 sm:h-52"
              />
              <ModalVideo title={item.snippet.title} description={item.snippet.description} videoSrc={`https://www.youtube.com/embed/${item.id.videoId}?si=oTPj5Q6sfN3Vuxav`} />
              <div className="w-full bg-wine-brown p-2.5 rounded-[5px] min-h-12 sm:min-h-18 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center text-center relative z-50 text-ivory-soft text-[10px] sm:text-[12px]">
                  <h4 className="font-bold uppercase line-clamp-1"> {item.snippet.title}</h4>
                  {item.snippet.description.length > 0 && <p className="sm:block hidden  lowercase line-clamp-2">{item.snippet.description}</p>}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-center gap-6">
        <div id="youtube-prev">
          <IoIosArrowDropleft className="w-10 h-10 text-coffee-dark cursor-pointer hover:bg-gold/30 p-2 transition duration-200 rounded-full" />
        </div>
        <div id="youtube-next">
          <IoIosArrowDropright className="w-10 h-10 text-coffee-dark cursor-pointer hover:bg-gold/30 p-2 transition duration-200 rounded-full" />
        </div>
      </div>
    </section>
  );
}
