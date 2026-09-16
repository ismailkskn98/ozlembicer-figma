import React from 'react';
import CustomBreadCrumb from '../../../common/customBreadCrumb';
import HeroLogoCarousel from '../../../common/logoCarousel';
import PatientResults from '../../../common/patientResults';
import HowToAppointment from '../../../common/howToAppointment';
import SectionWrapper from '@/components/transplantation/hairTransplant/common/sectionWrapper';
import HowDoesItWork from '@/components/transplantation/hairTransplant/common/howDoesItWork';
import TrichopatTreatmentHero from './TrichopatTreatmentHero';
import TrichopatTreatmentDoesItWork from './TrichopatTreatmentDoesItWork';
import DeneyTitleImage from '@/components/common/titleImages/deney';
import { useTranslations } from 'next-intl';

const linksItemConfig = [
   {
      "href": "/hair-loss/treatments-of-hair-loss/hair-mesotherapy"
   },
   {
      "href": "/hair-loss/treatments-of-hair-loss/prp-hair-treatment"
   },
   {
      "href": "/hair-loss/treatments-of-hair-loss/stamp-cell-treatment"
   },
   {
      "href": "#"
   }
];

export default function TrichopatTreatmentMain({ children }) {
   const t = useTranslations('Content.hairLoss.treatmentsOfHairLoss.trichopatTreatment');
   const linkLabels = t.raw('links');
   const linksItems = linksItemConfig.map((item, index) => ({ ...item, label: linkLabels[index] }));
   return (
      <main className="w-full fluid gridContainer bg-ivory-soft">
         <CustomBreadCrumb links={linksItems} />
         <TrichopatTreatmentHero />
         <HeroLogoCarousel isBgGradient={true} />
         <div className="fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft to-stone-beige/50">
            <SectionWrapper>
               <HowDoesItWork>
                  <TrichopatTreatmentDoesItWork />
               </HowDoesItWork>
            </SectionWrapper>
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
