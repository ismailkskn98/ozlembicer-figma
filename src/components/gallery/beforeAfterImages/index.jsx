import HeroLogoCarousel from '@/components/common/logoCarousel'
import React from 'react'
import BeforeAfterHero from './beforeAfterHero'
import HowToAppointment from '@/components/common/howToAppointment'
import Image from 'next/image'
import PatientResults from '@/components/common/patientResults'

export default function BeforeAfterImagesMain() {
    return (
        <main className='w-full fluid gridContainer bg-ivory-soft'>
            <BeforeAfterHero />
            <div className='fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft to-stone-beige/50'>
                <HeroLogoCarousel />
                <header className='w-full fluid gridContainer border-y border-gold'>
                    <main className='w-full fluid gridContainer bg-linear-to-r from-coffee-dark via-wine-brown to-coffee-dark h-37.5 border-y border-gold py-2.5 text-ivory-soft'>
                        <div className='w-full fluid absolute inset-x-0 top-0 h-0.5 bg-gold z-0' />
                        <section className='w-full max-w-full xl:max-w-6xl mx-auto flex items-center justify-between gap-4'>
                            <h2 className={`flex flex-col text-[32px]`}>
                                Before & After
                            </h2>
                            <Image src={"/images/before-after-icon.svg"} alt='before after icon' width={100} height={100} className="object-contain bg-linear-to-l from-gold to-ivory-soft w-12 min-[330px]:w-14 sm:w-18 lg:w-22.5 h-12 min-[330px]:h-14 sm:h-18 lg:h-22.5 rounded-full" />
                        </section>
                    </main>
                </header>
                <main className='w-full mx-auto grid grid-cols-1 pt-16'>
                    <PatientResults
                        mainClassName="py-0"
                        showNavigation={false}
                        delay={4000}
                        carouselProps={{ rows: 2, slidesPerView: 3 }}
                        blur={false}
                    />
                </main>
                <div className='-mt-10 lg:mt-0'>
                    <HowToAppointment />
                </div>
            </div>
        </main>
    )
}
