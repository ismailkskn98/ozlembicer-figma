'use client';
import React from 'react'
import MotionScrollInView from '../common/motionScrollInView';

export default function ContactForm() {
    return (
        <section className='w-full fluid gridContainer my-16 sm:my-25'>
            <main className='w-full max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-10 lg:gap-16 xl:gap-20 2xl:gap-24.5'>
                <article className='w-full'>
                    <iframe className='border-0 rounded-[10px] max-h-100 xl:max-h-115 w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.4323097541787!2d29.098207486293994!3d40.993910097487245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac62895079e5d%3A0xa2428f53ed319008!2zRHIuIMOWemxlbSBCacOnZXIgfCBNRA!5e0!3m2!1str!2str!4v1769150651118!5m2!1str!2str" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </article>
                <article className='w-full max-w-full sm:max-w-80 lg:max-w-125.5 flex flex-col items-start text-[18px] md:text-base xl:text-[20px]'>
                    <div className='w-full grid grid-cols-2'>
                        <p className='text-nowrap'>Adress: </p>
                        <p className='text-nowrap'>Istanbul / Turkey</p>
                    </div>
                    <div className='w-full grid grid-cols-2'>
                        <p className='text-nowrap'>Mobile & Whats App: </p>
                        <p className='text-nowrap'>+90 530 414 13 13</p>
                    </div>
                    <div className='w-full grid grid-cols-2'>
                        <p className='text-nowrap'>E-Mail: </p>
                        <p className='text-nowrap'>info@ozlembicer.com</p>
                    </div>
                </article>
            </main>

            <MotionScrollInView className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-6 mt-20 lg:mt-25'>
                <article className='group flex flex-col items-start gap-3.75 text-coffee-dark'>
                    <h3 className='text-[32px] leading-9'>Hair Transplantation in<br /> Istanbul, Turkey</h3>
                    <p className='max-w-141'>Dr. Özlem Bicer brings over 25 years of experience and is an esteemed member of the International Society of Hair Restoration Surgery (ISHRS). She is supported by a dedicated team of highly trained nurses, making us one of the most reputable and experienced hair transplant teams worldwide.</p>
                </article>
                <article className='group relative w-full lg:w-auto max-w-sm lg:max-w-full flex-1 min-h-60 lg:min-h-74.25 flex items-center justify-center bg-coffee-dark text-ivory-soft rounded-4xl py-25 px-12.5'>
                    <span className='opacity-0 lg:opacity-100 lg:group-hover:opacity-0 transition-opacity duration-300 uppercase text-[23px] sm:text-[28px] md:text-[32px] text-nowrap'>Contact US</span>
                    <div className='w-fit flex flex-col items-center justify-center gap-2 absolute left-1/2 top-1/2 -translate-1/2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300'>
                        <span className='inline-block lg:hidden uppercase text-[23px] sm:text-[28px] md:text-[32px] text-nowrap'>Contact US</span>
                        <div className='flex flex-col items-center justify-center text-[23px] sm:text-[28px] lg:text-[32px]'>
                            <a href="mailto:info@ozlembicer.com">info@ozlembicer.com</a>
                            <a href="tel:+905334141313">+90 (533) 414 13 13</a>
                        </div>
                    </div>
                </article>
            </MotionScrollInView>
        </section>
    )
}
