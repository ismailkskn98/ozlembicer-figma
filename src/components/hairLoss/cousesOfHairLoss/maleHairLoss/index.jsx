import React from 'react';
import CustomBreadCrumb from '../../../common/customBreadCrumb';
import MaleHairLossHero from './maleHairLossHero';
import HeroLogoCarousel from '../../../common/logoCarousel';
import PatientResults from '../../../common/patientResults';
import SectionWrapper from '../../../transplantation/hairTransplant/common/sectionWrapper';
import HowDoesItWork from '../../../transplantation/hairTransplant/common/howDoesItWork';
import MaleHairDoesItWork from './maleHairDoesItWork';
import HowToAppointment from '../../../common/howToAppointment';
import NorwoodScale from './norwoodScale';
import DeneyTitleImage from '@/components/common/titleImages/deney';
import { useTranslations } from 'next-intl';

const linksItemConfig = [
   {
      "href": "#"
   },
   {
      "href": "/hair-loss/couses-of-hair-loss/female-hair-loss"
   }
];

export default function MaleHairLossMain({ children }) {
   const t = useTranslations('Content.hairLoss.cousesOfHairLoss.maleHairLoss');
   const linkLabels = t.raw('links');
   const linksItems = linksItemConfig.map((item, index) => ({ ...item, label: linkLabels[index] }));
   return (
      <main className="w-full fluid gridContainer bg-ivory-soft">
         <CustomBreadCrumb links={linksItems} />
         <MaleHairLossHero />
         <HeroLogoCarousel isBgGradient={true} />
         <div className="fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft to-stone-beige/50">
            <SectionWrapper>
               <HowDoesItWork
                  title={[t('title1'), t('title2')]}
                  content={[
                     {
                        type: 'paragraph',
                        value: t('value1'),
                     },
                     {
                        type: 'paragraph',
                        value: t('value2'),
                     },
                     {
                        type: 'paragraph',
                        value: t('value3'),
                     },
                  ]}
               >
                  <MaleHairDoesItWork />
               </HowDoesItWork>
            </SectionWrapper>
            <NorwoodScale />
            {children}
            <DeneyTitleImage />
            <PatientResults title={t('title3')} />
            <div className="-mt-10 lg:mt-0">
               <HowToAppointment />
            </div>
         </div>
      </main>
   );
}
