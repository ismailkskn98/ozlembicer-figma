import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'
import Navbar from './navbar'
import LanguageChange from './languageChange'
import MotionScrollInViewOpacity from '../common/motionScrollInViewOpacity'
import { SlMenu } from "react-icons/sl";

export default function Header() {
    return (
        <header className='relative z-50 w-full gridContainer bg-linear-to-r from-coffee-dark via-wine-brown to-coffee-dark h-30 py-2.5 border-b border-gold'>
            <section className='xl:hidden w-full max-w-full lg:max-w-6xl mx-auto flex items-center justify-end'>
                <article className='flex items-center justify-center gap-4 px-3.75 py-0.5 rounded-[10px] bg-radial from-coffee-dark to-wine-brown text-ivory-soft text-sm'>
                    <a href='mailto:info@ozlembicer.com'>info@ozlembicer.com</a>
                    <span>-</span>
                    <a href='tel:+904141313'>+90 (414) 13 13</a>
                </article>
                <LanguageChange />
            </section>
            <MotionScrollInViewOpacity className="w-full ">
                <section className='w-full max-w-full lg:max-w-6xl mx-auto flex items-center justify-between'>
                    <Link href={"/"} className='h-fit w-fit'>
                        <Image src="/images/logo.jpg" alt='ozlembicer logo' width={150} height={100} className='object-contain object-center w-47 h-10 lg:h-12 xl:h-15' />
                    </Link>
                    <main className='hidden md:flex items-center'>
                        <Navbar />
                        <div className='w-fit h-fit xl:inline-block hidden'>
                            <LanguageChange />
                        </div>
                        <article className='hidden xl:flex flex-col items-center justify-center px-3.75 py-2.5 rounded-[10px] bg-radial from-coffee-dark to-wine-brown text-ivory-soft text-sm'>
                            <a href='mailto:info@ozlembicer.com'>info@ozlembicer.com</a>
                            <a href='tel:+904141313'>+90 (414) 13 13</a>
                        </article>
                    </main>
                    <SlMenu size={24} className='md:hidden cursor-pointer text-ivory-soft' />
                </section>
            </MotionScrollInViewOpacity>
        </header>
    )
}
