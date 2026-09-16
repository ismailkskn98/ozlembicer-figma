import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function HowDoesItWorkRecon() {
   const t = useTranslations('Content.transplantation.hairTransplant.reconstructive.howDoesItWorkRecon');
   return (
      <main className="grid grid-cols-1 sm:grid-cols-2 w-full border-t border-coffee-dark/15 place-content-stretch place-items-stretch text-coffee-dark">
         <article className="sm:border-r border-b border-coffee-dark/15 w-full flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4">
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
               <p>{t('paragraph2')}</p>
            </div>
         </article>
         <article className="border-b border-coffee-dark/15 w-full flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines2').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>{t('paragraph3')}</p>
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem4')}</li>
                  <li>{t('listItem5')}</li>
                  <li>{t('listItem6')}</li>
               </ul>
               <p>{t('paragraph4')}</p>
            </div>
         </article>

         <article className="sm:border-r border-b border-coffee-dark/15 w-full flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines3').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>{t('paragraph5')}</p>
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem7')}</li>
                  <li>{t('listItem8')}</li>
                  <li>{t('listItem9')}</li>
               </ul>
               <p>{t('paragraph6')}</p>
            </div>
         </article>
         <article className="border-b border-coffee-dark/15 w-full flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines4').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>{t('paragraph7')}</p>
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem10')}</li>
                  <li>{t('listItem11')}</li>
                  <li>{t('listItem12')}</li>
               </ul>
            </div>
         </article>

         <article className="sm:border-r border-b border-coffee-dark/15 w-full flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines5').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>{t('paragraph8')}</p>
               <p>{t('paragraph9')}</p>
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem13')}</li>
                  <li>{t('listItem14')}</li>
                  <li>{t('listItem15')}</li>
                  <li>{t('listItem16')}</li>
                  <li>{t('listItem17')}</li>
               </ul>
               <p>{t('paragraph10')}</p>
            </div>
         </article>
         <article className="border-b border-coffee-dark/15 w-full flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines6').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>{t('paragraph11')}</p>
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem18')}</li>
                  <li>{t('listItem19')}</li>
                  <li>{t('listItem20')}</li>
               </ul>
               <p>{t('paragraph12')}</p>
            </div>
         </article>

         <article className="sm:border-r border-b border-coffee-dark/15 w-full flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines7').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem21')}</li>
                  <li>{t('listItem22')}</li>
                  <li>{t('listItem23')}</li>
                  <li>{t('listItem24')}</li>
               </ul>
               <p>{t('paragraph13')}</p>
            </div>
         </article>
         <article className="border-b border-coffee-dark/15 w-full flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines8').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem25')}</li>
                  <li>{t('listItem26')}</li>
                  <li>{t('listItem27')}</li>
                  <li>{t('listItem28')}</li>
                  <li>{t('listItem29')}</li>
               </ul>
               <p>{t('paragraph14')}</p>
            </div>
         </article>
         <article className="w-full col-span-1 sm:col-span-2 flex flex-col items-start gap-2.5 sm:gap-3.5 mt-5">
            <h4 className="font-bold text-base lg:text-[20px]">{t('heading1')}</h4>
            <p className="w-full max-w-190 text-sm lg:text-base">
               {t('paragraph15')}
            </p>
         </article>
      </main>
   );
}
