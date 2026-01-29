'use client';
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

const heroSlideItems = [
    {
        title: ["Your", "Expectations Are", "Our Priority"],
        description: "Dr. Özlem Bicer brings over 27 years of experience and is an esteemed member of the International Society of Hair Restoration Surgery (ISHRS). She is supported by a dedicated team of highly trained nurses, making us one of the most reputable and experienced hair transplant teams worldwide.",
        imageSrc: "/images/hero-carousel/hero-1.png",
        imageAlt: "hero ozlem bicer",
        links: [
            {
                href: "/contact",
                text: "Read More About Clinic"
            },
            {
                href: "/contact",
                text: "Book an Appointment"
            }
        ]
    },
    {
        title: ["An", "Experienced", "Doctor And", "Medical Team"],
        description: "Dr. Özlem Bicer brings over 27 years of experience and is an esteemed member of the International Society of Hair Restoration Surgery (ISHRS). She is supported by a dedicated team of highly trained nurses, making us one of the most reputable and experienced hair transplant teams worldwide.",
        imageSrc: "/images/hero-carousel/hero-2.png",
        imageAlt: "hero ozlem bicer team",
        links: [
            {
                href: "/contact",
                text: "Read More About Clinic"
            },
            {
                href: "/contact",
                text: "Book an Appointment"
            }
        ]
    },
    {
        title: ["Internationally", "Acclaimed", "Faculty Member"],
        description: "Dr. Özlem Bicer brings over 27 years of experience and is an esteemed member of the International Society of Hair Restoration Surgery (ISHRS). She is supported by a dedicated team of highly trained nurses, making us one of the most reputable and experienced hair transplant teams worldwide.",
        imageSrc: "/images/hero-carousel/hero-3.png",
        imageAlt: "hero ozlem bicer 2",
        links: [
            {
                href: "/contact",
                text: "Read More About Clinic"
            },
            {
                href: "/contact",
                text: "Book an Appointment"
            }
        ]
    },
]

export default function Hero() {
    return (
        <section className='relative fluid gridContainer bg-radial from-wine-brown to-coffee-dark pt-25 pb-50'>
            <div className='w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0' />
            <main className='w-full max-w-6xl mx-auto'>
                <Swiper
                    modules={[EffectFade, Autoplay]}
                    effect="fade"
                    spaceBetween={50}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                >
                    {heroSlideItems.map((item, index) => (
                        <SwiperSlide key={index} className='w-full'>
                            {({ isActive }) => (
                                <div className={`w-full flex items-center justify-between gap-10`}>
                                    <article className='flex flex-col items-start gap-7.5 text-ivory-soft'>
                                        <h2 className={`min-h-60 flex flex-col items-start justify-end font-bold text-[50px] leading-15 transition-all duration-500 ${isActive ? 'opacity-100' : (index === 0 ? 'opacity-0 -translate-y-15' : (index === 1 ? 'opacity-0' : 'opacity-0 translate-y-15'))}`}>
                                            {item.title.map((line, lineIndex) => (
                                                <span key={lineIndex} className="block">
                                                    {line}
                                                </span>
                                            ))}
                                        </h2>
                                        <p className={`text-base w-full max-w-87.5 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>{item.description}</p>
                                        <div className={`flex items-center gap-6 transition-all duration-500 ${isActive ? 'opacity-100' : (index === 0 ? 'opacity-0 -translate-y-15' : (index === 1 ? 'opacity-0' : 'opacity-0 translate-y-15'))}`}>
                                            {item.links.map((link, linkIndex) => (
                                                <Link
                                                    key={linkIndex}
                                                    href={link.href}
                                                    className={`rounded-[10px] py-2.5 px-3.75 text-sm ${linkIndex === 0
                                                        ? 'border border-ivory-soft text-ivory-soft'
                                                        : 'bg-ivory-soft text-coffee-dark'
                                                        }`}
                                                >
                                                    {link.text}
                                                </Link>
                                            ))}
                                        </div>
                                    </article>
                                    <Image src={item.imageSrc} alt={item.imageAlt} width={800} height={550} className={`object-contain object-center w-full max-w-165.5 h-[496.5px] transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </main>
        </section>
    )
}
