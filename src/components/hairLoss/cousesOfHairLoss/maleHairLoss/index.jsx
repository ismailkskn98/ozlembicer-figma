import React from 'react'
import CustomBreadCrumb from '../../../common/customBreadCrumb'
import MaleHairLossHero from './maleHairLossHero'
import HeroLogoCarousel from '../../../common/logoCarousel'
import TitleImages from '../../../common/titleImages'
import PatientResults from '../../../common/patientResults'
import SectionWrapper from '../../../transplantation/hairTransplant/common/sectionWrapper'
import HowDoesItWork from '../../../transplantation/hairTransplant/common/howDoesItWork'
import MaleHairDoesItWork from './maleHairDoesItWork'
import HowToAppointment from '../../../common/howToAppointment'
import NorwoodScale from './norwoodScale'

const linksItems = [
    { label: 'Male Hair Loss', href: '#' },
    { label: 'Female Hair Loss', href: '/hair-loss/female-hair-loss' },
]

export default function MaleHairLossMain({ children }) {
    return (
        <main className='w-full fluid gridContainer bg-ivory-soft'>
            <CustomBreadCrumb links={linksItems} />
            <MaleHairLossHero />
            <div className='fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft to-stone-beige/50'>
                <HeroLogoCarousel />
                <SectionWrapper>
                    <HowDoesItWork
                        images={[
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 1" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 2" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 3" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 4" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 5" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 5" },
                        ]}
                        title={["How Much", "Hair Loss Is Normal?"]}
                        content={[
                            { type: "paragraph", value: "It is completely normal to lose some hair every day as part of the natural hair growth cycle." },
                            { type: "paragraph", value: "A healthy person can lose up to 100 hairs per day, and this hair is normally replaced by new growth." },
                            { type: "paragraph", value: "If you notice persistent and increased shedding or visible thinning, it is recommended to consult a qualified hair restoration specialist for evaluation." },
                        ]}
                    >
                        <MaleHairDoesItWork />
                    </HowDoesItWork>
                </SectionWrapper>
                <NorwoodScale />
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
