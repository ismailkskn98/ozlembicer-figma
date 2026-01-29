import React from 'react'
import Image from 'next/image'

export default function HowDoesItWorkRecon() {
    return (
        <main className='w-full max-w-6xl mx-auto gap-6 grid grid-cols-3'>
            <section className='flex flex-col items-start gap-2.5 sticky top-0 h-full'>
                <Image src="/images/hair-transplant/howwork.png" alt="how does it work" width={600} height={800} className='object-contain h-70 w-full sticky top-0' />
                <Image src="/images/hair-transplant/howwork.png" alt="how does it work" width={600} height={800} className='object-contain h-70 w-full sticky top-0' />
                <Image src="/images/hair-transplant/howwork.png" alt="how does it work" width={600} height={800} className='object-contain h-70 w-full sticky top-0' />
                <Image src="/images/hair-transplant/howwork.png" alt="how does it work" width={600} height={800} className='object-contain h-70 w-full sticky top-0' />
                <Image src="/images/hair-transplant/howwork.png" alt="how does it work" width={600} height={800} className='object-contain h-70 w-full sticky top-0' />
            </section>
            <section className='col-span-2 w-full flex flex-col items-start gap-6'>
                <article className='w-full flex flex-col items-start gap-9'>
                    <h3 className='text-[20px] font-bold text-coffee-dark max-w-80 line-clamp-2'>Who Needs Reconstructive Hair Transplantation?</h3>
                    <div className='w-full flex flex-col items-start gap-4 text-coffee-dark'>
                        <p>
                            Reconstructive hair transplantation may be recommended for patients who experience:
                        </p>
                        <ul className='leading-relaxed list-disc list-outside pl-5'>
                            <li>Unnatural or poorly designed hairlines</li>
                            <li>Visible scarring from previous hair transplant procedures (FUE or FUT)</li>
                            <li>Asymmetry or incorrect hair direction</li>
                            <li>Low or uneven hair density</li>
                            <li>Hair loss due to burns, accidents, surgery, or trauma</li>
                            <li>Scarring alopecia or certain medical conditions</li>
                            <li>Failed or unsatisfactory results from previous hair transplants</li>
                        </ul>
                        <p>Each reconstructive case is unique and requires an individualized treatment plan.</p>
                    </div>
                </article>
                <main className='grid grid-cols-2 w-full border-t border-coffee-dark/15 place-content-stretch place-items-stretch text-coffee-dark'>
                    <article className='border-r border-b border-coffee-dark/15 flex flex-col gap-9 py-5 pr-4'>
                        <h4 className='font-bold text-[20px] max-w-50 line-clamp-2'>Hairline Reconstruction</h4>
                        <div className='w-full flex flex-col items-start gap-4 text-coffee-dark'>
                            <p>Hairline reconstruction focuses on correcting:</p>
                            <ul className='leading-relaxed list-disc list-outside pl-5'>
                                <li>Hairlines placed too low or too high</li>
                                <li>Excessive symmetry or unnatural straight lines</li>
                                <li>Incorrect angles or directions of implanted hair</li>
                            </ul>
                            <p>Natural hairlines require irregularity, proper angulation, and the exclusive use of single-hair grafts in the frontal zone.</p>
                        </div>
                    </article>
                    <article className='border-b border-coffee-dark/15 flex flex-col gap-9 py-5 pl-4'>
                        <h4 className='font-bold text-[20px] max-w-80 line-clamp-2'>Hair Transplant Repair (Corrective Hair Transplant)</h4>
                        <div className='w-full flex flex-col items-start gap-4 text-coffee-dark'>
                            <p>Corrective hair transplantation may include:</p>
                            <ul className='leading-relaxed list-disc list-outside pl-5'>
                                <li>Removal of poorly placed grafts</li>
                                <li>Re-implantation of extracted grafts</li>
                                <li>Redistribution of density for a more natural result</li>
                            </ul>
                            <p>In some cases, previously transplanted grafts can be safely removed and reused.</p>
                        </div>
                    </article>

                    <article className='border-r border-b border-coffee-dark/15 flex flex-col gap-9 py-5 pr-4'>
                        <h4 className='font-bold text-[20px] max-w-80 line-clamp-2'>Scar Revision & Hair Transplant into Scars</h4>
                        <div className='w-full flex flex-col items-start gap-4 text-coffee-dark'>
                            <p>Hair transplantation can be performed into:</p>
                            <ul className='leading-relaxed list-disc list-outside pl-5'>
                                <li>FUT linear scars</li>
                                <li>FUE dot scars</li>
                                <li>Scars caused by burns, trauma, or surgery</li>
                            </ul>
                            <p>Hair growth in scar tissue may be less predictable due to reduced blood supply, and careful evaluation is essential before treatment.</p>
                        </div>
                    </article>
                    <article className='border-b border-coffee-dark/15 flex flex-col gap-9 py-5 pl-4'>
                        <h4 className='font-bold text-[20px] max-w-80 line-clamp-2'>Body Hair Transplantationin Reconstructive Cases</h4>
                        <div className='w-full flex flex-col items-start gap-4 text-coffee-dark'>
                            <p>In patients with limited scalp donor hair, Body Hair Transplantation (BHT) may be used as a supportive technique.</p>
                            <ul className='leading-relaxed list-disc list-outside pl-5'>
                                <li>Beard hair is commonly preferred</li>
                                <li>Chest hair may be used selectively</li>
                                <li>Body hair behaves differently from scalp hair and must be mixed carefully</li>
                            </ul>
                        </div>
                    </article>

                    <article className='border-r border-coffee-dark/15 flex flex-col gap-9 py-5 pr-4'>
                        <h4 className='font-bold text-[20px] max-w-80 line-clamp-2'>How Is Reconstructive Hair Transplantation Performed?</h4>
                        <div className='w-full flex flex-col items-start gap-4 text-coffee-dark'>
                            <p>Reconstructive hair transplantation is usually performed using advanced FUE techniques.</p>
                            <p>Key steps include:</p>
                            <ul className='leading-relaxed list-disc list-outside pl-5'>
                                <li>Detailed analysis of facial proportions and existing hair patterns</li>
                                <li>Conservative hairline planning</li>
                                <li>Careful donor area assessment</li>
                                <li>Precision extraction and implantation</li>
                                <li>Attention to angle, direction, and density</li>
                            </ul>
                            <p>Multiple sessions may be required, depending on the complexity of the case.</p>
                        </div>
                    </article>
                </main>
            </section>
        </main>
    )
}
