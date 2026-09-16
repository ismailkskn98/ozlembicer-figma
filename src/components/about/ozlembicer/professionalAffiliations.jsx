import React from 'react'
import { useTranslations } from 'next-intl';

export default function ProfessionalAffiliations() {
   const t = useTranslations('Content.about.ozlembicer.professionalAffiliations');
    return (
        <section className='relative fluid gridContainer w-full bg-wine-brown text-ivory-soft py-12 sm:py-16 lg:py-18.75 border-y border-gold'>
            <div className='w-full fluid absolute inset-x-0 top-0 h-0.5 bg-gold z-0' />
            <div className='w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0' />
            <main className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-start gap-4 sm:gap-6.25'>
                <h2 className='text-[20px] sm:text-[32px]'>{t('heading1')}</h2>
                <section className='w-full flex flex-col items-start gap-4'>
                    <article className='flex flex-col items-start'>
                        <h3 className='font-bold'>{t('heading2')}</h3>
                        <p className='text-sm sm:text-base'>{t('paragraph1')}</p>
                    </article>
                    <article className='flex flex-col items-start'>
                        <h3 className='font-bold'>{t('heading3')}</h3>
                        <p className='text-sm sm:text-base'>{t('paragraph2')}</p>
                    </article>
                    <article className='flex flex-col items-start'>
                        <h3 className='font-bold'>{t('heading4')}</h3>
                        <p className='text-sm sm:text-base'>{t('paragraph3')}</p>
                    </article>
                    <article className='flex flex-col items-start'>
                        <h3 className='font-bold'>{t('heading5')}</h3>
                        <p className='text-sm sm:text-base'>{t('paragraph4')}</p>
                    </article>
                </section>
            </main>
        </section>
    )
}
