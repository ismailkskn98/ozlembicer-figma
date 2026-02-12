import Image from 'next/image'
import React from 'react'

export default function MaleHairDoesItWork() {
    return (
        <main className='grid grid-cols-1 sm:grid-cols-2 w-full border-t border-coffee-dark/15 place-content-stretch place-items-stretch text-coffee-dark'>
            <h4 className='col-span-1 sm:col-span-2 font-bold text-base lg:text-[20px] mt-12 mb-8'>Main Medical Causes of Hair Loss in Men</h4>
            <article className='border-r-0 sm:border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Androgenetic", "Alopecia"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>Androgenetic alopecia is the most common cause of hair loss in men. It is a genetically inherited condition caused by sensitivity of the hair follicles to dihydrotestosterone (DHT), a hormone derived from testosterone.</p>
                    <p>Typical signs include:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Receding hairline</li>
                        <li>Thinning at the crown</li>
                        <li>Gradual loss of density over time</li>
                    </ul>
                    <p>This condition can begin shortly after puberty and progresses with age if left untreated.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
            <article className='border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Alopecia", "Areata"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>Alopecia areata is an autoimmune disease in which the body’s immune system attacks the hair follicles. It causes sudden, round patches of hair loss on the scalp or beard.</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>It can occur at any age</li>
                        <li>Hair may regrow, but the condition can recur</li>
                        <li>Hair transplantation is not recommended during the active phase of this condition</li>
                    </ul>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>

            <article className='border-r-0 sm:border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Cicatricial", "Alopecia"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>

                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>Scarring alopecia occurs when hair follicles are permanently damaged and replaced by scar tissue. This can result from:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Burns or trauma</li>
                        <li>Surgical scars</li>
                        <li>Infections</li>
                        <li>Certain inflammatory skin diseases</li>
                    </ul>
                    <p>Hair transplantation into scar tissue may be possible, but graft survival can be lower because scar tissue has reduced blood circulation.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
            <article className='border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Telogen", "Effluvium"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>Telogen effluvium is a temporary form of hair loss that happens when stress, illness, or hormonal imbalance causes a large number of hair follicles to enter the resting phase.</p>
                    <p>This leads to diffuse thinning across the scalp. Once the cause is treated, hair typically regrows naturally.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>

            <article className='border-r-0 sm:border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 lg:pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Sudden", "Hair Loss"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>If you experience sudden or rapid hair loss, or notice bald patches forming, you should seek medical advice. Hair loss can sometimes be associated with underlying medical or autoimmune conditions that require proper diagnosis and treatment.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
            <article className='border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4 text-sm lg:text-base'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["How Can I", "Monitor My Hair Loss?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <p>There is no completely precise method to measure hair loss, as healthy hairs also fall out and regrow naturally.</p>
                <p>The most reliable way to monitor changes is:<br />Take standardized photographs of your scalp every 6–8 months and compare them over time.</p>
                <p className='-my-3.5'>Make sure:</p>
                <ul className='list-disc list-outside pl-5'>
                    <li>The lighting is the same</li>
                    <li>The angle is consistent</li>
                    <li>The hair is styled in the same way</li>
                </ul>
                <p>This helps both the patient and the doctor understand whether the hair loss is progressing or stabilizing.</p>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
            <article className='w-full col-span-1 sm:col-span-2 flex flex-col items-start gap-2.5 sm:gap-3.5 mt-5'>
                <h4 className='font-bold text-base lg:text-[20px]'>Professional Hair Loss Assessment</h4>
                <p className='w-full max-w-190 text-sm lg:text-base'>To receive a precise evaluation of your hair loss stage and treatment options, you can consult Dr. Özlem Biçer and her experienced medical team. A professional diagnosis ensures that the most suitable therapy or reconstructive approach is selected for your individual case.</p>
            </article>
            <Image src="/images/male-hair-table.png" alt="male hair table" width={600} height={800} className='col-span-1 sm:col-span-2 object-contain object-center w-fit h-90 sm:h-120 lg:h-150 2xl:h-190 mt-6' />
            <article className='w-full col-span-1 sm:col-span-2 flex flex-col items-start gap-2.5 sm:gap-3.5 mt-5'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["The Norwood Scale", "Measuring Male Pattern Baldness"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <p className='w-full max-w-190 text-sm lg:text-base'>The Norwood Scale is the most widely used tool to evaluate and classify male pattern baldness, also known as androgenetic alopecia. It helps both doctors and patients understand the severity and progression of hair loss in men.</p>
                <p className='w-full max-w-190 text-sm lg:text-base'>Previously referred to as the Hamilton–Norwood Scale, it is now commonly known simply as the Norwood Scale.</p>
            </article>

            <article className='border-r-0 sm:border-r border-b border-t border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4 mt-6'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Who Developed", "the Norwood Scale?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>The classification system was originally introduced by Dr. James Hamilton in the 1950s. It was later refined and expanded by Dr. O’Tar Norwood in the 1970s, who adapted the scale specifically for the assessment of male pattern hair loss.</p>
                    <p>Today, it remains the standard reference for diagnosing the stage of androgenetic alopecia.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
            <article className='border-b border-t border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4 mt-6'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["How Is the", "Norwood Scale Used?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>The Norwood Scale is used to determine how advanced a patient’s hair loss is. It provides a visual and clinical reference, allowing both the physician and the patient to compare the hairline and crown with standardized stages.<br />The scale classifies hair loss into seven main stages (Type I to Type VII), ranging from:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Minimal or no hair loss to</li>
                        <li>Severe hair loss affecting the entire top of the scalp</li>
                    </ul>
                    <p>A mirror or professional evaluation is recommended to accurately compare your hair to the scale.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>

            <article className='border-r-0 sm:border-r border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Two Patterns of Hair Loss", "Evaluated by the Norwood Scale"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>

                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>The Norwood Scale examines hair loss in two <br />main areas:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Frontal Hairline Recession <br /> – Hair loss that begins at the temples and hairline.</li>
                        <li>Vertex (Crown) Thinning <br /> – Hair loss that starts at the top or back of the scalp.</li>
                    </ul>
                    <p>Both patterns may progress over time and can eventually reach Norwood Type VI or VII if untreated.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
            <article className='border-b border-coffee-dark/15 flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Why Is the", "Norwood Scale Important?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>The Norwood Scale is valuable because it helps:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Assess the severity and type of male hair loss</li>
                        <li>Guide the doctor’s decision on the most appropriate treatment options</li>
                        <li>Determine whether a patient is a suitable candidate for hair transplantation</li>
                        <li>Set realistic expectations for surgical or medical results</li>
                        <li>Identify cases where hair loss may be linked to hormonal or medical conditions</li>
                    </ul>
                    <p>Accurate diagnosis is essential — patients should not self-diagnose their stage of hair loss.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
        </main>
    )
}
