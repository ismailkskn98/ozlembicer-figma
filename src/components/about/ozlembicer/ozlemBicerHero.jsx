import MotionLeftView from '@/components/common/motionLeftView'
import MotionRightView from '@/components/common/motionRightView'
import Image from 'next/image'
import React from 'react'

export default function OzlemBicerHero() {
    return (
        <main className='relative fluid gridContainer w-full bg-radial from-coffee-dark to-wine-brown pt-25 pb-50'>
            <div className='w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0' />
            <section className='w-full max-w-full xl:max-w-6xl mx-auto flex items-center justify-between gap-6'>
                <MotionLeftView className="w-full max-w-140.5">
                    <article className='w-full max-w-140.5 flex flex-col items-start gap-7.5 text-ivory-soft'>
                        <h1 className='text-[64px] leading-16 flex flex-col items-start'>Who Is <span className='font-bold'>Dr. Ozlem Bicer</span></h1>
                        <p>Dr. Özlem Biçer was born in 1973 in Istanbul. She completed her secondary education at Anakent College in 1991 and graduated from the Faculty of Medicine at Trakya University in 1998. Following her medical degree, she completed a certified training program in hair surgery organized by the Ministry of Health of the Republic of Turkey and received official authorization to perform hair transplantation procedures.</p>
                        <p>In 2002, Dr. Biçer further expanded her expertise through advanced training in France, focusing on hair loss treatments, mesotherapy, and medical aesthetics.</p>
                        <p>Dr. Biçer is a hair transplant surgeon with over 25 years of medical experience. She has been performing both FUE (Follicular Unit Extraction) and FUT (Follicular Unit Transplantation) procedures throughout her career. Between 1999 and 2002, she worked in several private clinics in Istanbul, specializing in aesthetic medicine and hair surgery. Since 2002, she has been performing hair transplantation procedures at her own licensed and authorized clinic.</p>
                    </article>
                </MotionLeftView>
                <MotionRightView className="w-full max-w-140.5">
                    <Image src="/images/about/ozlem-hero.png" alt="Dr. Özlem Bicer" width={580} height={780} className='object-contain object-center w-full max-w-140.5 h-fit rounded-4xl' />
                </MotionRightView>
            </section>
        </main>
    )
}
