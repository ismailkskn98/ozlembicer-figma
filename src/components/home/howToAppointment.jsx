import Image from 'next/image'
import React from 'react'

export default function HowToAppointment() {
    return (
        <section className='w-full fluid gridContainer py-15'>
            <main className='w-full flex flex-col items-center justify-center gap-6'>
                <h2 className='w-full text-[30px] text-center h-15 text-coffee-dark border-b border-coffee-dark'>How To Make An Appointment</h2>
                <section className='w-full max-w-6xl mx-auto grid grid-cols-3 gap-6'>
                    <article className='flex flex-col items-center justify-center bg-coffee-dark rounded-4xl pt-8 px-2.5 pb-14.75 max-h-95'>
                        <div className='flex items-center text-ivory-soft'>
                            <span className='text-[96px]'>1</span>
                            <p className='text-[32px] leading-9'>Contact From<br />WhatsApp</p>
                        </div>
                        <Image src="/images/appointment-icon-1.png" alt="whatsapp" width={300} height={200} className='object-contain object-center w-fit h-38.25' />
                    </article>
                    <article className='flex flex-col items-center justify-center bg-coffee-dark rounded-4xl pt-8 px-2.5 pb-14.75 max-h-95'>
                        <div className='flex items-center text-ivory-soft'>
                            <span className='text-[96px]'>2</span>
                            <p className='text-[32px] leading-9'>Get Online<br />Consultation</p>
                        </div>
                        <Image src="/images/appointment-icon-2.png" alt="consultation" width={300} height={200} className='object-contain object-center w-fit h-38.25' />
                    </article>
                    <article className='flex flex-col items-center justify-center bg-coffee-dark rounded-4xl pt-8 px-2.5 pb-14.75 max-h-95'>
                        <div className='flex items-center text-ivory-soft'>
                            <span className='text-[96px]'>3</span>
                            <p className='text-[32px] leading-9'>Complete Your<br />Appointment</p>
                        </div>
                        <Image src="/images/appointment-icon-3.png" alt="appointment" width={300} height={200} className='object-contain object-center w-fit h-38.25' />
                    </article>
                </section>
                <section className='w-full max-w-6xl flex items-center gap-6'>
                    <article className='flex flex-col items-start gap-3.75 text-coffee-dark'>
                        <h3 className='text-[32px]'>Hair Transplantation in<br /> Istanbul, Turkey</h3>
                        <p className='max-w-141'>Dr. Özlem Bicer brings over 25 years of experience and is an esteemed member of the International Society of Hair Restoration Surgery (ISHRS). She is supported by a dedicated team of highly trained nurses, making us one of the most reputable and experienced hair transplant teams worldwide.</p>
                    </article>
                    <article className='flex-1 min-h-74.25 flex items-center justify-center bg-coffee-dark text-ivory-soft rounded-4xl py-25 px-12.5'>
                        <span className='uppercase text-[32px]'>Contact US</span>
                    </article>
                </section>
            </main>
        </section>
    )
}
