import CustomBreadCrumb from '@/components/common/customBreadCrumb';
import HowToAppointment from '@/components/common/howToAppointment';
import HeroLogoCarousel from '@/components/common/logoCarousel';
import React from 'react';
import PatientResults from '@/components/common/patientResults';
import PricingHero from './pricingHero';
import DeneyTitleImage from '@/components/common/titleImages/deney';
import { useTranslations } from 'next-intl';

const linksItemConfig = [
   {
      "href": "/about-us/dr-ozlem-bicer"
   },
   {
      "href": "/about-us/clinic-team"
   },
   {
      "href": "#"
   }
];

export default function PricingMain({ children }) {
   const t = useTranslations('Content.about.pricing');
   const linkLabels = t.raw('links');
   const linksItems = linksItemConfig.map((item, index) => ({ ...item, label: linkLabels[index] }));
   return (
      <main className="w-full fluid gridContainer bg-ivory-soft">
         <CustomBreadCrumb links={linksItems} />
         <PricingHero />
         <HeroLogoCarousel isBgGradient={true} />
         <div className="fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft to-stone-beige/50">
            {children}
            <DeneyTitleImage />
            <PatientResults title={t('title1')} />
            <div className="-mt-10 lg:mt-0">
               <HowToAppointment />
            </div>
         </div>
      </main>
   );
}
