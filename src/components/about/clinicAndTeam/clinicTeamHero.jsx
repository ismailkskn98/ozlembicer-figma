import MotionLeftView from '@/components/common/motionLeftView';
import MotionRightView from '@/components/common/motionRightView';
import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function ClinicTeamHero() {
   const t = useTranslations('Content.about.clinicAndTeam.clinicTeamHero');
   return (
      <main className="relative fluid gridContainer w-full bg-radial from-coffee-dark to-wine-brown pt-12 lg:pt-25 pb-50 overflow-hidden">
         <div className="w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0" />
         <section className="w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-center gap-12 sm:gap-15">
            <MotionLeftView className="w-full">
               <Image
                  src="/images/about/clinic-hero.png"
                  alt={t('alt1')}
                  width={1200}
                  height={700}
                  className="object-cover object-center w-full h-full max-h-157.5 rounded-2xl lg:rounded-4xl"
               />
            </MotionLeftView>
            <MotionRightView className="w-full max-w-286.5 mx-auto">
               <article className="w-full flex flex-col lg:flex-row items-start lg:items-center gap-6 text-ivory-soft">
                  <h1 className="flex-1 text-[40px] sm:text-[45px] lg:text-[50px] xl:text-[56px] 2xl:text-[64px] leading-10 sm:leading-13 lg:leading-15 xl:leading-18 flex flex-col items-start">
                     {t('heading1')} <span className="font-bold">{t('span1')}</span>
                  </h1>
                  <div className="flex-1 flex flex-col items-start">
                     <p className="text-sm sm:text-base">
                        {t('paragraph1')}
                        <br />
                        <br />
                     </p>
                     <p className="text-sm sm:text-base">
                        {t('paragraph2')}
                        <br />
                        <br />
                     </p>
                     <p className="text-sm sm:text-base">
                        {t('paragraph3')}
                     </p>
                  </div>
               </article>
            </MotionRightView>
         </section>
      </main>
   );
}
