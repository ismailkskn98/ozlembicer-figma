import React from 'react';
import CustomBreadCrumb from '@/components/common/customBreadCrumb';
import ClinicTeamHero from './clinicTeamHero';
import Clinic from './clinic';
import PatientResults from '@/components/common/patientResults';
import HowToAppointment from '@/components/common/howToAppointment';
import HeroLogoCarousel from '@/components/common/logoCarousel';
import { useTranslations } from 'next-intl';

const linksItemConfig = [
   {
      "href": "/about-us/dr-ozlem-bicer"
   },
   {
      "href": "#"
   },
   {
      "href": "/about-us/pricing"
   }
];

export default function ClinicAndTeamMain() {
   const t = useTranslations('Content.about.clinicAndTeam');
   const linkLabels = t.raw('links');
   const linksItems = linksItemConfig.map((item, index) => ({ ...item, label: linkLabels[index] }));
   return (
      <main className="w-full fluid gridContainer bg-ivory-soft">
         <CustomBreadCrumb links={linksItems} />
         <ClinicTeamHero />
         <HeroLogoCarousel isBgGradient={true} />
         <Clinic />
         <div className="fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft to-stone-beige/50">
            <PatientResults title={t('title1')} />
            <div className="-mt-10 lg:mt-0">
               <HowToAppointment />
            </div>
         </div>
      </main>
   );
}
