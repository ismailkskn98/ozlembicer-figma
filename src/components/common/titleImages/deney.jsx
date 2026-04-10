'use client';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import React, { useEffect, useState } from 'react';
import MotionScrollInView from '../motionScrollInView';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const titleItemsData = [
   {
      value: 'hair-transplant',
      title: 'Hair Transplantation',
      image: '/images/home-accordion/hair-transplant-degisti.webp',
      icon: '/images/hair-transplant/fue-micro-motor-nobg.svg',
      content: {
         title: 'Hair Transplantation Techniques',
         items: [
            {
               type: 'list',
               items: ['FUE Micro Motor', 'FUE Manuel', 'Body Hair Transplant (BHT)', 'Long Hair Transplant', 'FUT', 'Reconstructive Hair Transplant'],
            },
         ],
      },
   },
   {
      value: 'beard-transplant',
      title: 'Beard Transplantation',
      image: '/images/home-accordion/beard-transplant.webp',
      icon: '/images/hair-transplant/beard-nobg.svg',
      content: {
         title: 'Beard Transplantation Techniques',
         items: [{ type: 'list', items: ['FUE Micromotor', 'FUE Manuel', 'BHT', 'Reconstructive Hair Transplant'] }],
      },
   },
   {
      value: 'eyebrow-transplant',
      title: 'Eyebrow Transplantation',
      image: '/images/home-accordion/eyebrow-transplant.webp',
      icon: '/images/hair-transplant/eyebrow.svg',
      content: {
         title: 'Eyebrow Transplantation Techniques',
         items: [{ type: 'list', items: ['FUE Micromotor', 'FUE Manuel', 'BHT', 'Reconstructive Hair Transplant'] }],
      },
   },
   {
      value: 'female-hair-transplant',
      title: 'Female Hair Transplantation',
      image: '/images/home-accordion/female-hair-transplant.webp',
      icon: '/images/hair-transplant/female-hair.svg',
      content: {
         title: 'Female Hair Transplantation Techniques',
         items: [{ type: 'list', items: ['FUE Micromotor', 'FUE Manuel', 'BHT', 'Reconstructive Hair Transplant'] }],
      },
   },
];

export default function DeneyTitleImage() {
   const [selectedItem, setSelectedItem] = useState('');

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth > 768) {
            setSelectedItem('hair-transplant');
         } else {
            setSelectedItem('');
         }
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
      <MotionScrollInView className="w-full max-w-full xl:max-w-6xl mx-auto rounded-4xl lg:mb-10 mt-0 lg:mt-10 overflow-hidden">
         <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col md:flex-row min-h-[70vh] md:min-h-min md:h-150 items-stretch gap-0"
            value={selectedItem}
            onValueChange={(value) => setSelectedItem(value)}
         >
            {titleItemsData.map((item) => {
               const isOpen = selectedItem === item.value;
               return (
                  <div key={item.value} className={`relative flex-1 w-full md:w-auto h-full transition-all duration-400 ease-in-out flex ${isOpen ? 'md:flex-7 h-125' : 'md:flex-1 h-auto'}`}>
                     <AccordionItem value={item.value} className={cn('flex-1 border-none')}>
                        <div className="relative h-full flex-1 flex flex-col gap-0 w-full overflow-hidden">
                           <div className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
                           <AccordionTrigger
                              isOpen={isOpen}
                              isShowIcon={false}
                              className={cn('relative z-20 p-0 hover:no-underline data-[state=open]:no-underline', {
                                 'min-h-15 md:h-full': !isOpen,
                                 'h-min': isOpen,
                              })}
                           >
                              {!isOpen && (
                                 <div className="h-full w-full flex items-start md:items-end justify-center md:pb-10 cursor-pointer">
                                    <div
                                       className={cn('absolute inset-0 flex flex-row md:flex-col items-center justify-between gap-4 md:gap-0 px-4 md:px-0 py-4 md:py-6', {
                                          'bg-coffee-dark/80 hover:bg-coffee-dark/50 transition-all duration-200': !isOpen,
                                       })}
                                    >
                                       <h2 className="text-ivory-soft text-base md:text-lg font-medium tracking-wider whitespace-nowrap md:[writing-mode:vertical-rl]">{item.title}</h2>
                                       <Image src={item.icon} alt={item.title} width={32} height={32} className="object-contain h-11 w-11 object-center" />
                                    </div>
                                 </div>
                              )}
                           </AccordionTrigger>

                           <AccordionContent
                              className="flex-1 relative md:absolute md:inset-0 md:z-20 pt-4 sm:pt-6 md:pt-10 pb-4 sm:pb-6 md:pb-10 px-4 sm:px-6 md:px-8 md:max-h-full"
                              // onWheel={(e) => e.stopPropagation()}
                              onClick={() => {
                                 setSelectedItem('');
                              }}
                           >
                              <div className="absolute inset-0 z-10 bg-coffee-dark/55" />
                              <h2 className="relative z-20 text-[20px] md:text-2xl 2xl:text-3xl text-ivory-soft font-semibold mb-3.5 md:mb-6">{item.title}</h2>
                              <h3 className="relative z-20 text-base md:text-lg 3xl:text-xl text-ivory-soft mb-2.5 md:mb-4">{item.content.title}</h3>
                              {item.content.items.map((contentItem, idx) => (
                                 <div key={idx} className="relative z-20">
                                    {contentItem.type === 'paragraph' && <p className="text-ivory-soft/90 text-sm sm:text-base mb-4 leading-relaxed">{contentItem.text}</p>}
                                    {contentItem.type === 'list' && (
                                       <ul className="text-ivory-soft/90 text-sm sm:text-base mb-2 md:mb-4 list-disc list-inside space-y-1 md:space-y-2">
                                          {contentItem.items.map((listItem, listIdx) => (
                                             <li key={listIdx}>{listItem}</li>
                                          ))}
                                       </ul>
                                    )}
                                 </div>
                              ))}
                           </AccordionContent>
                        </div>
                     </AccordionItem>
                  </div>
               );
            })}
         </Accordion>
      </MotionScrollInView>
   );
}
