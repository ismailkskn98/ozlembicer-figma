import React from 'react';
import SubHeader from '../common/subHeader';
import GeneralInfo from '../common/generalInfo';

const SectionWrapper = ({ id, title, subtitle, imageUrl, generalInfoProps, children }) => {
    return (
        <section className='w-full fluid gridContainer'>
            <SubHeader
                id={id}
                title={title}
                subtitle={subtitle}
                imageUrl={imageUrl}
            />
            <main className='w-full max-w-6xl mx-auto flex flex-col items-start gap-25 py-25'>
                <GeneralInfo {...generalInfoProps} />
                {children}
            </main>
        </section>
    );
};

export default SectionWrapper;