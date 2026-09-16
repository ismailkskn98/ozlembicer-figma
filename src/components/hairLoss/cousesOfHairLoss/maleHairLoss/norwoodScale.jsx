import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function NorwoodScale() {
   const t = useTranslations('Content.hairLoss.cousesOfHairLoss.maleHairLoss.norwoodScale');
   return (
      <main className="w-full max-w-6xl mx-auto rounded-4xl bg-coffee-dark flex flex-col lg:flex-row items-start lg:items-center p-6 lg:p-10 text-ivory-soft gap-6 lg:gap-10">
         <section className="flex-1 w-full flex flex-col items-start">
            <article className="flex flex-col items-start">
               <h3 className="text-[38px] lg:text-[54px] xl:text-[64px] leading-relaxed">{t('heading1')}</h3>
               <p className="text-sm lg:text-base xl:text-[20px] font-bold">{t('paragraph1')}</p>
            </article>
            <Image
               src="/images/male-hair-table.webp"
               alt={t('alt1')}
               width={700}
               height={700}
               unoptimized
               className="col-span-1 sm:col-span-2 object-cover lg:object-contain object-center w-full lg:w-fit h-full max-h-90 sm:max-h-100 lg:max-h-133 mt-6 rounded-3xl"
            />
         </section>

         <section className="flex-1 flex flex-col items-start">
            <article className="w-full col-span-1 sm:col-span-2 flex flex-col items-start gap-2.5 sm:gap-3.5 mt-5">
               <h4 className="font-bold text-base xl:text-[20px] flex flex-col items-start">
                  {t.raw('titleLines1').map((text, index) => (
                     <span key={index}>{text}</span>
                  ))}
               </h4>
               <p className="w-full max-w-190 text-sm xl:text-base">
                  {t('paragraph2')}
               </p>
               <p className="w-full max-w-190 text-sm xl:text-base">{t('paragraph3')}</p>
            </article>
            <article className="w-full col-span-1 sm:col-span-2 flex flex-col items-start gap-2.5 sm:gap-3.5 mt-5">
               <h4 className="font-bold text-base xl:text-[20px] flex flex-col items-start">
                  {t.raw('titleLines2').map((text, index) => (
                     <span key={index}>{text}</span>
                  ))}
               </h4>
               <p className="w-full max-w-190 text-sm xl:text-base">
                  {t('paragraph4')}
               </p>
               <p className="w-full max-w-190 text-sm xl:text-base">{t('paragraph5')}</p>
            </article>
            <article className="w-full col-span-1 sm:col-span-2 flex flex-col items-start gap-2.5 sm:gap-3.5 mt-5">
               <h4 className="font-bold text-base xl:text-[20px] flex flex-col items-start">
                  {t.raw('titleLines3').map((text, index) => (
                     <span key={index}>{text}</span>
                  ))}
               </h4>
               <p className="w-full max-w-190 text-sm xl:text-base">
                  {t('paragraph6')}
               </p>
               <p className="w-full max-w-190 text-sm xl:text-base">{t('paragraph7')}</p>
               <ul className="list-disc list-outside pl-5 text-sm xl:text-base">
                  <li>{t('listItem1')}</li>
               </ul>
               <p className="w-full max-w-190 text-sm xl:text-base">{t('paragraph8')}</p>
            </article>
         </section>
      </main>
   );
}
