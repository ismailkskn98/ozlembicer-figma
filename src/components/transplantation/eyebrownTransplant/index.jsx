import React from 'react'
import HeroLogoCarousel from '../../common/logoCarousel'
import HowToAppointment from '../../common/howToAppointment'
import SectionWrapper from '../hairTransplant/common/sectionWrapper'
import HowDoesItWork from '../hairTransplant/common/howDoesItWork'
import EyebrownHero from './eyebrownHero'
import Image from 'next/image'

export default function EyebrownTransplant() {
    return (
        <main className='w-full fluid gridContainer bg-ivory-soft'>
            <div className='fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft to-stone-beige/50'>
                <EyebrownHero />
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
                            title={["Why Do People Choose", "Eyebrow Transplantation?"]}
                            content={[
                                { type: "paragraph", value: "Cosmetic solutions such as eyebrow pencils or powders only provide a temporary, two-dimensional appearance and require frequent reapplication. They cannot fully replicate the natural texture or direction of real eyebrow hair." },
                                { type: "paragraph", value: "Eyebrow transplantation offers a permanent, three-dimensional solution, allowing men and women to achieve fuller, well-defined eyebrows that grow naturally." },
                            ]}
                        >
                            <main className='grid grid-cols-1 sm:grid-cols-2 w-full border-t border-ivory-soft/15 place-content-stretch place-items-stretch text-ivory-soft'>
                                <article className='sm:border-r border-b border-ivory-soft/15 flex flex-col gap-9 py-5 sm:pr-4'>
                                    <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                                        {["Causes of", "Eyebrow Hair Loss"].map((text, index) => (
                                            <span key={index}>{text}</span>
                                        ))}
                                    </h4>
                                    <div className='w-full flex flex-col items-start gap-4 text-ivory-soft text-sm lg:text-base'>
                                        <p>Eyebrow hair loss or thinning may be caused by:</p>
                                        <ul className='list-disc list-outside pl-5'>
                                            <li>Genetic factors</li>
                                            <li>Trichotillomania (a compulsive hair-pulling disorder)</li>
                                            <li>Systemic or autoimmune diseases</li>
                                            <li>Excessive or long-term plucking</li>
                                            <li>Chemotherapy or radiation therapy</li>
                                            <li>Skin injuries caused by burns, trauma, piercings, or tattoos</li>
                                        </ul>
                                        <p>Some patients seek eyebrow transplantation to restore full, thick eyebrows, while others prefer subtle enhancement or scar coverage. Each treatment plan is individualized.</p>
                                    </div>
                                    <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
                                </article>
                                <article className='border-b border-ivory-soft/15 flex flex-col gap-9 py-5 sm:pl-4'>
                                    <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                                        {["Donor Hair for", "Eyebrow Transplantation"].map((text, index) => (
                                            <span key={index}>{text}</span>
                                        ))}
                                    </h4>
                                    <div className='w-full flex flex-col items-start gap-4 text-ivory-soft text-sm lg:text-base'>
                                        <p>Donor hair is typically harvested from the scalp, as scalp hair follicles are genetically programmed for lifelong growth.</p>
                                        <p>Once transplanted, eyebrow hairs will continue to grow and usually require trimming approximately once per month, which is normal and expected.</p>
                                        <p>To achieve a natural appearance:</p>
                                        <ul className='list-disc list-outside pl-5'>
                                            <li>Hair is implanted one by one</li>
                                            <li>In some areas, hairs may be placed in one or two rows, mimicking natural eyebrow growth</li>
                                            <li>Extremely fine incisions are used to allow precise placement</li>
                                        </ul>
                                    </div>
                                    <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
                                </article>

                                <article className='sm:border-r border-b border-ivory-soft/15 flex flex-col gap-9 py-5 sm:pr-4'>
                                    <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                                        {["Eyebrow Transplant", "Techniques: FUE & FUT"].map((text, index) => (
                                            <span key={index}>{text}</span>
                                        ))}
                                    </h4>
                                    <div className='w-full flex flex-col items-start gap-4 text-ivory-soft text-sm lg:text-base'>
                                        <p>Eyebrow transplantation can be performed using either FUE (Follicular Unit Extraction) or FUT (Follicular Unit Transplantation), depending on patient preferences, donor area characteristics, and surgical planning.</p>
                                        <ul className='list-disc list-outside pl-5'>
                                            <li>FUE involves individual follicle extraction and is often preferred by patients who wish to avoid a linear scar</li>
                                            <li>FUT involves harvesting a small donor strip and is more commonly used in women, as the scar is easily concealed by longer hair</li>
                                        </ul>
                                        <p>All grafts are microscopically prepared to allow implantation into the smallest possible incisions.</p>
                                    </div>
                                    <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
                                </article>
                                <article className='border-b border-ivory-soft/15 flex flex-col gap-9 py-5 sm:pl-4'>
                                    <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                                        {["Procedure &", "Duration"].map((text, index) => (
                                            <span key={index}>{text}</span>
                                        ))}
                                    </h4>
                                    <div className='w-full flex flex-col items-start gap-4 text-ivory-soft text-sm lg:text-base'>
                                        <p>The eyebrow transplant procedure typically lasts 3 to 5 hours, depending on the number of grafts required and the desired eyebrow shape and density.</p>
                                        <p>Step-by-Step Overview:</p>
                                        <ul className='list-disc list-outside pl-5'>
                                            <li>Healthy hair follicles are harvested from the donor area at the back of the scalp</li>
                                            <li>Local anesthesia is used to ensure a painless procedure</li>
                                            <li>Grafts are carefully prepared under magnification</li>
                                            <li>The desired eyebrow shape is drawn and confirmed with the patient</li>
                                            <li>Hair follicles are implanted with meticulous attention to angle, direction, and depth</li>
                                        </ul>
                                        <p>Once the donor incision is closed, it generally heals quickly and becomes barely noticeable within a few days.</p>
                                    </div>
                                    <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
                                </article>

                                <article className='border-b sm:border-r border-ivory-soft/15 flex flex-col gap-9 py-5 sm:pr-4'>
                                    <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                                        {["Number of", "Grafts Used"].map((text, index) => (
                                            <span key={index}>{text}</span>
                                        ))}
                                    </h4>
                                    <div className='w-full flex flex-col items-start gap-4 text-ivory-soft text-sm lg:text-base'>
                                        <p>At the Dr. Özlem Biçer Clinic:</p>
                                        <p>Approximately 250 to 750 hairs are transplanted per eyebrow, depending on:</p>
                                        <ul className='list-disc list-outside pl-5'>
                                            <li>Existing eyebrow hair</li>
                                            <li>Desired fullness</li>
                                            <li>Facial anatomy</li>
                                            <li>Scar coverage needs</li>
                                        </ul>
                                        <p>The exact number of grafts is determined during the consultation.</p>
                                    </div>
                                    <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
                                </article>
                                <article className='border-b border-ivory-soft/15 flex flex-col gap-9 py-5 sm:pl-4'>
                                    <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                                        {["Results", "& Permanence"].map((text, index) => (
                                            <span key={index}>{text}</span>
                                        ))}
                                    </h4>
                                    <div className='w-full flex flex-col items-start gap-0.5 text-ivory-soft text-sm lg:text-base'>
                                        <p>Eyebrow transplantation provides long-lasting and permanent results.</p>
                                        <ul className='list-disc list-outside pl-5'>
                                            <li>Mild redness and swelling usually resolve within a few days</li>
                                            <li>Transplanted hairs may shed temporarily in the first weeks</li>
                                            <li>New growth typically begins after 3–4 months</li>
                                            <li>Final results are usually visible within 9–12 months</li>
                                        </ul>
                                        <p>Because eyebrow transplantation requires extreme precision, surgeon experience plays a critical role in achieving natural results.</p>
                                    </div>
                                    <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
                                </article>

                                <section className='col-span-1 sm:col-span-2 w-full flex flex-col items-start gap-4 mt-6 text-sm lg:text-base'>
                                    <h4 className='font-bold text-[20px]'>Important Note for Patients</h4>
                                    <p>Eyebrow transplantation is a highly specialized procedure, and results may vary depending on individual healing capacity, hair characteristics, and medical history. A detailed consultation is essential to ensure realistic expectations and optimal outcomes.</p>
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
