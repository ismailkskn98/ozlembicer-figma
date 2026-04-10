'use client';

import React, { useEffect, useRef, useState } from 'react';
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

function MobileContent({ isOpen, children }) {
   const contentRef = useRef(null);
   const [height, setHeight] = useState(0);

   useEffect(() => {
      if (contentRef.current) {
         if (isOpen) {
            setHeight(contentRef.current.scrollHeight);
         } else {
            setHeight(0);
         }
      }
   }, [isOpen, children]);

   return (
      <div
         style={{
            height: height + 'px',
            overflow: 'hidden',
            transition: 'height 300ms ease',
         }}
         className="md:hidden"
      >
         <div ref={contentRef}>{children}</div>
      </div>
   );
}

export default function DeneyTitleImage() {
   const [selectedItem, setSelectedItem] = useState('');
   const [isDesktop, setIsDesktop] = useState(false);

   useEffect(() => {
      function handleResize() {
         const desktop = window.innerWidth >= 768;
         setIsDesktop(desktop);

         if (desktop) {
            setSelectedItem((prev) => prev || 'hair-transplant');
         }
      }

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   function handleItemClick(value) {
      setSelectedItem((prev) => {
         if (prev === value) {
            return '';
         }
         return value;
      });
   }

   return (
      <main className="w-full max-w-full xl:max-w-6xl mx-auto rounded-4xl lg:mb-10 mt-0 lg:mt-10 overflow-hidden">
         <div className="w-full flex flex-col md:flex-row min-h-[70vh] md:min-h-min md:h-150 items-stretch gap-0">
            {titleItemsData.map((item) => {
               const isOpen = selectedItem === item.value;

               return (
                  <div
                     key={item.value}
                     className={cn('relative w-full overflow-hidden flex', 'md:w-auto md:h-full md:transition-all md:duration-300 md:ease-in-out', isOpen ? 'md:flex-7' : 'md:flex-1')}
                  >
                     <div className="relative h-full flex-1 flex flex-col w-full overflow-hidden">
                        <div className="absolute inset-0 z-0">
                           <Image src={item.image} alt={item.title} fill className="object-cover" sizes="100vw" priority={item.value === 'hair-transplant'} />
                        </div>

                        {!isOpen && (
                           <button type="button" onClick={() => handleItemClick(item.value)} className="relative z-20 w-full min-h-15 md:h-full p-0 text-left">
                              <div className="h-full w-full flex items-start md:items-end justify-center md:pb-10 cursor-pointer">
                                 <div className="absolute inset-0 flex flex-row md:flex-col items-center justify-between gap-4 md:gap-0 px-4 md:px-0 py-4 md:py-6 bg-coffee-dark/80 hover:bg-coffee-dark/50 transition-all duration-200">
                                    <h2 className="text-ivory-soft text-base md:text-lg font-medium tracking-wider whitespace-nowrap md:[writing-mode:vertical-rl]">{item.title}</h2>

                                    <Image src={item.icon} alt={item.title} width={32} height={32} className="object-contain h-11 w-11 object-center" />
                                 </div>
                              </div>
                           </button>
                        )}

                        <MobileContent isOpen={isOpen}>
                           <div className="relative z-20 pt-4 sm:pt-6 pb-4 sm:pb-6 px-4 sm:px-6">
                              <div className="absolute inset-0 z-10 bg-coffee-dark/55" />

                              <div className="relative z-20">
                                 <button type="button" onClick={() => handleItemClick(item.value)} className="mb-4 text-ivory-soft text-sm underline">
                                    Close
                                 </button>

                                 <h2 className="text-[20px] text-ivory-soft font-semibold mb-3.5">{item.title}</h2>

                                 <h3 className="text-base text-ivory-soft mb-2.5">{item.content.title}</h3>

                                 {item.content.items.map((contentItem, idx) => (
                                    <div key={idx} className="relative z-20">
                                       {contentItem.type === 'paragraph' && <p className="text-ivory-soft/90 text-sm sm:text-base mb-4 leading-relaxed">{contentItem.text}</p>}

                                       {contentItem.type === 'list' && (
                                          <ul className="text-ivory-soft/90 text-sm sm:text-base mb-2 list-disc list-inside space-y-1">
                                             {contentItem.items.map((listItem, listIdx) => (
                                                <li key={listIdx}>{listItem}</li>
                                             ))}
                                          </ul>
                                       )}
                                    </div>
                                 ))}
                              </div>
                           </div>
                        </MobileContent>

                        {isDesktop && isOpen && (
                           <div className="absolute inset-0 z-20 pt-10 pb-10 px-8">
                              <button type="button" onClick={() => handleItemClick(item.value)} className="absolute inset-0" />

                              <div className="absolute inset-0 z-10 bg-coffee-dark/55" />

                              <div className="relative z-20">
                                 <h2 className="text-[20px] md:text-2xl 2xl:text-3xl text-ivory-soft font-semibold mb-3.5 md:mb-6">{item.title}</h2>

                                 <h3 className="text-base md:text-lg 3xl:text-xl text-ivory-soft mb-2.5 md:mb-4">{item.content.title}</h3>

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
                              </div>
                           </div>
                        )}
                     </div>
                  </div>
               );
            })}
         </div>
      </main>
   );
}
