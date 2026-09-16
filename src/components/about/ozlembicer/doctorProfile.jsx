import React from 'react';
import { useTranslations } from 'next-intl';

export default function DoctorProfile() {
   const t = useTranslations('Content.about.ozlembicer.doctorProfile');
   return (
      <section className="w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-start gap-10 sm:gap-12.5 pt-12.5 pb-16 sm:pb-25">
         <article className="flex flex-col items-start gap-2.5 sm:gap-5 text-coffee-dark text-sm sm:text-base">
            <h2 className="text-[20px] sm:text-[32px]">{t('heading1')}</h2>
            <p className="leading-relaxed">
               {t('paragraph1')}
            </p>
            <p className="leading-relaxed">
               {t('paragraph2')}
            </p>
            <p className="leading-relaxed">
               {t('paragraph3')}
            </p>
            <p className="leading-relaxed">
               {t('paragraph4')}
            </p>
         </article>
         <article className="flex flex-col items-start gap-2.5 sm:gap-5 text-coffee-dark text-sm sm:text-base">
            <h2 className="text-[20px] sm:text-[32px]">{t('heading2')}</h2>
            <p className="leading-relaxed">
               {t('paragraph5')}
            </p>
            <p className="leading-relaxed">
               {t('paragraph6')}
            </p>
            <p className="leading-relaxed">{t('paragraph7')}</p>
            <ul className="list-disc list-inside leading-relaxed">
               <li>{t('listItem1')}</li>
               <li>{t('listItem2')}</li>
               <li>{t('listItem3')}</li>
               <li>{t('listItem4')}</li>
               <li>{t('listItem5')}</li>
               <li>{t('listItem6')}</li>
               <li>{t('listItem7')}</li>
               <li>{t('listItem8')}</li>
            </ul>
            <p className="leading-relaxed">
               {t('paragraph8')}
            </p>
         </article>
         <article className="flex flex-col items-start gap-2.5 sm:gap-5 text-coffee-dark text-sm sm:text-base">
            <h2 className="text-[20px] sm:text-[32px]">{t('heading3')}</h2>
            <p className="leading-relaxed">
               {t('paragraph9')}
            </p>
            <p className="leading-relaxed">
               {t('paragraph10')}
            </p>
            <p className="leading-relaxed">
               {t('paragraph11')}
            </p>
         </article>
      </section>
   );
}
