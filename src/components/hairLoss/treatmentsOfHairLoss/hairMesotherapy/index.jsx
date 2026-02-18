import React from 'react'
import CustomBreadCrumb from '../../../common/customBreadCrumb'
import HairMesotherapyHero from './hairMesotherapyHero'
import HeroLogoCarousel from '../../../common/logoCarousel'
import TitleImages from '../../../common/titleImages'
import PatientResults from '../../../common/patientResults'
import HowToAppointment from '../../../common/howToAppointment'
import SectionWrapper from '../../../transplantation/hairTransplant/common/sectionWrapper'
import HowDoesItWork from '../../../transplantation/hairTransplant/common/howDoesItWork'
import HairMesotherapyDoesItWork from './hairMesotherapyDoesItWork'

const linksItems = [
    { label: 'Hair Mesotherapy', href: '#' },
    { label: 'PRP Hair Treatment', href: '/hair-loss/treatments-of-hair-loss/prp-hair-treatment' },
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
                <SectionWrapper>
                    <HowDoesItWork
                        images={[
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 1" },
                        ]}
                    >
                        <HairMesotherapyDoesItWork />
                    </HowDoesItWork>
                </SectionWrapper>
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
