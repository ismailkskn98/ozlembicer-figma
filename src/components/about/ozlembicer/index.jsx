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
        <>
            <CustomBreadCrumb links={linksItems} />
            <OzlemBicerHero />
            <div className='fluid gridContainer w-full bg-linear-to-b from-stone-beige to-ivory-soft'>
                <HeroLogoCarousel />
                <DoctorProfile />
                <ProfessionalAffiliations />
                <Certifications />
                <Awards />
                {children}
                <HowToAppointment />
            </div>
        </>
    )
}
