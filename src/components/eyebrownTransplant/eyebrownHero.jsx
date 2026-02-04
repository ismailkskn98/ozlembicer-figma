import React from 'react'
import MotionLeftView from '../common/motionLeftView'
import Image from 'next/image'
import MotionRightView from '../common/motionRightView'

export default function EyebrownHero() {
    return (
        <main className='relative fluid gridContainer w-full bg-radial from-coffee-dark to-wine-brown pt-25 pb-40'>
            <div className='w-full fluid absolute inset-x-0 bottom-0 h-px bg-gold z-0' />
            <section className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-start gap-15'>
                <h1 className='flex-1 text-[64px] leading-20 flex flex-col items-start text-ivory-soft'>Eyebrown <span className='font-bold'>Transplant</span></h1>
                <MotionLeftView className="w-full">
                    <Image src="/images/beard-transplant/eyebrown-hero.png" alt="Dr. Özlem Bicer" width={1200} height={700} className='object-contain object-center w-full h-full max-h-157.5 rounded-4xl' />
                </MotionLeftView>
                <MotionRightView className="w-full max-w-286.5 mx-auto">
                    <article className='w-full flex items-start gap-6 text-ivory-soft'>
                        <div className='flex-1 flex flex-col items-start gap-6'>
                            <h2 className='text-[32px] flex flex-col'>What Is <span className='font-bold'>Eyebrow Transplant?</span></h2>
                            <p>Eyebrow transplantation is a delicate hair restoration procedure designed to improve eyebrow density, shape, and symmetry. Performed by Dr. Özlem Biçer and her experienced medical team, this procedure allows patients to achieve natural-looking, permanent eyebrows with minimal downtime.</p>
                            <p>Eyebrows play a crucial role in facial balance and expression. They frame the eyes and contribute significantly to emotional expression and overall facial harmony. While over-plucking or shaping can easily thin thick eyebrows, restoring sparse, irregular, or missing eyebrows is far more complex—making eyebrow transplantation an effective long-term solution.</p>
                        </div>
                    </article>
                </MotionRightView>
            </section>
        </main>
    )
}
