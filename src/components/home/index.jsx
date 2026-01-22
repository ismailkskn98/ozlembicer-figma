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
        <main className='w-full gridContainer'>
            <Hero />
            <div className='fluid gridContainer w-full bg-linear-to-t from-ivory-soft to-stone-beige'>
                <HeroLogoCarousel />
            </div>
            <div className='fluid gridContainer bg-linear-to-b from-stone-beige to-ivory-soft'>
                <VideosTutorials videos={videos} />
                <TitleImages />
                <PatientResults />
                <AestheticAndArt />
                <HowToAppointment />
            </div>
        </main>
    )
}
