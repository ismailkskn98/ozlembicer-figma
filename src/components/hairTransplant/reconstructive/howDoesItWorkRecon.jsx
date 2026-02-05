import React from 'react'

export default function HowDoesItWorkRecon() {
    return (
        <main className='grid grid-cols-2 w-full border-t border-coffee-dark/15 place-content-stretch place-items-stretch text-coffee-dark'>
            <article className='border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Hairline", "Reconstruction"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>Hairline reconstruction focuses on correcting:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Hairlines placed too low or too high</li>
                        <li>Excessive symmetry or unnatural straight lines</li>
                        <li>Incorrect angles or directions of implanted hair</li>
                    </ul>
                    <p>Natural hairlines require irregularity, proper angulation, and the exclusive use of single-hair grafts in the frontal zone.</p>
                </div>
            </article>
            <article className='border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 pl-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Hair Transplant Repair", "(Corrective Hair Transplant)"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>Corrective hair transplantation may include:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Removal of poorly placed grafts</li>
                        <li>Re-implantation of extracted grafts</li>
                        <li>Redistribution of density for a more natural result</li>
                    </ul>
                    <p>In some cases, previously transplanted grafts can be safely removed and reused.</p>
                </div>
            </article>

            <article className='border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Scar Revision &", "Hair Transplant into Scars"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>Hair transplantation can be performed into:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>FUT linear scars</li>
                        <li>FUE dot scars</li>
                        <li>Scars caused by burns, trauma, or surgery</li>
                    </ul>
                    <p>Hair growth in scar tissue may be less predictable due to reduced blood supply, and careful evaluation is essential before treatment.</p>
                </div>
            </article>
            <article className='border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 pl-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Body Hair Transplantationin", "Reconstructive Cases"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>In patients with limited scalp donor hair, Body Hair Transplantation (BHT) may be used as a supportive technique.</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Beard hair is commonly preferred</li>
                        <li>Chest hair may be used selectively</li>
                        <li>Body hair behaves differently from scalp hair and must be mixed carefully</li>
                    </ul>
                </div>
            </article>

            <article className='border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["How Is Reconstructive Hair", "Transplantation Performed?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>Reconstructive hair transplantation is usually performed using advanced FUE techniques.</p>
                    <p>Key steps include:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Detailed analysis of facial proportions and existing hair patterns</li>
                        <li>Conservative hairline planning</li>
                        <li>Careful donor area assessment</li>
                        <li>Precision extraction and implantation</li>
                        <li>Attention to angle, direction, and density</li>
                    </ul>
                    <p>Multiple sessions may be required, depending on the complexity of the case.</p>
                </div>
            </article>
            <article className='border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 pl-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Is Reconstructive Hair", "Transplant Permanent?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>Reconstructive hair transplant results can be long-lasting and permanent when:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Donor hair quality is adequate</li>
                        <li>Grafts are implanted correctly</li>
                        <li>Underlying hair loss is properly managed</li>
                    </ul>
                    <p>However, expectations must be realistic, especially in cases involving scarring or multiple previous surgeries.</p>
                </div>
            </article>

            <article className='border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 pr-4'>
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
            </article>
            <article className='border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 pl-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Why Choose Reconstructive", "Hair Transplantation?"].map((text, index) => (
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
            </article>
            <article className='w-full col-span-2 flex flex-col items-start gap-3.5 mt-5'>
                <h4 className='font-bold text-[20px]'>Important Note for Patients</h4>
                <p className='w-full max-w-190'>Not every case can be fully corrected, especially when donor hair is limited or scar tissue is extensive. A detailed consultation is essential to determine realistic outcomes and the best treatment approach.</p>
            </article>
        </main>
    )
}
