import React from 'react';
import Image from 'next/image';

const GeneralInfo = ({ title, boldTitle, description1, description2, imageUrl }) => {
    return (
        <section className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-6'>
            <article className='order-2 lg:order-1 w-full max-w-full lg:max-w-92 flex flex-col items-start gap-4 sm:gap-9'>
                <h2 className='text-coffee-dark text-[25px] sm:text-[32px] leading-8 sm:leading-10'>{title} <br /> <span className='font-bold'>{boldTitle}</span></h2>
                <p className='text-sm sm:text-base'>{description1}</p>
                <p className='text-sm sm:text-base'>{description2}</p>
            </article>
            <div className='order-1 lg:order-2 relative w-full h-70 sm:h-120 lg:h-140 xl:h-146.25 rounded-4xl'>
                <Image src={imageUrl} alt={boldTitle} fill className='object-cover object-center w-full h-full rounded-4xl' />
            </div>
        </section>
    );
};

export default GeneralInfo;