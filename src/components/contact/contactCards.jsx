import React from 'react'
import MotionScrollInView from '../common/motionScrollInView'
import MotionScrollInViewVariant from '../common/motionScrollInViewVariant'

export default function ContactCards() {
    return (
        <section className='fluid gridContainer pt-15'>
            <main className='w-full flex flex-col items-start min-[900px]:items-center justify-start min-[900px]:justify-center gap-6'>
                <MotionScrollInView className="w-full">
                    <h2 className='w-full max-w-6xl lg:mx-auto text-[20px] lg:text-[30px] text-start lg:text-center h-auto lg:h-15 text-coffee-dark border-b border-coffee-dark'>How To Make An Appointment</h2>
                </MotionScrollInView>
                <MotionScrollInViewVariant className='w-fit min-[900px]:w-full max-w-full xl:max-w-6xl min-[900px]:mx-auto grid grid-cols-1 min-[900px]:grid-cols-3 gap-6'>
                    <article className='flex flex-col items-start justify-center bg-coffee-dark text-ivory-soft rounded-4xl pt-3 lg:pt-8 px-2.5 pb-8 lg:pb-14.75 max-h-105'>
                        <div className='flex items-center'>
                            <span className='text-[70px] sm:text-[75px] 2xl:text-[96px]'>1</span>
                            <p className='text-[23px] sm:text-[28px] 2xl:text-[32px] leading-8 2xl:leading-9'>Schedule an<br />Appointment</p>
                        </div>
                        <div className='flex flex-col items-start text-[12px] lg:text-[15px] max-w-70 sm:mx-auto px-3'>
                            <p>Since 1998, I have worked on hair restoration and hair transplants. My clinic provides the highest level of service and expertise to turn our patients’ dreams into reality. We have built an unmatched reputation by offering our patients superior results while utilizing the best technology and adhering to the safest medical practices.</p>
                            <p className='mt-3'>Ozlem Bicer, M.D.</p>
                        </div>
                    </article>
                    <article className='flex flex-col items-start justify-center bg-coffee-dark text-ivory-soft rounded-4xl pt-3 lg:pt-8 px-2.5 pb-8 lg:pb-14.75 max-h-105'>
                        <div className='flex items-center'>
                            <span className='text-[70px] sm:text-[75px] 2xl:text-[96px]'>2</span>
                            <p className='text-[23px] sm:text-[28px] 2xl:text-[32px] leading-8 2xl:leading-9'>Get Online<br />Consultation</p>
                        </div>
                        <div className='flex flex-col items-start text-[12px] lg:text-[15px] max-w-70 sm:mx-auto px-3'>
                            <p>Since 1998, I have worked on hair restoration and hair transplants. My clinic provides the highest level of service and expertise to turn our patients’ dreams into reality. We have built an unmatched reputation by offering our patients superior results while utilizing the best technology and adhering to the safest medical practices.</p>
                            <p className='mt-3'>Ozlem Bicer, M.D.</p>
                        </div>
                    </article>
                    <article className='flex flex-col items-start justify-center bg-coffee-dark text-ivory-soft rounded-4xl pt-3 lg:pt-8 px-2.5 pb-8 lg:pb-14.75 max-h-105'>
                        <div className='flex items-center'>
                            <span className='text-[70px] sm:text-[75px] 2xl:text-[96px]'>3</span>
                            <p className='text-[23px] sm:text-[28px] 2xl:text-[32px] leading-8 2xl:leading-9'>Complete Your<br />Appointment</p>
                        </div>
                        <div className='flex flex-col items-start text-[12px] lg:text-[15px] max-w-70 sm:mx-auto px-3'>
                            <p>Since 1998, I have worked on hair restoration and hair transplants. My clinic provides the highest level of service and expertise to turn our patients’ dreams into reality. We have built an unmatched reputation by offering our patients superior results while utilizing the best technology and adhering to the safest medical practices.</p>
                            <p className='mt-3'>Ozlem Bicer, M.D.</p>
                        </div>
                    </article>
                </MotionScrollInViewVariant>
            </main>
        </section>
    )
}
