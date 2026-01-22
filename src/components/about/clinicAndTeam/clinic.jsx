import Image from 'next/image'
import React from 'react'
import PhotoGallery from './clinicGallery'

export default function Clinic() {
    return (
        <section className='fluid gridContainer w-full bg-coffee-dark pt-18.25 pb-36'>
            <main className='w-full max-w-6xl mx-auto flex flex-col items-start gap-4'>
                <h2 className='text-ivory-soft text-[32px]'>Clinic</h2>
                <div className='w-full flex items-start gap-16'>
                    <div className='flex-1'>
                        <PhotoGallery />
                    </div>
                    <Image src='/images/about/clinic-gallery-right.png' alt='Clinic Gallery' width={500} height={700} className='object-contain object-center h-full max-h-157.5 w-fit' />
                </div>
            </main>
        </section>
    )
}
