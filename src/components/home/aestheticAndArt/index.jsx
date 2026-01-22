import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'

export default function AestheticAndArt() {
    return (
        <section className='fluid gridContainer w-full py-25 bg-radial from-coffee-dark to-wine-brown border-y border-gold'>
            <main className='w-full max-w-6xl mx-auto flex items-center justify-center gap-6'>
                <article className='flex flex-col item-start gap-7.5 text-ivory-soft'>
                    <h2 className='text-[64px] flex flex-col leading-18'>Aesthetic Is<span className='font-bold'>Where Art and Medicine Meets</span></h2>
                    <p className=''>Since 1998, I have been dedicated to the field of hair restoration and hair transplantation. At my clinic, we provide a high standard of medical care and professional expertise, with a clear focus on achieving natural, healthy, and long-lasting results for our patients.</p>
                    <p className=''>Over the years, we have built a strong reputation by combining surgical experience, advanced technology, and strict adherence to safe and ethical medical practices. Every treatment is carefully planned and tailored to the individual needs of each patient.</p>
                    <p className=''>If you are seeking a world-class hair transplant clinic that prioritizes medical excellence, natural outcomes, and patient care, my experienced medical team and I are here to guide you through every step of your journey.</p>
                    <p><span className='font-bold'>Özlem Biçer, M.D.</span></p>
                    <div className='flex items-center gap-6'>
                        <Link href="/contact" className='rounded-[10px] border border-ivory-soft text-ivory-soft py-2.5 px-3.75 text-sm'>
                            Read More About Dr.Bicer
                        </Link>
                        <Link href="/contact" className='rounded-[10px] bg-ivory-soft py-2.5 px-3.75 text-coffee-dark text-sm'>
                            Book an Appointment
                        </Link>
                    </div>
                </article>
                <Image src="/images/aestheticAndArt.png" alt="aesthetic and art" width={600} height={800} className='object-contain object-center w-fit h-full' />
            </main>
        </section>
    )
}
