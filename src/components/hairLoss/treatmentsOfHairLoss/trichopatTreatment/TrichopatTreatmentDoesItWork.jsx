import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function TrichopatTreatmentDoesItWork() {
   const t = useTranslations('Content.hairLoss.treatmentsOfHairLoss.trichopatTreatment.trichopatTreatmentDoesItWork');
   return (
      <main className="grid grid-cols-1 sm:grid-cols-2 w-full place-content-stretch place-items-stretch text-coffee-dark">
         <article className="border-r-0 sm:border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines1').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>{t('paragraph1')}</p>
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem1')}</li>
                  <li>{t('listItem2')}</li>
                  <li>{t('listItem3')}</li>
                  <li>{t('listItem4')}</li>
                  <li>{t('listItem5')}</li>
                  <li>{t('listItem6')}</li>
                  <li>{t('listItem7')}</li>
                  <li>{t('listItem8')}</li>
               </ul>
               <p>{t('paragraph2')}</p>
            </div>
         </article>
         <article className="border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines2').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>{t('paragraph3')}</p>
               <ul className="list-decimal list-outside pl-5">
                  <li>
                     <span>{t('span1')}</span>
                     <p>{t('paragraph4')}</p>
                  </li>
                  <li>
                     <span>{t('span2')}</span>
                     <p>{t('paragraph5')}</p>
                  </li>
                  <li>
                     <span>{t('span3')}</span>
                     <p>{t('paragraph6')}</p>
                  </li>
                  <li>
                     <span>{t('span4')}</span>
                     <p>{t('paragraph7')}</p>
                  </li>
               </ul>
               <p>{t('paragraph8')}</p>
            </div>
         </article>

         <article className="border-r-0 sm:border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines3').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>

            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>{t('paragraph9')}</p>
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem9')}</li>
                  <li>{t('listItem10')}</li>
                  <li>{t('listItem11')}</li>
               </ul>
               <p>{t('paragraph10')}</p>
            </div>
         </article>
         <article className="border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines4').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>{t('paragraph11')}</p>
               <p>{t('paragraph12')}</p>
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem12')}</li>
                  <li>{t('listItem13')}</li>
               </ul>
               <p>{t('paragraph13')}</p>
            </div>
         </article>

         <article className="border-b sm:border-b-0 border-r-0 sm:border-r border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 lg:pr-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines5').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>{t('paragraph14')}</p>
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem14')}</li>
                  <li>{t('listItem15')}</li>
                  <li>{t('listItem16')}</li>
                  <li>{t('listItem17')}</li>
                  <li>{t('listItem18')}</li>
               </ul>
               <p>{t('paragraph15')}</p>
            </div>
         </article>
         <article className="flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4 text-sm lg:text-base">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines6').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <p>{t('paragraph16')}</p>
            <ul className="list-disc list-outside pl-5">
               <li>{t('listItem19')}</li>
               <li>{t('listItem20')}</li>
               <li>{t('listItem21')}</li>
            </ul>
         </article>
      </main>
   );
}
