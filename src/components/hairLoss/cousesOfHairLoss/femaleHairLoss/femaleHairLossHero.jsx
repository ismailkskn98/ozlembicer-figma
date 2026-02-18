import React from 'react'
import MotionLeftView from '../../../common/motionLeftView'
import Image from 'next/image'
import MotionRightView from '../../../common/motionRightView'

export default function FemaleHairLossHero() {
    return (
        <main className='relative fluid gridContainer w-full bg-radial from-coffee-dark to-wine-brown pt-12 lg:pt-25 pb-50'>
            <div className='w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0' />
            <section className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-10'>
                <MotionLeftView className="order-2 lg:order-1 w-full max-w-full sm:max-w-10/12 lg:max-w-141">
                    <article className='w-full flex flex-col items-start gap-4 text-ivory-soft'>
                        <h1 className='text-[40px] sm:text-[45px] lg:text-[50px] xl:text-[56px] 2xl:text-[64px] leading-10 sm:leading-12 lg:leading-14 xl:leading-16 flex flex-col items-start'>Female <span className='font-bold'>Hair Loss</span></h1>
                        <p className='text-sm sm:text-base'>About a third of women will experience hair loss (alopecia) at some point in their life; After menopause, two thirds of women experience hair thinning or bald spots on their heads. In contrast to men, hair loss is very effective in women because it is less socially acceptable for women. Alopecia can seriously affect a woman’s emotional health and quality of life.</p>
                        <p className='text-sm sm:text-base'>At Doctor Özlem Biçer’s clinic, we understand how much a woman’s self-confidence is caused by hair loss. But before starting the journey of regaining self-confidence, it is important to determine what type of hair loss you are facing. After determining the nature of your exposure, your doctor will begin considering treatment and, in some cases, considering having a hair transplant. In order to protect the emotional health of the patient, the hair transplant performed by Doctor Özlem Biçer is performed without a full head shave. It is therefore incomprehensible that you have had a hair transplant.</p>
                        <p className='text-sm sm:text-base'>There are generally three types of hair loss in women. These are grouped into the following three categories – androgenetic alopecia, telogen effluvium, and abnormal hair loss. Androgenetic alopecia is the leading cause of hair loss in women and in this case, hair loss in women is less predictable than it is in men. Telogen effluvium can be triggered by drug consumption, diet, and stress. Then there are the other rare types of hair loss that fall into the non-normal hair loss category.<br />The causes of hair loss in women</p>
                    </article>
                </MotionLeftView>
                <MotionRightView className="relative order-1 lg:order-2 w-full max-w-140.5 h-100 sm:h-130 md:h-150 lg:h-197.5">
                    <Image src="/images/female-hair-hero.png" alt="Dr. Özlem Bicer" fill className='object-cover object-center mx-auto w-full max-w-fit lg:max-w-135 2xl:max-w-140.5  rounded-4xl' />
                </MotionRightView>
            </section>
        </main>
    )
}
