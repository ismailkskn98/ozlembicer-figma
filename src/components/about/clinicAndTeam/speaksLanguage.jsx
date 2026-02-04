import MotionScrollInView from '@/components/common/motionScrollInView'
import MotionScrollInViewVariant from '@/components/common/motionScrollInViewVariant'
import Image from 'next/image'
import React from 'react'

export default function SpeaksLanguage() {
    return (
        <section className='fluid gridContainer w-full py-10'>
            <main className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-center justify-center gap-8 bg-radial from-coffee-dark to-wine-brown py-15 px-2.5 rounded-4xl'>
                <MotionScrollInViewVariant className='w-full max-w-11/12 mx-auto flex items-center justify-between gap-5' childClassname="object-contain object-center rounded-2xl w-30.25 h-20">
                    <Image src='/images/about/united-states.png' alt='united-states Speaks Language' width={150} height={90} className='object-contain object-center rounded-2xl w-30.25 h-20' />
                    <Image src='/images/about/italy.png' alt='italy Speaks Language' width={150} height={90} className='object-contain object-center rounded-2xl w-30.25 h-20' />
                    <Image src='/images/about/franc.png' alt='franc Speaks Language' width={150} height={90} className='object-contain object-center rounded-2xl w-30.25 h-20' />
                    <Image src='/images/about/germany.png' alt='germany Speaks Language' width={150} height={90} className='object-contain object-center rounded-2xl w-30.25 h-20' />
                </MotionScrollInViewVariant>
                <MotionScrollInView>
                    <p className='text-ivory-soft text-[30px]'>Contact Directly To Someone Who Speaks In Your Language</p>
                </MotionScrollInView>
            </main>
        </section>
    )
}
