import React from 'react'
import Hero from './hero'
import HeroLogoCarousel from '../common/logoCarousel'
import VideosTutorials from '../common/videosTutorials'
import TitleImages from '../common/titleImages'
import PatientResults from '../common/patientResults'
import AestheticAndArt from './aestheticAndArt'
import HowToAppointment from '../common/howToAppointment'

export default function HomeMain({ videos }) {
    return (
        <main className='w-full gridContainer bg-ivory-soft'>
            <Hero />
            <HeroLogoCarousel />
            <div className='fluid gridContainer bg-linear-to-b from-stone-beige via-ivory-soft to-stone-beige/50'>
                <VideosTutorials videos={videos} />
                <TitleImages />
                <PatientResults />
                <AestheticAndArt />
                <HowToAppointment />
            </div>
        </main>
    )
}
