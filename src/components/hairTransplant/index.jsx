import React from 'react'
import HairTransplantHero from './hairTransplantHero'
import CustomBreadCrumb from '../common/customBreadCrumb'
import HeroLogoCarousel from '../common/logoCarousel'

const linksItems = [
    { label: 'About Dr. Ozlem Bicer', href: '#' },
    { label: 'Clinic & Team', href: '/about-us/clinic-team' },
    { label: 'Pricing', href: '/about-us/pricing' },
]

export default function HairTransplantMain({ children }) {
    return (
        <>
            <CustomBreadCrumb links={linksItems} />
            <HairTransplantHero />
            <div className='fluid gridContainer w-full bg-linear-to-b from-stone-beige to-ivory-soft'>
                <HeroLogoCarousel />
                {children}
            </div>
        </>
    )
}
