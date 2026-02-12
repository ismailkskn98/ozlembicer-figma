import React from 'react'
import MotionLeftView from '../../common/motionLeftView'
import Image from 'next/image'
import MotionRightView from '../../common/motionRightView'

export default function BeardHero() {
    return (
        <main className='relative fluid gridContainer w-full bg-radial from-coffee-dark to-wine-brown pt-12 lg:pt-25 pb-50'>
            <div className='w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0' />
            <section className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-start gap-12 sm:gap-15'>
                <h1 className='flex-1 text-[40px] sm:text-[45px] lg:text-[50px] xl:text-[56px] 2xl:text-[64px] leading-10 sm:leading-12 lg:leading-14 xl:leading-16 flex flex-col items-start text-ivory-soft'>Beard <span className='font-bold'>Transplant</span></h1>
                <MotionLeftView className="w-full">
                    <Image src="/images/beard-transplant/beard-hero.png" alt="Dr. Özlem Bicer" width={1200} height={700} className='object-contain object-center w-full h-full max-h-157.5 rounded-4xl' />
                </MotionLeftView>
                <MotionRightView className="w-full max-w-286.5 mx-auto">
                    <article className='w-full flex items-start gap-6 text-ivory-soft'>
                        <div className='flex-1 flex flex-col items-start gap-6'>
                            <h2 className='text-[25px] sm:text-[32px] flex flex-col'>What Is <span className='font-bold'>Beard Transplant?</span></h2>
                            <p className='text-sm sm:text-base'>Beard transplantation is a specialized hair restoration procedure designed to improve beard density, shape, and symmetry. At our clinic, Dr. Özlem Biçer and her experienced medical team perform facial hair transplants for men who wish to enhance thin areas, correct patchy growth, or restore hair loss caused by scarring or medical conditions.</p>
                            <p className='text-sm sm:text-base'>Facial hair transplantation is technically more demanding than scalp hair transplantation and requires advanced surgical experience and precise artistic planning. The procedure can be performed to restore:</p>
                            <ul className='list-disc list-inside flex flex-col items-start gap-1 text-sm sm:text-base'>
                                <li>Beard density</li>
                                <li>Mustache growth</li>
                                <li>Sideburns</li>
                                <li>Facial scars</li>
                            </ul>
                        </div>
                    </article>
                </MotionRightView>
            </section>
        </main>
    )
}
