import Image from 'next/image'
import React from 'react'

export default function FueMicroMotorMain({ title, boldTitle, description1, description2, imageUrl }) {
    return (
        <section className='w-full max-w-6xl mx-auto flex items-center gap-6'>
            <article className='w-full max-w-92 flex flex-col items-start gap-9'>
                <h2 className='text-coffee-dark text-[32px]'>{title} <br /> <span className='font-bold'>{boldTitle}</span></h2>
                <p>{description1}</p>
                <p>{description2}</p>
            </article>
            <Image src={imageUrl} alt={boldTitle} width={800} height={600} className='object-cover object-center w-full h-full max-h-146.25' />
        </section>
    )
}
