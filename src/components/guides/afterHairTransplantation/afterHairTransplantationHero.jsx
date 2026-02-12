import React from 'react'
import Image from 'next/image'
import MotionLeftView from '@/components/common/motionLeftView'

export default function AfterHairTransplantationHero() {
    return (
        <main className='relative fluid gridContainer w-full bg-radial from-coffee-dark to-wine-brown py-12 lg:py-25'>
            <div className='w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0' />
            <section className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-center justify-start gap-6'>
                <MotionLeftView className="w-full max-w-10/12 lg:max-w-full">
                    <article className='w-full flex flex-col items-start gap-6 lg:gap-7.5 text-ivory-soft'>
                        <h1 className='text-[40px] sm:text-[45px] lg:text-[50px] xl:text-[56px] 2xl:text-[64px] leading-10 sm:leading-12 lg:leading-14 xl:leading-16 flex flex-col items-start'>Guide <span className='font-bold'>After Hair Transplantation</span></h1>
                        <div className='w-full flex flex-col items-start gap-4'>
                            <p className='text-sm sm:text-base'>As a clinic we give importance to post pre and post operation follow up is one of the most important part of hair transplantation. The surgery is just a single part of hair transplantation process and after the process using right medications and providing good care for recipient and donor are is another important part of the process. During this period it is important for us to move forward with our patients and providing one to one follow up is very curutial part of our clinic. Trough our pollicy we compleate the years with over 250 satisfied patient for 28 years. </p>
                        </div>

                    </article>
                </MotionLeftView>
            </section>
        </main>
    )
}
