import MotionScrollInViewVariant from '@/components/common/motionScrollInViewVariant'
import Image from 'next/image'
import React from 'react'

export default function TitleImages() {
    return (
        <MotionScrollInViewVariant className='w-full max-w-282 mx-auto flex flex-col items-start gap-5 bg-linear-to-r from-wine-brown to-coffee-dark min-h-175 rounded-4xl p-10 my-10 overflow-hidden' childClassname="w-full flex items-center justify-between gap-2.5">
            <article className='group relative w-full flex items-center justify-between gap-2.5 transition-all duration-200 before:absolute before:content-[""] before:h-px before:w-[30%] before:bottom-0 before:left-[-15%] before:bg-linear-to-r before:from-ivory-soft/40 before:to-transparent cursor-pointer'>
                <div className='absolute inset-y-0 -left-[15%] h-full w-1/2 z-10 bg-linear-to-r from-[#8C4242] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-200' />
                <div className='relative w-full text-[20px] text-ivory-soft py-8.5 z-20'>Hair Transplantat</div>
                <Image src="/images/title-1.png" alt="title image 1" width={700} height={200} className='relative z-20 object-contain object-center w-fit h-37.5' />
            </article>
            <article className='group relative w-full flex items-center justify-between gap-2.5 transition-all duration-200 before:absolute before:content-[""] before:h-px before:w-[30%] before:bottom-0 before:left-[-15%] before:bg-linear-to-r before:from-ivory-soft/40 before:to-transparent cursor-pointer'>
                <div className='absolute inset-y-0 -left-[15%] h-full w-1/2 z-10 bg-linear-to-r from-[#8C4242] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-200' />
                <div className='relative w-full text-[20px] text-ivory-soft py-8.5 z-20'>Beard Transplantat</div>
                <Image src="/images/title-2.png" alt="title image 2" width={700} height={200} className='relative z-20 object-contain object-center w-fit h-37.5' />
            </article>
            <article className='group relative w-full flex items-center justify-between gap-2.5 transition-all duration-200 before:absolute before:content-[""] before:h-px before:w-[30%] before:bottom-0 before:left-[-15%] before:bg-linear-to-r before:from-ivory-soft/40 before:to-transparent cursor-pointer'>
                <div className='absolute inset-y-0 -left-[15%] h-full w-1/2 z-10 bg-linear-to-r from-[#8C4242] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-200' />
                <div className='relative w-full text-[20px] text-ivory-soft py-8.5 z-20'>Eyebrow Transplantat</div>
                <Image src="/images/title-3.png" alt="title image 3" width={700} height={200} className='relative z-20 object-contain object-center w-fit h-37.5' />
            </article>
            <article className='group relative w-full flex items-center justify-between gap-2.5 transition-all duration-200 cursor-pointer'>
                <div className='absolute inset-y-0 -left-[15%] h-full w-1/2 z-10 bg-linear-to-r from-[#8C4242] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-200' />
                <div className='relative w-full text-[20px] text-ivory-soft py-8.5 z-20'>Femail Hair Transplant</div>
                <Image src="/images/title-4.png" alt="title image 4" width={700} height={200} className='relative z-20 object-contain object-center w-fit h-37.5' />
            </article>
        </MotionScrollInViewVariant>
    )
}
