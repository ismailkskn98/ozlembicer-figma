import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function FemaleContent() {
   const t = useTranslations('Content.hairLoss.cousesOfHairLoss.femaleHairLoss.femaleContent');
   return (
      <main className="fluid gridContainer w-full pb-10 pt-10 lg:pt-25">
         <section className="w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-start gap-16">
            <main className="w-full flex flex-col lg:flex-row items-stretch gap-6">
               <section className="order-2 lg:order-1 flex-1 w-full flex flex-col items-start text-[#3D1D1D] text-[14px] gap-3">
                  <article className="w-full flex flex-col items-start">
                     <h2 className="font-bold">{t('heading1')}</h2>
                     <div className="w-full flex flex-col items-start gap-3">
                        <p>
                           {t('paragraph1')}
                           <br /> {t('paragraph2')}
                        </p>
                        <p>
                           {t('paragraph3')}
                           <br /> {t('paragraph4')}
                        </p>
                        <p>
                           {t('paragraph5')}
                        </p>
                     </div>
                  </article>
                  <article className="w-full flex flex-col items-start">
                     <h2 className="font-bold">{t('heading2')}</h2>
                     <div className="w-full flex flex-col items-start gap-3">
                        <p>
                           {t('paragraph6')}
                        </p>
                        <p>
                           {t('paragraph7')}
                        </p>
                     </div>
                  </article>
                  <article className="w-full flex flex-col items-start">
                     <h2 className="font-bold">{t('heading3')}</h2>
                     <p>
                        {t('paragraph8')}
                     </p>
                  </article>
                  <article className="w-full flex flex-col items-start">
                     <h2 className="font-bold">{t('heading4')}</h2>
                     <div className="w-full flex flex-col items-start gap-3">
                        <p>
                           {t('paragraph9')}
                        </p>
                        <p>
                           {t('paragraph10')}
                        </p>
                     </div>
                  </article>
                  <article className="w-full flex flex-col items-start">
                     <h2 className="font-bold">{t('heading5')}</h2>
                     <p>{t('paragraph11')}</p>
                  </article>
                  <article className="w-full flex flex-col items-start">
                     <h2 className="font-bold">{t('heading6')}</h2>
                     <div className="w-full flex flex-col items-start gap-3">
                        <p>{t('paragraph12')}</p>
                        <p>
                           {t('paragraph13')}
                        </p>
                     </div>
                  </article>
               </section>
               <div className="order-1 lg:order-2 mx-auto lg:mx-0 h-full flex flex-col items-start w-full lg:w-116.25">
                  <Image
                     src="/images/female-girls.jpg"
                     alt={t('alt1')}
                     width={800}
                     height={1200}
                     unoptimized
                     className="object-cover object-center w-full h-90 md:h-110 lg:h-full rounded-t-2xl lg:rounded-t-4xl"
                  />
                  <Image
                     src="/images/female-ludwig-scale.webp"
                     alt={t('alt2')}
                     width={1200}
                     height={800}
                     unoptimized
                     className="object-cover object-center w-full h-auto lg:h-66.5 rounded-b-2xl lg:rounded-b-4xl"
                  />
               </div>
            </main>
            <main className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-stretch place-content-stretch">
               <div className="min-w-75 w-full h-100 lg:h-full relative mx-auto lg:mx-0">
                  <Image src="/images/female-tarak.jpg" alt={t('alt3')} fill unoptimized className="object-cover object-center w-full h-full rounded-2xl lg:rounded-4xl" />
               </div>
               <section className="col-span-1 lg:col-span-2 flex flex-col items-start text-[#3D1D1D] text-[14px] gap-4">
                  <article className="flex flex-col items-start">
                     <h2 className="font-bold">{t('heading7')}</h2>
                     <div className="flex flex-col items-start">
                        <p>
                           {t('paragraph14')}
                        </p>
                        <p>{t('paragraph15')}</p>
                        <p>{t('paragraph16')}</p>
                        <p>{t('paragraph17')}</p>
                        <p>{t('paragraph18')}</p>
                        <p>{t('paragraph19')}</p>
                        <p>{t('paragraph20')}</p>
                     </div>
                  </article>
                  <article className="flex flex-col items-start">
                     <h2 className="font-bold">{t('heading8')}</h2>
                     <p>
                        {t('paragraph21')}
                     </p>
                  </article>
               </section>
            </main>
         </section>
      </main>
   );
}
