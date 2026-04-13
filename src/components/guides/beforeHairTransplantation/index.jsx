import React from 'react';
import CustomBreadCrumb from '@/components/common/customBreadCrumb';
import HowToAppointment from '@/components/common/howToAppointment';
import SectionWrapper from '@/components/transplantation/hairTransplant/common/sectionWrapper';
import HowDoesItWork from '@/components/transplantation/hairTransplant/common/howDoesItWork';
import BeforeHairTransplantationHero from './beforeHairTransplantationHero';
import BeforeHairTransplantationDoesItWork from './beforeHairTransplantationDoesItWork';

const linksItems = [
   { label: 'Before Hair Transplantation', href: '#' },
   { label: 'After Hair Transplantation', href: '#' },
   { label: 'Technology & Hair Transplantation', href: '#' },
   { label: 'Complications of Hair Surgery', href: '#' },
   { label: 'Frequently Asked Questions', href: '#' },
];

export default function BeforeHairTransplantationMain({ children }) {
   return (
      <main className="w-full fluid gridContainer bg-ivory-soft">
         <CustomBreadCrumb links={linksItems} />
         <BeforeHairTransplantationHero />
         <div className="fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft to-stone-beige/50">
            <SectionWrapper>
               <HowDoesItWork
                  images={[
                     { src: '/howwork-1.webp', alt: 'FUE Step 1' },
                     { src: '/howwork-2.webp', alt: 'FUE Step 2' },
                     { src: '/howwork-3.webp', alt: 'FUE Step 3' },
                     { src: '/howwork-4.webp', alt: 'FUE Step 4' },
                     { src: '/howwork-5.webp', alt: 'FUE Step 5' },
                  ]}
               >
                  <BeforeHairTransplantationDoesItWork />
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
