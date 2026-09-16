import React from 'react';
import BeardHero from './beardHero';
import HeroLogoCarousel from '../../common/logoCarousel';
import HowToAppointment from '../../common/howToAppointment';
import SectionWrapper from '../hairTransplant/common/sectionWrapper';
import HowDoesItWork from '../hairTransplant/common/howDoesItWork';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function BeardTransplantationMain() {
   const t = useTranslations('Content.transplantation.beardTransplantation');
   return (
      <main className="w-full fluid gridContainer bg-ivory-soft">
         <BeardHero />
         <HeroLogoCarousel isBgGradient={true} />
         <div className="fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft to-stone-beige/50">
            <main className="w-full fluid gridContainer border-y-2 border-gold bg-radial from-coffee-dark to-wine-brown">
               <SectionWrapper>
                  <HowDoesItWork
                     className="text-ivory-soft"
                     title={[t('title1'), t('title2')]}
                     content={[
                        {
                           type: 'paragraph',
                           value: t('value1'),
                        },
                        {
                           type: 'list',
                           value: [
                              t('value2'),
                              t('value3'),
                              t('value4'),
                              t('value5'),
                           ],
                        },
                        { type: 'paragraph', value: t('value6') },
                     ]}
                  >
                     <main className="grid grid-cols-1 sm:grid-cols-2 w-full border-t border-ivory-soft/15 place-content-stretch place-items-stretch text-ivory-soft">
                        <article className="sm:border-r border-b border-ivory-soft/15 flex flex-col gap-9 py-5 sm:pr-4">
                           <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
                              {t.raw('titleLines1').map((text, index) => (
                                 <span key={index}>{text}</span>
                              ))}
                           </h4>
                           <div className="w-full flex flex-col items-start gap-4 text-ivory-soft text-sm lg:text-base">
                              <p>{t('paragraph1')}</p>
                              <ul className="list-disc list-outside pl-5">
                                 <li>{t('listItem1')}</li>
                                 <li>{t('listItem2')}</li>
                                 <li>{t('listItem3')}</li>
                                 <li>{t('listItem4')}</li>
                                 <li>{t('listItem5')}</li>
                                 <li>{t('listItem6')}</li>
                              </ul>
                              <p>{t('paragraph2')}</p>
                           </div>
                        </article>
                        <article className="border-b border-ivory-soft/15 flex flex-col gap-9 py-5 sm:pl-4">
                           <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
                              {t.raw('titleLines2').map((text, index) => (
                                 <span key={index}>{text}</span>
                              ))}
                           </h4>
                           <div className="w-full flex flex-col items-start gap-4 text-ivory-soft text-sm lg:text-base">
                              <p>{t('paragraph3')}</p>
                              <p>{t('paragraph4')}</p>
                              <ul className="list-disc list-outside pl-5">
                                 <li>{t('listItem7')}</li>
                                 <li>{t('listItem8')}</li>
                                 <li>{t('listItem9')}</li>
                                 <li>{t('listItem10')}</li>
                              </ul>
                              <p>{t('paragraph5')}</p>
                              <p>{t('paragraph6')}</p>
                              <ul className="list-disc list-outside pl-5">
                                 <li>{t('listItem11')}</li>
                                 <li>{t('listItem12')}</li>
                              </ul>
                              <p>{t('paragraph7')}</p>
                           </div>
                        </article>

                        <article className="sm:border-r border-b border-ivory-soft/15 flex flex-col gap-9 py-5 sm:pr-4">
                           <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
                              {t.raw('titleLines3').map((text, index) => (
                                 <span key={index}>{text}</span>
                              ))}
                           </h4>
                           <div className="w-full flex flex-col items-start gap-4 text-ivory-soft text-sm lg:text-base">
                              <p>
                                 {t('paragraph8')}
                              </p>
                           </div>
                        </article>
                        <article className="border-b border-ivory-soft/15 flex flex-col gap-9 py-5 sm:pl-4">
                           <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
                              {t.raw('titleLines4').map((text, index) => (
                                 <span key={index}>{text}</span>
                              ))}
                           </h4>
                           <div className="w-full flex flex-col items-start gap-4 text-ivory-soft text-sm lg:text-base">
                              <p>
                                 {t('paragraph9')}
                              </p>
                              <ul className="list-disc list-outside pl-5">
                                 <li>{t('listItem13')}</li>
                                 <li>{t('listItem14')}</li>
                              </ul>
                              <p>{t('paragraph10')}</p>
                           </div>
                        </article>

                        <article className="border-b sm:border-r border-ivory-soft/15 flex flex-col gap-9 py-5 sm:pr-4">
                           <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
                              {t.raw('titleLines5').map((text, index) => (
                                 <span key={index}>{text}</span>
                              ))}
                           </h4>
                           <div className="w-full flex flex-col items-start gap-4 text-ivory-soft text-sm lg:text-base">
                              <p>{t('paragraph11')}</p>
                              <ul className="list-disc list-outside pl-5">
                                 <li>{t('listItem15')}</li>
                                 <li>{t('listItem16')}</li>
                                 <li>{t('listItem17')}</li>
                                 <li>{t('listItem18')}</li>
                              </ul>
                              <p>{t('paragraph12')}</p>
                           </div>
                        </article>
                        <article className="border-b border-ivory-soft/15 flex flex-col gap-9 py-5 sm:pl-4">
                           <h4 className="font-bold text-base lg:text-[20px] flex flex-col items-start">
                              {t.raw('titleLines6').map((text, index) => (
                                 <span key={index}>{text}</span>
                              ))}
                           </h4>
                           <div className="w-full flex flex-col items-start gap-0.5 text-ivory-soft text-sm lg:text-base">
                              <p>{t('paragraph13')}</p>
                              <ul className="list-disc list-outside pl-5">
                                 <li>{t('listItem19')}</li>
                                 <li>{t('listItem20')}</li>
                                 <li>{t('listItem21')}</li>
                              </ul>
                              <p>{t('paragraph14')}</p>
                              <p>{t('paragraph15')}</p>
                           </div>
                        </article>

                        <section className="col-span-1 sm:col-span-2 w-full flex flex-col items-start gap-4 mt-6 text-sm lg:text-base">
                           <h4 className="font-bold text-[20px]">{t('heading1')}</h4>
                           <p>
                              {t('paragraph16')}
                           </p>
                        </section>
                     </main>
                  </HowDoesItWork>
               </SectionWrapper>
            </main>
            <HowToAppointment />
         </div>
      </main>
   );
}
