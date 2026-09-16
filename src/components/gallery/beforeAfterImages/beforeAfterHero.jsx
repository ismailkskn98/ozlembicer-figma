import MotionLeftView from '@/components/common/motionLeftView';
import MotionRightView from '@/components/common/motionRightView';
import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function BeforeAfterHero() {
   const t = useTranslations('Content.gallery.beforeAfterImages.beforeAfterHero');
   return (
      <main className="relative fluid gridContainer w-full bg-radial from-coffee-dark to-wine-brown pt-12 lg:pt-25 pb-50 overflow-hidden">
         <div className="w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0" />
         <section className="w-full max-w-full xl:max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between gap-10">
            <MotionLeftView className="order-2 lg:order-1 w-full max-w-full lg:max-w-141">
               <article className="w-full flex flex-col items-start gap-6 lg:gap-7.5 text-ivory-soft">
                  <h1 className="text-[40px] sm:text-[45px] lg:text-[50px] xl:text-[56px] 2xl:text-[64px] leading-10 sm:leading-12 lg:leading-14 xl:leading-16 flex flex-col items-start">
                     {t('heading1')} <span className="font-bold">{t('span1')}</span>
                  </h1>
                  <p className="text-sm sm:text-base">
                     {t('paragraph1')}{' '}
                  </p>
               </article>
            </MotionLeftView>
            <MotionRightView className="relative order-1 lg:order-2 w-full max-w-full lg:max-w-140.5 h-100 sm:h-130 md:h-150 lg:h-197.5">
               <Image
                  src="/images/gallery/before-after-hero.jpg"
                  alt={t('alt1')}
                  fill
                  unoptimized
                  className="object-cover object-center mx-auto w-full max-w-full lg:max-w-135 2xl:max-w-140.5 rounded-2xl lg:rounded-4xl"
               />
            </MotionRightView>
         </section>
      </main>
   );
}
