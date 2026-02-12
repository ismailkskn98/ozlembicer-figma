import React from 'react'
import MotionLeftView from '../../common/motionLeftView'
import Image from 'next/image'
import MotionRightView from '../../common/motionRightView'

export default function EyebrownHero() {
    return (
        <main className='relative fluid gridContainer w-full bg-radial from-coffee-dark to-wine-brown pt-12 lg:pt-25 pb-50'>
            <div className='w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0' />
            <section className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-start gap-12 sm:gap-15'>
                <h1 className='flex-1 text-[40px] sm:text-[45px] lg:text-[50px] xl:text-[56px] 2xl:text-[64px] leading-10 sm:leading-12 lg:leading-14 xl:leading-16 flex flex-col items-start text-ivory-soft'>Eyebrown <span className='font-bold'>Transplant</span></h1>
                <MotionLeftView className="w-full">
                    <Image src="/images/beard-transplant/eyebrown-hero.png" alt="Dr. Özlem Bicer" width={1200} height={700} className='object-contain object-center w-full h-full max-h-157.5 rounded-4xl' />
                </MotionLeftView>
                <MotionRightView className="w-full max-w-286.5 mx-auto">
                    <article className='w-full flex items-start gap-6 text-ivory-soft'>
                        <div className='flex-1 flex flex-col items-start gap-6'>
                            <h2 className='text-[25px] sm:text-[32px] flex flex-col'>What Is <span className='font-bold'>Eyebrow Transplant?</span></h2>
                            <p className='text-sm sm:text-base'>Eyebrows play a critical role in facial expression and overall appearance. Their shape and density can significantly influence how the face is perceived, making it appear more attractive, more feminine, or even more assertive.</p>
                            <p className='text-sm sm:text-base'>Trends in fashion also affect eyebrow preferences. At different times, patients may prefer thin, thick, or contoured eyebrows. Repeated plucking, shaping, or waxing over long periods can cause chronic traction damage, leading to permanent loss of eyebrow hairs that may no longer regrow naturally. When patients wish to restore their original eyebrow shape and density, eyebrow transplantation becomes an effective solution.</p>
                            <p className='text-sm sm:text-base'>In rare cases, some patients may have congenital absence or very sparse eyebrows, and eyebrow transplantation is also a suitable option for these individuals.</p>
                            <p className='text-sm sm:text-base'>For eyebrow transplantation, we prefer the long hair FUE technique and use fine hairs harvested from the lower safe donor zone. This approach allows us to select softer, thinner hairs and implant them with precise angles and directions, ensuring a natural and aesthetically harmonious eyebrow result.</p>
                        </div>
                    </article>
                </MotionRightView>
            </section>
        </main>
    )
}
