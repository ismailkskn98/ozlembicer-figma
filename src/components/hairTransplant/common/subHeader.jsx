import React from 'react';
import Image from 'next/image';
import CustomBreadCrumb from '@/components/common/customBreadCrumb';

export default function SubHeader({ linksItems, id, title, subtitle, imageUrl }) {
    return (
        <>
            <header className='w-full fluid gridContainer'>
                <main id={id} name={id} className='w-full fluid gridContainer bg-linear-to-r from-coffee-dark via-wine-brown to-coffee-dark h-37.5 border-y border-gold py-2.5 text-ivory-soft'>
                    <section className='w-full max-w-full xl:max-w-6xl mx-auto flex items-center justify-between'>
                        <h2 className={`flex items-center gap-6 ${id === 'reconstructive-hair-transplant' ? 'text-[52px]' : 'text-[64px]'}`}>
                            {title} <span className='text-[32px]'>{subtitle}</span>
                        </h2>
                        <Image src={imageUrl} alt={id} width={120} height={120} className="object-contain w-22.5 h-22.5" />
                    </section>
                </main>
                <CustomBreadCrumb links={linksItems} isButton={true} />
            </header>
        </>
    );
}