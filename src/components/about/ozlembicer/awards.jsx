import MotionScrollInView from '@/components/common/motionScrollInView';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function Awards() {
   const t = useTranslations('Content.about.ozlembicer.awards');
   return (
      <div className="w-full pt-15 lg:pt-25 pb-0 lg:pb-12.5">
         <MotionScrollInView className="w-full max-w-full xl:max-w-6xl mx-auto rounded-[10px] bg-radial from-coffee-dark to-wine-brown py-5 px-3">
            <main className="flex flex-col items-center justify-center gap-4 sm:gap-5">
               <h2 className="text-[25px] sm:text-[32px] bg-linear-to-t from-gold to-ivory-soft text-transparent bg-clip-text">
                  {t('heading1')}
               </h2>
               <article className="flex flex-col items-center text-ivory-soft text-sm sm:text-[14px] gap-5 text-center">
                  <p>{t('paragraph1')}</p>
                  <p>{t('paragraph2')}</p>
                  <p>{t('paragraph3')}</p>
                  <p>{t('paragraph4')}</p>
                  <p>{t('paragraph5')}</p>
                  <p>{t('paragraph6')}</p>
                  <p>{t('paragraph7')}</p>
               </article>
            </main>
         </MotionScrollInView>
      </div>
   );
}
