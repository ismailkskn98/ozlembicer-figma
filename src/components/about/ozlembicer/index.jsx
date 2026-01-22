import CustomBreadCrumb from '@/components/common/customBreadCrumb'
import React from 'react'
import OzlemBicerHero from './ozlemBicerHero'
import HeroLogoCarousel from '@/components/common/logoCarousel'

const linksItems = [
    { label: 'About Dr. Ozlem Bicer', href: '#' },
    { label: 'Clinic & Team', href: '/about-us/clinic-team' },
    { label: 'Pricing', href: '/about-us/pricing' },
]

export default function OzlemBicerMain() {
    return (
        <>
            <CustomBreadCrumb links={linksItems} />
            <OzlemBicerHero />
            <HeroLogoCarousel />
        </>
    )
}
