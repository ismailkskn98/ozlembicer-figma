import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function StampCellTreatmentDoesItWork() {
   const t = useTranslations('Content.hairLoss.treatmentsOfHairLoss.stampCellTreatment.stampCellTreatmentDoesItWork');
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
               <p>
                  {t('paragraph3')}
               </p>
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem9')}</li>
                  <li>{t('listItem10')}</li>
                  <li>{t('listItem11')}</li>
                  <li>{t('listItem12')}</li>
                  <li>{t('listItem13')}</li>
               </ul>
               <p>{t('paragraph4')}</p>
            </div>
         </article>

         <article className="border-r-0 sm:border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines3').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>

            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>{t('paragraph5')}</p>
               <ul className="list-decimal list-outside pl-5">
                  <li className="font-bold">{t('listItem14')}</li>
                  <p className="mb-2">{t('paragraph6')}</p>
                  <li className="font-bold">{t('listItem15')}</li>
                  <p className="mb-2">{t('paragraph7')}</p>
                  <li className="font-bold">{t('listItem16')}</li>
                  <p className="mb-2">{t('paragraph8')}</p>
               </ul>
               <p>{t('paragraph9')}</p>
            </div>
         </article>
         <article className="border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines4').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>{t('paragraph10')}</p>
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem17')}</li>
                  <li>{t('listItem18')}</li>
                  <li>
                     <p>{t('paragraph11')}</p>
                     <ul className="list-disc list-outside pl-5">
                        <li>{t('listItem19')}</li>
                        <li>{t('listItem20')}</li>
                        <li>{t('listItem21')}</li>
                     </ul>
                  </li>
               </ul>
               <p>{t('paragraph12')}</p>
            </div>
         </article>

         <article className="border-b sm:border-b-0 border-r-0 sm:border-r border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 lg:pr-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines5').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>{t('paragraph13')}</p>
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem22')}</li>
                  <li>{t('listItem23')}</li>
                  <li>{t('listItem24')}</li>
                  <li>{t('listItem25')}</li>
                  <li>{t('listItem26')}</li>
                  <li>{t('listItem27')}</li>
               </ul>
               <p>{t('paragraph14')}</p>
            </div>
         </article>
         <article className="flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4 text-sm lg:text-base">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines6').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <p>{t('paragraph15')}</p>
            <ul className="list-disc list-outside pl-5">
               <li>{t('listItem28')}</li>
               <li>{t('listItem29')}</li>
               <li>{t('listItem30')}</li>
               <li>{t('listItem31')}</li>
            </ul>
            <p>{t('paragraph16')}</p>
         </article>
      </main>
   );
}
