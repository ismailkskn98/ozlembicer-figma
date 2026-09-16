import React from 'react';
import CustomBreadCrumb from '../../../common/customBreadCrumb';
import FemaleHairLossHero from './femaleHairLossHero';
import HeroLogoCarousel from '../../../common/logoCarousel';
import PatientResults from '../../../common/patientResults';
import HowToAppointment from '../../../common/howToAppointment';
import FemaleContent from './femaleContent';
import DeneyTitleImage from '@/components/common/titleImages/deney';
import { useTranslations } from 'next-intl';

const linksItemConfig = [
   {
      "href": "/hair-loss/couses-of-hair-loss/male-hair-loss"
   },
   {
      "href": "#"
   }
];

export default function FemaleHairLossMain({ children }) {
   const t = useTranslations('Content.hairLoss.cousesOfHairLoss.femaleHairLoss');
   const linkLabels = t.raw('links');
   const linksItems = linksItemConfig.map((item, index) => ({ ...item, label: linkLabels[index] }));
   return (
      <main className="w-full fluid gridContainer bg-ivory-soft">
         <CustomBreadCrumb links={linksItems} />
         <FemaleHairLossHero />
         <HeroLogoCarousel isBgGradient={true} />
         <div className="fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft to-stone-beige/50">
            <FemaleContent />
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
