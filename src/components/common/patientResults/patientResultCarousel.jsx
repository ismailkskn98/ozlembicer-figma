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
        <div className='w-full flex flex-col items-center justify-center gap-8'>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                slidesPerView={3}
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
                    <SwiperSlide className='bg-linear-to-b from-stone-beige to-ivory-soft p-2.5 rounded-[10px]'>
                        {({ isActive }) => (
                            <div className={`flex flex-col items-center justify-center w-full gap-5 rounded-[10px] ${!isActive && 'blur-[2px]'}`}>
                                <div className='flex items-center gap-1.25'>
                                    <Image src={item.beforeImage} alt={`Patient before ${index + 1}`} width={300} height={250} className='w-70 h-auto object-cover object-center rounded-[5px]' />
                                    <Image src={item.afterImage} alt={`Patient after ${index + 1}`} width={300} height={250} className='w-70 h-auto object-cover object-center rounded-[5px]' />
                                </div>
                                <article className='w-full grid grid-cols-3 place-content-stretch justify-items-stretch bg-coffee-dark text-ivory-soft px-2.5 rounded-[5px] h-15'>
                                    <div className='relative flex flex-col items-center justify-center text-center gap-0.5'>
                                        <h5 className='font-bold text-[8px]'>TECHNIQUE</h5>
                                        <Image src='/images/heroCard-line.png' alt='line' width={60} height={5} className='w-12.75 h-fit object-contain object-center' />
                                        <p className='text-[8px]'>{item.technique}</p>
                                        <Image src='/images/heroCard-line.png' alt='line' width={50} height={5} className='absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 -rotate-90 object-contain object-center w-10.5 h-4' />
                                    </div>
                                    <div className='relative flex flex-col items-center justify-center text-center gap-0.5'>
                                        <h5 className='font-bold text-[8px]'>GRAFTS</h5>
                                        <Image src='/images/heroCard-line.png' alt='line' width={60} height={5} className='w-12.75 h-fit object-contain object-center' />
                                        <p className='text-[8px]'>{item.grafts}</p>
                                        <Image src='/images/heroCard-line.png' alt='line' width={50} height={5} className='absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 -rotate-90 object-contain object-center w-10.5 h-4' />
                                    </div>
                                    <div className='relative flex flex-col items-center justify-center text-center gap-0.5'>
                                        <h5 className='font-bold text-[8px]'>AFTER</h5>
                                        <Image src='/images/heroCard-line.png' alt='line' width={60} height={5} className='w-12.75 h-fit object-contain object-center' />
                                        <p className='text-[8px]'>{item.afterMonths}</p>
                                    </div>
                                </article>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            <article className='flex items-center justify-center gap-6'>
                <div id="patient-prev">
                    <IoIosArrowDropleft className="w-10 h-10 text-coffee-dark cursor-pointer hover:bg-gold/30 p-2 transition duration-200 rounded-full" />
                </div>
                <div id="patient-next">
                    <IoIosArrowDropright className="w-10 h-10 text-coffee-dark cursor-pointer hover:bg-gold/30 p-2 transition duration-200 rounded-full" />
                </div>
            </article>
        </div>
    )
}
