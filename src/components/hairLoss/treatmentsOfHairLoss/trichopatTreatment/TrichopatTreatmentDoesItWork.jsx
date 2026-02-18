import Image from 'next/image'
import React from 'react'

export default function TrichopatTreatmentDoesItWork() {

    return (
        <main className='grid grid-cols-1 sm:grid-cols-2 w-full place-content-stretch place-items-stretch text-coffee-dark'>
            <article className='border-r-0 sm:border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["What Are the", "Benefits of TRICOPAT®?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>TRICOPAT® offers multiple clinically proven benefits:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Reduces hair shedding</li>
                        <li>Increases hair density and hair shaft diameter</li>
                        <li>Improves scalp microcirculation and oxygenation</li>
                        <li>Stimulates cellular metabolism and follicle regeneration</li>
                        <li>Supports and prolongs the anagen (growth) phase of hair</li>
                        <li>Completely painless and needle-free</li>
                        <li>Suitable for both men and women</li>
                        <li>Can be used alone or as an adjunct to medical therapy or hair transplantation</li>
                    </ul>
                    <p>Clinical studies have shown significant improvement after only four sessions, with excellent patient satisfaction and no serious side effects reported.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
            <article className='border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["How Does", "TRICOPAT® Work?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>TRICOPAT® combines several advanced technologies in a single device:</p>
                    <ul className='list-decimal list-outside pl-5'>
                        <li>
                            <span>Controlled micro-dermal incision (Skin Patting®)</span>
                            <p>Creates very superficial microchannels (0.25 mm) that activate the skin without causing scarring or trauma to surrounding mechanisms without causing scarring.</p>
                        </li>
                        <li>
                            <span>Pressure waves</span>
                            <p>Trigger scalp microcirculation, tissue oxygenation, and cellular metabolism.</p>
                        </li>
                        <li>
                            <span>Iontophoresis</span>
                            <p>Uses a mild electrical current to deliver preformed growth factors deep into the hair follicles, increasing their effectiveness.</p>
                        </li>
                        <li>
                            <span>Electrostimulation and LED photo stimulation</span>
                            <p>Support fibroblast activation, collagen and elastin synthesis, and provide an anti-inflammatory effect.</p>
                        </li>
                    </ul>
                    <p>Together, these mechanisms allow growth factors to reach the follicle efficiently, resulting in reduced hair loss and stronger, thicker hair.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>

            <article className='border-r-0 sm:border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["How Many", "Sessions Are Needed?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>

                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>The standard TRICOPAT® protocol consists of:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>4 sessions</li>
                        <li>Performed once every 3 weeks</li>
                        <li>Each session lasts approximately 20–25 minutes</li>
                    </ul>
                    <p>This protocol has been shown to produce visible clinical and trichoscopic improvement in both men and women.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
            <article className='border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["How Long", "Do the Results Last?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>TRICOPAT® results are long-lasting but not permanent, as hair loss is often a progressive condition.</p>
                    <p>Most patients maintain their results with:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Periodic maintenance sessions, or</li>
                        <li>Combination with medical treatments (such as topical or oral therapies)</li>
                    </ul>
                    <p>Your physician will design a personalized maintenance plan based on your diagnosis and hair loss pattern.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>

            <article className='border-b sm:border-b-0 border-r-0 sm:border-r border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 lg:pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Who Is a Good", "Candidate for TRICOPAT®?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>TRICOPAT® is especially suitable for patients who:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Are in the early or moderate stages of hair loss</li>
                        <li>Experience telogen effluvium</li>
                        <li>Have androgenetic alopecia (male or female)</li>
                        <li>Want a non-invasive, injection-free treatment</li>
                        <li>Wish to enhance the results of medical therapy or hair transplantation</li>
                    </ul>
                    <p>A detailed medical and trichoscopic evaluation is essential to determine candidacy.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
            <article className='flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4 text-sm lg:text-base'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Can TRICOPAT® Be Combined", "with Hair Transplantation?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <p>Yes. TRICOPAT® can be used:</p>
                <ul className='list-disc list-outside pl-5'>
                    <li>Before hair transplantation to improve scalp quality</li>
                    <li>After hair transplantation to support healing and graft vitality</li>
                    <li>As a long-term supportive therapy to protect native hair</li>
                </ul>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>

        </main>
    )
}
