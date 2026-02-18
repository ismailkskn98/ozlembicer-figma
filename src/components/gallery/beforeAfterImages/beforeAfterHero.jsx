import MotionLeftView from '@/components/common/motionLeftView'
import MotionRightView from '@/components/common/motionRightView'
import Image from 'next/image'
import React from 'react'

export default function BeforeAfterHero() {
    return (
        <main className='relative fluid gridContainer w-full bg-radial from-coffee-dark to-wine-brown pt-12 lg:pt-25 pb-50'>
            <div className='w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0' />
            <section className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-10'>
                <MotionLeftView className="order-2 lg:order-1 w-full max-w-10/12 lg:max-w-141">
                    <article className='w-full flex flex-col items-start gap-6 lg:gap-7.5 text-ivory-soft'>
                        <h1 className='text-[40px] sm:text-[45px] lg:text-[50px] xl:text-[56px] 2xl:text-[64px] leading-10 sm:leading-12 lg:leading-14 xl:leading-16 flex flex-col items-start'>Patient Results  <span className='font-bold'>Before & After</span></h1>
                        <p className='text-sm sm:text-base'>As a clinic we give importance to post pre and post operation follow up is one of the most important part of hair transplantation. The surgery is just a single part of hair transplantation process and after the process using right medications and providing good care for recipient and donor are is another important part of the process. During this period it is important for us to move forward with our patients and providing one to one follow up is very curutial part of our clinic. Trough our pollicy we compleate the years with over 250 satisfied patient for 28 years. </p>
                    </article>
                </MotionLeftView>
                <MotionRightView className="order-1 lg:order-2 w-full max-w-140.5">
                    <Image src="/images/gallery/before-after-hero.png" alt="Dr. Özlem Bicer" width={580} height={780} className='object-contain object-center w-full max-w-fit lg:max-w-135 2xl:max-w-140.5 h-fit max-h-100 sm:max-h-130 md:max-h-150 lg:max-h-fit rounded-4xl' />
                </MotionRightView>
            </section>
        </main>
    )
}
