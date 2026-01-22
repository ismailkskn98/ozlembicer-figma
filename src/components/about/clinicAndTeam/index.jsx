import CustomBreadCrumb from '@/components/common/customBreadCrumb'
import HowToAppointment from '@/components/common/howToAppointment'
import HeroLogoCarousel from '@/components/common/logoCarousel'
import React from 'react'
import ClinicTeamHero from './clinicTeamHero'
import Clinic from './clinic'

const linksItems = [
    { label: 'About Dr. Ozlem Bicer', href: '/about-us/ozlem-bicer' },
    { label: 'Clinic & Team', href: '#' },
    { label: 'Pricing', href: '/about-us/pricing' },
]

export default function ClinicAndTeamMain() {
    return (
        <>
            <CustomBreadCrumb links={linksItems} />
            <div className='fluid gridContainer w-full bg-linear-to-b from-stone-beige to-ivory-soft'>
                <ClinicTeamHero />
                <HeroLogoCarousel />
                <Clinic />
                <HowToAppointment />
            </div>
        </>
    )
}
