import Image from 'next/image'
import React from 'react'

export default function FueMicroMotorMain() {
    return (
        <section className='w-full max-w-6xl mx-auto flex items-center gap-6'>
            <article className='w-full max-w-92 flex flex-col items-start gap-9'>
                <h2 className='text-coffee-dark text-[32px]'>What Is <br /> <span className='font-bold'>FUE Hair Transplant?</span></h2>
                <p>FUE hair transplant (Follicular Unit Extraction) is a modern and minimally invasive hair restoration technique used to treat hair loss in both men and women. In this method, individual hair follicles—called follicular units—are extracted one by one from the donor area, usually the back and sides of the scalp, and transplanted into areas affected by hair loss.</p>
                <p>Each follicular unit naturally contains 1 to 4 hairs, allowing the surgeon to achieve a natural hair density and appearance.</p>
            </article>
            <Image src="/images/hair-transplant/fue-micro-motor.png" alt="fue micro motor" width={800} height={600} className='object-cover object-center w-full h-full max-h-146.25' />
        </section>
    )
}
