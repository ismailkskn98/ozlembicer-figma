import React from 'react';
import SubHeader from './subHeader';
import GeneralInfo from './generalInfo';

const SectionWrapper = ({ linksItems, id, title, subtitle, imageUrl, generalInfoProps, children }) => {
    return (
        <section className='relative w-full fluid gridContainer'>
            {linksItems && (
                <SubHeader
                    linksItems={linksItems}
                    id={id}
                    title={title}
                    subtitle={subtitle}
                    imageUrl={imageUrl}
                />
            )}
            <main className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-start gap-8 sm:gap-16 lg:gap-25 py-10 sm:py-16 lg:py-25'>
                {generalInfoProps && (
                    <GeneralInfo {...generalInfoProps} />
                )}
                {children}
            </main>
        </section>
    );
};

export default SectionWrapper;