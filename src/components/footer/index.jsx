import { Link } from '@/i18n/navigation';
import Image from 'next/image'
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className='fluid gridContainer w-full'>
            <section className='relative fluid gridContainer w-full bg-coffee-dark py-5.25 border-y border-gold min-h-75 2xl:min-h-90'>
                <div className='w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0' />
                <div className='w-full fluid absolute inset-x-0 top-0 h-0.5 bg-gold z-0' />
                <main className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col md:flex-row items-center lg:items-start  justify-start md:justify-between my-auto'>
                    <article className='w-full max-w-sm flex flex-col items-center md:items-start'>
                        <Image src='/images/logo.jpg' alt='Dr.Bicer Logo' width={250} height={70} className='object-contain object-center w-fit h-14.75 2xl:h-18' />
                        <div className='w-full flex flex-col items-center md:items-start gap-4 mt-5'>
                            <div className='w-full max-w-xs md:max-w-sm grid grid-cols-1 gap-y-0 text-ivory-soft text-sm 2xl:text-lg -space-y-1'>
                                <div className='w-full flex items-center justify-center md:justify-between'>
                                    <div className='flex-1 w-full text-start text-nowrap 2xl:text-lg'>Adress:</div>
                                    <div className='flex-1 w-full text-end md:text-start text-nowrap 2xl:text-lg'>Istanbul/Turkey</div>
                                </div>
                                <div className='w-full flex items-center justify-center md:justify-between'>
                                    <div className='flex-1 w-full text-start text-nowrap 2xl:text-lg'>Mobile & WhatsApp:</div>
                                    <div className='flex-1 w-full text-end md:text-start text-nowrap 2xl:text-lg'>+90 530 414 13 13</div>
                                </div>
                                <div className='w-full flex items-center justify-center md:justify-between'>
                                    <div className='flex-1 w-full text-start text-nowrap 2xl:text-lg'>E-Mail:</div>
                                    <div className='flex-1 w-full text-end md:text-start text-nowrap 2xl:text-lg'>info@ozlembicer.com</div>
                                </div>
                            </div>
                            <div className='flex items-center gap-5'>
                                <Link href="#" className='text-white text-[38px] hover:text-gold transition-colors'><FaInstagram /></Link>
                                <Link href="#" className='text-white text-[38px] hover:text-gold transition-colors'><FaFacebookSquare /></Link>
                                <Link href="#" className='text-white text-[38px] hover:text-gold transition-colors'><FaLinkedin /></Link>
                                <Link href="#" className='text-white text-[38px] hover:text-gold transition-colors'><FaYoutube /></Link>
                            </div>
                        </div>
                    </article>
                    <article className='flex flex-col items-start gap-2.5 text-ivory-soft'>
                        <h4 className='text-[25px]'>Working Hours</h4>
                        <div className='w-full max-w-sm grid grid-cols-1 gap-y-0.5 text-ivory-soft text-sm 2xl:text-base'>
                            <div className='w-full flex items-center justify-between gap-2.5'>
                                <div className='flex-1 w-full text-start text-nowrap'>Monday</div>
                                <div className='flex-1 w-full text-start text-nowrap'>09:00 - 18:00</div>
                            </div>
                            <div className='w-full flex items-center justify-between gap-2.5'>
                                <div className='flex-1 w-full text-start text-nowrap'>Tuesday</div>
                                <div className='flex-1 w-full text-start text-nowrap'>09:00 - 18:00</div>
                            </div>
                            <div className='w-full flex items-center justify-between gap-2.5'>
                                <div className='flex-1 w-full text-start text-nowrap'>Wednesday</div>
                                <div className='flex-1 w-full text-start text-nowrap'>09:00 - 18:00</div>
                            </div>
                            <div className='w-full flex items-center justify-between gap-2.5'>
                                <div className='flex-1 w-full text-start text-nowrap'>Thursday</div>
                                <div className='flex-1 w-full text-start text-nowrap'>09:00 - 18:00</div>
                            </div>
                            <div className='w-full flex items-center justify-between gap-2.5'>
                                <div className='flex-1 w-full text-start text-nowrap'>Friday</div>
                                <div className='flex-1 w-full text-start text-nowrap'>09:00 - 18:00</div>
                            </div>
                            <div className='w-full h-px bg-transparent my-1' />
                            <div className='w-full flex items-center justify-between gap-2.5'>
                                <div className='flex-1 w-full text-start text-nowrap'>Saturday</div>
                                <div className='flex-1 w-full text-start text-nowrap'>09:00 - 18:00</div>
                            </div>
                            <div className='w-full flex items-center justify-between gap-2.5'>
                                <div className='flex-1 w-full text-start text-nowrap'>Sunday</div>
                                <div className='flex-1 w-full text-start text-nowrap'>Closed</div>
                            </div>
                        </div>
                    </article>
                </main>
            </section>
            <section className='fluid gridContainer w-full bg-stone-beige text-coffee-dark h-15 text-center text-sm'>
                <div className='w-full h-full flex items-center justify-center'>
                    <p className=''>Dr.Bicer 2026 - All Rights Reserved.</p>
                </div>
            </section>
        </footer>
    )
}
