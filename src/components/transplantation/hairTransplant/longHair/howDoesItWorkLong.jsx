import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function HowDoesItWorkLong() {
   const t = useTranslations('Content.transplantation.hairTransplant.longHair.howDoesItWorkLong');
   return (
      <main className="grid grid-cols-1 sm:grid-cols-2 w-full border-t border-coffee-dark/15 place-content-stretch place-items-stretch text-coffee-dark">
         <article className="border-r-0 sm:border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines1').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>
                  {t('paragraph1')}
               </p>
               <p>
                  {t('paragraph2')}
               </p>
            </div>
         </article>
         <article className="border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines2').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>
                  {t('paragraph3')}
               </p>
               <p>
                  {t('paragraph4')}
               </p>
               <p>
                  {t('paragraph5')}
               </p>
            </div>
         </article>

         <article className="border-r-0 sm:border-r border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines3').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>

            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem1')}</li>
                  <li>{t('listItem2')}</li>
                  <li>{t('listItem3')}</li>
                  <li>{t('listItem4')}</li>
               </ul>
               <p>{t('paragraph6')}</p>
            </div>
         </article>
         <article className=" flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines4').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem5')}</li>
                  <li>{t('listItem6')}</li>
                  <li>{t('listItem7')}</li>
                  <li>{t('listItem8')}</li>
                  <li>{t('listItem9')}</li>
               </ul>
               <p>{t('paragraph7')}</p>
            </div>
         </article>
      </main>
   );
}
