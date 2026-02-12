import React from 'react'
import CustomBreadCrumb from '../../../common/customBreadCrumb'
import FemaleHairLossHero from './femaleHairLossHero'
import HeroLogoCarousel from '../../../common/logoCarousel'
import TitleImages from '../../../common/titleImages'
import PatientResults from '../../../common/patientResults'
import HowToAppointment from '../../../common/howToAppointment'
import FemaleContent from './femaleContent'

const linksItems = [
    { label: 'Male Hair Loss', href: '/hair-loss/male-hair-loss' },
    { label: 'Female Hair Loss', href: '#' },
]

export default function FemaleHairLossMain({ children }) {
    return (
        <main className='w-full fluid gridContainer bg-ivory-soft'>
            <CustomBreadCrumb links={linksItems} />
            <FemaleHairLossHero />
            <div className='fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft to-stone-beige/50'>
                <HeroLogoCarousel />
                <FemaleContent />
                {children}
                <TitleImages />
                <PatientResults />
                <div className='-mt-10 lg:mt-0'>
                    <HowToAppointment />
                </div>
            </div>
        </main>
    )
}
