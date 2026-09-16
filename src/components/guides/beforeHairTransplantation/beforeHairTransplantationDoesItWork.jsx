import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function BeforeHairTransplantationDoesItWork() {
   const t = useTranslations('Content.guides.beforeHairTransplantation.beforeHairTransplantationDoesItWork');
   return (
      <main className="grid grid-cols-1 w-full place-content-stretch place-items-stretch text-coffee-dark">
         <article className="flex flex-col gap-4 lg:gap-9 py-5">
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
               </ul>
               <p>{t('paragraph2')}</p>
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem6')}</li>
                  <li>{t('listItem7')}</li>
                  <li>{t('listItem8')}</li>
                  <li>{t('listItem9')}</li>
                  <li>{t('listItem10')}</li>
               </ul>
               <p>{t('paragraph3')}</p>
            </div>
         </article>

         <article className=" flex flex-col gap-4 lg:gap-9 py-5">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines2').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <p>{t('paragraph4')}</p>
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem11')}</li>
                  <li>{t('listItem12')}</li>
                  <li>{t('listItem13')}</li>
                  <li>{t('listItem14')}</li>
                  <li>{t('listItem15')}</li>
               </ul>
            </div>
         </article>

         <article className=" flex flex-col gap-4 lg:gap-9 py-5">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines3').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem16')}</li>
                  <li>{t('listItem17')}</li>
               </ul>
               <p>{t('paragraph5')}</p>
            </div>
         </article>

         <article className=" flex flex-col gap-4 lg:gap-9 py-5">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines4').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem18')}</li>
               </ul>
               <ul className="list-disc list-outside pl-5">
                  <li>
                     <p>{t('paragraph6')}</p>
                     <ul className="list-disc list-outside pl-5">
                        <li>{t('listItem19')}</li>
                        <li>{t('listItem20')}</li>
                        <li>{t('listItem21')}</li>
                        <li>{t('listItem22')}</li>
                     </ul>
                  </li>
                  <li>{t('listItem23')}</li>
                  <li>{t('listItem24')}</li>
               </ul>
               <p>{t('paragraph7')}</p>
            </div>
         </article>

         <article className="flex flex-col gap-4 lg:gap-9 py-5">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines5').map((text, index) => (
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
            </div>
         </article>

         <article className="flex flex-col gap-4 lg:gap-9 py-5">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines6').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem30')}</li>
                  <li>{t('listItem31')}</li>
                  <li>{t('listItem32')}</li>
                  <li>
                     <p>{t('paragraph8')}</p>
                     <ul className="list-disc list-outside pl-5">
                        <li>{t('listItem33')}</li>
                        <li>{t('listItem34')}</li>
                        <li>{t('listItem35')}</li>
                     </ul>
                  </li>
               </ul>
            </div>
         </article>

         <article className="flex flex-col gap-4 lg:gap-9 py-5">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines7').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem36')}</li>
                  <li>
                     <p>{t('paragraph9')}</p>
                     <ul className="list-disc list-outside pl-5">
                        <li>{t('listItem37')}</li>
                        <li>{t('listItem38')}</li>
                     </ul>
                  </li>
                  <li>{t('listItem39')}</li>
               </ul>
            </div>
         </article>

         <article className="flex flex-col gap-4 lg:gap-9 py-5">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines8').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem40')}</li>
                  <li>{t('listItem41')}</li>
                  <li>{t('listItem42')}</li>
                  <li>{t('listItem43')}</li>
               </ul>
            </div>
         </article>

         <article className="flex flex-col gap-4 lg:gap-9 py-5">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines9').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem44')}</li>
                  <li>{t('listItem45')}</li>
                  <li>{t('listItem46')}</li>
                  <li>{t('listItem47')}</li>
                  <li>{t('listItem48')}</li>
               </ul>
            </div>
         </article>

         <article className="flex flex-col gap-4 lg:gap-9 py-5">
            <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
               {t.raw('titleLines10').map((text, index) => (
                  <span key={index}>{text}</span>
               ))}
            </h4>
            <div className="w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base">
               <ul className="list-disc list-outside pl-5">
                  <li>{t('listItem49')}</li>
                  <li>
                     <p>{t('paragraph10')}</p>
                     <ul className="list-disc list-outside pl-5">
                        <li>{t('listItem50')}</li>
                        <li>{t('listItem51')}</li>
                        <li>{t('listItem52')}</li>
                        <li>{t('listItem53')}</li>
                     </ul>
                  </li>
                  <li>{t('listItem54')}</li>
                  <li>{t('listItem55')}</li>
                  <li>{t('listItem56')}</li>
               </ul>
            </div>
         </article>
      </main>
   );
}
