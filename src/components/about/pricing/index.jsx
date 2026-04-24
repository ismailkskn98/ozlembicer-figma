import CustomBreadCrumb from '@/components/common/customBreadCrumb';
import HowToAppointment from '@/components/common/howToAppointment';
import HeroLogoCarousel from '@/components/common/logoCarousel';
import React from 'react';
import PatientResults from '@/components/common/patientResults';
import PricingHero from './pricingHero';
import DeneyTitleImage from '@/components/common/titleImages/deney';

const linksItems = [
   { label: 'About Dr. Ozlem Bicer', href: '/about-us/dr-ozlem-bicer' },
   { label: 'Clinic & Team', href: '/about-us/clinic-team' },
   { label: 'Pricing', href: '#' },
];

export default function PricingMain({ children }) {
   return (
      <main className="w-full fluid gridContainer bg-ivory-soft">
         <CustomBreadCrumb links={linksItems} />
         <PricingHero />
         <HeroLogoCarousel isBgGradient={true} />
         <div className="fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft to-stone-beige/50">
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
