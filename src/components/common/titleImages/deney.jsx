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
         title: 'Hair Transplantation',
         items: [
            {
               type: 'paragraph',
               text: 'At Dr. Biçer’s clinic, all hair transplantation procedures are personally performed by Dr. Biçer, ensuring each patient is evaluated objectively and treated with a fully tailored approach. Hair transplantation is not a cure, but a highly effective way to restore a natural appearance and confidence when carefully planned. Using advanced techniques such as FUE, patients benefit from minimally invasive treatment and faster recovery. However, the right solution depends on individual factors and requires expert assessment—discover what is best suited for you.',
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
         title: 'Beard Transplantation',
         items: [
            {
               type: 'paragraph',
               text: 'At Dr. Özlem Biçer’s clinic, beard transplantation is personally performed with her experienced medical team, ensuring a precise and individualized approach for each patient. This specialized procedure is designed to enhance beard density, improve shape and symmetry, and address patchy growth or hair loss caused by scarring or medical conditions. As facial hair transplantation requires advanced surgical expertise and refined aesthetic planning, every detail is carefully considered to achieve natural and balanced results. Discover how this tailored approach can redefine your facial appearance.',
            },
         ],
      },
   },
   {
      value: 'eyebrow-transplant',
      title: 'Eyebrow Transplantation',
      image: '/images/home-accordion/eyebrow-transplant.webp',
      icon: '/images/hair-transplant/eyebrow.svg',
      content: {
         title: 'Eyebrow Transplantation',
         items: [
            {
               type: 'paragraph',
               text: 'At Dr. Özlem Biçer’s clinic, eyebrow transplantation is personally performed with a meticulous and individualized approach, recognizing the essential role eyebrows play in facial expression and overall aesthetics. This procedure is designed to restore natural shape and density, whether due to long-term over-plucking, traction damage, or naturally sparse or absent brows. Using the long hair FUE technique and carefully selected fine donor hairs, each graft is placed with precise angle and direction to achieve soft, natural, and harmonious results. Discover how a tailored approach can restore balance and definition to your face.',
            },
         ],
      },
   },
   {
      value: 'female-hair-transplant',
      title: 'Female Hair Transplantation',
      image: '/images/home-accordion/female-hair-transplant.webp',
      icon: '/images/hair-transplant/female-hair.svg',
      content: {
         title: 'Female Hair Transplantation',
         items: [
            {
               type: 'paragraph',
               text: 'At Dr. Özlem Biçer’s clinic, female hair transplantation is personally performed with a sensitive and individualized approach, recognizing the significant emotional and aesthetic impact of hair loss in women. As hair loss can arise from different causes—such as androgenetic alopecia, telogen effluvium, or other conditions—each patient undergoes a detailed evaluation to determine the most appropriate treatment. When transplantation is indicated, techniques without full shaving are preferred to maintain discretion and comfort. Discover a tailored solution designed to restore both your hair and confidence.',
            },
         ],
      },
   },
];

function MobileContent({ isOpen, onClick, children }) {
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
            transition: 'height 100ms ease',
         }}
         className="md:hidden"
         onClick={isOpen ? onClick : undefined}
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
         <div className="w-full flex flex-col md:flex-row md:h-150 items-stretch gap-0">
            {titleItemsData.map((item) => {
               const isOpen = selectedItem === item.value;

               return (
                  <div
                     key={item.value}
                     className={cn(
                        'relative w-full overflow-hidden flex transition-all duration-300 ease-in-out min-h-[17.5vh]',
                        'md:min-h-0 md:w-auto md:h-full',
                        isOpen ? 'md:flex-7' : 'md:flex-1',
                     )}
                  >
                     <div className="relative min-h-[17.5vh] h-full flex-1 flex flex-col w-full overflow-hidden">
                        <div className="absolute inset-0 z-0">
                           <Image src={item.image} alt={item.title} fill className="object-cover" sizes="100vw" priority={item.value === 'hair-transplant'} />
                        </div>

                        {!isOpen && (
                           <button type="button" onClick={() => handleItemClick(item.value)} className="absolute inset-x-0 top-0 h-[17.5vh] z-20 w-full md:inset-0 md:h-full p-0 text-left">
                              <div className="relative h-full w-full flex items-start md:items-end justify-center md:pb-10 cursor-pointer">
                                 <div
                                    className={cn(
                                       'absolute inset-0 flex flex-row md:flex-col items-center justify-between gap-4 md:gap-0 px-6 md:px-0 py-4 md:py-6 transition-all duration-200 bg-coffee-dark/30 md:bg-coffee-dark/80 hover:bg-coffee-dark/30 md:hover:bg-coffee-dark/50',
                                    )}
                                 >
                                    <h2 className="text-ivory-soft text-base md:text-lg font-medium tracking-wider whitespace-nowrap md:[writing-mode:vertical-rl]">{item.title}</h2>
                                    <Image src={item.icon} alt={item.title} width={32} height={32} className="object-contain h-11 w-11 object-center" />
                                 </div>
                              </div>
                           </button>
                        )}

                        <MobileContent isOpen={isOpen} onClick={() => handleItemClick(item.value)}>
                           <div className="absolute inset-0 z-10 bg-coffee-dark/85" />
                           <div className="relative z-20 p-6">
                              <div className="relative z-20">
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
