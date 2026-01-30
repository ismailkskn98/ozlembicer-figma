import React from 'react'
import Image from 'next/image'
import MotionScrollInViewVariant from '../common/motionScrollInViewVariant'

export default function HairTransplantHero() {
    return (
        <main className='relative fluid gridContainer w-full bg-radial from-coffee-dark to-wine-brown pt-25 pb-50'>
            <div className='w-full fluid absolute inset-x-0 bottom-0 h-px bg-gold z-0' />
            <section className='w-full max-w-6xl mx-auto flex flex-col items-start gap-16.25'>
                <article className='w-full max-w-140.5 text-ivory-soft'>
                    <h1 className='text-[64px] leading-16 flex flex-col items-start'>Hair <span className='font-bold'>Transplant</span></h1>
                </article>
                <MotionScrollInViewVariant className="w-full grid grid-cols-4 gap-2.5 rounded-4xl h-full max-h-157.5">
                    <Image src="/images/hair-transplant/hero-item-1.png" alt="hair-transplant hero item 1" width={580} height={780} className='object-contain object-center w-full h-full rounded-l-4xl' />
                    <Image src="/images/hair-transplant/hero-item-2.png" alt="hair-transplant hero item 2" width={580} height={780} className='object-contain object-center w-full h-full' />
                    <Image src="/images/hair-transplant/hero-item-3.png" alt="hair-transplant hero item 3" width={580} height={780} className='object-contain object-center w-full h-full' />
                    <Image src="/images/hair-transplant/hero-item-3.png" alt="hair-transplant hero item 4" width={580} height={780} className='object-contain object-center w-full h-full rounded-r-4xl' />
                </MotionScrollInViewVariant>
                <article className='w-full flex flex-col items-start gap-4 text-ivory-soft text-[14px]'>
                    <p>
                        Hair replacement surgery can change your appearance dramatically and boost your self-confidence. And FUE (Follicular Unit Extraction) is the least invasive technique with the shortest recovery time.
                    </p>
                    <p>
                        Most people can undergo surgery with little or no problems. That being said, not everyone is a good candidate for hair replacement surgery.
                        Before you actually undergo an operation, you will need to discuss your expectations and have yourself carefully evaluated by your surgeon. In order to be realistic about your expectations, your surgeon will consider the following factors to see if you’re actually a good candidate for a hair replacement procedure:
                    </p>
                    <div className='w-full flex flex-col items-start'>
                        <h3 className='font-bold'>OVERALL HEALTH CONDITIONS:</h3>
                        <p>Are you generally in good health with no contradictions to the treatment? Cardiac patients, patients with congenital bleeding and/or clotting risks, as well as patients with certain skin problems such as psoriasis are usually advised against the operation.</p>
                    </div>
                    <div className='w-full flex flex-col items-start'>
                        <h3 className='font-bold'>HAIR LOSS PATTERN:</h3>
                        <p>If you have significant thinning or balding, a hair transplant operation will help you achieve dramatic, yet natural results. Yet you will need to have healthy hair at the back and sides your head to serve as donor areas. Those with male pattern baldness (androgenic alopecia) will be ideal candidates for a treatment.
                            Same with women, if you have an overall thinning in your hair, a hair replacement surgery may not be the best option for you.</p>
                    </div>
                    <div className='w-full flex flex-col items-start'>
                        <h3 className='font-bold'>AGE:</h3>
                        <p>In order to determine the hair loss pattern, you will need to have your hair loss stabilized. If you’re too young (in your early 20s) you may wish to wait before you consider to have a hair transplant and try medication instead.</p>
                    </div>
                    <div className='w-full flex flex-col items-start'>
                        <h3 className='font-bold'>COSMETIC CONCERNS:</h3>
                        <p>If you do not want linear scarring, a FUE operation might be the right choice for you. If you already have scarring at the transplant site, either due to a previous operation or an accident, FUE can be used to ‘fill in’ or camouflage those old scars by transplanting new follicles into the area.</p>
                    </div>
                </article>
            </section>
        </main>
    )
}
