import React from 'react';
import MotionLeftView from '../../common/motionLeftView';
import Image from 'next/image';
import MotionRightView from '../../common/motionRightView';
import { useTranslations } from 'next-intl';

export default function EyebrownHero() {
   const t = useTranslations('Content.transplantation.eyebrownTransplant.eyebrownHero');
   return (
      <main className="relative fluid gridContainer w-full bg-radial from-coffee-dark to-wine-brown pt-12 lg:pt-25 pb-50 overflow-hidden">
         <div className="w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0" />
         <section className="w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-start gap-12 sm:gap-15">
            <h1 className="flex-1 text-[40px] sm:text-[45px] lg:text-[50px] xl:text-[56px] 2xl:text-[64px] leading-10 sm:leading-12 lg:leading-14 xl:leading-16 flex flex-col items-start text-ivory-soft">
               {t('heading1')} <span className="font-bold">{t('span1')}</span>
            </h1>
            <MotionLeftView className="w-full">
               <Image
                  src="/images/eyebrown-hero.jpg"
                  alt={t('alt1')}
                  width={1200}
                  height={700}
                  className="object-cover object-center w-full h-full max-h-157.5 rounded-4xl"
                  unoptimized
               />
            </MotionLeftView>
            <MotionRightView className="w-full max-w-full lg:max-w-286.5 mx-auto">
               <article className="w-full flex items-start gap-6 text-ivory-soft">
                  <div className="flex-1 flex flex-col items-start gap-6">
                     <h2 className="text-[25px] sm:text-[32px] flex flex-col">
                        {t('heading2')} <span className="font-bold">{t('span2')}</span>
                     </h2>
                     <p className="text-sm sm:text-base">
                        {t('paragraph1')}
                     </p>
                     <p className="text-sm sm:text-base">
                        {t('paragraph2')}
                     </p>
                     <p className="text-sm sm:text-base">
                        {t('paragraph3')}
                     </p>
                     <p className="text-sm sm:text-base">
                        {t('paragraph4')}
                     </p>
                  </div>
               </article>
            </MotionRightView>
         </section>
      </main>
   );
}
