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

const linksItems = [
   { label: 'Hair Mesotherapy', href: '/hair-loss/treatments-of-hair-loss/hair-mesotherapy' },
   { label: 'PRP Hair Treatment', href: '/hair-loss/treatments-of-hair-loss/prp-hair-treatment' },
   { label: 'Stamp Cell Treatment', href: '#' },
   { label: 'Trichopat Treatment', href: '/hair-loss/treatments-of-hair-loss/trichopat-treatment' },
];

export default function TrichopatTreatmentMain({ children }) {
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
            <PatientResults title="Patient Results" />
            <div className="-mt-10 lg:mt-0">
               <HowToAppointment />
            </div>
         </div>
      </main>
   );
}
