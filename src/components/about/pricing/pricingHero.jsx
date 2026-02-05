import MotionScrollInView from '@/components/common/motionScrollInView';
import MotionScrollInViewVariant from '@/components/common/motionScrollInViewVariant';
import React from 'react'

export default function PricingHero() {
    return (
        <main className='relative fluid gridContainer w-full bg-radial from-coffee-dark to-wine-brown pt-25 pb-50'>
            <div className='w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0' />
            <section className='w-full max-w-full xl:max-w-6xl mx-auto'>
                <article className='w-full flex flex-col items-start gap-4.25 text-ivory-soft'>
                    <MotionScrollInView>
                        <h1 className='text-[32px]'>Pricing</h1>
                    </MotionScrollInView>
                    <MotionScrollInViewVariant className='flex-1 flex flex-col items-start gap-2 text-[14px] leading-relaxed' childClassname={"flex flex-col items-start"}>
                        <article className='flex flex-col items-start'>
                            <h3 className='font-bold'>FUE Automated</h3>
                            <p>3€ per Graft</p>
                            <p>Up To 4.000 Grafts In One Session</p>
                        </article>
                        <article className='flex flex-col items-start'>
                            <h3 className='font-bold'>FUE Manual</h3>
                            <p>4€ per Graft</p>
                            <p>(Up to 2.000 Grafts In One Session)</p>
                        </article>
                        <p>For FUE sessions, the price has plus/minus 200 grafts range.</p>
                        <article className='flex flex-col items-start'>
                            <h3 className='font-bold'>FUT (Strip)</h3>
                            <p>6.000€</p>
                        </article>
                        <article className='flex flex-col items-start'>
                            <h3 className='font-bold'>Beard Transplant</h3>
                            <p>From Scalp To Beard: 6.000-9.000€ (Related With Graft Count)</p>
                            <p>From Beard To Scalp: 6.000€ (Unrelated With Graft Count)</p>
                        </article>
                        <article className='flex flex-col items-start'>
                            <h3 className='font-bold'>Eyebrow Transplant</h3>
                            <p>6.000€</p>
                        </article>
                        <article className='flex flex-col items-start'>
                            <h3 className='font-bold'>Body Hair Transplant</h3>
                            <p>6.000€</p>
                        </article>
                        <article className='flex flex-col items-start'>
                            <h3 className='font-bold'>Scalp Micro-Pigmentation (SMP)</h3>
                            <p>500€ – 1000€</p>
                        </article>
                        <article className='flex flex-col items-start'>
                            <h3 className='font-bold'>PRP Treatment</h3>
                            <p>Free With Certain Surgeries</p>
                        </article>
                        <article className='flex flex-col items-start'>
                            <h3 className='font-bold'>Consultation</h3>
                            <p>In person: 100€<br />Online: Free</p>
                        </article>
                        <article className='flex flex-col items-start'>
                            <h3 className='font-bold'>Combine Sessions</h3>
                            <p className='font-medium'>For extraction from 2 different areas:</p>
                            <p>First area will be accepted as a main donor. Main donor transplant (Up to 2000 grafts) is 6000€. Second area will be accepted as touch up session which is 2000€</p>
                            <p className='font-medium mt-2'>For extraction from 3 different areas:</p>
                            <p>If the first extraction area is scalp, it is 6000€ + second extraction area chest, it is 6000€ and the third extraction area is beard, it is touch up price which is 2000€.</p>
                            <p className='font-medium mt-2'>These prices are valid for combine sessions which are done by one sitting.</p>
                        </article>
                        <article className='flex flex-col items-start'>
                            <h3 className='font-bold'>Touch-Up Terms and Conditions</h3>
                            <p>Sessions are planned by approval of Dr.Bicer. They are planned 1-2 times in a year. More than 2 sessions can be planned on the same day. Free touch up for 50-200 grafts (Sessions are planned to eliminate problems caused by improper washing, head traumas…) Up to 1000 grafts: 2000€</p>
                        </article>
                        <article className='flex flex-col items-start'>
                            <h3 className='font-bold'>Discount Terms and Conditions</h3>
                            <p>Medical Doctor/Team :%10</p>
                            <p>Student: %10 (for students who do not work)</p>
                            <p>Group patients: %10 for Each</p>
                            <p>2 BHT sessions: %15 (If two sessions are done in one day)</p>
                            <p>Advertisement: %5 (Before/After photos/videos without face)</p>
                            <p>Advertisement: %10 (Before/After photos/videos with face)</p>
                            <p>Last minute appointments:1000€ (For appointments for a specific day which is less than ten days away. To be able to tolerate expensive flight prices at last minute)</p>
                            <p>For publication of media (photos & videos) in scientific studies, presentations, congress and articles: 20% (Dr.Bicer makes her own decision for this discount type in consultation if the patient is suitable for this case Ex: Burn Reconstruction)</p>
                            <p>Only one type discount type is applied and total discount cannot be more than %20</p>
                            <p>In case of cancelation the deposit of the cancelling patient will be detucted from the last minute patient for the additional travel and accommodation costs difference.</p>
                        </article>
                    </MotionScrollInViewVariant>
                </article>
            </section>
        </main>
    );
}