'use client';
import React, { useId, useState } from 'react'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import Image from 'next/image';
import { Navigation, Autoplay, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';

const localCarouselItems = [
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

export default function PatientResultCarousel({ carouselItems = [], showNavigation = true, delay = 4000, rows = 1, slidesPerView = 3, blur = true }) {
    const id = useId();
    const prevId = `patient-prev-${id}`;
    const nextId = `patient-next-${id}`;
    const defaultCarouselItems = carouselItems.length > 0 ? carouselItems : localCarouselItems;

    return (
        <div className='w-full xl:max-w-262 mx-auto flex flex-col items-center justify-center gap-y-6 sm:gap-y-7'>
            <Swiper
                modules={[Navigation, Autoplay, Grid]}
                grid={rows > 1 ? { rows, fill: 'row' } : undefined}
                slidesPerView={slidesPerView}
                slidesPerGroup={1}
                breakpoints={{
                    1280: { slidesPerView: 3, spaceBetween: 50 },
                    900: { slidesPerView: 3, spaceBetween: 30 },
                    740: { slidesPerView: 2.5, spaceBetween: 20 },
                    500: { slidesPerView: 2, spaceBetween: 20 },
                    100: { slidesPerView: 1.15, spaceBetween: 10 },
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
                className='w-full relative'
            >
                {defaultCarouselItems.map((item, index) => (
                    <SwiperSlide className='py-3 px-2' key={index}>
                        {({ isActive }) => (
                            <section className='bg-linear-to-b from-stone-beige to-ivory-soft p-2.5 rounded-[10px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
                                <div className={`w-full flex flex-col items-center justify-center gap-2.5 rounded-[10px] ${blur && !isActive ? 'blur-[2px]' : ''}`}>
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
            {showNavigation && (
                <article className='flex items-center justify-center gap-6'>
                    <div id={prevId}>
                        <IoIosArrowDropleft className="w-10 h-10 text-coffee-dark cursor-pointer hover:bg-gold/40 p-1.5 transition duration-200 rounded-full" />
                    </div>
                    <div id={nextId}>
                        <IoIosArrowDropright className="w-10 h-10 text-coffee-dark cursor-pointer hover:bg-gold/40 p-1.5 transition duration-200 rounded-full" />
                    </div>
                </article>
            )}
        </div>
    )
}
