import MotionLeftView from '@/components/common/motionLeftView'
import MotionRightView from '@/components/common/motionRightView'
import Image from 'next/image'
import React from 'react'

export default function OzlemBicerHero() {
    return (
        <main className='relative fluid gridContainer w-full bg-radial from-coffee-dark to-wine-brown pt-12 lg:pt-25 pb-50'>
            <div className='w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0' />
            <section className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-10'>
                <MotionLeftView className="w-full max-w-10/12 lg:max-w-141">
                    <article className='w-full flex flex-col items-start gap-6 lg:gap-7.5 text-ivory-soft'>
                        <h1 className='text-[40px] sm:text-[45px] lg:text-[50px] xl:text-[56px] 2xl:text-[64px] leading-10 sm:leading-12 lg:leading-14 xl:leading-16 flex flex-col items-start'>Who Is <span className='font-bold'>Dr. Ozlem Bicer</span></h1>
                        <p className='text-sm sm:text-base'>Dr. Özlem Biçer was born in 1973 in Istanbul. She completed her secondary education at Anakent College in 1991 and graduated from the Faculty of Medicine at Trakya University in 1998. Following her medical degree, she completed a certified training program in hair surgery organized by the Ministry of Health of the Republic of Turkey and received official authorization to perform hair transplantation procedures.</p>
                        <p className='text-sm sm:text-base'>In 2002, Dr. Biçer further expanded her expertise through advanced training in France, focusing on hair loss treatments, mesotherapy, and medical aesthetics.</p>
                        <p className='text-sm sm:text-base'>Dr. Biçer is a hair transplant surgeon with over 25 years of medical experience. She has been performing both FUE (Follicular Unit Extraction) and FUT (Follicular Unit Transplantation) procedures throughout her career. Between 1999 and 2002, she worked in several private clinics in Istanbul, specializing in aesthetic medicine and hair surgery. Since 2002, she has been performing hair transplantation procedures at her own licensed and authorized clinic.</p>
                    </article>
                </MotionLeftView>
                <MotionRightView className="w-full max-w-140.5">
                    <Image src="/images/about/ozlem-hero.png" alt="Dr. Özlem Bicer" width={580} height={780} className='object-contain object-center w-full max-w-fit lg:max-w-135 2xl:max-w-140.5 h-fit max-h-100 sm:max-h-130 md:max-h-150 lg:max-h-fit rounded-4xl' />
                </MotionRightView>
            </section>
        </main>
    )
}
