import React from 'react'
import PatientResultCarousel from './patientResultCarousel'
import MotionScrollInView from '../motionScrollInView'

export default function PatientResults() {
    return (
        <MotionScrollInView className='w-full py-10'>
            <main className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-center justify-center gap-7'>
                <h2 className='text-3xl font-semibold text-center'>Patient Results</h2>
                <PatientResultCarousel />
            </main>
        </MotionScrollInView>
    )
}
