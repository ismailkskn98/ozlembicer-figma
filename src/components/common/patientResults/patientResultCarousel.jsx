'use client';
import React from 'react'
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import Image from 'next/image';

const carouselItems = [
    {
        beforeImage: '/images/patient-results/before.png',
        afterImage: '/images/patient-results/after.png',
        technique: 'FUE (Micro Motor)',
        grafts: '3.200',
        afterMonths: '12 Months'
    },
    {
        beforeImage: '/images/patient-results/before.png',
        afterImage: '/images/patient-results/after.png',
        technique: 'FUE (Micro Motor)',
        grafts: '3.200',
        afterMonths: '12 Months'
    },
    {
        beforeImage: '/images/patient-results/before.png',
        afterImage: '/images/patient-results/after.png',
        technique: 'FUE (Micro Motor)',
        grafts: '3.200',
        afterMonths: '12 Months'
    },
    {
        beforeImage: '/images/patient-results/before.png',
        afterImage: '/images/patient-results/after.png',
        technique: 'FUE (Micro Motor)',
        grafts: '3.200',
        afterMonths: '12 Months'
    },
    {
        beforeImage: '/images/patient-results/before.png',
        afterImage: '/images/patient-results/after.png',
        technique: 'FUE (Micro Motor)',
        grafts: '3.200',
        afterMonths: '12 Months'
    },
    {
        beforeImage: '/images/patient-results/before.png',
        afterImage: '/images/patient-results/after.png',
        technique: 'FUE (Micro Motor)',
        grafts: '3.200',
        afterMonths: '12 Months'
    },
]

export default function PatientResultCarousel() {
    return (
        <div className='w-full xl:max-w-262 mx-auto flex flex-col items-center justify-center gap-y-6 sm:gap-y-7'>
            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={3}
                breakpoints={{
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 50
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    740: {
                        slidesPerView: 2.5,
                        spaceBetween: 20
                    },
                    500: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    100: {
                        slidesPerView: 1.5,
                        spaceBetween: 10
                    },
                }}
                centeredSlides={true}
                centeredSlidesBounds={true}
                navigation={{ prevEl: '#patient-prev', nextEl: '#patient-next' }}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                className='w-full'
            >
                {carouselItems.map((item, index) => (
                    <SwiperSlide className='py-3' key={index}>
                        {({ isActive }) => (
                            <section className='bg-linear-to-b from-stone-beige to-ivory-soft p-2.5 rounded-[10px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
                                <div className={`w-full flex flex-col items-center justify-center gap-2.5 rounded-[10px] ${!isActive && 'blur-[2px]'}`}>
                                    <div className='w-full flex items-center gap-1.25'>
                                        <div className='relative w-full h-70 rounded-[5px] overflow-hidden'>
                                            <Image src={item.beforeImage} alt={`Patient before ${index + 1}`} fill className='w-full h-full object-cover object-center rounded-[5px]' />
                                        </div>
                                        <div className='relative w-full h-70 rounded-[5px] overflow-hidden'>
                                            <Image src={item.afterImage} alt={`Patient after ${index + 1}`} width={300} height={250} className='w-full h-70 object-cover object-center rounded-[5px]' />
                                        </div>
                                    </div>
                                    <article className='w-full grid grid-cols-3 place-content-stretch justify-items-stretch bg-coffee-dark text-ivory-soft px-2.5 rounded-[5px] h-15'>
                                        <div className='relative flex flex-col items-center justify-center text-center gap-0.5'>
                                            <h5 className='font-bold text-[10px] sm:text-[12px]'>TECHNIQUE</h5>
                                            <Image src='/images/heroCard-line.png' alt='line' width={60} height={5} className='w-12.75 h-fit object-contain object-center' />
                                            <p className='text-[8px] sm:text-[10px]'>{item.technique}</p>
                                            <Image src='/images/heroCard-line.png' alt='line' width={50} height={5} className='absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 -rotate-90 object-contain object-center w-10.5 h-4' />
                                        </div>
                                        <div className='relative flex flex-col items-center justify-center text-center gap-0.5'>
                                            <h5 className='font-bold text-[10px] sm:text-[12px]'>GRAFTS</h5>
                                            <Image src='/images/heroCard-line.png' alt='line' width={60} height={5} className='w-12.75 h-fit object-contain object-center' />
                                            <p className='text-[8px] sm:text-[10px]'>{item.grafts}</p>
                                            <Image src='/images/heroCard-line.png' alt='line' width={50} height={5} className='absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 -rotate-90 object-contain object-center w-10.5 h-4' />
                                        </div>
                                        <div className='relative flex flex-col items-center justify-center text-center gap-0.5'>
                                            <h5 className='font-bold text-[10px] sm:text-[12px]'>AFTER</h5>
                                            <Image src='/images/heroCard-line.png' alt='line' width={60} height={5} className='w-12.75 h-fit object-contain object-center' />
                                            <p className='text-[8px] sm:text-[10px]'>{item.afterMonths}</p>
                                        </div>
                                    </article>
                                </div>
                            </section>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            <article className='flex items-center justify-center gap-6'>
                <div id="patient-prev">
                    <IoIosArrowDropleft className="w-10 h-10 text-coffee-dark cursor-pointer hover:bg-gold/40 p-1.5 transition duration-200 rounded-full" />
                </div>
                <div id="patient-next">
                    <IoIosArrowDropright className="w-10 h-10 text-coffee-dark cursor-pointer hover:bg-gold/40 p-1.5 transition duration-200 rounded-full" />
                </div>
            </article>
        </div>
    )
}
