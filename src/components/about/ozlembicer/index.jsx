import CustomBreadCrumb from '@/components/common/customBreadCrumb'
import React from 'react'
import OzlemBicerHero from './ozlemBicerHero'
import HeroLogoCarousel from '@/components/common/logoCarousel'
import DoctorProfile from './doctorProfile'
import ProfessionalAffiliations from './professionalAffiliations'
import Certifications from './certifications'
import Awards from './awards'
import HowToAppointment from '@/components/common/howToAppointment'

const linksItems = [
    { label: 'About Dr. Ozlem Bicer', href: '#' },
    { label: 'Clinic & Team', href: '/about-us/clinic-team' },
    { label: 'Pricing', href: '/about-us/pricing' },
]

export default function OzlemBicerMain({ children }) {
    return (
        <main className='w-full fluid gridContainer bg-ivory-soft'>
            <CustomBreadCrumb links={linksItems} />
            <OzlemBicerHero />
            <div className='fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft to-stone-beige/50'>
                <HeroLogoCarousel />
                <DoctorProfile />
                <ProfessionalAffiliations />
                <Certifications />
                <Awards />
                {children}
                <HowToAppointment />
            </div>
        </main>
    )
}
