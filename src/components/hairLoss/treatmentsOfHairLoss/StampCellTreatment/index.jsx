import React from 'react'
import CustomBreadCrumb from '../../../common/customBreadCrumb'
import HeroLogoCarousel from '../../../common/logoCarousel'
import TitleImages from '../../../common/titleImages'
import PatientResults from '../../../common/patientResults'
import HowToAppointment from '../../../common/howToAppointment'
import StampCellTreatmentHero from './StampCellTreatmentHero'
import StampCellTreatmentDoesItWork from './StampCellTreatmentDoesItWork'
import SectionWrapper from '@/components/transplantation/hairTransplant/common/sectionWrapper'
import HowDoesItWork from '@/components/transplantation/hairTransplant/common/howDoesItWork'

const linksItems = [
    { label: 'Hair Mesotherapy', href: '/hair-loss/treatments-of-hair-loss/hair-mesotherapy' },
    { label: 'PRP Hair Treatment', href: '/hair-loss/treatments-of-hair-loss/prp-hair-treatment' },
    { label: 'Stamp Cell Treatment', href: '#' },
    { label: 'Trichopat Treatment', href: '/hair-loss/treatments-of-hair-loss/trichopat-treatment' },
]

export default function StampCellTreatmentMain({ children }) {
    return (
        <main className='w-full fluid gridContainer bg-ivory-soft'>
            <CustomBreadCrumb links={linksItems} />
            <StampCellTreatmentHero />
            <div className='fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft to-stone-beige/50'>
                <HeroLogoCarousel />
                <SectionWrapper>
                    <HowDoesItWork
                        images={[
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 1" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 2" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 3" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 4" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 4" },
                        ]}
                    >
                        <StampCellTreatmentDoesItWork />
                    </HowDoesItWork>
                </SectionWrapper>
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
