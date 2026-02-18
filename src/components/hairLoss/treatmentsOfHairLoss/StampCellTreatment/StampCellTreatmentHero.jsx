import React from 'react'
import MotionLeftView from '../../../common/motionLeftView'
import Image from 'next/image'
import MotionRightView from '../../../common/motionRightView'

export default function StampCellTreatmentHero() {
    return (
        <main className='relative fluid gridContainer w-full bg-radial from-coffee-dark to-wine-brown pt-12 lg:pt-25 pb-50'>
            <div className='w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0' />
            <section className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-6'>
                <MotionLeftView className="order-2 lg:order-1 w-full max-w-full sm:max-w-10/12 lg:max-w-141">
                    <article className='w-full flex flex-col items-start gap-6 lg:gap-7.5 text-ivory-soft'>
                        <h1 className='text-[40px] sm:text-[45px] lg:text-[50px] xl:text-[56px] 2xl:text-[64px] leading-10 sm:leading-12 lg:leading-14 xl:leading-16 flex flex-col items-start'>What Is <span className='font-bold'>Stamp Cell?</span></h1>
                        <div className='w-full flex flex-col items-start gap-4'>
                            <p className='text-sm sm:text-base'>Stem cell therapy in hair transplantation is a regenerative, supportive treatment designed to improve scalp health, strengthen existing hair follicles, and enhance the results of hair restoration procedures. In clinical hair practice, this therapy does not involve embryonic stem cells; instead, it uses autologous adult stem cells obtained from the patient’s own tissues, most commonly from adipose (fat) tissue or bone marrow, or stem cell–rich extracts derived from hair follicles.</p>
                            <p className='text-sm sm:text-base'>The main goal of stem cell therapy is to stimulate dormant or weakened hair follicles, improve the scalp microenvironment, and support natural hair growth and graft survival.</p>
                        </div>

                    </article>
                </MotionLeftView>

                <MotionRightView className="relative order-1 lg:order-2 w-full max-w-140.5 h-100 sm:h-130 md:h-150 lg:h-197.5">
                    <Image src="/images/hair-loss/stamp-cell.png" alt="Dr. Özlem Bicer" fill className='object-cover object-center mx-auto w-full max-w-fit lg:max-w-135 2xl:max-w-140.5 rounded-4xl' />
                </MotionRightView>
            </section>
        </main>
    )
}
