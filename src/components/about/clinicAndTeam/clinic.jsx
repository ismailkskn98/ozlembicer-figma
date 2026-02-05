import Image from 'next/image'
import React from 'react'
import PhotoGallery from './clinicGallery'
import MotionRightView from '@/components/common/motionRightView'
import MotionLeftView from '@/components/common/motionLeftView'

export default function Clinic() {
    return (
        <section className='relative fluid gridContainer w-full bg-coffee-dark pt-12 sm:pt-18.25 pb-20 sm:pb-25 lg:pb-36'>
            <div className='w-full fluid absolute inset-x-0 top-0 h-0.5 bg-gold z-0' />
            <div className='w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0' />
            <main className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-start gap-4'>
                <h2 className='text-ivory-soft text-[32px]'>Clinic</h2>
                <div className='w-full flex flex-col lg:flex-row items-start gap-12 lg:gap-32'>
                    <MotionLeftView className='flex-1 w-full lg:max-w-120'>
                        <PhotoGallery />
                    </MotionLeftView>
                    <MotionRightView>
                        <Image src='/images/about/clinic-gallery-right.png' alt='Clinic Gallery' width={500} height={700} className='flex-1 object-contain object-center h-full max-h-120 sm:max-h-157.5 w-fit' />
                    </MotionRightView>
                </div>
            </main>
        </section>
    )
}
