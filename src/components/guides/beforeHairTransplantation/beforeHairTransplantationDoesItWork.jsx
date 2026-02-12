import Image from 'next/image'
import React from 'react'

export default function BeforeHairTransplantationDoesItWork() {

    return (
        <main className='grid grid-cols-1 w-full place-content-stretch place-items-stretch text-coffee-dark'>
            <article className='flex flex-col gap-4 lg:gap-9 py-5'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["1. Medical Evaluation", "& Consultation"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>Before scheduling surgery, every patient must undergo a detailed medical evaluation, including:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Review of medical history</li>
                        <li>Assessment of hair loss type and stage</li>
                        <li>Evaluation of donor area capacity</li>
                        <li>Trichoscopic examination, if required</li>
                        <li>Blood tests (as requested by the clinic)</li>
                    </ul>
                    <p>Please inform your doctor if you have:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Chronic illnesses (diabetes, heart disease, autoimmune disorders)</li>
                        <li>Bleeding disorders</li>
                        <li>Allergies</li>
                        <li>History of poor wound healing</li>
                        <li>Previous hair transplant procedures</li>
                    </ul>
                    <p>Accurate medical information is critical for your safety.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>

            <article className=' flex flex-col gap-4 lg:gap-9 py-5'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["2. Medications", "& Supplements"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>Medications to Stop (If Approved by Your Doctor)</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Aspirin and blood thinners: stop at least 7–10 days before surgery</li>
                        <li>Anti-inflammatory drugs (NSAIDs): stop 5–7 days before</li>
                        <li>Vitamin E, Omega-3, ginkgo biloba, ginseng, garlic supplements: stop 7 days before</li>
                        <li>Herbal supplements: stop 7–10 days before</li>
                        <li>⚠️ Do not stop prescribed medications without medical approval.</li>
                    </ul>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>

            <article className=' flex flex-col gap-4 lg:gap-9 py-5'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["3. Smoking", "& Alcohol"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Smoking should be stopped at least 7 days before surgery (ideally 2–4 weeks for best results)</li>
                        <li>Alcohol must be avoided for at least 3 days before surgery</li>
                    </ul>
                    <p>Smoking and alcohol significantly reduce blood circulation, increase bleeding risk, and negatively affect graft survival.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>

            <article className=' flex flex-col gap-4 lg:gap-9 py-5'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["4. Hair &", "Scalp Preparation"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Wash your hair the night before or the morning of surgery using a mild shampoo</li>
                    </ul>
                    <ul className='list-disc list-outside pl-5'>
                        <li>
                            <p>Do not apply:</p>
                            <ul className='list-disc list-outside pl-5'>
                                <li>Hair gel</li>
                                <li>Wax</li>
                                <li>Spray</li>
                                <li>Oils or lotions</li>
                            </ul>
                        </li>
                        <li>Do not dye your hair within 7 days before surgery</li>
                        <li>Avoid scalp treatments or aggressive massage before surgery</li>
                    </ul>
                    <p>If you are undergoing unshaven or long hair transplantation, follow the clinic’s specific instructions.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>

            <article className='flex flex-col gap-4 lg:gap-9 py-5'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["5. Nutrition", "& Hydration"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Eat a light but nutritious meal on the morning of surgery</li>
                        <li>Avoid heavy, fatty, or spicy foods</li>
                        <li>Drink sufficient water, but avoid excessive caffeine</li>
                        <li>Do not come fasting unless specifically instructed</li>
                        <li>Proper hydration helps maintain stable blood pressure and circulation during the procedure.</li>
                    </ul>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>

            <article className='flex flex-col gap-4 lg:gap-9 py-5'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["6. Clothing", "& Personal Items"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Wear comfortable, loose-fitting clothes</li>
                        <li>Choose button-down or zip-up tops (avoid clothing that must be pulled over the head)</li>
                        <li>Do not bring valuables to the clinic</li>
                        <li>
                            <p>Remove:</p>
                            <ul className='list-disc list-outside pl-5'>
                                <li>Jewelry</li>
                                <li>Piercings</li>
                                <li>Contact lenses (if advised)</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>

            <article className='flex flex-col gap-4 lg:gap-9 py-5'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["7. Travel", "& Accommodation Planning"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Arrange your travel so you arrive at least one day before surgery, if possible</li>
                        <li>
                            <p>Ensure accommodation allows you to:</p>
                            <ul className='list-disc list-outside pl-5'>
                                <li>Sleep comfortably with head elevation</li>
                                <li>Rest for the first few days</li>
                            </ul>
                        </li>
                        <li>Do not plan long flights immediately after surgery unless approved</li>
                    </ul>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>

            <article className='flex flex-col gap-4 lg:gap-9 py-5'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["8. Sleep", "& Lifestyle Before Surgery"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Get a good night’s sleep before the procedure</li>
                        <li>Avoid intense physical exercise 48 hours before surgery</li>
                        <li>Reduce stress as much as possible</li>
                        <li>Being well-rested improves healing and overall comfort.</li>
                    </ul>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>

            <article className='flex flex-col gap-4 lg:gap-9 py-5'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["9. Day of Surgery", "What to Expect?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Arrive at the clinic on time</li>
                        <li>Hairline design and final planning will be done with your doctor</li>
                        <li>You will receive detailed information about the procedure steps</li>
                        <li>Local anesthesia will be applied</li>
                        <li>The procedure is performed while you are awake and comfortable</li>
                    </ul>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>

            <article className='flex flex-col gap-4 lg:gap-9 py-5'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["10. Important", "Final Notes"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Hair transplantation is a medical procedure</li>
                        <li>
                            <p>Results depend on:</p>
                            <ul className='list-disc list-outside pl-5'>
                                <li>Genetics</li>
                                <li>Hair loss progression</li>
                                <li>Donor capacity</li>
                                <li>Postoperative care</li>
                            </ul>
                        </li>
                        <li>Immediate cosmetic appearance does not reflect final results</li>
                        <li>Final growth is evaluated after 12–15 months</li>
                        <li>Following pre-operative instructions strictly is one of the most important factors in achieving a successful and natural outcome.</li>
                    </ul>
                </div>
            </article>
        </main>
    )
}
