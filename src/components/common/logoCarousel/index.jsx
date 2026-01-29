'use client';
import React from 'react'
import HeroCards from './heroCards'
import MotionScrollInView from '@/components/common/motionScrollInView'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

const logoImages = [
    { src: '/images/logoCarousel/logo-1.png', alt: 'Logo 1' },
    { src: '/images/logoCarousel/logo-2.png', alt: 'Logo 2' },
    { src: '/images/logoCarousel/logo-5.png', alt: 'Logo 5' },
    { src: '/images/logoCarousel/logo-4.png', alt: 'Logo 4' },
    { src: '/images/logoCarousel/logo-3.png', alt: 'Logo 3' },
    { src: '/images/logoCarousel/logo-6.png', alt: 'Logo 6' },
    { src: '/images/logoCarousel/logo-7.png', alt: 'Logo 7' },
    { src: '/images/logoCarousel/logo-8.png', alt: 'Logo 8' },
    { src: '/images/logoCarousel/logo-9.png', alt: 'Logo 9' },
    { src: '/images/logoCarousel/logo-10.png', alt: 'Logo 10' },
    { src: '/images/logoCarousel/logo-11.png', alt: 'Logo 11' },
    { src: '/images/logoCarousel/logo-12.png', alt: 'Logo 12' },
    { src: '/images/logoCarousel/logo-13.png', alt: 'Logo 13' },
    { src: '/images/logoCarousel/logo-14.png', alt: 'Logo 14' },
    { src: '/images/logoCarousel/logo-15.png', alt: 'Logo 15' },
    { src: '/images/logoCarousel/logo-16.png', alt: 'Logo 16' },
    { src: '/images/logoCarousel/logo-17.png', alt: 'Logo 17' },
    { src: '/images/logoCarousel/logo-18.png', alt: 'Logo 18' },
    { src: '/images/logoCarousel/logo-20.png', alt: 'Logo 20' },
    { src: '/images/logoCarousel/logo-23.png', alt: 'Logo 23' },
    { src: '/images/logoCarousel/logo-21.png', alt: 'Logo 21' },
    { src: '/images/logoCarousel/logo-22.png', alt: 'Logo 22' },
    { src: '/images/logoCarousel/logo-19.png', alt: 'Logo 19' },
    { src: '/images/logoCarousel/logo-24.png', alt: 'Logo 24' },
    { src: '/images/logoCarousel/logo-25.png', alt: 'Logo 25' },
    { src: '/images/logoCarousel/logo-26.png', alt: 'Logo 26' },
]

export default function HeroLogoCarousel() {
    return (
        <section className='fluid gridContainer relative w-full pt-32.5 pb-15 px-30 bg-linear-to-t from-ivory-soft to-stone-beige'>
            <HeroCards />
            <div className='w-full max-w-300 mx-auto'>
                <MotionScrollInView className="w-full flex flex-col items-center gap-7.5">
                    <p className='text-center text-[20px] text-coffee-dark'><span className='font-bold'>Trusted by Leading Associations</span> Worldwide</p>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={50}
                        slidesPerView={4}
                        slidesPerGroup={4}
                        speed={1500}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                        loop={false}
                        className='w-full'
                    >
                        {logoImages.map((logo, index) => (
                            <SwiperSlide key={index}>
                                <Image src={logo.src} alt={logo.alt} width={300} height={128} className="w-fit h-20 object-contain mx-auto" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </MotionScrollInView>
            </div>
        </section>
    )
}
