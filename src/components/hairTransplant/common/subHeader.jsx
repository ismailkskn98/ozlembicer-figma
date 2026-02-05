import React from 'react';
import Image from 'next/image';
import CustomBreadCrumb from '@/components/common/customBreadCrumb';

export default function SubHeader({ linksItems, id, title, subtitle, imageUrl }) {
    return (
        <>
            <header className='w-full fluid gridContainer'>
                <main id={id} name={id} className='w-full fluid gridContainer bg-linear-to-r from-coffee-dark via-wine-brown to-coffee-dark h-37.5 border-y border-gold py-2.5 text-ivory-soft'>
                    <div className='w-full fluid absolute inset-x-0 top-0 h-0.5 bg-gold z-0' />
                    <section className='w-full max-w-full xl:max-w-6xl mx-auto flex items-center justify-between gap-4'>
                        <h2 className={`flex flex-col sm:flex-row items-start sm:items-center gap-0 sm:gap-3 lg:gap-6 ${id === 'reconstructive-hair-transplant' ? 'text-[20px] min-[330px]:text-[25px] sm:text-[30px] md:text-[32px] lg:text-[45px] xl:text-[48px] 2xl:text-[52px] leading-10 sm:leading-12 lg:leading-14 xl:leading-16' : 'text-[25px] min-[330px]:text-[30px] sm:text-[45px] lg:text-[50px] xl:text-[56px] 2xl:text-[64px] leading-10 sm:leading-12 lg:leading-14 xl:leading-16'}`}>
                            <span>{title}</span> <span className='text-[20px] sm:text-[32px]'>{subtitle}</span>
                        </h2>
                        <Image src={imageUrl} alt={id} width={120} height={120} className="object-contain w-12 min-[330px]:w-14 sm:w-18 lg:w-22.5 h-12 min-[330px]:h-14 sm:h-18 lg:h-22.5" />
                    </section>
                </main>
                <CustomBreadCrumb links={linksItems} isButton={true} />
            </header>
        </>
    );
}