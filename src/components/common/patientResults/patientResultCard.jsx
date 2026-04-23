import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

export default function PatientResultCard({ item, index, large = false }) {
   return (
      <section
         className={`bg-linear-to-b from-stone-beige to-ivory-soft
            rounded-[10px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]
            transition-all duration-300 ${large ? 'p-4 md:p-5 w-full max-w-205' : 'p-2.5 w-full aspect-300/340'}`}
      >
         <div className={`w-full h-full flex flex-col items-center justify-between rounded-[10px] ${large ? 'gap-4 md:gap-6' : 'gap-2 sm:gap-5'}`}>
            <div className={`relative w-full flex items-center gap-1.25 ${large ? 'aspect-auto' : 'aspect-7/6'}`}>
               <div className="relative w-full aspect-137/240 rounded-[5px] overflow-hidden">
                  <Image src={item.beforeImage} alt={`Patient before ${index + 1}`} fill className="w-full h-full object-cover object-center rounded-[5px]" />
               </div>
               <div className="relative w-full aspect-137/240 rounded-[5px] overflow-hidden">
                  <Image
                     src={item.afterImage}
                     alt={`Patient after ${index + 1}`}
                     fill
                     sizes="(max-width: 640px) 150px, (max-width: 900px) 200px, 250px"
                     className="w-full h-full object-cover object-center rounded-[5px]"
                  />
               </div>
               {item.videoId && (
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100 ">
                     <div className="bg-stone-beige/50 flex size-14 items-center justify-center rounded-full">
                        <Play className="size-5 scale-110 stroke-ivory-soft transition-transform duration-200 ease-out group-hover:scale-115" />
                     </div>
                  </div>
               )}
            </div>

            <article
               className={`
                  w-full grid grid-cols-3 place-content-stretch justify-items-stretch
                  bg-coffee-dark text-ivory-soft rounded-[5px]
                  ${large ? 'px-4 py-3 min-h-96px' : 'px-2.5 min-h-15 max-h-15'}
               `}
            >
               <div className="relative flex flex-col items-center justify-center text-center gap-px">
                  <h5 className={`font-bold ${large ? 'text-sm md:text-base' : 'text-[10px]'}`}>TECHNIQUE</h5>
                  <Image src="/images/heroCard-line.webp" alt="line" width={60} height={5} className={`h-fit object-contain object-center ${large ? 'w-16' : 'w-12.75'}`} />
                  <p className={large ? 'text-xs md:text-sm' : 'text-[10px]'}>
                     {item.technique1}
                     <br />
                     {item.technique2}
                  </p>
                  {!large && (
                     <Image
                        src="/images/heroCard-line.webp"
                        alt="line"
                        width={50}
                        height={5}
                        className="absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 -rotate-90 object-contain object-center w-10.5 h-4"
                     />
                  )}
               </div>

               <div className="relative flex flex-col items-center justify-center text-center gap-px">
                  <h5 className={`font-bold ${large ? 'text-sm md:text-base' : 'text-[10px]'}`}>GRAFTS</h5>
                  <Image src="/images/heroCard-line.webp" alt="line" width={60} height={5} className={`h-fit object-contain object-center ${large ? 'w-16' : 'w-12.75'}`} />
                  <p className={large ? 'text-xs md:text-sm' : 'text-[10px]'}>{item.grafts}</p>
                  {!large && (
                     <Image
                        src="/images/heroCard-line.webp"
                        alt="line"
                        width={50}
                        height={5}
                        className="absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 -rotate-90 object-contain object-center w-10.5 h-4"
                     />
                  )}
               </div>

               <div className="relative flex flex-col items-center justify-center text-center gap-px">
                  <h5 className={`font-bold ${large ? 'text-sm md:text-base' : 'text-[10px]'}`}>AFTER</h5>
                  <Image src="/images/heroCard-line.webp" alt="line" width={60} height={5} className={`h-fit object-contain object-center ${large ? 'w-16' : 'w-12.75'}`} />
                  <p className={large ? 'text-xs md:text-sm' : 'text-[10px]'}>{item.afterMonths}</p>
               </div>
            </article>
         </div>
      </section>
   );
}
