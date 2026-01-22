import MotionLeftView from '@/components/common/motionLeftView'
import MotionRightView from '@/components/common/motionRightView'
import Image from 'next/image'
import React from 'react'

export default function ClinicTeamHero() {
    return (
        <main className='relative fluid gridContainer w-full bg-radial from-coffee-dark to-wine-brown pt-25 pb-50'>
            <div className='bg-[url("/images/footer-bg-pattern.png")] bg-center bg-repeat absolute inset-0 w-full h-full fluid z-10 pointer-events-none select-none opacity-[0.02]' />
            <section className='w-full max-w-6xl mx-auto flex flex-col items-center gap-15'>
                <MotionLeftView className="w-full">
                    <Image src="/images/about/clinic-hero.png" alt="Dr. Özlem Bicer" width={1200} height={700} className='object-contain object-center w-full h-full max-h-157.5 rounded-4xl' />
                </MotionLeftView>
                <MotionRightView className="w-full max-w-286.5 mx-auto">
                    <article className='w-full flex items-start gap-6 text-ivory-soft'>
                        <h1 className='flex-1 text-[64px] leading-20 flex flex-col items-start'>An Experienced <span className='font-bold'>Doctor and Medical Team</span></h1>
                        <div className='flex-1 flex flex-col items-start gap-2'>
                            <p>Our clinic is supported by a highly experienced and dedicated hair transplant team, recognized for its medical expertise and patient-centered approach. Dr. Özlem Biçer has over 28 years of experience in hair restoration surgery and is a proud member of the International Society of Hair Restoration Surgery (ISHRS). She is assisted by a team of carefully selected, highly trained, and experienced medical nurses who work together with precision and consistency.</p>
                            <p>Unlike many hair transplant centers, we believe that hair transplantation is a medical procedure that should be performed under the direct responsibility of a licensed physician. Our clinic operates in accordance with medical regulations and professional standards, and is among a limited number of licensed hair transplant clinics in Turkey.</p>
                            <p>To ensure the highest level of care, we treat only one patient per day. The same experienced medical team assists Dr. Biçer in every procedure, allowing for full focus, continuity, and personalized attention. This approach enables us to maintain strict quality control, provide attentive patient care, and strive for natural, reliable results in every case.</p>
                        </div>
                    </article>
                </MotionRightView>
            </section>
        </main>
    )
}
