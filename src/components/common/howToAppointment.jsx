import Image from 'next/image';
import React from 'react';
import MotionScrollInView from './motionScrollInView';
import MotionScrollInViewVariant from './motionScrollInViewVariant';
import { Phone } from 'lucide-react';
import Pageh3Title from './pageh3Title';

const appointmentSteps = [
   {
      id: 1,
      title: 'Contact From',
      titleBr: 'WhatsApp',
      hoverTitle: 'Fill Application',
      hoverTitleBr: 'Form',
      image: null,
      icon: Phone,
      alt: 'whatsapp',
      imageWidth: 'w-14 sm:w-16 lg:w-69.25',
      description:
         "Since 1998, I have worked on hair restoration and hair transplants. My clinic provides the highest level of service and expertise to turn our patients' dreams into reality. We have built an unmatched reputation by offering our patients superior results while utilizing the best technology.",
   },
   {
      id: 2,
      title: 'Get Online',
      titleBr: 'Consultation',
      hoverTitle: 'Fill Application',
      hoverTitleBr: 'Form',
      image: '/images/appointment-icon-2-new.webp',
      alt: 'consultation',
      imageWidth: 'w-14 sm:w-16 lg:w-69.25',
      description:
         "Since 1998, I have worked on hair restoration and hair transplants. My clinic provides the highest level of service and expertise to turn our patients' dreams into reality. We have built an unmatched reputation by offering our patients superior results while utilizing the best technology.",
   },
   {
      id: 3,
      title: 'Complete Your',
      titleBr: 'Appointment',
      hoverTitle: 'Fill Application',
      hoverTitleBr: 'Form',
      image: '/images/appointment-icon-3-new.webp',
      alt: 'appointment',
      imageWidth: 'w-14 sm:w-16 lg:w-69.25',
      description:
         "Since 1998, I have worked on hair restoration and hair transplants. My clinic provides the highest level of service and expertise to turn our patients' dreams into reality. We have built an unmatched reputation by offering our patients superior results while utilizing the best technology.",
   },
];

