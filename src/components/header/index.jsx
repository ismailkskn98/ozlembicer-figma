import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'
import Navbar from './navbar'
// import LanguageChange from './languageChange'
import TemporaryLanguageChange from './temporaryLanguageChange'
import MotionScrollInViewOpacity from '../common/motionScrollInViewOpacity'
import { SlMenu } from "react-icons/sl";
import MobilNavbar from './mobilNavbar'

export default function Header() {
    return (
        <main className='fixed inset-x-0 top-0 z-50 w-full gridContainer'>
            <header className='w-full fluid gridContainer bg-coffee-dark min-h-20 sm:min-h-25 lg:min-h-30 border-b border-gold'>
                <MotionScrollInViewOpacity className="w-full flex items-center">
                    <section className='w-full h-full max-w-full lg:max-w-6xl mx-auto flex items-center justify-between'>
                        <Link href={"/"} className='relative h-[99%] w-fit flex items-center justify-center'>
                            <div className='absolute left-1/2 top-1/2 -translate-1/2 w-[200%] h-full bg-linear-to-r from-coffee-dark via-wine-brown to-coffee-dark' />
                            <Image src="/images/logo.jpg" alt='ozlembicer logo' width={150} height={100} className='relative z-20 object-contain object-center w-fit h-10 lg:h-11 xl:h-15' />
                        </Link>
                        <main className='hidden md:flex items-center'>
                            <Navbar />
                            <div className='w-fit h-fit md:inline-block hidden'>
                                {/* <LanguageChange /> */}
                                <TemporaryLanguageChange />
                            </div>
                            {/* <Link href="/contact-us" className='hidden lg:flex flex-col items-center justify-center px-3.75 py-2.5 rounded-[10px] bg-ivory-soft text-coffee-dark border border-gold text-sm'> */}
                            {/* <Link href="/contact-us" className='hidden lg:flex flex-col items-center justify-center px-3.75 py-2.5 rounded-[10px] bg-radial from-coffee-dark to-wine-brown text-ivory-soft text-sm 
                            drop-shadow-[0px_0px_6px_#eee6db]'> */}
                            <Link href="/contact-us" className='hidden lg:flex flex-col items-center justify-center px-3.75 py-2.5 rounded-[10px] text-ivory-soft text-sm hover:bg-radial hover:from-coffee-dark hover:to-wine-brown transition-all duration-300'>
                                <span>info@ozlembicer.com</span>
                                <span>+90 (414) 13 13</span>
                            </Link>
                        </main>
                        <article className='md:hidden flex items-center'>
                            <MobilNavbar>
                                <SlMenu size={24} className='cursor-pointer text-ivory-soft' />
                            </MobilNavbar>
                        </article>
                    </section>
                </MotionScrollInViewOpacity>
            </header>
            <section className='lg:hidden fluid gridContainer w-full max-w-full lg:max-w-6xl mx-auto py-1 bg-linear-to-r from-coffee-dark via-wine-brown to-coffee-dark'>
                <main className='w-full flex items-center justify-between'>
                    <Link href="/contact-us" className='flex items-center justify-center gap-1 text-ivory-soft  px-2.5 py-0.5 rounded-sm text-xs sm:text-sm'>
                        <span>info@ozlembicer.com</span>
                        <span>-</span>
                        <span>+90 (414) 13 13</span>
                    </Link>
                    {/* <LanguageChange /> */}
                    <TemporaryLanguageChange />
                </main>
            </section>
        </main>
    )
}
