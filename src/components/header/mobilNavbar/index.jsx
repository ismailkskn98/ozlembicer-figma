'use client';
import React, { useState } from 'react'
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Link } from '@/i18n/navigation'
import { MdExpandMore } from "react-icons/md"
import { navigationMenu } from '../navigationMenu';
import LanguageChange from '../languageChange';
import Image from 'next/image';
import { IoCloseOutline } from "react-icons/io5";

export default function MobilNavbar({ children }) {
    const [expandedMenu, setExpandedMenu] = useState(null);

    const toggleExpanded = (item) => {
        setExpandedMenu(expandedMenu === item ? null : item);
    };

    return (
        <Sheet>
            <SheetTrigger asChild>
                {children}
            </SheetTrigger>
            <SheetContent showCloseButton={false} side="right" className='bg-coffee-dark border-gold p-0'>
                <SheetTitle className='sr-only'>Navigation Menu</SheetTitle>
                <main className='flex flex-col h-full'>
                    <header className='w-full flex items-center justify-between gap-3 px-6 py-4 border-b border-gold/30'>
                        <Link href={"/"} className='h-fit w-fit'>
                            <Image src="/images/logo.jpg" alt='ozlembicer logo' width={150} height={100} className='object-contain object-center w-fit h-8' />
                        </Link>
                        <SheetClose asChild>
                            <button className='text-ivory-soft hover:text-gold transition-colors text-sm font-medium'>
                                <IoCloseOutline className='text-2xl' />
                            </button>
                        </SheetClose>
                    </header>

                    <nav className='flex-1 overflow-y-auto px-6 py-4'>
                        <ul className='space-y-1'>
                            {navigationMenu.map((item) => (
                                <li key={item.item}>
                                    {item.links && item.links.length > 0 ? (
                                        <>
                                            <button
                                                onClick={() => toggleExpanded(item.item)}
                                                className='w-full flex items-center justify-between py-3 px-3 text-ivory-soft hover:bg-wine-brown/50 rounded-lg transition-colors duration-200 text-sm capitalize font-medium'
                                            >
                                                {item.item}
                                                <MdExpandMore
                                                    size={20}
                                                    className={`transition-transform duration-300 ${expandedMenu === item.item ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                            {(expandedMenu === item.item || expandedMenu?.startsWith(`${item.item}-`)) && (
                                                <ul className='bg-wine-brown/30 rounded-lg mt-1 overflow-hidden'>
                                                    {item.links.map((link) => (
                                                        <li key={link.label}>
                                                            {link.submenu ? (
                                                                <>
                                                                    <button
                                                                        onClick={() => {
                                                                            const fullPath = `${item.item}-${link.label}`;
                                                                            if (expandedMenu === fullPath) {
                                                                                setExpandedMenu(item.item);
                                                                            } else {
                                                                                setExpandedMenu(fullPath);
                                                                            }
                                                                        }}
                                                                        className='w-full flex items-center justify-between py-2.5 px-4 pl-6 text-ivory-soft/90 hover:text-ivory-soft hover:bg-wine-brown/50 transition-colors duration-200 text-xs capitalize'
                                                                    >
                                                                        {link.label}
                                                                        <MdExpandMore
                                                                            size={16}
                                                                            className={`transition-transform duration-300 ${expandedMenu === `${item.item}-${link.label}` ? 'rotate-180' : ''}`}
                                                                        />
                                                                    </button>
                                                                    {expandedMenu === `${item.item}-${link.label}` && (
                                                                        <ul className='bg-wine-brown rounded-b-lg overflow-hidden'>
                                                                            {link.submenu.map((sub) => (
                                                                                <li key={sub.label}>
                                                                                    <SheetClose asChild>
                                                                                        <Link
                                                                                            href={sub.href}
                                                                                            className='block py-2 px-4 pl-6 text-ivory-soft/80 hover:text-ivory-soft hover:bg-wine-brown/60 transition-colors duration-200 text-xs capitalize'
                                                                                        >
                                                                                            {sub.label}
                                                                                        </Link>
                                                                                    </SheetClose>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    )}
                                                                </>
                                                            ) : (
                                                                <SheetClose asChild>
                                                                    <Link
                                                                        href={link.href}
                                                                        className='block py-2.5 px-4 pl-6 text-ivory-soft/90 hover:text-ivory-soft hover:bg-wine-brown/50 transition-colors duration-200 text-xs capitalize'
                                                                    >
                                                                        {link.label}
                                                                    </Link>
                                                                </SheetClose>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </>
                                    ) : (
                                        <SheetClose asChild>
                                            <Link
                                                href={item.href}
                                                className='block py-3 px-3 text-ivory-soft hover:bg-wine-brown/50 rounded-lg transition-colors duration-200 text-sm capitalize font-medium'
                                            >
                                                {item.item}
                                            </Link>
                                        </SheetClose>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>


                    <footer className='px-6 py-4 border-t border-gold/30 mt-auto flex items-center justify-between gap-3'>
                        <article className='space-y-1'>
                            <a href='mailto:info@ozlembicer.com' className='flex text-xs text-ivory-soft/80 hover:text-gold transition-colors duration-200 break-all'>
                                info@ozlembicer.com
                            </a>
                            <a href='tel:+904141313' className='flex text-xs text-ivory-soft/80 hover:text-gold transition-colors duration-200'>
                                +90 (414) 13 13
                            </a>
                        </article>
                        <LanguageChange />
                    </footer>
                </main>
            </SheetContent>
        </Sheet>
    )
}
