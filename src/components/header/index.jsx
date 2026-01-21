import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'
import Navbar from './navbar'
import LanguageChange from './languageChange'

export default function Header() {
    return (
        <header className='relative z-50 gridContainer bg-linear-to-r from-coffee-dark via-wine-brown to-coffee-dark h-30 p-2.5 border-b border-gold'>
            <section className='w-full flex items-center justify-between '>
                <Link href={"/"} className='h-fit w-fit'>
                    <Image src="/images/logo.jpg" alt='ozlembicer logo' width={150} height={100} className='object-contain object-center w-47 h-15' />
                </Link>
                <main className='flex items-center'>
                    <Navbar />
                    <LanguageChange />
                    <article className='px-3.75 py-2.5 rounded-[10px] bg-radial from-coffee-dark to-wine-brown text-ivory-soft text-sm flex flex-col items-center justify-center'>
                        <a href='mailto:info@ozlembicer.com'>info@ozlembicer.com</a>
                        <a href='tel:+904141313'>+90 (414) 13 13</a>
                    </article>
                </main>
            </section>
        </header>
    )
}
