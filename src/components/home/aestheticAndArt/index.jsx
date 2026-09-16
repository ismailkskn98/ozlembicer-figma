import MotionLeftView from '@/components/common/motionLeftView';
import MotionRightView from '@/components/common/motionRightView';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function AestheticAndArt() {
   const t = useTranslations('HomePage.aestheticAndArt');
   return (
      <section className="relative fluid gridContainer w-full py-15 lg:py-25 bg-radial from-coffee-dark to-wine-brown overflow-hidden">
         <div className="w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0" />
         <div className="w-full fluid absolute inset-x-0 top-0 h-0.5 bg-gold z-0" />
         <main className="relative z-20 w-full max-w-full xl:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 justify-items-stretch gap-10">
            <MotionLeftView className="flex order-2 lg:order-1">
               <article className="flex-1 flex flex-col item-start justify-between gap-4 xl:gap-7.5 text-ivory-soft">
                  <h2 className="text-[30px] sm:text-[48px] xl:text-[64px] flex flex-col leading-8 sm:leading-13 xl:leading-18">
                     {t('headingLine1')}
                     <br />
                     <span className="font-bold">
                        {t('headingLine2')}
                        <br />
                        {t('headingLine3')}
                     </span>
                  </h2>
                  <div className="w-full flex flex-col items-start text-start lg:max-w-134 leading-6 lg:leading-5 xl:leading-6">
                     <p className="">
                        {t('paragraph1')}
                        <br />
                        <br />
                     </p>
                     <p className="">
                        {t('paragraph2')}
                        <br />
                        <br />
                     </p>
                     <p className="">
                        {t('paragraph3')}
                        <br />
                        <br />
                     </p>
                     <p className="">
                        {t('paragraph4')}
                        <br />
                        {t('signature')}
                     </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-3 lg:gap-6">
                     <Link
                        href="/about-us/dr-ozlem-bicer"
                        className="rounded-[10px] py-2 xl:py-2.5 px-3 xl:px-3.75 text-xs lg:text-sm border border-ivory-soft text-ivory-soft hover:bg-ivory-soft/70 hover:text-coffee-dark hover:border-transparent transition-colors duration-200"
                     >
                        {t('doctorLink')}
                     </Link>
                     <Link
                        href="/contact-us"
                        className="rounded-[10px] py-2 xl:py-2.5 px-3 xl:px-3.75 text-xs lg:text-sm bg-ivory-soft text-coffee-dark hover:bg-ivory-soft/70 transition-colors duration-200"
                     >
                        {t('appointmentLink')}
                     </Link>
                  </div>
               </article>
            </MotionLeftView>
            <MotionRightView className="w-full mx-auto max-w-full lg:max-w-141 h-full order-1 lg:order-2">
               <div className="relative w-full h-100 sm:h-120 lg:h-full rounded-2xl lg:rounded-4xl">
                  <Image src="/images/aestheticAndArt.webp" alt={t('imageAlt')} fill className="object-cover object-center w-full h-full rounded-2xl lg:rounded-4xl" unoptimized />
               </div>
            </MotionRightView>
         </main>
      </section>
   );
}
