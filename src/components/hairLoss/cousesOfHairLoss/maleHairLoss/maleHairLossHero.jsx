import React from 'react'
import MotionLeftView from '../../../common/motionLeftView'
import Image from 'next/image'
import MotionRightView from '../../../common/motionRightView'

export default function MaleHairLossHero() {
    return (
        <main className='relative fluid gridContainer w-full bg-radial from-coffee-dark to-wine-brown pt-12 lg:pt-25 pb-50'>
            <div className='w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0' />
            <section className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-10'>
                <MotionLeftView className="order-2 lg:order-1 w-full max-w-10/12 lg:max-w-141">
                    <article className='w-full flex flex-col items-start gap-6 lg:gap-7.5 text-ivory-soft'>
                        <h1 className='text-[40px] sm:text-[45px] lg:text-[50px] xl:text-[56px] 2xl:text-[64px] leading-10 sm:leading-12 lg:leading-14 xl:leading-16 flex flex-col items-start'>Male  <span className='font-bold'>Hair Loss</span></h1>
                        <p className='text-sm sm:text-base'>Hair loss in men is a very common condition and can have many different causes. Before starting any treatment, it is essential to determine the underlying reason for the hair loss so that the most appropriate and effective solution can be chosen.</p>
                        <p className='text-sm sm:text-base'>For example, if a patient has a hormonal disorder such as hyperthyroidism, this medical condition should be treated first. In other cases, vitamin or mineral deficiencies may contribute to hair loss and can be managed with proper supplementation.</p>
                        <p className='text-sm sm:text-base'>There are several medical and supportive treatments for male hair loss, including:</p>
                        <ul className='list-disc list-inside pl-3 text-sm sm:text-base'>
                            <li>PRP (Platelet-Rich Plasma) therapy</li>
                            <li>Mesotherapy</li>
                            <li>Medications such as topical minoxidil or oral finasteride</li>
                            <li>Nutritional and hormonal support</li>
                            <li>Stamp Cell Therapies</li>
                            <li>Exosome</li>
                        </ul>
                        <p className='text-sm sm:text-base'>However, it is important to understand that:</p>
                        <p className='text-sm sm:text-base'>Hair transplantation does not stop or cure hair loss. It is a reconstructive procedure performed only when hair loss has stabilized.</p>
                    </article>
                </MotionLeftView>
                <MotionRightView className="order-1 lg:order-2 w-full max-w-140.5">
                    <Image src="/images/male-hair-hero.png" alt="Dr. Özlem Bicer" width={580} height={780} className='object-contain object-center w-full max-w-fit lg:max-w-135 2xl:max-w-140.5 h-fit max-h-100 sm:max-h-130 md:max-h-150 lg:max-h-fit rounded-4xl' />
                </MotionRightView>
            </section>
        </main>
    )
}
