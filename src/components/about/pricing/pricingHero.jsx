import MotionScrollInView from '@/components/common/motionScrollInView';
import MotionScrollInViewVariant from '@/components/common/motionScrollInViewVariant';
import Image from 'next/image';
import React from 'react';

const priceItems = [
   {
      icon: null,
      title: 'FUE Automated',
      paragraphs: [{ text: '3€ per Graft', leadingBr: true }, { text: 'Up To 4.000 Grafts In One Session' }],
   },
   {
      icon: null,
      title: 'FUE Manual',
      paragraphs: [
         { text: '4€ per Graft', leadingBr: true },
         { text: '(Up to 2.000 Grafts In One Session)' },
         { text: 'For FUE sessions, the price has plus/minus 200 grafts range.', leadingBr: true },
      ],
   },
   {
      icon: null,
      title: 'FUT (Strip)',
      paragraphs: [{ text: '6.000€', leadingBr: true }],
   },
   {
      icon: '/images/price/beard-icon.png',
      title: 'Beard Transplant',
      paragraphs: [
         { text: 'From Scalp To Beard: 6.000-9.000€ (Related With Graft Count)', leadingBr: true },
         { text: 'From Beard To Scalp: 6.000€ (Unrelated With Graft Count)' },
      ],
   },
   {
      icon: '/images/price/eyebrow-icon.png',
      title: 'Eyebrow Transplant',
      paragraphs: [{ text: '6.000€', leadingBr: true }],
   },
   {
      icon: '/images/price/body-icon.png',
      title: 'Body Hair Transplant',
      paragraphs: [{ text: '6.000€', leadingBr: true }],
   },
   {
      icon: '/images/price/scalp-icon.png',
      title: 'Scalp Micro-Pigmentation (SMP)',
      paragraphs: [{ text: '500€ – 1000€', leadingBr: true }],
   },
   {
      icon: '/images/price/prp-icon.png',
      title: 'PRP Treatment',
      paragraphs: [{ text: 'Free With Certain Surgeries', leadingBr: true }],
   },
   {
      icon: '/images/price/consultation-icon.png',
      title: 'Consultation',
      paragraphs: [{ parts: ['In person: 100€', 'Online: Free'], leadingBr: true }],
   },
   {
      icon: null,
      stackOnMobile: true,
      title: 'Touch-Up Terms and Conditions',
      paragraphs: [
         {
            text: 'Sessions are planned by approval of Dr.Bicer. They are planned 1-2 times in a year. More than 2 sessions can be planned on the same day.',
            leadingBr: true,
         },
         {
            text: 'Free touch up for 50-200 grafts (Sessions are planned to eliminate problems caused by improper washing, head traumas…)',
         },
         { text: 'Up to 1000 grafts: 2000€' },
      ],
   },
   {
      icon: null,
      stackOnMobile: true,
      title: 'Discount Terms and Conditions',
      paragraphs: [
         { text: 'Medical Doctor/Team :%10', leadingBr: true },
         { text: 'Student: %10 (for students who do not work)' },
         { text: 'Group patients: %10 for Each' },
         { text: '2 BHT sessions: %15 (If two sessions are done in one day)' },
         {
            text: 'Last minute appointments:1000€ (For appointments for a specific day which is less than ten days away. To be able to tolerate expensive flight prices at last minute)',
         },
         { text: 'Last minute appointments:500€ (for 10-15 days)' },
         {
            text: 'For publication of media (photos & videos) in scientific studies, presentations, congress and articles: 20% (Dr.Bicer makes her own decision for this discount type in consultation if the patient is suitable for this case Ex: Burn Reconstruction)',
         },
         {
            text: 'Only one type discount type is applied and total discount cannot be more than %20',
            mt2: true,
            fontBold: true,
         },
      ],
   },
];

export default function PricingHero() {
   return (
      <main className="relative fluid gridContainer w-full bg-radial from-coffee-dark to-wine-brown pt-12 lg:pt-25 pb-50 overflow-hidden">
         <div className="w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0" />
         <section className="w-full max-w-full xl:max-w-6xl mx-auto">
            <article className="w-full flex flex-col items-start gap-6 lg:gap-10 text-ivory-soft">
               <MotionScrollInView>
                  <h1 className="text-[32px]">Pricing</h1>
               </MotionScrollInView>
               <MotionScrollInViewVariant
                  className="flex-1 flex flex-col items-start gap-6 lg:gap-10 text-sm sm:text-[14px] leading-relaxed"
                  childClassname={'flex flex-col items-start'}
               >
                  {priceItems.map((item, index) => {
                     if (item.standalone) {
                        return <p key={index}>{item.text}</p>;
                     }
                     return (
                        <article
                           key={index}
                           className={`${item.stackOnMobile ? 'flex-col sm:flex-row' : 'flex-row'} flex items-start gap-5`}
                        >
                           {item.icon ? (
                              <Image
                                 src={item.icon}
                                 alt={item.title}
                                 width={90}
                                 height={90}
                                 className="object-contain object-center shrink-0 w-20 sm:w-22.5 h-20 sm:h-22.5"
                              />
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
                                       <p
                                          key={pIdx}
                                          className={`${para.mt2 ? 'mt-2' : ''} ${para.fontBold ? 'font-bold' : ''}`}
                                       >
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
