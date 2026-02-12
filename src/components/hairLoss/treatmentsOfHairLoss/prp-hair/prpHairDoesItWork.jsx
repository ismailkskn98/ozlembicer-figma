import Image from 'next/image'
import React from 'react'

export default function PrpHairDoesItWork() {

    const RecursiveList = ({ items }) => {
        return (
            <ul className="list-disc list-outside pl-5 text-sm lg:text-base space-y-4.5">
                {items.map((item, index) => (
                    <li key={index}>
                        {item.text || item}
                        {item.children && <RecursiveList items={item.children} />}
                    </li>
                ))}
            </ul>
        );
    };

    const title1 = ["Benefits Of", "PRP Therapy"];
    const content1 = [
        { type: "paragraph", value: "There are countless reasons why an increasing number of people are opting for PRP therapy and why doctors are also suggesting the same thing. These are:" },
        { type: "list", value: ["The serum that is injected into the scalp is made using your own blood, which is why you really have nothing to fear. Since your own blood is used, the chances of the body rejecting it are minimal and this is also why the chances of success are higher.", "Since your blood will be used, there is no chance of infection or allergy, which exponentially increases the chances of success.", "The procedure requires nothing more than a few injections, all of which are administered under local anesthesia. This means that you will not feel any pain, apart from the prick of an anesthesia injection needle.", "Even if the therapy may not give you the kind of results you would have expected, surely thanks to this therapy you will not experience further hair loss."] },
    ];
    const title2 = ["Procedure Of", "PRP Therapy"];
    const content2 = [
        { type: "paragraph", value: "When you are looking for an effective method for hair augmentation, a transplant may be the best solution, but PRP therapy can certainly be useful in the long term.Injections can support hair growth and ensure that there is proper collagen production." },
        { type: "paragraph", value: "The procedure is quite simple: the blood is drawn from your body and placed in a centrifuge, in which the platelet-rich plasma is separated from the rest of the elements. This plasma is then treated with growth factors and ready to be injected." },
    ];

    return (
        <main className='grid grid-cols-1 lg:grid-cols-3 w-full max-w-6xl mx-auto place-content-stretch place-items-stretch text-coffee-dark gap-6 py-10 sm:py-16 lg:py-25'>
            <Image src="/images/hair-loss/hair-prp-section.png" alt="FUE Hair Transplant" width={700} height={900} className='object-cover h-full w-full max-h-90 sm:max-h-150 lg:max-h-full rounded-4xl' />

            <section className='col-span-1 lg:col-span-2 w-full flex flex-col sm:flex-row items-start gap-6 h-full'>
                <article className='w-full flex flex-col items-start gap-4 lg:gap-9 border-r-0 sm:border-r border-coffee-dark/15 pr-0 sm:pr-4'>
                    <h3 className='text-base lg:text-[20px] font-bold flex flex-col items-start'>
                        {title1.map((text, index) => (
                            <span key={index}>{text}</span>
                        ))}
                    </h3>
                    <div className='w-full flex flex-col items-start gap-4'>
                        {content1.map((item, index) => {
                            if (item.type === "paragraph") {
                                return <p key={index} className='text-sm lg:text-base'>{item.value}</p>;
                            }
                            if (item.type === "list") {
                                return <RecursiveList key={index} items={item.value} />;
                            }
                            return null;
                        })}
                    </div>
                </article>
                <article className='w-full flex flex-col items-start gap-4 lg:gap-9'>
                    <h3 className='text-base lg:text-[20px] font-bold flex flex-col items-start'>
                        {title2.map((text, index) => (
                            <span key={index}>{text}</span>
                        ))}
                    </h3>
                    <div className='w-full flex flex-col items-start gap-4'>
                        {content2.map((item, index) => {
                            if (item.type === "paragraph") {
                                return <p key={index} className='text-sm lg:text-base'>{item.value}</p>;
                            }
                            if (item.type === "list") {
                                return <RecursiveList key={index} items={item.value} />;
                            }
                            return null;
                        })}
                    </div>
                </article>
            </section>
        </main>
    )
}
