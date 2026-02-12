import HeroLogoCarousel from '@/components/common/logoCarousel'
import React from 'react'
import BeforeAfterHero from './beforeAfterHero'
import HowToAppointment from '@/components/common/howToAppointment'
import Image from 'next/image'

export default function BeforeAfterImagesMain({ children }) {
    return (
        <main className='w-full fluid gridContainer bg-ivory-soft'>
            <BeforeAfterHero />
            <div className='fluid gridContainer w-full bg-linear-to-b from-stone-beige via-ivory-soft to-stone-beige/50'>
                <HeroLogoCarousel />
                <header className='w-full fluid gridContainer border-y border-gold'>
                    <main className='w-full fluid gridContainer bg-linear-to-r from-coffee-dark via-wine-brown to-coffee-dark h-37.5 border-y border-gold py-2.5 text-ivory-soft'>
                        <div className='w-full fluid absolute inset-x-0 top-0 h-0.5 bg-gold z-0' />
                        <section className='w-full max-w-full xl:max-w-6xl mx-auto flex items-center justify-between gap-4'>
                            <h2 className={`flex flex-col text-[32px]`}>
                                <span>Hair Transplant</span> <span className='font-bold'>Before & After</span>
                            </h2>
                            <span className="object-contain bg-linear-to-l from-gold to-ivory-soft w-12 min-[330px]:w-14 sm:w-18 lg:w-22.5 h-12 min-[330px]:h-14 sm:h-18 lg:h-22.5 rounded-full" />
                        </section>
                    </main>
                </header>
                <main className='w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-16 py-16'>
                    <section className='w-full max-w-86.25 mx-auto bg-linear-to-b from-stone-beige to-ivory-soft p-2.5 rounded-[10px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
                        <div className={`w-full flex flex-col items-center justify-center gap-2.5 rounded-[10px]`}>
                            <div className='w-full flex items-center gap-1.25'>
                                <div className='relative w-full h-70 rounded-[5px] overflow-hidden'>
                                    <Image src="/images/patient-results/before.png" alt="Patient before" fill className='w-full h-full object-cover object-center rounded-[5px]' />
                                </div>
                                <div className='relative w-full h-70 rounded-[5px] overflow-hidden'>
                                    <Image src="/images/patient-results/after.png" alt="Patient after" width={300} height={250} className='w-full h-70 object-cover object-center rounded-[5px]' />
                                </div>
                            </div>
                            <article className='w-full grid grid-cols-3 place-content-stretch justify-items-stretch bg-coffee-dark text-ivory-soft px-2.5 rounded-[5px] h-15'>
                                <div className='relative flex flex-col items-center justify-center text-center gap-0.5'>
                                    <h5 className='font-bold text-[10px] sm:text-[12px]'>TECHNIQUE</h5>
                                    <Image src='/images/heroCard-line.png' alt='line' width={60} height={5} className='w-12.75 h-fit object-contain object-center' />
                                    <p className='text-[8px] sm:text-[10px]'>FUE (Micro Motor)</p>
                                    <Image src='/images/heroCard-line.png' alt='line' width={50} height={5} className='absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 -rotate-90 object-contain object-center w-10.5 h-4' />
                                </div>
                                <div className='relative flex flex-col items-center justify-center text-center gap-0.5'>
                                    <h5 className='font-bold text-[10px] sm:text-[12px]'>GRAFTS</h5>
                                    <Image src='/images/heroCard-line.png' alt='line' width={60} height={5} className='w-12.75 h-fit object-contain object-center' />
                                    <p className='text-[8px] sm:text-[10px]'>3.200</p>
                                    <Image src='/images/heroCard-line.png' alt='line' width={50} height={5} className='absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 -rotate-90 object-contain object-center w-10.5 h-4' />
                                </div>
                                <div className='relative flex flex-col items-center justify-center text-center gap-0.5'>
                                    <h5 className='font-bold text-[10px] sm:text-[12px]'>AFTER</h5>
                                    <Image src='/images/heroCard-line.png' alt='line' width={60} height={5} className='w-12.75 h-fit object-contain object-center' />
                                    <p className='text-[8px] sm:text-[10px]'>12 Months</p>
                                </div>
                            </article>
                        </div>
                    </section>
                    <section className='w-full max-w-86.25 mx-auto bg-linear-to-b from-stone-beige to-ivory-soft p-2.5 rounded-[10px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
                        <div className={`w-full flex flex-col items-center justify-center gap-2.5 rounded-[10px]`}>
                            <div className='w-full flex items-center gap-1.25'>
                                <div className='relative w-full h-70 rounded-[5px] overflow-hidden'>
                                    <Image src="/images/patient-results/before.png" alt="Patient before" fill className='w-full h-full object-cover object-center rounded-[5px]' />
                                </div>
                                <div className='relative w-full h-70 rounded-[5px] overflow-hidden'>
                                    <Image src="/images/patient-results/after.png" alt="Patient after" width={300} height={250} className='w-full h-70 object-cover object-center rounded-[5px]' />
                                </div>
                            </div>
                            <article className='w-full grid grid-cols-3 place-content-stretch justify-items-stretch bg-coffee-dark text-ivory-soft px-2.5 rounded-[5px] h-15'>
                                <div className='relative flex flex-col items-center justify-center text-center gap-0.5'>
                                    <h5 className='font-bold text-[10px] sm:text-[12px]'>TECHNIQUE</h5>
                                    <Image src='/images/heroCard-line.png' alt='line' width={60} height={5} className='w-12.75 h-fit object-contain object-center' />
                                    <p className='text-[8px] sm:text-[10px]'>FUE (Micro Motor)</p>
                                    <Image src='/images/heroCard-line.png' alt='line' width={50} height={5} className='absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 -rotate-90 object-contain object-center w-10.5 h-4' />
                                </div>
                                <div className='relative flex flex-col items-center justify-center text-center gap-0.5'>
                                    <h5 className='font-bold text-[10px] sm:text-[12px]'>GRAFTS</h5>
                                    <Image src='/images/heroCard-line.png' alt='line' width={60} height={5} className='w-12.75 h-fit object-contain object-center' />
                                    <p className='text-[8px] sm:text-[10px]'>3.200</p>
                                    <Image src='/images/heroCard-line.png' alt='line' width={50} height={5} className='absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 -rotate-90 object-contain object-center w-10.5 h-4' />
                                </div>
                                <div className='relative flex flex-col items-center justify-center text-center gap-0.5'>
                                    <h5 className='font-bold text-[10px] sm:text-[12px]'>AFTER</h5>
                                    <Image src='/images/heroCard-line.png' alt='line' width={60} height={5} className='w-12.75 h-fit object-contain object-center' />
                                    <p className='text-[8px] sm:text-[10px]'>12 Months</p>
                                </div>
                            </article>
                        </div>
                    </section>
                    <section className='w-full max-w-86.25 mx-auto bg-linear-to-b from-stone-beige to-ivory-soft p-2.5 rounded-[10px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
                        <div className={`w-full flex flex-col items-center justify-center gap-2.5 rounded-[10px]`}>
                            <div className='w-full flex items-center gap-1.25'>
                                <div className='relative w-full h-70 rounded-[5px] overflow-hidden'>
                                    <Image src="/images/patient-results/before.png" alt="Patient before" fill className='w-full h-full object-cover object-center rounded-[5px]' />
                                </div>
                                <div className='relative w-full h-70 rounded-[5px] overflow-hidden'>
                                    <Image src="/images/patient-results/after.png" alt="Patient after" width={300} height={250} className='w-full h-70 object-cover object-center rounded-[5px]' />
                                </div>
                            </div>
                            <article className='w-full grid grid-cols-3 place-content-stretch justify-items-stretch bg-coffee-dark text-ivory-soft px-2.5 rounded-[5px] h-15'>
                                <div className='relative flex flex-col items-center justify-center text-center gap-0.5'>
                                    <h5 className='font-bold text-[10px] sm:text-[12px]'>TECHNIQUE</h5>
                                    <Image src='/images/heroCard-line.png' alt='line' width={60} height={5} className='w-12.75 h-fit object-contain object-center' />
                                    <p className='text-[8px] sm:text-[10px]'>FUE (Micro Motor)</p>
                                    <Image src='/images/heroCard-line.png' alt='line' width={50} height={5} className='absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 -rotate-90 object-contain object-center w-10.5 h-4' />
                                </div>
                                <div className='relative flex flex-col items-center justify-center text-center gap-0.5'>
                                    <h5 className='font-bold text-[10px] sm:text-[12px]'>GRAFTS</h5>
                                    <Image src='/images/heroCard-line.png' alt='line' width={60} height={5} className='w-12.75 h-fit object-contain object-center' />
                                    <p className='text-[8px] sm:text-[10px]'>3.200</p>
                                    <Image src='/images/heroCard-line.png' alt='line' width={50} height={5} className='absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 -rotate-90 object-contain object-center w-10.5 h-4' />
                                </div>
                                <div className='relative flex flex-col items-center justify-center text-center gap-0.5'>
                                    <h5 className='font-bold text-[10px] sm:text-[12px]'>AFTER</h5>
                                    <Image src='/images/heroCard-line.png' alt='line' width={60} height={5} className='w-12.75 h-fit object-contain object-center' />
                                    <p className='text-[8px] sm:text-[10px]'>12 Months</p>
                                </div>
                            </article>
                        </div>
                    </section>
                    <section className='w-full max-w-86.25 mx-auto bg-linear-to-b from-stone-beige to-ivory-soft p-2.5 rounded-[10px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
                        <div className={`w-full flex flex-col items-center justify-center gap-2.5 rounded-[10px]`}>
                            <div className='w-full flex items-center gap-1.25'>
                                <div className='relative w-full h-70 rounded-[5px] overflow-hidden'>
                                    <Image src="/images/patient-results/before.png" alt="Patient before" fill className='w-full h-full object-cover object-center rounded-[5px]' />
                                </div>
                                <div className='relative w-full h-70 rounded-[5px] overflow-hidden'>
                                    <Image src="/images/patient-results/after.png" alt="Patient after" width={300} height={250} className='w-full h-70 object-cover object-center rounded-[5px]' />
                                </div>
                            </div>
                            <article className='w-full grid grid-cols-3 place-content-stretch justify-items-stretch bg-coffee-dark text-ivory-soft px-2.5 rounded-[5px] h-15'>
                                <div className='relative flex flex-col items-center justify-center text-center gap-0.5'>
                                    <h5 className='font-bold text-[10px] sm:text-[12px]'>TECHNIQUE</h5>
                                    <Image src='/images/heroCard-line.png' alt='line' width={60} height={5} className='w-12.75 h-fit object-contain object-center' />
                                    <p className='text-[8px] sm:text-[10px]'>FUE (Micro Motor)</p>
                                    <Image src='/images/heroCard-line.png' alt='line' width={50} height={5} className='absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 -rotate-90 object-contain object-center w-10.5 h-4' />
                                </div>
                                <div className='relative flex flex-col items-center justify-center text-center gap-0.5'>
                                    <h5 className='font-bold text-[10px] sm:text-[12px]'>GRAFTS</h5>
                                    <Image src='/images/heroCard-line.png' alt='line' width={60} height={5} className='w-12.75 h-fit object-contain object-center' />
                                    <p className='text-[8px] sm:text-[10px]'>3.200</p>
                                    <Image src='/images/heroCard-line.png' alt='line' width={50} height={5} className='absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 -rotate-90 object-contain object-center w-10.5 h-4' />
                                </div>
                                <div className='relative flex flex-col items-center justify-center text-center gap-0.5'>
                                    <h5 className='font-bold text-[10px] sm:text-[12px]'>AFTER</h5>
                                    <Image src='/images/heroCard-line.png' alt='line' width={60} height={5} className='w-12.75 h-fit object-contain object-center' />
                                    <p className='text-[8px] sm:text-[10px]'>12 Months</p>
                                </div>
                            </article>
                        </div>
                    </section>
                    <section className='w-full max-w-86.25 mx-auto bg-linear-to-b from-stone-beige to-ivory-soft p-2.5 rounded-[10px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
                        <div className={`w-full flex flex-col items-center justify-center gap-2.5 rounded-[10px]`}>
                            <div className='w-full flex items-center gap-1.25'>
                                <div className='relative w-full h-70 rounded-[5px] overflow-hidden'>
                                    <Image src="/images/patient-results/before.png" alt="Patient before" fill className='w-full h-full object-cover object-center rounded-[5px]' />
                                </div>
                                <div className='relative w-full h-70 rounded-[5px] overflow-hidden'>
                                    <Image src="/images/patient-results/after.png" alt="Patient after" width={300} height={250} className='w-full h-70 object-cover object-center rounded-[5px]' />
                                </div>
                            </div>
                            <article className='w-full grid grid-cols-3 place-content-stretch justify-items-stretch bg-coffee-dark text-ivory-soft px-2.5 rounded-[5px] h-15'>
                                <div className='relative flex flex-col items-center justify-center text-center gap-0.5'>
                                    <h5 className='font-bold text-[10px] sm:text-[12px]'>TECHNIQUE</h5>
                                    <Image src='/images/heroCard-line.png' alt='line' width={60} height={5} className='w-12.75 h-fit object-contain object-center' />
                                    <p className='text-[8px] sm:text-[10px]'>FUE (Micro Motor)</p>
                                    <Image src='/images/heroCard-line.png' alt='line' width={50} height={5} className='absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 -rotate-90 object-contain object-center w-10.5 h-4' />
                                </div>
                                <div className='relative flex flex-col items-center justify-center text-center gap-0.5'>
                                    <h5 className='font-bold text-[10px] sm:text-[12px]'>GRAFTS</h5>
                                    <Image src='/images/heroCard-line.png' alt='line' width={60} height={5} className='w-12.75 h-fit object-contain object-center' />
                                    <p className='text-[8px] sm:text-[10px]'>3.200</p>
                                    <Image src='/images/heroCard-line.png' alt='line' width={50} height={5} className='absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 -rotate-90 object-contain object-center w-10.5 h-4' />
                                </div>
                                <div className='relative flex flex-col items-center justify-center text-center gap-0.5'>
                                    <h5 className='font-bold text-[10px] sm:text-[12px]'>AFTER</h5>
                                    <Image src='/images/heroCard-line.png' alt='line' width={60} height={5} className='w-12.75 h-fit object-contain object-center' />
                                    <p className='text-[8px] sm:text-[10px]'>12 Months</p>
                                </div>
                            </article>
                        </div>
                    </section>
                    <section className='w-full max-w-86.25 mx-auto bg-linear-to-b from-stone-beige to-ivory-soft p-2.5 rounded-[10px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
                        <div className={`w-full flex flex-col items-center justify-center gap-2.5 rounded-[10px]`}>
                            <div className='w-full flex items-center gap-1.25'>
                                <div className='relative w-full h-70 rounded-[5px] overflow-hidden'>
                                    <Image src="/images/patient-results/before.png" alt="Patient before" fill className='w-full h-full object-cover object-center rounded-[5px]' />
                                </div>
                                <div className='relative w-full h-70 rounded-[5px] overflow-hidden'>
                                    <Image src="/images/patient-results/after.png" alt="Patient after" width={300} height={250} className='w-full h-70 object-cover object-center rounded-[5px]' />
                                </div>
                            </div>
                            <article className='w-full grid grid-cols-3 place-content-stretch justify-items-stretch bg-coffee-dark text-ivory-soft px-2.5 rounded-[5px] h-15'>
                                <div className='relative flex flex-col items-center justify-center text-center gap-0.5'>
                                    <h5 className='font-bold text-[10px] sm:text-[12px]'>TECHNIQUE</h5>
                                    <Image src='/images/heroCard-line.png' alt='line' width={60} height={5} className='w-12.75 h-fit object-contain object-center' />
                                    <p className='text-[8px] sm:text-[10px]'>FUE (Micro Motor)</p>
                                    <Image src='/images/heroCard-line.png' alt='line' width={50} height={5} className='absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 -rotate-90 object-contain object-center w-10.5 h-4' />
                                </div>
                                <div className='relative flex flex-col items-center justify-center text-center gap-0.5'>
                                    <h5 className='font-bold text-[10px] sm:text-[12px]'>GRAFTS</h5>
                                    <Image src='/images/heroCard-line.png' alt='line' width={60} height={5} className='w-12.75 h-fit object-contain object-center' />
                                    <p className='text-[8px] sm:text-[10px]'>3.200</p>
                                    <Image src='/images/heroCard-line.png' alt='line' width={50} height={5} className='absolute top-1/2 -translate-y-1/2 left-full -translate-x-1/2 -rotate-90 object-contain object-center w-10.5 h-4' />
                                </div>
                                <div className='relative flex flex-col items-center justify-center text-center gap-0.5'>
                                    <h5 className='font-bold text-[10px] sm:text-[12px]'>AFTER</h5>
                                    <Image src='/images/heroCard-line.png' alt='line' width={60} height={5} className='w-12.75 h-fit object-contain object-center' />
                                    <p className='text-[8px] sm:text-[10px]'>12 Months</p>
                                </div>
                            </article>
                        </div>
                    </section>
                </main>
                {children}
                <div className='-mt-10 lg:mt-0'>
                    <HowToAppointment />
                </div>
            </div>
        </main>
    )
}
