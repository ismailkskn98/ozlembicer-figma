import React from 'react'
import CustomBreadCrumb from '../common/customBreadCrumb'
import BeardHero from './beardHero'
import HeroLogoCarousel from '../common/logoCarousel'
import HowToAppointment from '../common/howToAppointment'
import SectionWrapper from '../hairTransplant/common/sectionWrapper'
import HowDoesItWork from '../hairTransplant/common/howDoesItWork'

const linksItems = [
    { label: 'Hair Transplantation', href: '#' },
    { label: 'Follicular Unit Extraction (FUE)', href: '#' },
    { label: 'Follicular Unit Extraction (FUT)', href: '#' },
    { label: 'Body Hair Transplant (BHT)', href: '#' },
    { label: 'Woman Hair Transplantation', href: '#' },
]

export default function BeardTransplantationMain() {
    return (
        <main className='w-full fluid gridContainer bg-ivory-soft'>
            <CustomBreadCrumb links={linksItems} />
            <div className='fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft to-stone-beige/50'>
                <BeardHero />
                <HeroLogoCarousel />
                <main className='w-full fluid gridContainer border-y-2 border-gold bg-radial from-coffee-dark to-wine-brown'>
                    <SectionWrapper>
                        <HowDoesItWork
                            className="text-ivory-soft"
                            images={[
                                { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 1" },
                                { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 2" },
                                { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 3" },
                                { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 4" },
                                { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 5" },
                                { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 5" },
                                { src: "/images/hair-transplant/howwork.png", alt: "FUE Step 5" },
                            ]}
                            title="Who Is a Candidate for Beard Transplantation?"
                            content={[
                                { type: "paragraph", value: "Nearly half of all men experience uneven or patchy beard growth, often due to genetic factors. Beard transplantation may be a suitable solution for men who:" },
                                { type: "list", value: ["Cannot grow a full beard naturally", "Have thin or patchy areas", "Wish to define sharper beard contours", "Have facial scars from injury, burns, surgery, or acne"] },
                                { type: "paragraph", value: "Even mild facial hair loss can benefit from a beard transplant, depending on the patient’s expectations and facial structure." },
                            ]}
                        >
                            <main className='grid grid-cols-2 w-full border-t border-ivory-soft/15 place-content-stretch place-items-stretch text-ivory-soft'>
                                <article className='border-r border-b border-ivory-soft/15 flex flex-col gap-9 py-5 pr-4'>
                                    <h4 className='font-bold text-[20px] max-w-40 line-clamp-2'>Causes of Beard Hair Loss</h4>
                                    <div className='w-full flex flex-col items-start gap-4 text-ivory-soft'>
                                        <p>Beard hair loss or absence may result from:</p>
                                        <ul className='list-disc list-outside pl-5'>
                                            <li>Genetic factors</li>
                                            <li>Burns, scars, or skin injuries</li>
                                            <li>Previous surgical procedures</li>
                                            <li>Radiation therapy</li>
                                            <li>Certain systemic diseases</li>
                                            <li>Trichotillomania (a compulsive hair-pulling disorder)</li>
                                        </ul>
                                        <p>A detailed consultation is essential to determine the underlying cause and suitability for treatment.</p>
                                    </div>
                                </article>
                                <article className='border-b border-ivory-soft/15 flex flex-col gap-9 py-5 pl-4'>
                                    <h4 className='font-bold text-[20px] max-w-70 line-clamp-2'>How Does a Beard Transplant Work?</h4>
                                    <div className='w-full flex flex-col items-start gap-4 text-ivory-soft'>
                                        <p>Beard and mustache hairs naturally grow as single-hair follicular units, which is critical for achieving a natural appearance.</p>
                                        <p>Each follicle must be implanted individually, with precise attention to:</p>
                                        <ul className='list-disc list-outside pl-5'>
                                            <li>Direction</li>
                                            <li>Angle</li>
                                            <li>Depth</li>
                                            <li>Spacing</li>
                                        </ul>
                                        <p>This meticulous approach ensures that the transplanted beard blends seamlessly with existing facial hair.</p>
                                        <p>Approximate Graft Requirements</p>
                                        <ul className='list-disc list-outside pl-5'>
                                            <li>1,200–1,500 grafts for a goatee</li>
                                            <li>2,500–3,000 grafts for a full beard</li>
                                        </ul>
                                        <p>The exact number of grafts varies depending on facial structure, desired density, and existing hair.</p>
                                    </div>
                                </article>

                                <article className='border-r border-b border-ivory-soft/15 flex flex-col gap-9 py-5 pr-4'>
                                    <h4 className='font-bold text-[20px] max-w-60 line-clamp-2'>Beard Transplantation Methods</h4>
                                    <div className='w-full flex flex-col items-start gap-4 text-ivory-soft'>
                                        <p>The donor hair is typically harvested from the scalp, as scalp hair follicles are genetically programmed to grow long-term even after being transplanted to the beard area.</p>
                                    </div>
                                </article>
                                <article className='border-b border-ivory-soft/15 flex flex-col gap-9 py-5 pl-4'>
                                    <h4 className='font-bold text-[20px] max-w-40 line-clamp-2'>FUE & FUT Techniques</h4>
                                    <div className='w-full flex flex-col items-start gap-4 text-ivory-soft'>
                                        <p>Beard transplantation can be performed using either FUE (Follicular Unit Extraction) or FUT (Follicular Unit Transplantation), depending on the patient’s donor area, graft requirements, and surgical plan.</p>
                                        <ul className='list-disc list-outside pl-5'>
                                            <li>FUE involves the individual extraction of hair follicles using micro punches</li>
                                            <li>FUT involves removing a thin strip of scalp, followed by microscopic graft preparation</li>
                                        </ul>
                                        <p>After extraction, grafts are carefully cleaned, refined, and prepared for implantation into the beard area.</p>
                                    </div>
                                </article>

                                <article className='border-b border-r border-ivory-soft/15 flex flex-col gap-9 py-5 pr-4'>
                                    <h4 className='font-bold text-[20px] max-w-40 line-clamp-2'>Results & Permanence</h4>
                                    <div className='w-full flex flex-col items-start gap-4 text-ivory-soft'>
                                        <p>A beard transplant provides long-lasting and permanent results, as transplanted scalp hair follicles continue to grow in their new location.</p>
                                        <ul className='list-disc list-outside pl-5'>
                                            <li>Initial healing occurs within days</li>
                                            <li>Temporary shedding may occur within the first few weeks</li>
                                            <li>New growth typically begins after 3–4 months</li>
                                            <li>Final results are usually evaluated after 9–12 months</li>
                                        </ul>
                                        <p>An immediate visual improvement may be noticeable after the procedure, but full maturation takes time.</p>
                                    </div>
                                </article>
                                <article className='border-b border-ivory-soft/15 flex flex-col gap-9 py-5 pl-4'>
                                    <h4 className='font-bold text-[20px] max-w-40 line-clamp-2'>Beard Transplant Cost</h4>
                                    <div className='w-full flex flex-col items-start gap-0.5 text-ivory-soft'>
                                        <p>The cost of a beard transplant varies depending on:</p>
                                        <ul className='list-disc list-outside pl-5'>
                                            <li>The size of the treatment area</li>
                                            <li>The number of grafts required</li>
                                            <li>The technique used</li>
                                        </ul>
                                        <p>Prices generally range between USD 2,500 and USD 4,500, but an exact cost can only be determined after a personalizedn consultation.</p>
                                        <p>For a personalized evaluation, you may contact us via email or WhatsApp to arrange a free consultation with Dr. Özlem Biçer.</p>
                                    </div>
                                </article>

                                <section className='col-span-2 w-full flex flex-col items-start gap-4 mt-6'>
                                    <h4 className='font-bold text-[20px]'>Important Note for Patients</h4>
                                    <p>Beard transplantation is a medical procedure, and results vary depending on individual healing capacity, hair characteristics, and surgical planning. A thorough consultation is essential to set realistic expectations and achieve the best possible outcome.</p>
                                </section>
                            </main>
                        </HowDoesItWork>
                    </SectionWrapper>
                </main>
                <HowToAppointment />
            </div>
        </main>
    )
}
