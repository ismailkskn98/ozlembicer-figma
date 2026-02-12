import Image from 'next/image'
import React from 'react'

export default function AfterHairTransplantationDoesItWork() {

    return (
        <main className='grid grid-cols-1 sm:grid-cols-2 w-full border-t border-coffee-dark/15 place-content-stretch place-items-stretch text-coffee-dark'>
            <h4 className='col-span-1 sm:col-span-2 font-bold text-base lg:text-[20px] flex flex-col items-start pb-4 sm:pb-12 pt-8 sm:pt-12'>
                Main Medical Causes of Hair Loss in Men
            </h4>
            <article className='sm:border-r border-b border-coffee-dark/15 border-dashed flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["A) Androgenetic", "Alopecia"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>Androgenetic alopecia is a genetically inherited form of hair loss caused by the activity of 5-alpha reductase type I and type II enzymes, which convert testosterone into dihydrotestosterone (DHT). In genetically predisposed individuals, DHT binds to sensitive hair follicles, leading to progressive follicular miniaturization and hair loss over time.</p>
                    <p>Typical signs include:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Receding hairline:</li>
                        <li>Thinning at the crown</li>
                        <li>Gradual loss of density over time</li>
                    </ul>
                    <p>This condition can begin shortly after puberty and progresses with age if left untreated.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
            <article className='border-b border-coffee-dark/15 border-dashed flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["B) Alopecia", "Areata"].map((text, index) => (
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

            <article className='sm:border-r border-b border-coffee-dark/15 border-dashed flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["C) Cicatricial", "Alopecia"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>Scarring alopecia occurs when hair follicles are permanently damaged and replaced by scar tissue. This can result from:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Burns or trauma</li>
                        <li>Surgical scars</li>
                        <li>Infections</li>
                        <li>Certain inflammatory skin diseases (LPP, FFA, SLE, Acne, Keloides, Nucha, etc. )</li>
                    </ul>
                    <p>Hair transplantation into scar tissue may be possible, but graft survival can be lower because scar tissue has reduced blood circulation. We have no chance to perform hair transplantation to the patient who have active cicatricial alopecia.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
            <article className='border-b border-coffee-dark/15 border-dashed flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["D) Telogen", "Effluvium"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>Telogen effluvium is a temporary form of hair loss that happens when stress, illness, or hormonal imbalance causes a large number of hair follicles to enter the resting phase.</p>
                    <p>This leads to diffuse thinning across the scalp. Once the cause is treated, hair typically regrows naturally.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>

            <article className='sm:border-r border-coffee-dark/15 border-dashed flex flex-col gap-4 lg:gap-9 py-5 sm:pr-4'>
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
            <article className='flex flex-col gap-4 lg:gap-9 py-5 sm:pl-4'>
                <h4 className='font-bold text-base lg:text-[20px] flex flex-col items-start'>
                    {["Professional Hair ", "Loss Assessment"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark text-sm lg:text-base'>
                    <p>To receive a precise evaluation of your hair loss stage and treatment options, you can consult Dr. Özlem Biçer and her experienced medical team. A professional diagnosis ensures that the most suitable therapy or reconstructive approach is selected for your individual case.</p>
                </div>
                <Image src="/images/hair-transplant/howwork.png" alt="FUE Hair Transplant" width={600} height={800} className='min-[900px]:hidden object-contain h-55 w-fit' />
            </article>
        </main>
    )
}
