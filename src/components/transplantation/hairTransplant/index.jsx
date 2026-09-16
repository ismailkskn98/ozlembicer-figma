import React from 'react';
import HairTransplantHero from './hairTransplantHero';
import CustomBreadCrumb from '../../common/customBreadCrumb';
import HeroLogoCarousel from '../../common/logoCarousel';
import SectionWrapper from './common/sectionWrapper';
import HowDoesItWorkBodyHair from './bodyHair/howDoesItWorkBodyHair';
import HowDoesItWorkRecon from './reconstructive/howDoesItWorkRecon';
import FueDoesItWorkFAQs from './fueMicroMotor/fueDoesItWorkFAQs';
import HowDoesItWork from './common/howDoesItWork';
import DomLoaded from '../../common/domLoaded';
import HowToAppointment from '../../common/howToAppointment';
import HowDoesItWorkLong from './longHair/howDoesItWorkLong';
import HowDoesItWorkFut from './futHair/howDoesItWorkFut';
import { useTranslations } from 'next-intl';

const linksItemConfig = [
   {
      "href": "/hair-transplant#fue-micro-motor"
   },
   {
      "href": "/hair-transplant#fue-manuel"
   },
   {
      "href": "/hair-transplant#body-hair-transplant"
   },
   {
      "href": "/hair-transplant#reconstructive-hair-transplant"
   },
   {
      "href": "/hair-transplant#long-hair"
   },
   {
      "href": "/hair-transplant#fut"
   }
];

