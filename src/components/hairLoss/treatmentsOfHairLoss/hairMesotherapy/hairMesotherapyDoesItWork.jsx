import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function HairMesotherapyDoesItWork() {
   const t = useTranslations('Content.hairLoss.treatmentsOfHairLoss.hairMesotherapy.hairMesotherapyDoesItWork');
   return (
      <main className="grid grid-cols-1 sm:grid-cols-2 w-full place-content-stretch place-items-stretch text-coffee-dark">
         <article className="border-b sm:border-r border-coffee-dark/15 flex flex-col gap-4 lg:gap-6 pt-3 pb-5 sm:pr-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines1').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>{t('paragraph1')}</p>
            </div>
         </article>

         <article className="border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-6 pt-3 pb-5 sm:pl-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines2').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>

            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>{t('paragraph2')}</p>
            </div>
         </article>
         <article className="w-full col-span-1 sm:col-span-2 flex flex-col items-start gap-2.5 sm:gap-3.5 mt-5">
            <h4 className="font-bold text-base lg:text-[20px]">{t('heading1')}</h4>
            <p className="w-full max-w-190 text-sm lg:text-base">
               {t('paragraph3')}
            </p>
         </article>
      </main>
   );
}
