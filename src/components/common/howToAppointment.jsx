import Image from 'next/image'
import React from 'react'
import MotionScrollInView from './motionScrollInView'
import MotionScrollInViewVariant from './motionScrollInViewVariant'

export default function HowToAppointment() {
    return (
        <section className='w-full fluid gridContainer py-15'>
            <main className='w-full flex flex-col items-center justify-center gap-6'>
                <MotionScrollInView className="w-full">
                    <h2 className='w-full max-w-308 mx-auto text-[30px] text-center h-15 text-coffee-dark border-b border-coffee-dark'>How To Make An Appointment</h2>
                </MotionScrollInView>
                <MotionScrollInViewVariant className='w-full max-w-6xl mx-auto grid grid-cols-3 gap-6'>
                    <article className='group flex flex-col items-center justify-center bg-coffee-dark rounded-4xl pt-8 px-2.5 pb-14.75 h-full max-h-95'>
                        <div className='flex items-center text-ivory-soft'>
                            <span className='text-[96px]'>1</span>
                            <div className='relative w-full'>
                                <p className='text-[32px] leading-9 group-hover:opacity-0 transition-all duration-300'>Contact From<br />WhatsApp</p>
                                <p className='w-full absolute left-0 top-1/2 -translate-y-1/2 text-[32px] leading-9 text-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200'>Fill Application<br />Form</p>
                            </div>
                        </div>
                        <div className='relative h-38.25'>
                            <Image src="/images/appointment-icon-1.png" alt="whatsapp" width={300} height={200} className='group-hover:opacity-0 transition-all duration-300 object-contain object-center w-fit h-full' />
                            <p className='w-full absolute left-1/2 top-1/2 -translate-1/2 text-[14px] text-ivory-soft opacity-0 group-hover:opacity-100 transition-opacity duration-200'>Since 1998, I have worked on hair restoration and hair transplants. My clinic provides the highest level of service and expertise to turn our patients’ dreams into reality. We have built an unmatched reputation by offering our patients superior results while utilizing the best technology.</p>
                        </div>
                    </article>
                    <article className='group flex flex-col items-center justify-center bg-coffee-dark rounded-4xl pt-8 px-2.5 pb-14.75 h-full max-h-95'>
                        <div className='flex items-center text-ivory-soft'>
                            <span className='text-[96px]'>2</span>
                            <div className='relative w-full'>
                                <p className='text-[32px] leading-9 group-hover:opacity-0 transition-all duration-300'>Get Online<br />Consultation</p>
                                <p className='w-full absolute left-0 top-1/2 -translate-y-1/2 text-[32px] leading-9 text-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200'>Fill Application<br />Form</p>
                            </div>
                        </div>
                        <div className='relative h-38.25'>
                            <Image src="/images/appointment-icon-2.png" alt="consultation" width={300} height={200} className='group-hover:opacity-0 transition-all duration-300 object-contain object-center w-69.25 h-full' />
                            <p className='w-full absolute left-1/2 top-1/2 -translate-1/2 text-[14px] text-ivory-soft opacity-0 group-hover:opacity-100 transition-opacity duration-200'>Since 1998, I have worked on hair restoration and hair transplants. My clinic provides the highest level of service and expertise to turn our patients’ dreams into reality. We have built an unmatched reputation by offering our patients superior results while utilizing the best technology.</p>
                        </div>
                    </article>
                    <article className='group flex flex-col items-center justify-center bg-coffee-dark rounded-4xl pt-8 px-2.5 pb-14.75 h-full max-h-95'>
                        <div className='flex items-center text-ivory-soft'>
                            <span className='text-[96px]'>3</span>
                            <div className='relative w-full'>
                                <p className='text-[32px] leading-9 group-hover:opacity-0 transition-all duration-300'>Complete Your<br />Appointment</p>
                                <p className='w-full absolute left-0 top-1/2 -translate-y-1/2 text-[32px] leading-9 text-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200'>Fill Application<br />Form</p>
                            </div>
                        </div>
                        <div className='relative h-38.25'>
                            <Image src="/images/appointment-icon-3.png" alt="appointment" width={300} height={200} className='group-hover:opacity-0 transition-all duration-300 object-contain object-center w-fit h-full' />
                            <p className='w-full absolute left-1/2 top-1/2 -translate-1/2 text-[14px] text-ivory-soft opacity-0 group-hover:opacity-100 transition-opacity duration-200'>Since 1998, I have worked on hair restoration and hair transplants. My clinic provides the highest level of service and expertise to turn our patients’ dreams into reality. We have built an unmatched reputation by offering our patients superior results while utilizing the best technology.</p>
                        </div>
                    </article>
                </MotionScrollInViewVariant>
                <MotionScrollInView className='w-full max-w-6xl flex items-center gap-6'>
                    <article className='group flex flex-col items-start gap-3.75 text-coffee-dark'>
                        <h3 className='text-[32px]'>Hair Transplantation in<br /> Istanbul, Turkey</h3>
                        <p className='max-w-141'>Dr. Özlem Bicer brings over 25 years of experience and is an esteemed member of the International Society of Hair Restoration Surgery (ISHRS). She is supported by a dedicated team of highly trained nurses, making us one of the most reputable and experienced hair transplant teams worldwide.</p>
                    </article>
                    <article className='flex-1 min-h-74.25 flex items-center justify-center bg-coffee-dark text-ivory-soft rounded-4xl py-25 px-12.5'>
                        <span className='uppercase text-[32px]'>Contact US</span>
                    </article>
                </MotionScrollInView>
            </main>
        </section>
    )
}
