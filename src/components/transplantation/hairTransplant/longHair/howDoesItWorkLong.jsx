import Image from 'next/image'
import React from 'react'

export default function HowDoesItWorkLong() {
    return (
        <main className='grid grid-cols-1 sm:grid-cols-2 w-full border-t border-coffee-dark/15 place-content-stretch place-items-stretch text-coffee-dark'>
            <article className='border-r-0 sm:border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Advantages of", "Long Hair Transplantation"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>This technique offers significant benefits for patients who do not want their hair to be shaved, particularly those with an active social or professional life. Long hair transplantation allows patients to undergo the procedure without obvious visual signs of surgery, making it ideal for individuals who prefer to keep their treatment private during the healing period.</p>
                    <p>It is also an excellent option for female patients who wish to preserve their long hair and avoid shaving, while still benefiting from a highly precise and natural-looking hair restoration procedure.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
            <article className='border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Disadvantages of", "Long Hair Transplantation"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>Long hair transplantation is a technically demanding and relatively new technique, and its success is closely related to the experience and learning curve of each clinic and surgical team. Because the procedure is more complex, the number of grafts that can be extracted in a single session is usually lower compared to shaved FUE. For patients who require 3,000 grafts or more, the surgery may need to be divided into multiple sessions or days.</p>
                    <p>In addition, long hair transplantation is more time-consuming and requires specialized instruments and expertise, which makes the cost higher than conventional shaved techniques. Postoperative care can also be more challenging for the patient, as managing and cleaning long hair during the healing phase requires extra attention.</p>
                    <p>It is important for patients to understand that although long hairs are transplanted, these hairs will shed within the first month, similar to standard hair transplantation. New, permanent hair growth typically begins around three months after the procedure, following the natural hair growth cycle.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>

            <article className='border-r-0 sm:border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Recovery", "& Results"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>

                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Mild redness and swelling are common for a few days</li>
                        <li>Temporary shedding of transplanted hair may occur</li>
                        <li>New hair growth typically begins after 3–4 months</li>
                        <li>Final results are usually evaluated after 12 months</li>
                    </ul>
                    <p>Healing time may vary depending on scar tissue and previous procedures.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
            <article className='sm:border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Why Choose", "Long Hair Transplantation?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Personalized surgical planning</li>
                        <li>Correction of unnatural results</li>
                        <li>Improved facial harmony</li>
                        <li>Restoration of confidence</li>
                        <li>Advanced techniques tailored to complex cases</li>
                    </ul>
                    <p>Reconstructive hair transplantation requires significantly more expertise than standard hair transplantation.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
        </main>
    )
}
