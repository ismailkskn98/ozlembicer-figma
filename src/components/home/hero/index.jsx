import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <section className='relative fluid gridContainer bg-radial from-wine-brown to-coffee-dark pt-25 pb-50'>
            <main className='w-full max-w-6xl mx-auto flex items-center gap-10'>
                <article className='flex flex-col items-start gap-7.5 text-ivory-soft'>
                    <h1 className='font-bold text-[50px] leading-15'>Your<br />Expectations Are Our Priority</h1>
                    <p className='text-base w-full max-w-87.5'>Dr. Özlem Bicer brings over 27 years of experience and is an esteemed member of the International Society of Hair Restoration Surgery (ISHRS). She is supported by a dedicated team of highly trained nurses, making us one of the most reputable and experienced hair transplant teams worldwide.</p>
                    <div className='flex items-center gap-6'>
                        <Link href="/contact" className='rounded-[10px] border border-ivory-soft text-ivory-soft py-2.5 px-3.75 text-sm'>
                            Read More About Clinic
                        </Link>
                        <Link href="/contact" className='rounded-[10px] bg-ivory-soft py-2.5 px-3.75 text-coffee-dark text-sm'>
                            Book an Appointment
                        </Link>
                    </div>
                </article>
                <Image src="/images/hero-ozlembicer.png" alt="hero ozlem bicer" width={800} height={550} className='object-contain object-center w-fit h-[496.5px]' />
            </main>
        </section>
    )
}
