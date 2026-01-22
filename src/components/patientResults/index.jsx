import React from 'react'
import PatientResultCarousel from './patientResultCarousel'

export default function PatientResults() {
    return (
        <section className='w-full py-10'>
            <main className='w-full max-w-262 mx-auto flex flex-col items-center justify-center gap-7'>
                <h2 className='text-3xl font-semibold text-center'>Patient Results</h2>
                <PatientResultCarousel />
            </main>
        </section>
    )
}
