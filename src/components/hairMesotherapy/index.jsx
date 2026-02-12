import React from 'react'
import CustomBreadCrumb from '../common/customBreadCrumb'
import HairMesotherapyHero from './hairMesotherapyHero'
import HeroLogoCarousel from '../common/logoCarousel'
import ProfessionalAffiliations from '../about/ozlembicer/professionalAffiliations'
import Certifications from '../about/ozlembicer/certifications'
import Awards from '../about/ozlembicer/awards'
import SpeaksLanguage from '../about/clinicAndTeam/speaksLanguage'
import PatientResults from '../common/patientResults'
import HowToAppointment from '../common/howToAppointment'

const linksItems = [
    { label: 'Hair Mesotherapy', href: '#' },
    { label: 'PRP Hair Treatment', href: '/hair-loss/treatments-of-hair-loss/prp-hair-treatment' },
    { label: 'BHT (Body Hair)', href: '/hair-loss/treatments-of-hair-loss/bht-body-hair' },
    { label: 'Stamp Cell Treatment', href: '/hair-loss/treatments-of-hair-loss/stamp-cell-treatment' },
    { label: 'Trichopat Treatment', href: '/hair-loss/treatments-of-hair-loss/trichopat-treatment' },
]

export default function HairMesotherapyMain({ children }) {
    return (
        <main className='w-full fluid gridContainer bg-ivory-soft'>
            <CustomBreadCrumb links={linksItems} />
            <HairMesotherapyHero />
            <div className='fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft to-stone-beige/50'>
                <HeroLogoCarousel />
                <ProfessionalAffiliations />
                <Certifications />
                <Awards />
                {children}
                <SpeaksLanguage />
                <PatientResults />
                <div className='-mt-10 lg:mt-0'>
                    <HowToAppointment />
                </div>
            </div>
        </main>
    )
}
