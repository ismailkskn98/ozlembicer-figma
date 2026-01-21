'use client';
import { HoveredLink, Menu, MenuItem, NestedHoveredLink } from '@/components/ui/navbar-menu'
import { Link } from '@/i18n/navigation'
import React, { useState } from 'react'

export default function Navbar() {
    const [active, setActive] = useState(null);
    const menu = [
        {
            item: 'About Us',
            links: [
                { href: '#', label: 'Dr. Ozlem Bicer' },
                { href: '#', label: 'Clinic & Team' },
                { href: '#', label: 'Pricing' },
            ],
        },
        { item: 'Hair Loss', href: '#' },
        {
            item: 'Transplantation',
            links: [
                {
                    href: '/about-us',
                    label: 'Hair Transplant',
                    submenu: [
                        { href: '/hair-transplant', label: 'FUT technique' },
                        { href: '/hair-transplant', label: 'FUE Micromotor technique' },
                        { href: '/hair-transplant', label: 'FUE Manuel technique' },
                    ],
                },
                { href: '/clinic-and-team', label: 'Hair Transplantat' },
                { href: '/clinic-and-team', label: 'Beard Transplantation' },
                { href: '/who-is-ozlem-bicer', label: 'Eyebrow Transplant' },
                { href: '/clinic-and-team', label: 'Long Hair Unshaven' },
                { href: '/clinic-and-team', label: 'Eyebrow Transplant' },
                { href: '/clinic-and-team', label: 'Women Transplant' },
                { href: '/price', label: 'Price' },
            ],
        },
        {
            item: 'Guides',
            links: [
                { href: '/who-is-ozlem-bicer', label: 'Hair Loss' },
                { href: '/clinic-and-team', label: 'Hair Loss In Women' },
                { href: '/clinic-and-team', label: 'Hair Mesotherapy' },
                { href: '/clinic-and-team', label: 'PRP' },
                { href: '/clinic-and-team', label: 'Norwood scale' },
                { href: '/clinic-and-team', label: 'Reconstruction Hair Transplantation' },
                { href: '/price', label: 'Shock Loss' },
            ],
        },
        {
            item: 'Gallery',
            links: [
                { href: '/who-is-ozlem-bicer', label: 'Before & After' },
                { href: '/clinic-and-team', label: 'Patient Results' },
                { href: '/clinic-and-team', label: 'Patient Reviews' },
                { href: '/clinic-and-team', label: 'Interview' },
            ],
        },
        { item: 'Contact Us', href: '#' }
    ];
    return (
        <nav className='w-full flex items-center text-nowrap bg-transparent text-ivory-soft text-sm capitalize'>
            <Menu setActive={setActive}>
                {menu.map((item) => (
                    <MenuItem key={item.item} setActive={setActive} active={active} item={item.item} className={'cursor-pointer relative hover:bg-wine-brown px-3.75 py-2.5 rounded-[10px] transition-all duration-200'}>
                        <div className="flex flex-col text-sm bg-transparent rounded-[10px] capitalize">
                            {item.links && item.links.length > 0 && item.links.map((link, idx) => link.submenu ? (
                                <NestedHoveredLink
                                    key={link.label + idx}
                                    href={link.href}
                                    className={`hover:bg-wine-brown px-3.75 py-2.5 transition-all duration-200`}
                                    submenu={
                                        <>
                                            {link.submenu.map((s, sidx) => (
                                                <HoveredLink key={s.label + sidx} href={s.href} className={`hover:bg-wine-brown px-3.75 py-2.5 transition-all duration-200 ${sidx === 0 && 'rounded-t-[10px]'} ${link.submenu.length === sidx + 1 && 'rounded-b-[10px]'}`}>
                                                    {s.label}
                                                </HoveredLink>
                                            ))}
                                        </>
                                    }
                                >
                                    {link.label}
                                </NestedHoveredLink>
                            ) : (
                                <HoveredLink key={link.label + idx} href={link.href} className={`hover:bg-wine-brown px-3.75 py-2.5 transition-all duration-200 ${idx === 0 && 'rounded-t-[10px]'} ${item.links.length === idx + 1 && 'rounded-b-[10px]'}`}>
                                    {link.label}
                                </HoveredLink>
                            )
                            )}
                        </div>
                    </MenuItem>
                ))}
            </Menu>
            {/* <Link href="/contact-us" className='relative hover:bg-wine-brown px-3.75 py-2.5 rounded-[10px] transition-all duration-200'>
                Contact Us
            </Link> */}
        </nav>
    )
}
