
import React from 'react'

export default function HowDoesItWorkBodyHair() {
    return (
        <main className='grid grid-cols-2 w-full border-t border-coffee-dark/15 place-content-stretch place-items-stretch text-coffee-dark'>
            <article className='border-r border-b border-coffee-dark/15 flex flex-col gap-9 py-5 pr-4'>
                <h4 className='font-bold text-[20px] flex flex-col items-start'>
                    {["How Is Body Hair", "Transplantation Performed?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark'>
                    <p>Body hair transplantation is usually performed using the FUE technique, which avoids linear scarring.</p>
                    <p>The process includes:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Careful selection of suitable body donor areas</li>
                        <li>Extraction of follicular units using micro punches</li>
                        <li>Proper hydration and storage of grafts</li>
                        <li>Strategic implantation into the scalp to ensure natural blending</li>
                    </ul>
                    <p>If all physiological and medical requirements are met, body hair follicles can be successfully transferred to the scalp.</p>
                </div>
            </article>
            <article className='border-b border-coffee-dark/15 flex flex-col gap-9 py-5 pl-4'>
                <h4 className='font-bold text-[20px] flex flex-col items-start'>
                    {["Who Is a Suitable", "Candidate for BHT?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark'>
                    <p>Body Hair Transplantation is usually considered for patients who:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Have a weak or insufficient scalp donor area</li>
                        <li>Have had multiple previous hair transplants</li>
                        <li>Have certain forms of alopecia or scarring hair loss</li>
                    </ul>
                    <p>However, it is important to understand that if both scalp and body donor hair quality is weak, the final outcome may be limited.Patients with insufficient donor hair overall may not be suitable candidates for any form of hair transplantation.</p>
                </div>
            </article>

            <article className='border-r border-b border-coffee-dark/15 flex flex-col gap-9 py-5 pr-4'>
                <h4 className='font-bold text-[20px] flex flex-col items-start'>
                    {["Differences Between", "BHT-FUE and Conventional FUE"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark'>
                    <p>Both conventional FUE and BHT use the Follicular Unit Extraction (FUE) technique, meaning hair follicles are harvested one by one, without removing a strip of skin.</p>
                    <p>Key differences include:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>
                            <span>Conventional FUE:</span>
                            <ul className='list-disc list-inside pl-5'>
                                <li>Donor hair is taken exclusively from the scalp</li>
                                <li>Hair characteristics closely match recipient scalp hair</li>
                            </ul>
                        </li>
                        <li>
                            <span>BHT-FUE:</span>
                            <ul className='list-disc list-inside pl-5'>
                                <li>Donor hair is harvested from body areas such as the beard or chest</li>
                                <li>Used when scalp donor hair is insufficient</li>
                                <li>Body hair has different growth cycles and texture compared to scalp hair</li>
                            </ul>
                        </li>
                    </ul>
                    <p>BHT grafts may grow at different rates and may not achieve the same length as scalp hair, which is why they are often used strategically—for example, to increase density rather than create the hairline.</p>
                </div>
            </article>
            <article className='border-b border-coffee-dark/15 flex flex-col gap-9 py-5 pl-4'>
                <h4 className='font-bold text-[20px] flex flex-col items-start'>
                    {["Important Considerations", "About BHT"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark'>
                    <p>Body Hair Transplantation requires high surgical expertise due to the unique characteristics of body hair.</p>
                    <p>Key factors for success include:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Surgeon experience, as body hair differs significantly from scalp hair</li>
                        <li>Team expertise, especially in handling varying hair directions and textures</li>
                        <li>Proper extraction, storage, and hydration of body hair grafts</li>
                        <li>Precise creation of recipient sites to control angle and direction</li>
                        <li>Minimal follicle transection rate (FTR) to protect graft survival</li>
                        <li>Careful mixing of body hair with scalp hair for a natural appearance</li>
                    </ul>
                    <p>Because body hair behaves differently from scalp hair, BHT should always be performed conservatively and selectively.</p>
                </div>
            </article>

            <article className='border-r border-coffee-dark/15 flex flex-col gap-9 py-5 pr-4'>
                <h4 className='font-bold text-[20px] flex flex-col items-start'>
                    {["Is Body Hair", "Transplant Permanent?"].map((text, index) => (
                        <span key={index}>{text}</span>
                    ))}
                </h4>
                <div className='w-full flex flex-col items-start gap-4 text-coffee-dark'>
                    <p>Body hair follicles retain many of their original growth characteristics after transplantation.</p>
                    <p>This means:</p>
                    <ul className='list-disc list-outside pl-5'>
                        <li>Growth cycles may differ from scalp hair</li>
                        <li>Hair length and texture may not fully match scalp hair</li>
                        <li>Results can be permanent, but growth behavior may vary between patients</li>
                    </ul>
                    <p>For this reason, BHT is most effective when used as a complementary technique rather than a standalone solution</p>
                </div>
            </article>
        </main>
    )
}
