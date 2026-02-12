import React from 'react'
import MotionLeftView from '../common/motionLeftView'
import Image from 'next/image'
import MotionRightView from '../common/motionRightView'

export default function HairMesotherapyHero() {
    return (
        <main className='relative fluid gridContainer w-full bg-radial from-coffee-dark to-wine-brown pt-12 lg:pt-25 pb-50'>
            <div className='w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0' />
            <section className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-6'>
                <MotionLeftView className="w-full max-w-10/12 lg:max-w-141">
                    <article className='w-full flex flex-col items-start gap-6 lg:gap-7.5 text-ivory-soft'>
                        <h1 className='text-[40px] sm:text-[45px] lg:text-[50px] xl:text-[56px] 2xl:text-[64px] leading-10 sm:leading-12 lg:leading-14 xl:leading-16 flex flex-col items-start'>Hair  <span className='font-bold'>Mesotherapy</span></h1>
                        <div className='w-full flex flex-col items-start gap-4'>
                            <p className='text-sm'>Mesotherapy is a technique in which microscopic amounts of drugs, vitamins, minerals and amino acids (Vasodilator and DHT Blockers) are administered to the upper and middle layers of the scalp skin to treat hair loss and increase the quality of existing hair by stimulating hair regeneration.</p>
                            <p className='text-sm'>This method has obtained special recognition in the field of aesthetic medicine as it is one of the most effective non-surgical techniques for treating the scalp. In fact, no cream or serum can deliver the biological active ingredients into the cells of the scalp and activate the hair metabolism as effectively as mesotherapy.</p>
                            <p className='text-sm'>The technique of micro injections with mesotherapy This technique consists in the administration of a mesotherapy cocktail by means of intra-dermal micro injections, placing the nutrients directly in the dermal tissues.</p>
                            <p className='text-sm'>The needle also creates micro perforations that induce the tissues involved in a healing process, which stimulates the scalp to produce collagen and elastin, two of the main building blocks of the skin.</p>
                            <p className='text-sm'>The procedure takes about 10 sessions of 15 minutes each to achieve the desired effects. What are the recovery times after the treatment? The treatment does not require any recovery time.</p>
                            <p className='text-sm'>Most people undergoing this treatment in fact immediately return to their normal activities after the procedure without any side effects.</p>
                        </div>

                    </article>
                </MotionLeftView>
                <MotionRightView className="w-full max-w-140.5">
                    <Image src="/images/hair-loss/hair-mesotherapy.png" alt="Dr. Özlem Bicer" width={580} height={780} className='object-contain object-center w-full max-w-fit lg:max-w-135 2xl:max-w-140.5 h-fit max-h-100 sm:max-h-130 md:max-h-150 lg:max-h-full rounded-4xl' />
                </MotionRightView>
            </section>
        </main>
    )
}
