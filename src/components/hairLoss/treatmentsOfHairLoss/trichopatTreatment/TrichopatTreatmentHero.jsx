import React from 'react'
import MotionLeftView from '../../../common/motionLeftView'
import Image from 'next/image'
import MotionRightView from '../../../common/motionRightView'

export default function TrichopatTreatmentHero() {
    return (
        <main className='relative fluid gridContainer w-full bg-radial from-coffee-dark to-wine-brown pt-12 lg:pt-25 pb-50'>
            <div className='w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0' />
            <section className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-center justify-start gap-6'>
                <MotionRightView className="w-full max-w-full">
                    <Image src="/images/hair-loss/hair-tricopat.png" alt="Dr. Özlem Bicer" width={1200} height={600} className='object-contain object-center w-full h-fit max-h-100 sm:max-h-130 lg:max-h-125 rounded-4xl' />
                </MotionRightView>
                <MotionLeftView className="w-full max-w-10/12 lg:max-w-full">
                    <article className='w-full flex flex-col items-start gap-6 lg:gap-7.5 text-ivory-soft'>
                        <h1 className='text-[40px] sm:text-[45px] lg:text-[50px] xl:text-[56px] 2xl:text-[64px] leading-10 sm:leading-12 lg:leading-14 xl:leading-16 flex flex-col items-start'>What Is <span className='font-bold'>Tricopat?</span></h1>
                        <div className='w-full flex flex-col items-start gap-4'>
                            <p className='text-sm sm:text-base'>TRICOPAT® is a patented, non-invasive, and painless medical device developed in Italy for the treatment of hair loss and scalp disorders. It is scientifically validated for both male and female patients and is used in conditions such as androgenetic alopecia and telogen effluvium. The technology is based on the TRICOGENESI® protocol, which delivers growth factors into the scalp without injections or surgery, making it a comfortable alternative or supportive treatment to medical therapy and hair transplantation .</p>
                        </div>

                    </article>
                </MotionLeftView>
            </section>
        </main>
    )
}
