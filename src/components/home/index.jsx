import React from 'react'
import Hero from './hero'
import HeroLogoCarousel from './logoCarousel'
import VideosTutorials from '../videosTutorials'
import TitleImages from './titleImages'
import PatientResults from '../patientResults'

export default function HomeMain({ videos }) {
    return (
        <main className='w-full gridContainer'>
            <Hero />
            <HeroLogoCarousel />
            <div className='fluid gridContainer bg-linear-to-b from-stone-beige to-ivory-soft'>
                <VideosTutorials videos={videos} />
                <TitleImages />
                <PatientResults />
            </div>
        </main>
    )
}
