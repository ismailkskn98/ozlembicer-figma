import React from 'react';
import Image from 'next/image';

export default function HowDoesItWork({ images = [], title, content = [], children }) {
    const RecursiveList = ({ items }) => {
        return (
            <ul className="leading-relaxed list-disc list-outside pl-5">
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
        <main className='w-full max-w-6xl mx-auto gap-6 grid grid-cols-3'>
            <section className='flex flex-col items-start gap-2.5 h-full'>
                {images.map((image, index) => (
                    <Image key={index} src={image.src} alt={image.alt} width={600} height={800} className='object-contain h-70 w-full' />
                ))}
            </section>
            <section className='col-span-2 w-full flex flex-col items-start gap-6'>
                <article className='w-full flex flex-col items-start gap-9'>
                    <h3 className='text-[20px] font-bold text-coffee-dark max-w-80 line-clamp-2'>{title}</h3>
                    <div className='w-full flex flex-col items-start gap-4 text-coffee-dark'>
                        {content.map((item, index) => {
                            if (item.type === "paragraph") {
                                return <p key={index}>{item.value}</p>;
                            }
                            if (item.type === "list") {
                                return <RecursiveList key={index} items={item.value} />;
                            }
                            return null;
                        })}
                    </div>
                </article>
                {children}
            </section>
        </main>
    )
}
