import Image from 'next/image';
import React from 'react';
import MotionScrollInView from './motionScrollInView';
import { Phone } from 'lucide-react';
import Pageh3Title from './pageh3Title';
import { cn } from '@/lib/utils';

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
         'Reach out to us on WhatsApp and get connected with a dedicated patient consultant who speaks your language. Fill out the form provided by your consultant and schedule your online consultation with Dr. Biçer.',
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
         'Have a one-on-one online consultation with Dr. Biçer to receive a personalized assessment and detailed information about your treatment and process. Together with your consultant, proceed with planning the next steps.',
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
         'Finalize your treatment plan and confirm your appointment with the guidance of your consultant. After your procedure, your patient consultant will stay in continuous contact with you for one year, closely monitoring your progress, providing updates, and supporting you throughout your entire recovery journey.',
   },
];

export default function HowToAppointment({ isContactPage, className }) {
   return (
      <section className={cn(`w-full py-15`, className)}>
         <main className="w-full flex flex-col items-start lg:items-center justify-start lg:justify-center gap-6">
            <MotionScrollInView className="w-full">
               <Pageh3Title title="How To Make An Appointment" className="border-b border-coffee-dark text-coffee-dark w-full max-w-6xl lg:mx-auto" />
            </MotionScrollInView>
            <div className="w-full max-w-full xl:max-w-6xl mx-auto grid grid-cols-3 gap-3 lg:gap-6">
               {appointmentSteps.map((step) => (
                  <article
                     key={step.id}
                     className="group flex flex-col items-center justify-center bg-coffee-dark rounded-xl sm:rounded-2xl lg:rounded-4xl py-4 sm:py-3 lg:pt-4 lg:pb-14.75 px-1.5 sm:px-2 xl:px-2.5 aspect-368/368"
                  >
                     {/* Mobile */}
                     <div className="flex flex-col items-center justify-center flex-1 lg:justify-between gap-3 lg:hidden w-full h-full px-2 py-1 min-h-[0vw]">
                        <div className="flex items-center gap-0.5 min-w-0">
                           <span style={{ fontSize: 'clamp(27px,7vw,70px)' }} className="text-ivory-soft leading-none font-light shrink-0">
                              {step.id}
                           </span>
                           <p style={{ fontSize: 'clamp(10px,3vw,30px)' }} className="text-start text-ivory-soft leading-none min-w-0">
                              <span className="text-nowrap">{step.title}</span>
                              <br />
                              {step.titleBr}
                           </p>
                        </div>
                        <div className="flex flex-col items-center gap-2 min-w-[0vw]">
                           {step.image ? (
                              <Image
                                 src={step.image}
                                 alt={step.alt}
                                 width={120}
                                 height={120}
                                 style={{ width: 'clamp(10px,10vw,128px)', height: 'clamp(10px,10vw,128px)' }}
                                 className="object-contain"
                              />
                           ) : (
                              <step.icon style={{ width: 'clamp(10px,10vw,128px)', height: 'clamp(10px,10vw,128px)' }} className="text-ivory-soft" strokeWidth={0.75} absoluteStrokeWidth />
                           )}
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
            {!isContactPage && (
               <MotionScrollInView className="w-full max-w-full xl:max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  <article className="group flex flex-col items-start gap-3.75 text-coffee-dark">
                     <h3 className="text-[32px] leading-9">
                        Hair Transplantation in
                        <br /> Istanbul, Turkey
                     </h3>
                     <p className="max-w-full lg:max-w-141">
                        Dr. Özlem Bicer brings over 25 years of experience and is an esteemed member of the International Society of Hair Restoration Surgery (ISHRS). She is supported by a
                        dedicated team of highly trained nurses, making us one of the most reputable and experienced hair transplant teams worldwide.
                     </p>
                  </article>
                  <a
                     href="https://wa.me/905304141313"
                     target="_blank"
                     className="group relative w-full lg:w-auto max-w-full flex-1 min-h-60 lg:h-full lg:min-h-min flex items-center justify-center bg-coffee-dark text-ivory-soft rounded-4xl py-25 px-12.5 cursor-pointer"
                  >
                     <span className="opacity-0 lg:opacity-100 lg:group-hover:opacity-0 transition-opacity duration-300 uppercase text-[23px] sm:text-[28px] md:text-[32px] text-nowrap">
                        Contact US
                     </span>
                     <div className="w-fit flex flex-col items-center justify-center gap-2 absolute left-1/2 top-1/2 -translate-1/2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                        <span className="inline-block lg:hidden uppercase text-[23px] sm:text-[28px] md:text-[32px] text-nowrap">Contact US</span>
                        <div className="flex flex-col items-center justify-center text-[23px] sm:text-[28px] lg:text-[32px]">
                           <span>info@ozlembicer.com</span>
                           <span>+90 (530) 414 13 13</span>
                        </div>
                     </div>
                  </a>
               </MotionScrollInView>
            )}
         </main>
      </section>
   );
}
