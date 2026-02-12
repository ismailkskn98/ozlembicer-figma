import React from 'react'
import AfterHairTransplantationDoesItWork from './afterHairTransplantationDoesItWork'
import AfterHairTransplantationHero from './afterHairTransplantationHero'
import CustomBreadCrumb from '@/components/common/customBreadCrumb'
import HowToAppointment from '@/components/common/howToAppointment'
import SectionWrapper from '@/components/transplantation/hairTransplant/common/sectionWrapper'
import HowDoesItWork from '@/components/transplantation/hairTransplant/common/howDoesItWork'

const linksItems = [
    { label: 'Before Hair Transplantation', href: '#' },
    { label: 'After Hair Transplantation', href: '#' },
    { label: 'Technology & Hair Transplantation', href: '#' },
    { label: 'Complications of Hair Surgery', href: '#' },
    { label: 'Frequently Asked Questions', href: '#' },
]

export default function AfterHairTransplantationMain({ children }) {
    return (
        <main className='w-full fluid gridContainer bg-ivory-soft'>
            <CustomBreadCrumb links={linksItems} />
            <AfterHairTransplantationHero />
            <div className='fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft to-stone-beige/50'>
                <SectionWrapper>
                    <HowDoesItWork
                        images={[
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 1" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 2" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 3" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 4" },
                            { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 4" },
                        ]}
                        title={["How Much", "Hair Loss Is Normal?"]}
                        content={[
                            { type: "paragraph", value: "It is completely normal to lose some hair every day as part of the natural hair growth cycle." },
                            { type: "paragraph", value: "A healthy person can lose up to 100 hairs per day, and this hair is normally replaced by new growth." },
                            { type: "paragraph", value: "If you notice persistent and increased shedding or visible thinning, it is recommended to consult a qualified hair restoration specialist for evaluation." }
                        ]}
                    >
                        <AfterHairTransplantationDoesItWork />
                    </HowDoesItWork>
                </SectionWrapper>
                {children}
                <div className='-mt-10 lg:mt-0'>
                    <HowToAppointment />
                </div>
            </div>
        </main>
    )
}
