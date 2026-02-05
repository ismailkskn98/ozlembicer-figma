import React from 'react'

export default function FueDoesItWorkFAQs() {
    return (
        <main className='grid grid-cols-1 sm:grid-cols-2 w-full border-t border-coffee-dark/15 place-content-stretch place-items-stretch text-coffee-dark'>
            <article className='border-r-0 sm:border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Is FUE Hair Transplant", "Permanent?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>FUE differs from the traditional strip {"(FUT)"} technique by transplanting individual follicular units rather than removing a strip of scalp.</p>
                    <p>The donor hairs are taken from areas that are genetically more resistant to hair loss.For this reason, transplanted hair follicles usually continue to grow permanently in their new location.</p>
                    <p>However, non-transplanted native hair may continue to thin over time, depending on genetic factors and the progression of hair loss.</p>
                </div>
            </article>
            <article className='border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Will There Be", "Scarring After FUE?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>FUE involves creating tiny incisions in both the donor and recipient areas.</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Scars are usually not noticeable to the untrained eye</li>
                        <li>Donor-area marks are typically hidden by surrounding hair</li>
                        <li>If the hair is shaved very short, small dot scars may become visible, which is a known and normal characteristic of the FUE technique</li>
                    </ul>
                </div>
            </article>

            <article className='border-r-0 sm:border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["How Long Does an", "FUE Hair Transplant Take?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>

                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>An FUE hair transplant procedure typically lasts between 3 and 8 hours, depending on:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>The number of grafts required</li>
                        <li>Hair thickness and density</li>
                        <li>Individual scalp characteristics</li>
                    </ul>
                    <p>Hair Growth Timeline After FUE</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>First shedding: 2–6 weeks (normal and temporary)</li>
                        <li>New hair growth begins: around 3–4 months</li>
                        <li>Noticeable improvement: 6–9 months</li>
                        <li>Final results: after 12 months</li>
                    </ul>
                    <p>Not all transplanted follicles grow at the same time, as some remain temporarily in the resting (telogen) phase. Overall graft survival rates of up to 90–95% are commonly reported under optimal conditions.</p>
                </div>
            </article>
            <article className='border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Graft Preservation", "& Implantation"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>After extraction, the hair follicles are carefully stored in sterile containers. In some cases, grafts may be preserved in a solution enriched with the patient’s own Platelet-Rich Plasma (PRP), which may help support graft survival.</p>
                    <p>Once the extraction phase is completed, microscopic channels are created in the recipient area. Each follicular unit is then implanted individually.</p>
                    <p>The angle, direction, and depth of each graft are carefully planned to match natural hair growth, especially in the hairline area, to achieve a natural and aesthetically pleasing result.</p>
                </div>
            </article>

            <article className='border-r-0 sm:border-r border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 lg:pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Is FUE Hair Transplant", "Painful?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>FUE hair transplantation is generally well tolerated and minimally painful.</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Mild discomfort may be felt during the first few minutes of local anesthesia</li>
                        <li>The procedure itself is painless</li>
                        <li>Patients may feel tired from sitting for several hours, but regular breaks are provided</li>
                    </ul>
                    <p>Patients can usually:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Watch TV</li>
                        <li>Listen to music</li>
                        <li>Relax during the procedure</li>
                    </ul>
                    <p>After the operation, mild pain, tightness, or sensitivity may occur, which is usually manageable with standard painkillers for a few days.</p>
                </div>
            </article>
            <article className='flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4 text-sm lg:text-base'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Why Choose", "FUE Hair Transplant?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-0.5 text-coffee-dark'>
                    <p>Minimally invasive technique</p>
                    <p>No linear scar</p>
                    <p>Natural-looking results</p>
                    <p>Short recovery time</p>
                    <p>Suitable for men and women</p>
                </div>
            </article>
        </main>
    )
}   
