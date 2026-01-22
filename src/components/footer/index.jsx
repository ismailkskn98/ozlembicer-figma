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
            <section className='fluid gridContainer w-full bg-coffee-dark py-5.25 border-y border-gold min-h-75'>
                <main className='w-full max-w-6xl mx-auto flex items-start justify-between my-auto'>
                    <article className='w-full max-w-sm flex flex-col items-start'>
                        <Image src='/images/logo.jpg' alt='Dr.Bicer Logo' width={250} height={70} className='object-contain object-center w-fit h-14.75' />
                        <div className='w-full flex flex-col gap-4 mt-5'>
                            <div className='w-full max-w-sm grid grid-cols-1 gap-x-5 text-ivory-soft text-sm'>
                                <div className='w-full flex items-center justify-between'>
                                    <div className='flex-1 w-full text-start'>Adress:</div>
                                    <div className='flex-1 w-full text-start'>İstanbul/Turkey</div>
                                </div>
                                <div className='w-full flex items-center justify-between'>
                                    <div className='flex-1 w-full text-start'>Mobile & Whats App:</div>
                                    <div className='flex-1 w-full text-start'>+90 530 414 13 13</div>
                                </div>
                                <div className='w-full flex items-center justify-between'>
                                    <div className='flex-1 w-full text-start'>E-Mail:</div>
                                    <div className='flex-1 w-full text-start'>info@ozlembicer.com</div>
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
                        <h4 className='text-[32px]'>Working Hours</h4>
                        <div className='w-full max-w-xs grid grid-cols-1 gap-x-5 text-ivory-soft text-sm'>
                            <div className='w-full flex items-center justify-between'>
                                <div className='flex-1 w-full text-start'>Monday</div>
                                <div className='flex-1 w-full text-start'>09:00 - 18:00</div>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <div className='flex-1 w-full text-start'>Tuesday</div>
                                <div className='flex-1 w-full text-start'>09:00 - 18:00</div>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <div className='flex-1 w-full text-start'>Wednesday</div>
                                <div className='flex-1 w-full text-start'>09:00 - 18:00</div>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <div className='flex-1 w-full text-start'>Monday</div>
                                <div className='flex-1 w-full text-start'>09:00 - 18:00</div>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <div className='flex-1 w-full text-start'>Monday</div>
                                <div className='flex-1 w-full text-start'>09:00 - 18:00</div>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <div className='flex-1 w-full text-start'>Saturday</div>
                                <div className='flex-1 w-full text-start'>09:00 - 18:00</div>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <div className='flex-1 w-full text-start'>Sunday</div>
                                <div className='flex-1 w-full text-start'>Closed</div>
                            </div>
                        </div>
                    </article>
                </main>
            </section>
            <section className='fluid gridContainer w-full bg-linear-to-t from-stone-beige  to-ivory-soft text-coffee-dark h-15 text-center text-sm'>
                <div className='w-full h-full flex items-center justify-center'>
                    <p className=''>Dr.Bicer 2026 - All Rights Reserved.  | This Website Is Designed by DB Design.</p>
                </div>
            </section>
        </footer>
    )
}
