import MotionScrollInView from '@/components/common/motionScrollInView';
import React from 'react';
import { useTranslations } from 'next-intl';



export default function Certifications() {
   const t = useTranslations('Content.about.ozlembicer.certifications');
   const certificationsItems = t.raw('items');
   return (
      <section className="fluid gridContainer gap-y-6 w-full pt-16 pb-6 lg:pb-25 lg:pt-12.5">
         <MotionScrollInView className="w-full max-w-full xl:max-w-6xl mx-auto rounded-[10px]">
            <article className="w-full max-w-full xl:max-w-6xl mx-auto rounded-[10px] h-20 bg-wine-brown flex items-center justify-center text-ivory-soft px-4 text-center">
               <h2 className="text-[20px] sm:text-[32px]">{t('heading1')}</h2>
            </article>
         </MotionScrollInView>
         <MotionScrollInView className="w-full max-w-full xl:max-w-6xl mx-auto grid grid-cols-1 gap-y-4 lg:gap-y-6 text-sm sm:text-[14px] text-coffee-dark">
            {certificationsItems.map((item, index) => (
               <article
                  key={index}
                  className="w-full grid grid-cols-4 lg:grid-cols-5 gap-x-5 border lg:border-0 border-coffee-dark/10 items-center px-2.5 lg:px-0 py-2 lg:py-0 rounded-sm"
               >
                  <p className="col-span-3 lg:col-span-4">
                     {item.title}, {item.location}
                  </p>
                  <p className="col-span-1 lg:col-span-1">{item.date}</p>
               </article>
            ))}
         </MotionScrollInView>
      </section>
   );
}
