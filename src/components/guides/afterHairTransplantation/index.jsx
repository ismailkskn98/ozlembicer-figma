import React from 'react';
import AfterHairTransplantationDoesItWork from './afterHairTransplantationDoesItWork';
import AfterHairTransplantationHero from './afterHairTransplantationHero';
import CustomBreadCrumb from '@/components/common/customBreadCrumb';
import HowToAppointment from '@/components/common/howToAppointment';
import SectionWrapper from '@/components/transplantation/hairTransplant/common/sectionWrapper';
import HowDoesItWork from '@/components/transplantation/hairTransplant/common/howDoesItWork';
import { useTranslations } from 'next-intl';

const linksItemConfig = [
   {
      "href": "#"
   },
   {
      "href": "#"
   },
   {
      "href": "#"
   },
   {
      "href": "#"
   },
   {
      "href": "#"
   }
];

export default function AfterHairTransplantationMain({ children }) {
   const t = useTranslations('Content.guides.afterHairTransplantation');
   const linkLabels = t.raw('links');
   const linksItems = linksItemConfig.map((item, index) => ({ ...item, label: linkLabels[index] }));
   return (
      <main className="w-full fluid gridContainer bg-ivory-soft">
         <CustomBreadCrumb links={linksItems} />
         <AfterHairTransplantationHero />
         <div className="fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft to-stone-beige/50">
            <SectionWrapper>
               <HowDoesItWork
                  images={[
                     { src: '/howwork-1.webp', alt: t('alt1') },
                     { src: '/howwork-2.webp', alt: t('alt2') },
                     { src: '/howwork-3.webp', alt: t('alt3') },
                     { src: '/howwork-4.webp', alt: t('alt4') },
                     { src: '/howwork-5.webp', alt: t('alt5') },
                  ]}
                  title={[t('title1'), t('title2')]}
                  content={[
                     { type: 'paragraph', value: t('value1') },
                     { type: 'paragraph', value: t('value2') },
                     {
                        type: 'paragraph',
                        value: t('value3'),
                     },
                  ]}
               >
                  <AfterHairTransplantationDoesItWork />
               </HowDoesItWork>
            </SectionWrapper>
            {children}
            <div className="-mt-10 lg:mt-0">
               <HowToAppointment />
            </div>
         </div>
      </main>
   );
}
