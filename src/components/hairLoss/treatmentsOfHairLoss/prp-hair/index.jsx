import React from 'react'
import CustomBreadCrumb from '../../../common/customBreadCrumb'
import HeroLogoCarousel from '../../../common/logoCarousel'
import TitleImages from '../../../common/titleImages'
import PatientResults from '../../../common/patientResults'
import HowToAppointment from '../../../common/howToAppointment'
import PrpHairHero from './prpHairHero'
import PrpHairDoesItWork from './prpHairDoesItWork'

const linksItems = [
    { label: 'Hair Mesotherapy', href: '/hair-loss/treatments-of-hair-loss/hair-mesotherapy' },
    { label: 'PRP Hair Treatment', href: '#' },
    { label: 'Stamp Cell Treatment', href: '/hair-loss/treatments-of-hair-loss/stamp-cell-treatment' },
    { label: 'Trichopat Treatment', href: '/hair-loss/treatments-of-hair-loss/trichopat-treatment' },
]

export default function PrpHairTreatmentMain({ children }) {
    return (
        <main className='w-full fluid gridContainer bg-ivory-soft'>
            <CustomBreadCrumb links={linksItems} />
            <PrpHairHero />
            <div className='fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft to-stone-beige/50'>
                <HeroLogoCarousel />
                <PrpHairDoesItWork />
                {children}
                <TitleImages />
                <PatientResults title="Patient Results" />
                <div className='-mt-10 lg:mt-0'>
                    <HowToAppointment />
                </div>
            </div>
        </main>
    )
}