export default function HairTransplantMain() {
   const t = useTranslations('Content.transplantation.hairTransplant');
   const linkLabels = t.raw('links');
   const linksItems = linksItemConfig.map((item, index) => ({ ...item, label: linkLabels[index] }));
   return (
      <>
         <CustomBreadCrumb links={linksItems} isButton={true} />
         <HairTransplantHero />
         <HeroLogoCarousel isBgGradient={true} />
         <main className="relative fluid gridContainer w-full bg-linear-to-b from-stone-beige to-ivory-soft">
            <SectionWrapper
               linksItems={linksItems}
               id="fue-micro-motor"
               title={t('title1')}
               subtitle={t('subtitle1')}
               imageUrl="/images/hair-transplant/fue-micro-motor-nobg.svg"
               generalInfoProps={{
                  title: t('title2'),
                  boldTitle: 'FUE Hair Transplant?',
                  description1:
                     'FUE hair transplant (Follicular Unit Extraction) is a modern and minimally invasive hair restoration technique used to treat hair loss in both men and women. In this method, individual hair follicles—called follicular units—are extracted one by one from the donor area, usually the back and sides of the scalp, and transplanted into areas affected by hair loss.',
                  description2: 'Each follicular unit naturally contains 1 to 4 hairs, allowing the surgeon to achieve a natural hair density and appearance.',
                  imageUrl: '/images/hair-transplant/fue-micro-motor.jpg',
               }}
            >
               <HowDoesItWork
                  title={[t('title3'), t('title4')]}
                  content={[
                     { type: 'heading', value: t('value1') },
                     {
                        type: 'paragraph',
                        value: t('value2'),
                     },
                     {
                        type: 'paragraph',
                        value: t('value3'),
                     },
                     {
                        type: 'paragraph',
                        value: t('value4'),
                     },
                     { type: 'heading', value: t('value5') },
                     {
                        type: 'paragraph',
                        value: t('value6'),
                     },
                     {
                        type: 'list',
                        value: [t('value7'), t('value8'), t('value9'), t('value10')],
                     },
                     {
                        type: 'paragraph',
                        value: t('value11'),
                     },
                     { type: 'heading', value: t('value12') },
                     {
                        type: 'paragraph',
                        value: t('value13'),
                     },
                     {
                        type: 'paragraph',
                        value: t('value14'),
                     },
                     {
                        type: 'paragraph',
                        value: t('value15'),
                     },
                     {
                        type: 'paragraph',
                        value: t('value16'),
                     },
                     { type: 'heading', value: t('value17') },
                     {
                        type: 'paragraph',
                        value: t('value18'),
                     },
                     { type: 'heading', value: t('value19') },
                     {
                        type: 'paragraph',
                        value: t('value20'),
                     },
                     { type: 'paragraph', value: t('value21') },
                     {
                        type: 'list',
                        value: [
                           t('value22'),
                           t('value23'),
                        ],
                     },
                     { type: 'heading', value: t('value24') },
                     {
                        type: 'paragraph',
                        value: t('value25'),
                     },
                     {
                        type: 'paragraph',
                        value: t('value26'),
                     },
                     { type: 'heading', value: t('value27') },
                     {
                        type: 'paragraph',
                        value: t('value28'),
                     },
                     { type: 'heading', value: t('value29') },
                     { type: 'paragraph', value: t('value30') },
                     {
                        type: 'list',
                        value: [t('value31'), t('value32'), t('value33')],
                     },
                     {
                        type: 'paragraph',
                        value: t('value34'),
                     },
                     {
                        type: 'paragraph',
                        value: t('value35'),
                     },
                  ]}
               >
                  <FueDoesItWorkFAQs />
               </HowDoesItWork>
            </SectionWrapper>
         </main>
         <main className="relative fluid gridContainer w-full bg-linear-to-b from-stone-beige to-ivory-soft">
            <SectionWrapper
               linksItems={linksItems}
               id="fue-manuel"
               title={t('title5')}
               subtitle={t('subtitle2')}
               imageUrl="/images/hair-transplant/FUE-Manual.svg"
               generalInfoProps={{
                  title: t('title6'),
                  boldTitle: 'FUE Hair Transplant?',
                  description1:
                     'FUE hair transplant (Follicular Unit Extraction) is a modern and minimally invasive hair restoration technique used to treat hair loss in both men and women. In this method, individual hair follicles—called follicular units—are extracted one by one from the donor area, usually the back and sides of the scalp, and transplanted into areas affected by hair loss.',
                  description2: 'Each follicular unit naturally contains 1 to 4 hairs, allowing the surgeon to achieve a natural hair density and appearance.',
                  imageUrl: '/images/hair-transplant/hero-item-1.jpg',
               }}
            >
               <HowDoesItWork
                  title={[t('title7'), t('title8')]}
                  content={[
                     { type: 'heading', value: t('value36') },
                     {
                        type: 'paragraph',
                        value: t('value37'),
                     },
                     {
                        type: 'paragraph',
                        value: t('value38'),
                     },
                     {
                        type: 'paragraph',
                        value: t('value39'),
                     },
                     { type: 'heading', value: t('value40') },
                     {
                        type: 'paragraph',
                        value: t('value41'),
                     },
                     {
                        type: 'list',
                        value: [t('value42'), t('value43'), t('value44'), t('value45')],
                     },
                     {
                        type: 'paragraph',
                        value: t('value46'),
                     },
                     { type: 'heading', value: t('value47') },
                     {
                        type: 'paragraph',
                        value: t('value48'),
                     },
                     {
                        type: 'paragraph',
                        value: t('value49'),
                     },
                     {
                        type: 'paragraph',
                        value: t('value50'),
                     },
                     {
                        type: 'paragraph',
                        value: t('value51'),
                     },
                     { type: 'heading', value: t('value52') },
                     {
                        type: 'paragraph',
                        value: t('value53'),
                     },
                     { type: 'heading', value: t('value54') },
                     {
                        type: 'paragraph',
                        value: t('value55'),
                     },
                     { type: 'paragraph', value: t('value56') },
                     {
                        type: 'list',
                        value: [
                           t('value57'),
                           t('value58'),
                        ],
                     },
                     { type: 'heading', value: t('value59') },
                     {
                        type: 'paragraph',
                        value: t('value60'),
                     },
                     {
                        type: 'paragraph',
                        value: t('value61'),
                     },
                     { type: 'heading', value: t('value62') },
                     {
                        type: 'paragraph',
                        value: t('value63'),
                     },
                     { type: 'heading', value: t('value64') },
                     { type: 'paragraph', value: t('value65') },
                     {
                        type: 'list',
                        value: [t('value66'), t('value67'), t('value68')],
                     },
                     {
                        type: 'paragraph',
                        value: t('value69'),
                     },
                     {
                        type: 'paragraph',
                        value: t('value70'),
                     },
                  ]}
               >
                  <FueDoesItWorkFAQs />
               </HowDoesItWork>
               <section className="w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 justify-items-center gap-2 sm:gap-3 md:gap-6">
                  <article className="w-36 sm:w-43 h-36 sm:h-43 bg-linear-to-r from-wine-brown to-coffee-dark rounded-full flex flex-col items-center justify-center text-ivory-soft text-base md:text-xs lg:text-base">
                     {t.raw('titleLines1').map((text, index) => (
                        <span key={index}>{text}</span>
                     ))}
                  </article>
                  <article className="w-36 sm:w-43 h-36 sm:h-43 bg-linear-to-r from-wine-brown to-coffee-dark rounded-full flex flex-col items-center justify-center text-ivory-soft text-base md:text-xs lg:text-base">
                     {t.raw('titleLines2').map((text, index) => (
                        <span key={index}>{text}</span>
                     ))}
                  </article>
                  <article className="col-span-2 md:col-span-1 w-36 sm:w-43 h-36 sm:h-43 bg-linear-to-r from-wine-brown to-coffee-dark rounded-full flex flex-col items-center justify-center text-ivory-soft text-base md:text-xs lg:text-base">
                     {t.raw('titleLines3').map((text, index) => (
                        <span key={index}>{text}</span>
                     ))}
                  </article>
                  <article className="w-36 sm:w-43 h-36 sm:h-43 bg-linear-to-r from-wine-brown to-coffee-dark rounded-full flex flex-col items-center justify-center text-ivory-soft text-base md:text-xs lg:text-base">
                     {t.raw('titleLines4').map((text, index) => (
                        <span key={index}>{text}</span>
                     ))}
                  </article>
                  <article className="w-36 sm:w-43 h-36 sm:h-43 bg-linear-to-r from-wine-brown to-coffee-dark rounded-full flex flex-col items-center justify-center text-ivory-soft text-base md:text-xs lg:text-base">
                     {t.raw('titleLines5').map((text, index) => (
                        <span key={index}>{text}</span>
                     ))}
                  </article>
               </section>
            </SectionWrapper>
         </main>
         <main className="relative fluid gridContainer w-full bg-linear-to-b from-stone-beige to-ivory-soft">
            <SectionWrapper
               linksItems={linksItems}
               id="body-hair-transplant"
               title={t('title9')}
               subtitle={t('subtitle3')}
               imageUrl="/images/home-accordion/new-bht.svg"
               generalInfoProps={{
                  title: t('title10'),
                  boldTitle: 'Body Hair Transplant?',
                  description1:
                     'Body Hair Transplantation (BHT) is an advanced hair restoration technique used when the scalp does not provide enough suitable donor hair for a standard hair transplant. In a conventional hair transplant, hair follicles are typically harvested from the back and sides of the scalp. However, some patients have a limited or depleted scalp donor area, making additional donor sources necessary.',
                  description2:
                     'In such cases, hair follicles can be harvested from other parts of the body—most commonly the beard and, in selected cases, the chest—and transplanted to the scalp.',
                  imageUrl: '/images/hair-transplant/hero-item-2.jpg',
               }}
            >
               <HowDoesItWork
                  videos={[
                     { videoId: 'TOFFQj26QVk', alt: t('alt1'), title: t('title11') },
                     { videoId: 'HQa-LIH3QqA', alt: t('alt2'), title: t('title12') },
                  ]}
                  title={[t('title13'), t('title14')]}
                  content={[
                     { type: 'paragraph', value: t('value71') },
                     {
                        type: 'list',
                        value: [
                           t('value72'),
                           t('value73'),
                           t('value74'),
                           t('value75'),
                           t('value76'),
                        ],
                     },
                     {
                        type: 'paragraph',
                        value: t('value77'),
                     },
                  ]}
               >
                  <HowDoesItWorkBodyHair />
               </HowDoesItWork>
            </SectionWrapper>
         </main>
         <main className="relative fluid gridContainer w-full bg-linear-to-b from-stone-beige to-ivory-soft">
            <SectionWrapper
               linksItems={linksItems}
               id="reconstructive-hair-transplant"
               title={t('title15')}
               subtitle=""
               imageUrl="/images/hair-transplant/reconstruct-ve-Hair-Transplantation.svg"
               generalInfoProps={{
                  title: t('title16'),
                  boldTitle: 'Reconstructive Hair Transplantation?',
                  description1:
                     'Reconstructive hair transplantation is a specialized field of hair restoration focused on correcting hair loss or aesthetic problems caused by previous hair transplant procedures, trauma, burns, scars, medical conditions, or congenital factors.',
                  description2:
                     'Unlike standard cosmetic hair transplantation, reconstructive procedures require advanced planning, surgical precision, and artistic judgment to restore a natural appearance while respecting facial proportions and existing hair characteristics.',
                  imageUrl: '/images/hair-transplant/reconstructive.jpg',
               }}
            >
               <HowDoesItWork
                  videos={[
                     { videoId: 'sHLV0jLvKVs', alt: t('alt3'), title: t('title17') },
                     { videoId: 'WB0I5IlAqjg', alt: t('alt4'), title: t('title18') },
                     { videoId: 'twv7tvc9kLk', alt: t('alt5'), title: t('title19') },
                  ]}
                  title={[t('title20'), t('title21')]}
                  content={[
                     {
                        type: 'paragraph',
                        value: t('value78'),
                     },
                     {
                        type: 'list',
                        value: [
                           t('value79'),
                           t('value80'),
                           t('value81'),
                           t('value82'),
                           t('value83'),
                           t('value84'),
                           t('value85'),
                        ],
                     },
                     {
                        type: 'paragraph',
                        value: t('value86'),
                     },
                  ]}
               >
                  <HowDoesItWorkRecon />
               </HowDoesItWork>
            </SectionWrapper>
         </main>
         <main className="relative fluid gridContainer w-full bg-linear-to-b from-stone-beige to-ivory-soft">
            <SectionWrapper
               linksItems={linksItems}
               id="long-hair"
               title={t('title22')}
               subtitle={t('subtitle4')}
               imageUrl="/images/hair-transplant/long-hair-nobg.svg"
               generalInfoProps={{
                  title: t('title23'),
                  boldTitle: 'Long Hair Transplant?',
                  description1:
                     'Long hair transplantation is an advanced hair transplant technique in which hair follicles are extracted and implanted without shaving the donor or recipient areas. Although the procedure is technically the same as the classic micromotor FUE technique, special punches are used to avoid cutting the hair shaft, allowing the hair to remain long during extraction and implantation.',
                  description2:
                     'This method enables patients to see immediate cosmetic results after the procedure. The transplanted long hairs shed temporarily, but the follicles remain permanent and regrow naturally over time.',
                  imageUrl: '/images/hair-transplant/hero-item-3.jpg',
               }}
            >
               <HowDoesItWork
                  title={[t('title24'), t('title25')]}
                  content={[
                     { type: 'paragraph', value: t('value87') },
                     {
                        type: 'list',
                        value: [
                           t('value88'),
                           t('value89'),
                           t('value90'),
                           t('value91'),
                           t('value92'),
                           t('value93'),
                           t('value94'),
                           t('value95'),
                        ],
                     },
                     {
                        type: 'paragraph',
                        value: t('value96'),
                     },
                  ]}
               >
                  <HowDoesItWorkLong />
               </HowDoesItWork>
            </SectionWrapper>
         </main>
         <main className="relative fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft via-90% to-stone-beige/50">
            <SectionWrapper
               linksItems={linksItems}
               id="fut"
               title={t('title26')}
               subtitle={t('subtitle5')}
               imageUrl="/images/hair-transplant/FUE-Strip.svg"
               generalInfoProps={{
                  title: t('title27'),
                  boldTitle: 'FUT Hair Transplant?',
                  description1: 'FUT (Follicular Unit Transplantation)—also known as strip hair transplantation—is one of the most established hair transplant techniques. ',
                  description2:
                     'In the FUT method, a thin strip of hair-bearing scalp is surgically removed from the back of the head (donor area). The incision is then closed with sutures. The harvested strip is carefully divided into individual follicular units, each containing 1 to 4 hairs, and transplanted into areas affected by hair loss using a technique similar to FUE.',
                  imageUrl: '/images/hair-transplant/FUT-Hair.jpg',
               }}
            >
               <HowDoesItWork
                  videos={[
                     {
                        videoId: 'idSIhdT5B_U',
                        alt: t('alt6'),
                        title: t('title28'),
                     },
                     { videoId: 'O8c5cTp9xv0', alt: t('alt7'), title: t('title29') },
                     { videoId: 'jOdV8KsQeFQ', alt: t('alt8'), title: t('title30') },
                  ]}
                  title={[t('title31'), t('title32')]}
                  content={[
                     { type: 'heading', value: t('value97') },
                     {
                        type: 'paragraph',
                        value: t('value98'),
                     },
                     {
                        type: 'paragraph',
                        value: t('value99'),
                     },
                     { type: 'heading', value: t('value100') },
                     {
                        type: 'paragraph',
                        value: t('value101'),
                     },
                     {
                        type: 'paragraph',
                        value: t('value102'),
                     },
                     { type: 'heading', value: t('value103') },
                     {
                        type: 'paragraph',
                        value: t('value104'),
                     },
                     {
                        type: 'paragraph',
                        value: t('value105'),
                     },
                     { type: 'heading', value: t('value106') },
                     {
                        type: 'paragraph',
                        value: t('value107'),
                     },
                     {
                        type: 'paragraph',
                        value: t('value108'),
                     },
                     { type: 'heading', value: t('value109') },
                     {
                        type: 'paragraph',
                        value: t('value110'),
                     },
                     { type: 'heading', value: t('value111') },
                     {
                        type: 'paragraph',
                        value: t('value112'),
                     },
                     { type: 'heading', value: t('value113') },
                     {
                        type: 'paragraph',
                        value: t('value114'),
                     },
                     {
                        type: 'paragraph',
                        value: t('value115'),
                     },
                     {
                        type: 'paragraph',
                        value: t('value116'),
                     },
                  ]}
               >
                  <HowDoesItWorkFut />
               </HowDoesItWork>
            </SectionWrapper>
            <div className="-mt-16 sm:-mt-10">
               <HowToAppointment />
            </div>
         </main>
         <DomLoaded />
      </>
   );
}
