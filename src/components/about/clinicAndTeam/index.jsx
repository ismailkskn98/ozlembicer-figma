import React from 'react'
import SpeaksLanguage from './speaksLanguage'
import CustomBreadCrumb from '@/components/common/customBreadCrumb'
import ClinicTeamHero from './clinicTeamHero'
import Clinic from './clinic'
import PatientResults from '@/components/common/patientResults'
import HowToAppointment from '@/components/common/howToAppointment'
import HeroLogoCarousel from '@/components/common/logoCarousel'


const linksItems = [
    { label: 'About Dr. Ozlem Bicer', href: '/about-us/dr-ozlem-bicer' },
    { label: 'Clinic & Team', href: '#' },
    { label: 'Pricing', href: '/about-us/pricing' },
]

export default function ClinicAndTeamMain() {
    return (
        <main className='w-full fluid gridContainer bg-ivory-soft'>
            <CustomBreadCrumb links={linksItems} />
            <div className='fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft to-stone-beige/50'>
                <ClinicTeamHero />
                <HeroLogoCarousel />
                <Clinic />
                <SpeaksLanguage />
                <PatientResults />
                <div className='-mt-10 lg:mt-0'>
                    <HowToAppointment />
                </div>
            </div>
        </main>
    )
}
