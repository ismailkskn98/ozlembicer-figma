import React from 'react'
import MotionScrollInView from '../common/motionScrollInView'
import MotionScrollInViewVariant from '../common/motionScrollInViewVariant'
import { useTranslations } from 'next-intl';

export default function ContactCards() {
   const t = useTranslations('Content.contact.contactCards');
    return (
        <section className='fluid gridContainer pt-15'>
            <main className='w-full flex flex-col items-start min-[900px]:items-center justify-start min-[900px]:justify-center gap-6'>
                <MotionScrollInView className="w-full">
                    <h2 className='w-full max-w-6xl lg:mx-auto text-[20px] lg:text-[30px] text-start lg:text-center h-auto lg:h-15 text-coffee-dark border-b border-coffee-dark'>{t('heading1')}</h2>
                </MotionScrollInView>
                <MotionScrollInViewVariant className='w-fit min-[900px]:w-full max-w-full xl:max-w-6xl min-[900px]:mx-auto grid grid-cols-1 min-[900px]:grid-cols-3 gap-6'>
                    <article className='flex flex-col items-start justify-center bg-coffee-dark text-ivory-soft rounded-4xl pt-3 lg:pt-8 px-2.5 pb-8 lg:pb-14.75 max-h-105'>
                        <div className='flex items-center'>
                            <span className='text-[70px] sm:text-[75px] 2xl:text-[96px]'>1</span>
                            <p className='text-[23px] sm:text-[28px] 2xl:text-[32px] leading-8 2xl:leading-9'>{t('paragraph1')}<br />{t('paragraph2')}</p>
                        </div>
                        <div className='flex flex-col items-start text-[12px] lg:text-[15px] max-w-70 sm:mx-auto px-3'>
                            <p>{t('paragraph3')}</p>
                            <p className='mt-3'>{t('paragraph4')}</p>
                        </div>
                    </article>
                    <article className='flex flex-col items-start justify-center bg-coffee-dark text-ivory-soft rounded-4xl pt-3 lg:pt-8 px-2.5 pb-8 lg:pb-14.75 max-h-105'>
                        <div className='flex items-center'>
                            <span className='text-[70px] sm:text-[75px] 2xl:text-[96px]'>2</span>
                            <p className='text-[23px] sm:text-[28px] 2xl:text-[32px] leading-8 2xl:leading-9'>{t('paragraph5')}<br />{t('paragraph6')}</p>
                        </div>
                        <div className='flex flex-col items-start text-[12px] lg:text-[15px] max-w-70 sm:mx-auto px-3'>
                            <p>{t('paragraph7')}</p>
                            <p className='mt-3'>{t('paragraph8')}</p>
                        </div>
                    </article>
                    <article className='flex flex-col items-start justify-center bg-coffee-dark text-ivory-soft rounded-4xl pt-3 lg:pt-8 px-2.5 pb-8 lg:pb-14.75 max-h-105'>
                        <div className='flex items-center'>
                            <span className='text-[70px] sm:text-[75px] 2xl:text-[96px]'>3</span>
                            <p className='text-[23px] sm:text-[28px] 2xl:text-[32px] leading-8 2xl:leading-9'>{t('paragraph9')}<br />{t('paragraph10')}</p>
                        </div>
                        <div className='flex flex-col items-start text-[12px] lg:text-[15px] max-w-70 sm:mx-auto px-3'>
                            <p>{t('paragraph11')}</p>
                            <p className='mt-3'>{t('paragraph12')}</p>
                        </div>
                    </article>
                </MotionScrollInViewVariant>
            </main>
        </section>
    )
}
