import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function HowDoesItWorkBodyHair() {
   const t = useTranslations('Content.transplantation.hairTransplant.bodyHair.howDoesItWorkBodyHair');
   return (
      <main className="grid grid-cols-1 sm:grid-cols-2 w-full border-t border-coffee-dark/15 place-content-stretch place-items-stretch text-coffee-dark">
         <article className="sm:border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4">
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
               </ul>
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
               <p>{t('paragraph3')}</p>
               <p>{t('paragraph4')}</p>
               <ul className="list-disc list-outside pl-5">
                  <li>
                     <span>{t('span1')}</span>
                     <ul className="list-disc list-inside pl-5">
                        <li>{t('listItem4')}</li>
                        <li>{t('listItem5')}</li>
                     </ul>
                  </li>
                  <li>
                     <span>{t('span2')}</span>
                     <ul className="list-disc list-inside pl-5">
                        <li>{t('listItem6')}</li>
                        <li>{t('listItem7')}</li>
                        <li>{t('listItem8')}</li>
                     </ul>
                  </li>
               </ul>
               <p>
                  {t('paragraph5')}
               </p>
            </div>
         </article>
         <article className="sm:border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines3').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>{t('paragraph6')}</p>
               <p>{t('paragraph7')}</p>
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem9')}</li>
                  <li>{t('listItem10')}</li>
                  <li>{t('listItem11')}</li>
                  <li>{t('listItem12')}</li>
               </ul>
               <p>{t('paragraph8')}</p>
            </div>
         </article>

         <article className="border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines4').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>{t('paragraph9')}</p>
               <p>{t('paragraph10')}</p>
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem13')}</li>
                  <li>{t('listItem14')}</li>
                  <li>{t('listItem15')}</li>
                  <li>{t('listItem16')}</li>
                  <li>{t('listItem17')}</li>
                  <li>{t('listItem18')}</li>
               </ul>
               <p>{t('paragraph11')}</p>
            </div>
         </article>

         <article className="sm:border-r border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines5').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>{t('paragraph12')}</p>
               <p>{t('paragraph13')}</p>
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem19')}</li>
                  <li>{t('listItem20')}</li>
                  <li>{t('listItem21')}</li>
               </ul>
               <p>{t('paragraph14')}</p>
            </div>
         </article>
      </main>
   );
}
