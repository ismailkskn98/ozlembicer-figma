import Image from 'next/image'
import React from 'react'

export default function StampCellTreatmentDoesItWork() {

    return (
        <main className='grid grid-cols-1 sm:grid-cols-2 w-full place-content-stretch place-items-stretch text-coffee-dark'>
            <article className='border-r-0 sm:border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Benefits of", "Stem Cell Therapy for Hair Loss"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>Stem cell–based treatments offer multiple biological benefits for both transplanted and existing hair:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Improves scalp vascularization and oxygenation</li>
                        <li>Stimulates follicular regeneration and repair</li>
                        <li>Prolongs the anagen (growth) phase of hair</li>
                        <li>Reduces hair shedding</li>
                        <li>Increases hair thickness and quality</li>
                        <li>Supports faster healing after hair transplantation</li>
                        <li>Enhances graft survival and overall transplant outcomes</li>
                        <li>Uses the patient’s own biological material, minimizing allergy risk</li>
                    </ul>
                    <p>Stem cell therapy is considered a biological booster, not a replacement for hair transplantation in advanced baldness.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
            <article className='border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["How Does", "Stem Cell Therapy Work?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>Stem cells release a wide range of growth factors, cytokines, and signaling molecules that influence hair follicle activity. When applied to the scalp, these bioactive substances:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Activate hair follicle stem cells</li>
                        <li>Stimulate dermal papilla cells</li>
                        <li>Increase collagen and extracellular matrix production</li>
                        <li>Improve blood supply around hair follicles</li>
                        <li>Support tissue repair and reduce inflammation</li>
                    </ul>
                    <p>In hair transplantation, stem cell therapy helps create a healthier scalp environment, which is critical for long-term hair growth and graft survival.:</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>

            <article className='border-r-0 sm:border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["How Is Stem Cell", "Therapy Performed?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>

                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>The procedure generally includes the following steps:</p>
                    <ul className='list-decimal list-outside pl-5'>
                        <li className='font-bold'>Harvesting</li>
                        <p className='mb-2'>A small amount of tissue (commonly adipose tissue or stem cell–rich follicular material) is collected under sterile conditions.</p>
                        <li className='font-bold'>Processing</li>
                        <p className='mb-2'>The sample is processed to isolate stem cell–rich fractions or regenerative cellular components.</p>
                        <li className='font-bold'>Application</li>
                        <p className='mb-2'>The prepared solution is applied or injected into targeted scalp areas or used during hair transplantation to support grafts and recipient tissue.</p>
                    </ul>
                    <p>The procedure is minimally invasive and performed under medical supervision.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
            <article className='border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["How Long", "Stem Cell Last?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>Stem cell therapy provides long-term biological support, but results are not permanent because hair loss is often progressive and genetically driven.</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Initial improvement is typically observed within 3–6 months</li>
                        <li>Results may last 12–24 months</li>
                        <li>
                            <p>Maintenance sessions may be recommended depending on:</p>
                            <ul className='list-disc list-outside pl-5'>
                                <li>Hair loss type</li>
                                <li>Genetic predisposition</li>
                                <li>Combination with medical treatments</li>
                            </ul>
                        </li>
                    </ul>
                    <p>A personalized follow-up plan is essential.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>

            <article className='border-b sm:border-b-0 border-r-0 sm:border-r border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 lg:pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Who Is a Good Candidate for", "Stem Cell Hair Therapy?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>Stem cell therapy is most suitable for patients who:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Have early to moderate hair thinning</li>
                        <li>Want to slow down hair loss</li>
                        <li>Wish to strengthen existing hair</li>
                        <li>Are planning a hair transplant and want to optimize results</li>
                        <li>Have undergone hair transplantation and want additional support</li>
                        <li>Prefer biological and regenerative treatments</li>
                    </ul>
                    <p>It is not effective as a standalone solution for completely bald areas with no viable follicles.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
            <article className='flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4 text-sm lg:text-base'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Can Stem Cell Therapy Be Combined ", "with Hair Transplantation?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <p>Yes. Stem cell therapy is frequently used:</p>
                <ul className='list-disc list-outside pl-5'>
                    <li>Before surgery to improve scalp condition</li>
                    <li>During surgery to support graft survival</li>
                    <li>After surgery to accelerate healing and enhance growth</li>
                    <li>Alongside PRP or medical treatments for synergistic effects</li>
                </ul>
                <p>This combined approach helps achieve more natural, durable, and higher-quality results.</p>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>

        </main>
    )
}
