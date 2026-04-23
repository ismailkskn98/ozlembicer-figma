import React from 'react'
import PatientResultCarousel from './patientResultCarousel'
import MotionScrollInView from '../motionScrollInView'
import { cn } from '@/lib/utils'
import Pageh3Title from '../pageh3Title'

export default function PatientResults({ title, mainClassName, showNavigation = true, carouselItems = [], delay = 4000, carouselProps = {}, blur = true }) {
    return (
        <MotionScrollInView className={cn(`w-full py-10`, mainClassName)}>
            <main className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-center justify-center gap-5 sm:gap-7'>
                {title && (
                    <Pageh3Title title={title} />
                )}
                <PatientResultCarousel showNavigation={showNavigation} carouselItems={carouselItems} delay={delay} {...carouselProps} />
            </main>
        </MotionScrollInView>
    )
}
