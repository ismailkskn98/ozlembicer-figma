import CustomBreadCrumb from '@/components/common/customBreadCrumb';
import React from 'react';
import OzlemBicerHero from './ozlemBicerHero';
import HeroLogoCarousel from '@/components/common/logoCarousel';
import DoctorProfile from './doctorProfile';
import ProfessionalAffiliations from './professionalAffiliations';
import Certifications from './certifications';
import Awards from './awards';
import HowToAppointment from '@/components/common/howToAppointment';
import { useTranslations } from 'next-intl';

const linksItemConfig = [
   {
      "href": "#"
   },
   {
      "href": "/about-us/clinic-team"
   },
   {
      "href": "/about-us/pricing"
   }
];

export default function OzlemBicerMain({ children }) {
   const t = useTranslations('Content.about.ozlembicer');
   const linkLabels = t.raw('links');
   const linksItems = linksItemConfig.map((item, index) => ({ ...item, label: linkLabels[index] }));
   return (
      <main className="w-full fluid gridContainer bg-ivory-soft">
         <CustomBreadCrumb links={linksItems} />
         <OzlemBicerHero />
         <HeroLogoCarousel isBgGradient={true} />
         <div className="fluid gridContainer w-full bg-linear-to-b from-ivory-soft to-stone-beige">
            <DoctorProfile />
            <ProfessionalAffiliations />
         </div>
         <div className="fluid gridContainer w-full bg-linear-to-t from-stone-beige via-ivory-soft to-stone-beige">
            <Awards />
            <Certifications />
            {children}
            <div className="-mt-10 lg:mt-0">
               <HowToAppointment />
            </div>
         </div>
      </main>
   );
}
