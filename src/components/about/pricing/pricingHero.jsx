import MotionScrollInView from '@/components/common/motionScrollInView';
import MotionScrollInViewVariant from '@/components/common/motionScrollInViewVariant';
import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

const priceItemConfig = [
   {
      "icon": "/images/price/FUE-Automated.svg",
      "paragraphs": [
         {
            "leadingBr": true
         },
         {}
      ]
   },
   {
      "icon": "/images/price/FUE-Manual.svg",
      "paragraphs": [
         {
            "leadingBr": true
         },
         {},
         {
            "leadingBr": true
         }
      ]
   },
   {
      "icon": "/images/price/FUE-Strip.svg",
      "paragraphs": [
         {
            "leadingBr": true
         }
      ]
   },
   {
      "icon": "/images/price/beard-icon.png",
      "paragraphs": [
         {
            "leadingBr": true
         },
         {}
      ]
   },
   {
      "icon": "/images/price/eyebrow-icon.png",
      "paragraphs": [
         {
            "leadingBr": true
         }
      ]
   },
   {
      "icon": "/images/price/body-icon.png",
      "paragraphs": [
         {
            "leadingBr": true
         }
      ]
   },
   {
      "icon": "/images/price/scalp-icon.png",
      "paragraphs": [
         {
            "leadingBr": true
         }
      ]
   },
   {
      "icon": "/images/price/prp-icon.png",
      "paragraphs": [
         {
            "leadingBr": true
         }
      ]
   },
   {
      "icon": "/images/price/consultation-icon.png",
      "paragraphs": [
         {
            "leadingBr": true
         }
      ]
   },
   {
      "icon": "/images/price/Touch-Up-Terms-and-Conditions.svg",
      "stackOnMobile": true,
      "paragraphs": [
         {
            "leadingBr": true
         },
         {},
         {}
      ]
   },
   {
      "icon": "/images/price/Discount-Terms-and-Conditions.svg",
      "stackOnMobile": true,
      "paragraphs": [
         {
            "leadingBr": true
         },
         {},
         {},
         {},
         {},
         {},
         {},
         {
            "mt2": true,
            "fontBold": true
         }
      ]
   }
];

export default function PricingHero() {
   const t = useTranslations('Content.about.pricing.pricingHero');
   const priceContent = t.raw('items');
   const priceItems = priceItemConfig.map((item, index) => ({
      ...item,
      title: priceContent[index].title,
      paragraphs: item.paragraphs.map((paragraph, paragraphIndex) => ({
         ...paragraph,
         ...priceContent[index].paragraphs[paragraphIndex],
      })),
   }));
   return (
      <main className="relative fluid gridContainer w-full bg-radial from-coffee-dark to-wine-brown pt-12 lg:pt-25 pb-50 overflow-hidden">
         <div className="w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0" />
         <section className="w-full max-w-full xl:max-w-6xl mx-auto">
            <article className="w-full flex flex-col items-start gap-6 lg:gap-10 text-ivory-soft">
               <MotionScrollInView>
                  <h1 className="text-[32px]">{t('heading1')}</h1>
               </MotionScrollInView>
               <MotionScrollInViewVariant className="flex-1 flex flex-col items-start gap-6 lg:gap-10 text-sm sm:text-[14px] leading-relaxed" childClassname={'flex flex-col items-start'}>
                  {priceItems.map((item, index) => {
                     if (item.standalone) {
                        return <p key={index}>{item.text}</p>;
                     }
                     return (
                        <article key={index} className={`${item.stackOnMobile ? 'flex-col sm:flex-row' : 'flex-row'} flex items-start gap-5`}>
                           {item.icon ? (
                              <Image src={item.icon} alt={item.title} width={90} height={90} className="object-contain object-center shrink-0 w-20 sm:w-22.5 h-20 sm:h-22.5" />
                           ) : (
                              <div className="w-20 sm:w-22.5 h-20 sm:h-22.5 bg-white rounded-sm shrink-0" />
                           )}
                           <div className="flex flex-col items-start">
                              <h3 className="font-bold leading-3">{item.title}</h3>
                              <div className="flex flex-col items-start">
                                 {item.paragraphs.map((para, pIdx) => {
                                    if (para.parts) {
                                       return (
                                          <p key={pIdx}>
                                             <span className="hidden sm:block">{para.leadingBr && <br />}</span>
                                             {para.parts[0]}
                                             <br />
                                             {para.parts[1]}
                                          </p>
                                       );
                                    }
                                    return (
                                       <p key={pIdx} className={`${para.mt2 ? 'mt-2' : ''} ${para.fontBold ? 'font-bold' : ''}`}>
                                          <span className="hidden sm:block">{para.leadingBr && <br />}</span>
                                          {para.text}
                                       </p>
                                    );
                                 })}
                              </div>
                           </div>
                        </article>
                     );
                  })}
               </MotionScrollInViewVariant>
            </article>
         </section>
      </main>
   );
}