export default function HowToAppointment() {
   return (
      <section className="w-full py-15">
         <main className="w-full flex flex-col items-start lg:items-center justify-start lg:justify-center gap-6">
            <MotionScrollInView className="w-full">
               <Pageh3Title title=" How To Make An Appointment" className="border-b border-coffee-dark text-coffee-dark font-normal w-full max-w-6xl lg:mx-auto" />
            </MotionScrollInView>
            <div className="w-full max-w-full xl:max-w-6xl mx-auto grid grid-cols-3 gap-3 lg:gap-6">
               {appointmentSteps.map((step) => (
                  <article
                     key={step.id}
                     className="group flex flex-col items-center justify-center bg-coffee-dark rounded-xl sm:rounded-2xl lg:rounded-4xl py-4 sm:py-5 lg:pt-4 lg:pb-14.75 px-1.5 sm:px-2 xl:px-2.5 lg:aspect-368/380"
                  >
                     {/* Mobile */}
                     <div className="flex flex-col items-center justify-between gap-3 lg:hidden w-full h-full px-2 py-1">
                        <span className="text-[48px] text-ivory-soft/30 leading-none font-light">{step.id}</span>
                        <div className="flex flex-col items-center gap-2">
                           {step.image ? (
                              <Image src={step.image} alt={step.alt} width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                           ) : (
                              <step.icon className="w-10 h-10 sm:w-12 sm:h-12 text-ivory-soft" strokeWidth={0.75} absoluteStrokeWidth />
                           )}
                           <p className="text-center text-ivory-soft/80 text-[11px] leading-snug tracking-wide uppercase">
                              <span className="text-nowrap">{step.title}</span>
                              <br />
                              {step.titleBr}
                           </p>
                        </div>
                     </div>

                     {/* Desktop — dokunulmadı */}
                     <div className="hidden lg:flex flex-col items-center justify-center w-full h-full">
                        <div className="w-full max-w-70 flex flex-col lg:flex-row items-start lg:items-center gap-3 sm:gap-4 lg:gap-0 text-ivory-soft px-3.5 xl:px-0">
                           <div className="flex items-center gap-2">
                              <span className="text-[70px] sm:text-[80px] 2xl:text-[96px]">{step.id}</span>
                           </div>
                           <div className="relative w-full">
                              <p className="text-[23px] sm:text-[28px] lg:text-[28px] xl:text-[32px] leading-8 2xl:leading-9 opacity-0 lg:opacity-100 lg:group-hover:opacity-0 transition-all duration-300">
                                 {step.title}
                                 <br />
                                 {step.titleBr}
                              </p>
                              <p className="w-full absolute left-0 top-1/2 -translate-y-1/2 text-[23px] sm:text-[28px] lg:text-[30px] xl:text-[32px] leading-8 2xl:leading-9 text-nowrap opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200">
                                 {step.hoverTitle}
                                 <br />
                                 {step.hoverTitleBr}
                              </p>
                           </div>
                        </div>
                        <div className="relative h-38.25 w-full">
                           {step.image ? (
                              <Image
                                 src={step.image}
                                 alt={step.alt}
                                 width={300}
                                 height={200}
                                 className={`mx-auto opacity-0 lg:opacity-100 lg:group-hover:opacity-0 transition-all duration-300 object-contain object-center ${step.imageWidth} h-full`}
                              />
                           ) : (
                              <step.icon
                                 className="mx-auto opacity-0 lg:opacity-100 lg:group-hover:opacity-0 transition-all duration-300 w-14 sm:w-16 lg:w-36 xl:w-38.25 h-auto text-ivory-soft"
                                 strokeWidth={0.75}
                                 absoluteStrokeWidth
                              />
                           )}
                           <p className="hidden lg:block w-full max-w-70 px-2 sm:px-0 absolute left-1/2 top-1/2 -translate-1/2 text-[14px] text-ivory-soft opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200">
                              {step.description}
                           </p>
                        </div>
                     </div>
                  </article>
               ))}
            </div>
            <MotionScrollInView className="w-full max-w-full xl:max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-6">
               <article className="group flex flex-col items-start gap-3.75 text-coffee-dark">
                  <h3 className="text-[32px] leading-9">
                     Hair Transplantation in
                     <br /> Istanbul, Turkey
                  </h3>
                  <p className="max-w-full lg:max-w-141">
                     Dr. Özlem Bicer brings over 25 years of experience and is an esteemed member of the International Society of Hair Restoration Surgery (ISHRS). She is supported by a dedicated team
                     of highly trained nurses, making us one of the most reputable and experienced hair transplant teams worldwide.
                  </p>
               </article>
               <article className="group relative w-full lg:w-auto max-w-full flex-1 min-h-60 lg:h-full lg:min-h-min flex items-center justify-center bg-coffee-dark text-ivory-soft rounded-4xl py-25 px-12.5">
                  <span className="opacity-0 lg:opacity-100 lg:group-hover:opacity-0 transition-opacity duration-300 uppercase text-[23px] sm:text-[28px] md:text-[32px] text-nowrap">Contact US</span>
                  <div className="w-fit flex flex-col items-center justify-center gap-2 absolute left-1/2 top-1/2 -translate-1/2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                     <span className="inline-block lg:hidden uppercase text-[23px] sm:text-[28px] md:text-[32px] text-nowrap">Contact US</span>
                     <div className="flex flex-col items-center justify-center text-[23px] sm:text-[28px] lg:text-[32px]">
                        <a href="mailto:info@ozlembicer.com">info@ozlembicer.com</a>
                        <a href="tel:+905334141313">+90 (533) 414 13 13</a>
                     </div>
                  </div>
               </article>
            </MotionScrollInView>
         </main>
      </section>
   );
}
