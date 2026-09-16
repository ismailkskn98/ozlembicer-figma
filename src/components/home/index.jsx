import React from 'react';
import Hero from './hero';
import HeroLogoCarousel from '../common/logoCarousel';
import VideosTutorials from '../common/videosTutorials';
import PatientResults from '../common/patientResults';
import AestheticAndArt from './aestheticAndArt';
import HowToAppointment from '../common/howToAppointment';
import DeneyTitleImage from '../common/titleImages/deney';
import SpeaksLanguage from '../about/clinicAndTeam/speaksLanguage';
import { useTranslations } from 'next-intl';

export default function HomeMain({ videos }) {
   const t = useTranslations('PatientResults');
   return (
      <main className="w-full gridContainer bg-ivory-soft">
         <Hero />
         <HeroLogoCarousel />
         <div className="fluid gridContainer bg-linear-to-b from-stone-beige via-ivory-soft via-80% to-stone-beige">
            <PatientResults title={t('title')} delay={4000} />
            <DeneyTitleImage />
            <VideosTutorials videos={videos} />
            <AestheticAndArt />
            <SpeaksLanguage />
            <HowToAppointment />
         </div>
      </main>
   );
}
