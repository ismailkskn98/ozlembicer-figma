import React from 'react'
import HairTransplantHero from './hairTransplantHero'
import CustomBreadCrumb from '../common/customBreadCrumb'
import HeroLogoCarousel from '../common/logoCarousel'

const linksItems = [
    { label: 'FUE (Micro Motor)', href: '/hair-transplant/fue-micro-motor' },
    { label: 'FUE (Manuel)', href: '/hair-transplant/fue-manuel' },
    { label: 'BHT (Body Hair Transplant)', href: '/hair-transplant/body-hair-transplant' },
    { label: 'Reconstructive Hair Transplant', href: '/hair-transplant/reconstructive-hair-transplant' },
    { label: 'Long Hair (Unshaven)', href: '/hair-transplant/long-hair' },
    { label: 'FUT', href: '/hair-transplant/fut' },
]

export default function HairTransplantMain({ children }) {
    return (
        <>
            <CustomBreadCrumb links={linksItems} />
            <HairTransplantHero />
            <div className='fluid gridContainer w-full bg-linear-to-b from-stone-beige to-ivory-soft py-25'>
                <HeroLogoCarousel />
                {children}
            </div>
        </>
    )
}
