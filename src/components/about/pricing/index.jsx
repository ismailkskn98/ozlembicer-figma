import CustomBreadCrumb from '@/components/common/customBreadCrumb'
import HowToAppointment from '@/components/common/howToAppointment'
import HeroLogoCarousel from '@/components/common/logoCarousel'
import React from 'react'
import PatientResults from '@/components/common/patientResults'
import PricingHero from './pricingHero'
import TitleImages from '@/components/common/titleImages'

const linksItems = [
    { label: 'About Dr. Ozlem Bicer', href: '/about-us/dr-ozlem-bicer' },
    { label: 'Clinic & Team', href: '/about-us/clinic-team' },
    { label: 'Pricing', href: '#' },
]

export default function PricingMain({ children }) {
    return (
        <>
            <CustomBreadCrumb links={linksItems} />
            <div className='fluid gridContainer w-full bg-linear-to-b from-stone-beige to-ivory-soft'>
                <PricingHero />
                <HeroLogoCarousel />
                {children}
                <TitleImages />
                <PatientResults />
                <HowToAppointment />
            </div>
        </>
    )
}
