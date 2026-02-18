import React from 'react'
import PatientResultCarousel from './patientResultCarousel'
import MotionScrollInView from '../motionScrollInView'
import { cn } from '@/lib/utils'

export default function PatientResults({ title, mainClassName, showNavigation = true, carouselItems = [], delay = 4000, carouselProps = {}, blur = true }) {
    return (
        <MotionScrollInView className={cn(`w-full py-10`, mainClassName)}>
            <main className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-center justify-center gap-5 sm:gap-7'>
                {title && (
                    <h2 className='text-[20px] lg:text-3xl font-semibold text-center'>{title}</h2>
                )}
                <PatientResultCarousel showNavigation={showNavigation} carouselItems={carouselItems} delay={delay} {...carouselProps} blur={blur} />
            </main>
        </MotionScrollInView>
    )
}
