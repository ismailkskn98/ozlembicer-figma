import React from 'react'
import MotionLeftView from '../../../common/motionLeftView'
import Image from 'next/image'
import MotionRightView from '../../../common/motionRightView'

export default function PrpHairHero() {
    return (
        <main className='relative fluid gridContainer w-full bg-radial from-coffee-dark to-wine-brown pt-12 lg:pt-25 pb-50'>
            <div className='w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0' />
            <section className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-6'>
                <MotionLeftView className="order-2 lg:order-1 w-full max-w-full sm:max-w-10/12 lg:max-w-141">
                    <article className='w-full flex flex-col items-start gap-6 lg:gap-7.5 text-ivory-soft'>
                        <h1 className='text-[40px] sm:text-[45px] lg:text-[50px] xl:text-[56px] 2xl:text-[64px] leading-10 sm:leading-12 lg:leading-14 xl:leading-16 flex flex-col items-start'>What Is <span className='font-bold'>PRP?</span></h1>
                        <div className='w-full flex flex-col items-start gap-4'>
                            <p className='text-sm sm:text-base'>Platelet-Rich Plasma (PRP) is a non-surgical, autologous treatment used to support hair health and slow down hair loss, especially in patients who are not yet ready for hair transplantation or who wish to enhance treatment outcomes. PRP is prepared from the patient’s own blood and contains a high concentration of platelets and growth factors that play a key role in tissue healing and regeneration.</p>
                            <p className='text-sm sm:text-base'>PRP therapy has shown promising results in patients with early-stage or ongoing hair loss, where hair thinning has begun but complete baldness has not yet developed. As a standalone hair loss treatment, PRP is typically performed once a month for three consecutive sessions.</p>
                            <p className='text-sm sm:text-base'>Platelets contain important intracellular components such as alpha granules, lysosomes, and glycogen, which release growth factors that stimulate cellular repair, improve blood supply, and support follicular activity. For this reason, PRP is also highly valuable during hair transplantation. At Dr. Özlem Biçer’s Clinic, PRP is used as a holding solution for follicular units during the transfer phase, helping to minimize graft dehydration, shorten out-of-body time, and increase graft survival rates.</p>
                            <p className='text-sm sm:text-base'>PRP is a safe and effective supportive treatment when performed under medical supervision and is often combined with hair transplantation to optimize healing and long-term results.</p>
                        </div>

                    </article>
                </MotionLeftView>
                <MotionRightView className="relative order-1 lg:order-2 w-full max-w-140.5 h-100 sm:h-130 md:h-150 lg:h-197.5">
                    <Image src="/images/hair-loss/hair-prp.png" alt="Dr. Özlem Bicer" fill className='object-cover object-center mx-auto w-full max-w-fit lg:max-w-135 2xl:max-w-140.5  rounded-4xl' />
                </MotionRightView>
            </section>
        </main>
    )
}
