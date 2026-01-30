import React from 'react'
import CustomBreadCrumb from '../common/customBreadCrumb'
import BeardHero from './beardHero'
import HeroLogoCarousel from '../common/logoCarousel'

const linksItems = [
    { label: 'Hair Transplantation', href: '#' },
    { label: 'Follicular Unit Extraction (FUE)', href: '#' },
    { label: 'Follicular Unit Extraction (FUT)', href: '#' },
    { label: 'Body Hair Transplant (BHT)', href: '#' },
    { label: 'Woman Hair Transplantation', href: '#' },
]

export default function BeardTransplantationMain() {
    return (
        <main className='w-full fluid gridContainer bg-ivory-soft'>
            <CustomBreadCrumb links={linksItems} />
            <div className='fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft to-stone-beige/50'>
                <BeardHero />
                <HeroLogoCarousel />
                {/* <Clinic />
                <SpeaksLanguage />
                <PatientResults />
                <HowToAppointment /> */}
            </div>
        </main>
    )
}
