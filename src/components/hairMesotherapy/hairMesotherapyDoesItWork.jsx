import Image from 'next/image'
import React from 'react'

export default function HairMesotherapyDoesItWork() {
    return (
        <main className='grid grid-cols-1 sm:grid-cols-2 w-full place-content-stretch place-items-stretch text-coffee-dark'>

            <article className='border-b border-r border-coffee-dark/15 flex flex-col gap-4 lg:gap-6 pt-3 pb-5 sm:pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Will The", "Result Last?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>The results last, however we recommend regular maintenance treatments.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>

            <article className='border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-6 pt-3 pb-5 sm:pl-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["What Are The Results", "Of Capillary Mesotherapy?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>

                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>Capillary mesotherapy stops hair loss. The quality of the hair will improve dramatically.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
            <article className='w-full col-span-1 sm:col-span-2 flex flex-col items-start gap-2.5 sm:gap-3.5 mt-5'>
                <h4 className='font-bold text-base lg:text-[20px]'>Why Choose Capillary Mesotherapy?</h4>
                <p className='w-full max-w-190 text-sm lg:text-base'>It gives progressive results and is very effective It is safe, with no side effects. It requires little or no post-treatment recovery time (redness caused by micro injections can last for up to a day).</p>
            </article>
        </main>
    )
}
