import Image from 'next/image'
import React from 'react'

export default function HowDoesItWorkFut() {
    return (
        <main className='grid grid-cols-1 sm:grid-cols-2 w-full border-t border-coffee-dark/15 place-content-stretch place-items-stretch text-coffee-dark'>
            <article className='border-r-0 sm:border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["FUT", "Hair Transplantation"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>Although there is extensive information available online about FUT and FUE techniques, many patients are not fully aware of how these procedures are actually performed.</p>
                    <p>In FUT, once the donor strip is removed, it is dissected under a microscope into very fine follicular units. The donor area is then carefully sutured, which results in a linear scar.</p>
                    <p>Dr. Özlem Biçer uses meticulous suturing techniques to ensure that the scar remains as thin and discreet as possible.</p>
                    <p>The primary goal of FUT is to transfer hair from the most stable donor zone to areas where hair loss is most pronounced.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
            <article className='border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Local", "Anesthesia"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>For patient comfort, local anesthesia is administered to the donor and recipient areas.</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>A mild burning sensation may be felt during the first 5 minutes</li>
                        <li>The procedure itself is painless, and patients typically do not experience discomfort during or after surgery</li>
                    </ul>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>

            <article className='border-r-0 sm:border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Donor Tissue", "(Strip Harvesting)"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>

                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>The surgeon performs a precise horizontal incision to remove a strip of scalp containing healthy hair follicles from the donor area.</p>
                    <p>Correct donor area selection is essential, as long-term hair growth depends on harvesting follicles from the genetically stable zone.</p>
                    <p>To achieve a finer scar, Dr. Özlem Biçer uses the trichophytic closure technique, which allows hair to grow through the scar and helps make it less visible.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
            <article className='border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Preparation of", "the Recipient Area"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>The recipient area is one of the most critical stages, as it determines the final aesthetic outcome.</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Microscopic incisions are created using fine blades</li>
                        <li>Hair direction and angle are carefully planned</li>
                        <li>Different blade sizes are used according to graft size</li>
                    </ul>
                    <p>To achieve a natural appearance, the surgeon ensures that transplanted hair follows the patient’s natural growth pattern.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>

            <article className='border-r-0 sm:border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Graft Dissection", "& Preparation"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>

                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>The harvested strip is first divided into thin sections called “slivers.” Excess tissue is removed from these slivers, and individual follicular units are carefully separated.</p>
                    <p>Each graft is prepared individually to ensure minimal trauma and optimal survival.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
            <article className='border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Preservation of", "Donor Tissue"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>Once the strip is removed, it is placed in the patient’s own Platelet-Rich Plasma (PRP).</p>
                    <p>PRP may help maintain graft hydration and viability during preparation, while also allowing time for careful closure of the donor wound.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>

            <article className='border-r-0 sm:border-r border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Transplantation & Completion", "of the Procedure"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>

                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>Once the recipient sites are prepared, the follicular units are implanted into the incisions.<br />At the end of the procedure:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Each graft is checked individually</li>
                        <li>Postoperative care instructions are explained in detail</li>
                        <li>Patients receive a printed aftercare guide</li>
                    </ul>
                    <p>A headband or medical cap may be used to protect the treated area.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
            <article className=' flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Important Information", "About FUT Hair Transplantation"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>FUT Scarn</p>
                    <p>After FUT, a linear scar will remain in the donor area.</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>The scar heals over time and is usually thin and discreet</li>
                        <li>In most patients, the scar is concealed once the hair reaches a certain length</li>
                        <li>If the hair is shaved very short, the scar may become visible</li>
                    </ul>
                    <p>The visibility of the scar largely depends on surgical technique, scalp characteristics, and healing response.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
        </main>
    )
}
