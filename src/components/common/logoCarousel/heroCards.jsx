import MotionScrollInViewVariant from '@/components/common/motionScrollInViewVariant'
import Image from 'next/image'
import React from 'react'

export default function HeroCards() {
    return (
        <main className='fluid gridContainer w-full absolute left-1/2 bottom-full translate-y-1/2 -translate-x-1/2'>
            <section className='w-full max-w-full lg:max-w-6xl mx-auto rounded-[10px] bg-coffee-dark overflow-hidden'>
                <MotionScrollInViewVariant className="w-full grid grid-cols-2 md:grid-cols-4 place-content-stretch justify-items-stretch rounded-[10px]">
                    <article className='relative flex flex-col items-center justify-center gap-2.5 xl:gap-3.75 py-5 sm:py-7 xl:py-8.5 px-5 sm:px-9 xl:px-11.25'>
                        <Image src="/images/heroCard-1.png" alt="hero card 1" width={50} height={50} className='object-contain object-center w-9 sm:w-10 h-9 sm:h-10' />
                        <Image src="/images/heroCard-line.png" alt="hero card line" width={150} height={10} className='object-contain object-center w-30 h-2' />
                        <div className='flex flex-col items-center justify-center text-center text-base xl:text-[20px] text-transparent bg-linear-to-t from-gold to-ivory-soft bg-clip-text'>
                            <span>Only One</span>
                            <span>Patient a Day</span>
                        </div>
                        <Image src="/images/heroCard-line.png" alt="hero card gap line" width={200} height={10} className='absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 -rotate-90 object-contain object-center w-[150%] scale-x-150 lg:scale-x-100 lg:w-30 h-4 z-10' />
                        <Image src="/images/heroCard-line.png" alt="hero card gap line" width={200} height={10} className='block lg:hidden absolute top-full -translate-y-1/2 left-1/2 -translate-x-1/2 object-contain object-center w-[150%] scale-x-180 lg:scale-x-100 lg:w-30 h-4 z-10' />
                    </article>
                    <article className='relative flex flex-col items-center justify-center gap-2.5 xl:gap-3.75 py-5 sm:py-7 xl:py-8.5 px-5 sm:px-9 xl:px-11.25'>
                        <Image src="/images/heroCard-2.png" alt="hero card 2" width={50} height={50} className='object-contain object-center w-9 sm:w-10 h-9 sm:h-10' />
                        <Image src="/images/heroCard-line.png" alt="hero card line" width={150} height={10} className='object-contain object-center w-30 h-2' />
                        <div className='flex flex-col items-center justify-center text-center text-base xl:text-[20px] text-transparent bg-linear-to-t from-gold to-ivory-soft bg-clip-text'>
                            <span>28 Years</span>
                            <span>of Experience</span>
                        </div>
                        <Image src="/images/heroCard-line.png" alt="hero card gap line" width={200} height={10} className='absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 -rotate-90 object-contain object-center w-[150%] scale-x-150 lg:scale-x-100 lg:w-30 h-4 z-10' />
                        <Image src="/images/heroCard-line.png" alt="hero card gap line" width={200} height={10} className='block lg:hidden absolute top-full -translate-y-1/2 left-1/2 -translate-x-1/2 object-contain object-center w-[150%] scale-x-180 lg:scale-x-100 lg:w-30 h-4 z-10' />
                    </article>
                    <article className='relative flex flex-col items-center justify-center gap-2.5 xl:gap-3.75 py-5 sm:py-7 xl:py-8.5 px-5 sm:px-9 xl:px-11.25'>
                        <Image src="/images/heroCard-3.png" alt="hero card 3" width={50} height={50} className='object-contain object-center w-9 sm:w-10 h-9 sm:h-10' />
                        <Image src="/images/heroCard-line.png" alt="hero card line" width={150} height={10} className='object-contain object-center w-30 h-2' />
                        <div className='flex flex-col items-center justify-center text-center text-base xl:text-[20px] text-transparent bg-linear-to-t from-gold to-ivory-soft bg-clip-text'>
                            <span>Licenced</span>
                            <span>Clinic</span>
                        </div>
                        <Image src="/images/heroCard-line.png" alt="hero card gap line" width={200} height={10} className='absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 -rotate-90 object-contain object-center w-[150%] scale-x-150 lg:scale-x-100 lg:w-30 h-4 z-10' />
                    </article>
                    <article className='flex flex-col items-center justify-center gap-2.5 xl:gap-3.75 py-5 sm:py-7 xl:py-8.5 px-5 sm:px-9 xl:px-11.25'>
                        <Image src="/images/heroCard-4-neww.svg" alt="hero card 4" width={150} height={50} className='object-contain object-center w-20 sm:w-26.75 h-8.5 sm:h-9.25' />

                        <Image src="/images/heroCard-line.png" alt="hero card line" width={150} height={10} className='object-contain object-center w-30 h-2' />
                        <div className='flex flex-col items-center justify-center text-center text-base xl:text-[20px] text-transparent bg-linear-to-t from-gold to-ivory-soft bg-clip-text'>
                            <span>Member Of</span>
                            <span>American Board</span>
                        </div>
                    </article>
                </MotionScrollInViewVariant>
            </section>
        </main>
    )
}
