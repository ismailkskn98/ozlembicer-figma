import Image from 'next/image'
import React from 'react'

export default function TitleImages() {
    return (
        <section className='w-full max-w-282 mx-auto flex flex-col items-start gap-5 bg-linear-to-r from-wine-brown to-coffee-dark min-h-175 rounded-4xl p-10 my-10'>
            <article className='w-full flex items-center justify-between gap-2.5'>
                <div className='w-full text-[20px] text-ivory-soft py-8.5 '>Hair Transplantat</div>
                <Image src="/images/title-1.png" alt="title image 1" width={700} height={200} className='object-contain object-center w-fit h-37.5' />
            </article>
            <article className='w-full flex items-center justify-between gap-2.5'>
                <div className='w-full text-[20px] text-ivory-soft py-8.5 '>Beard Transplantat</div>
                <Image src="/images/title-2.png" alt="title image 2" width={700} height={200} className='object-contain object-center w-fit h-37.5' />
            </article>
            <article className='w-full flex items-center justify-between gap-2.5'>
                <div className='w-full text-[20px] text-ivory-soft py-8.5 '>Eyebrow Transplantat</div>
                <Image src="/images/title-3.png" alt="title image 3" width={700} height={200} className='object-contain object-center w-fit h-37.5' />
            </article>
            <article className='w-full flex items-center justify-between gap-2.5'>
                <div className='w-full text-[20px] text-ivory-soft py-8.5 '>Femail Hair Transplant</div>
                <Image src="/images/title-4.png" alt="title image 4" width={700} height={200} className='object-contain object-center w-fit h-37.5' />
            </article>
        </section>
    )
}
