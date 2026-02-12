import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function HowDoesItWork({ images = [], title = [], content = [], children, className }) {

    const RecursiveList = ({ items }) => {
        return (
            <ul className="list-disc list-outside pl-5 text-sm lg:text-base">
                {items.map((item, index) => (
                    <li key={index}>
                        {item.text || item}
                        {item.children && <RecursiveList items={item.children} />}
                    </li>
                ))}
            </ul>
        );
    };
    return (
        <main className={cn('w-full max-w-6xl mx-auto gap-6 grid grid-cols-1 min-[900px]:grid-cols-3 text-coffee-dark', className)}>
            <section className='hidden min-[900px]:flex flex-col items-start gap-2.5 h-full'>
                {images.map((image, index) => (
                    <Image key={index} src={image.src} alt={image.alt} width={600} height={800} className='object-cover h-65 lg:h-70 w-full' />
                ))}
            </section>
            <section className='col-span-2 w-full flex flex-col items-start gap-6'>
                {title.length > 0 && content.length > 0 && (
                    <article className='w-full flex flex-col items-start gap-4 lg:gap-9'>
                        <h3 className='text-base lg:text-[20px] font-bold flex flex-col items-start'>
                            {title.map((text, index) => (
                                <span key={index}>{text}</span>
                            ))}
                        </h3>
                        <div className='w-full flex flex-col items-start gap-4'>
                            {content.map((item, index) => {
                                if (item.type === "heading") {
                                    return <h4 key={index} className='text-sm lg:text-base font-bold -mb-3'>{item.value}</h4>;
                                }
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
                )}
                {children}
            </section>
        </main>
    )
}