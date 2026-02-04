'use client';
import { HoveredLink, Menu, MenuItem, NestedHoveredLink } from '@/components/ui/navbar-menu'
import React, { useState } from 'react'
import { navigationMenu } from '../navigationMenu';

export default function Navbar() {
    const [active, setActive] = useState(null);
    return (
        <nav className='w-full flex items-center text-nowrap bg-transparent text-ivory-soft text-sm capitalize'>
            <Menu setActive={setActive}>
                {navigationMenu.map((item) => (
                    <MenuItem key={item.item} setActive={setActive} active={active} item={item.item} isLinks={item.links} href={item.href} className={'cursor-pointer relative hover:bg-wine-brown px-2.5 xl:px-3.75 py-0.5 xl:py-2.5 rounded-[10px] transition-all duration-200'}>
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
    );
}
