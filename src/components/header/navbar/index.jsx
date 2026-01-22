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
                { href: '/about-us/dr-ozlem-bicer', label: 'Dr. Ozlem Bicer' },
                { href: '/about-us/clinic-team', label: 'Clinic & Team' },
                { href: '/about-us/pricing', label: 'Pricing' },
            ],
        },
        { item: 'Hair Loss', href: '#' },
        {
            item: 'Transplantation',
            links: [
                {
                    href: '#',
                    label: 'Hair Transplant',
                    submenu: [
                        { href: '#', label: 'FUT technique' },
                        { href: '#', label: 'FUE Micromotor technique' },
                        { href: '#', label: 'FUE Manuel technique' },
                    ],
                },
                { href: '#', label: 'Hair Transplantat' },
                { href: '#', label: 'Beard Transplantation' },
                { href: '#', label: 'Eyebrow Transplant' },
                { href: '#', label: 'Long Hair Unshaven' },
                { href: '#', label: 'Eyebrow Transplant' },
                { href: '#', label: 'Women Transplant' },
                { href: '#', label: 'Price' },
            ],
        },
        {
            item: 'Guides',
            links: [
                { href: '#', label: 'Hair Loss' },
                { href: '#', label: 'Hair Loss In Women' },
                { href: '#', label: 'Hair Mesotherapy' },
                { href: '#', label: 'PRP' },
                { href: '#', label: 'Norwood scale' },
                { href: '#', label: 'Reconstruction Hair Transplantation' },
                { href: '#', label: 'Shock Loss' },
            ],
        },
        {
            item: 'Gallery',
            links: [
                { href: '#', label: 'Before & After' },
                { href: '#', label: 'Patient Results' },
                { href: '#', label: 'Patient Reviews' },
                { href: '#', label: 'Interview' },
            ],
        },
        { item: 'Contact Us', href: '/contact-us' }
    ];
    return (
        <nav className='w-full flex items-center text-nowrap bg-transparent text-ivory-soft text-sm capitalize'>
            <Menu setActive={setActive}>
                {menu.map((item) => (
                    <MenuItem key={item.item} setActive={setActive} active={active} item={item.item} isLinks={item.links} href={item.href} className={'cursor-pointer relative hover:bg-wine-brown px-3.75 py-2.5 rounded-[10px] transition-all duration-200'}>
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
        </nav>
    )
}
