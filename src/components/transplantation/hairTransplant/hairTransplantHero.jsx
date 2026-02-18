import React from 'react'
import Image from 'next/image'
import MotionScrollInView from '@/components/common/motionScrollInView'

export default function HairTransplantHero() {
    return (
        <main className='relative fluid gridContainer w-full bg-radial from-coffee-dark to-wine-brown pt-12 lg:pt-25 pb-50'>
            <div className='w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0' />
            <section className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-start gap-8 sm:gap-12 xl:gap-16.25'>
                <article className='w-full max-w-140.5 text-ivory-soft'>
                    <h1 className='text-[40px] sm:text-[45px] lg:text-[50px] xl:text-[56px] 2xl:text-[64px] leading-10 sm:leading-12 lg:leading-14 xl:leading-16 flex flex-col items-start'>Hair <span className='font-bold'>Transplant</span></h1>
                </article>
                <MotionScrollInView className="w-full grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2.5 rounded-xl sm:rounded-4xl h-full max-h-full sm:max-h-157.5">
                    <Image src="/images/hair-transplant/hero-item-1.png" alt="hair-transplant hero item 1" width={880} height={1180} className='object-cover sm:object-cover object-center w-full h-75 sm:h-156 rounded-tl-xl sm:rounded-l-4xl' />
                    <Image src="/images/hair-transplant/hero-item-2.png" alt="hair-transplant hero item 2" width={880} height={1180} className='object-cover sm:object-cover object-center w-full h-75 sm:h-156 rounded-tr-xl sm:rounded-none' />
                    <Image src="/images/hair-transplant/hero-item-3.png" alt="hair-transplant hero item 3" width={880} height={1180} className='object-cover sm:object-cover object-center w-full h-75 sm:h-156 rounded-bl-xl sm:rounded-none' />
                    <Image src="/images/hair-transplant/hero-item-3.png" alt="hair-transplant hero item 4" width={880} height={1180} className='object-cover sm:object-cover object-center w-full h-75 sm:h-156 rounded-br-xl sm:rounded-r-4xl' />
                </MotionScrollInView>
                <article className='w-full flex flex-col items-start gap-4 text-ivory-soft text-[14px]'>
                    <p>
                        At Dr. Biçer’s clinic, all hair restoration techniques are personally performed by Dr. Biçer. This allows her to objectively evaluate each patient and select the most appropriate technique based solely on medical needs, hair characteristics, and long-term expectations.
                    </p>
                    <p>
                        It is also important to understand that hair transplantation is not a cure for hair loss. It is a highly effective camouflage technique for patients suffering from alopecia, designed to restore a natural appearance and improve self-confidence.
                    </p>
                    <p>
                        Hair replacement surgery can change your appearance dramatically and boost your self-confidence. Among available methods, FUE (Follicular Unit Extraction) is considered the least invasive technique and offers the shortest recovery time.
                    </p>
                    <p>
                        Most people can undergo surgery with little or no complications. However, not everyone is a suitable candidate for hair replacement surgery. Before undergoing any procedure, it is essential to discuss your expectations and undergo a thorough medical evaluation by your surgeon. To determine whether you are a good candidate, the following factors are carefully considered:
                    </p>
                    <div className='w-full flex flex-col items-start'>
                        <h3 className='font-bold'>OVERALL HEALTH CONDITIONS</h3>
                        <p>Are you generally in good health with no contraindications to treatment? Patients with cardiac conditions, congenital bleeding or clotting disorders, or certain skin diseases such as psoriasis are usually advised against surgery.</p>
                    </div>
                    <div className='w-full flex flex-col items-start'>
                        <h3 className='font-bold'>HAIR LOSS PATTERN</h3>
                        <p>Hair transplantation can provide dramatic yet natural results in cases of significant thinning or balding, provided that healthy donor hair is present at the back and sides of the scalp. Patients with male pattern baldness (androgenetic alopecia) are often ideal candidates. For women, however, if hair loss presents as diffuse overall thinning, hair transplantation may not be the most suitable option.</p>
                    </div>
                    <div className='w-full flex flex-col items-start'>
                        <h3 className='font-bold'>AGE</h3>
                        <p>Hair loss should be relatively stabilized before surgery. Very young patients (early 20s) are often advised to wait and consider medical treatments before undergoing a hair transplant.</p>
                    </div>
                    <div className='w-full flex flex-col items-start'>
                        <h3 className='font-bold'>COSMETIC CONCERNS</h3>
                        <p>If avoiding linear scarring is important to you, FUE may be the preferred technique. FUE can also be used to camouflage existing scars from previous surgeries or injuries by transplanting new follicles into those areas.</p>
                    </div>
                </article>
            </section>
        </main>
    )
}
