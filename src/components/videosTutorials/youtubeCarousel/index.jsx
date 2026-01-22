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
    <main className="relative fluid gridContainer">
      <section className="w-full max-w-262 flex flex-col items-center justify-center gap-7">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={75}
          slidesPerView={3}
          breakpoints={{
            900: {
              slidesPerView: 3,
            },
            500: {
              slidesPerView: 3,
            },
            100: {
              slidesPerView: 2,
            },
          }}
          scrollbar={{ draggable: true }}
          navigation={{
            prevEl: '#youtube-prev',
            nextEl: '#youtube-next',
          }}
          loop={true}
          autoplay={{
            delay: 400000,
            disableOnInteraction: false,
          }}
          className="w-full h-50 md:h-62.5"
        >
          {videos.map((item, i) => (
            <SwiperSlide key={i} className="relative group h-full bg-ivory-soft rounded-[10px] p-2.5 flex! flex-col items-center! justify-center! gap-5 cursor-pointer overflow-hidden">
              <Image
                src={item.snippet.thumbnails.medium.url}
                alt={item.snippet.title}
                width={item.snippet.thumbnails.medium.width}
                height={item.snippet.thumbnails.medium.height}
                className="relative z-10 object-cover object-center w-full rounded-[5px]"
              />
              <ModalVideo title={item.snippet.title} description={item.snippet.description} videoSrc={`https://www.youtube.com/embed/${item.id.videoId}?si=oTPj5Q6sfN3Vuxav`} />
              <div className="w-full bg-wine-brown p-2.5 rounded-[5px]">
                <div className="flex flex-col items-center justify-center text-center relative z-50 text-ivory-soft text-[8px]">
                  <h4 className="font-bold uppercase line-clamp-1"> {item.snippet.title}</h4>
                  {item.snippet.description.length > 0 && <p className="sm:block hidden  lowercase line-clamp-2">{item.snippet.description}</p>}
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
    </main>
  );
}
