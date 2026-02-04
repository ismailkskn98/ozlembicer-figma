import Image from 'next/image'
import React from 'react'
import MotionScrollInView from './motionScrollInView'
import MotionScrollInViewVariant from './motionScrollInViewVariant'

const appointmentSteps = [
    {
        id: 1,
        title: 'Contact From',
        titleBr: 'WhatsApp',
        hoverTitle: 'Fill Application',
        hoverTitleBr: 'Form',
        image: '/images/appointment-icon-1.png',
        alt: 'whatsapp',
        imageWidth: 'w-fit'
    },
    {
        id: 2,
        title: 'Get Online',
        titleBr: 'Consultation',
        hoverTitle: 'Fill Application',
        hoverTitleBr: 'Form',
        image: '/images/appointment-icon-2.png',
        alt: 'consultation',
        imageWidth: 'w-69.25'
    },
    {
        id: 3,
        title: 'Complete Your',
        titleBr: 'Appointment',
        hoverTitle: 'Fill Application',
        hoverTitleBr: 'Form',
        image: '/images/appointment-icon-3.png',
        alt: 'appointment',
        imageWidth: 'w-fit'
    }
]

const description = 'Since 1998, I have worked on hair restoration and hair transplants. My clinic provides the highest level of service and expertise to turn our patients\' dreams into reality. We have built an unmatched reputation by offering our patients superior results while utilizing the best technology.'

export default function HowToAppointment() {
    return (
        <section className='w-full fluid gridContainer py-15'>
            <main className='w-full flex flex-col items-center justify-center gap-6'>
                <MotionScrollInView className="w-full">
                    <h2 className='w-full max-w-full xl:max-w-6xl mx-auto text-[25px] lg:text-[30px] text-center h-auto lg:h-15 text-coffee-dark border-b border-coffee-dark'>How To Make An Appointment</h2>
                </MotionScrollInView>
                <MotionScrollInViewVariant className='w-full max-w-full xl:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    {appointmentSteps.map((step) => (
                        <article key={step.id} className='group flex flex-col items-center justify-center bg-coffee-dark rounded-4xl pt-8 px-2.5 pb-14.75 h-full max-h-95'>
                            <div className='flex items-center text-ivory-soft'>
                                <span className='text-[80px] lg:text-[96px]'>{step.id}</span>
                                <div className='relative w-full'>
                                    <p className='text-[25px] lg:text-[32px] leading-8 lg:leading-9 group-hover:opacity-0 transition-all duration-300'>{step.title}<br />{step.titleBr}</p>
                                    <p className='w-full absolute left-0 top-1/2 -translate-y-1/2 text-[25px] lg:text-[32px] leading-8 lg:leading-9 text-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200'>{step.hoverTitle}<br />{step.hoverTitleBr}</p>
                                </div>
                            </div>
                            <div className='relative h-38.25'>
                                <Image src={step.image} alt={step.alt} width={300} height={200} className={`group-hover:opacity-0 transition-all duration-300 object-contain object-center ${step.imageWidth} h-full`} />
                                <p className='w-full absolute left-1/2 top-1/2 -translate-1/2 text-[14px] text-ivory-soft opacity-0 group-hover:opacity-100 transition-opacity duration-200'>{description}</p>
                            </div>
                        </article>
                    ))}
                </MotionScrollInViewVariant>
                <MotionScrollInView className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-6'>
                    <article className='group flex flex-col items-start gap-3.75 text-coffee-dark'>
                        <h3 className='text-[32px]'>Hair Transplantation in<br /> Istanbul, Turkey</h3>
                        <p className='max-w-141'>Dr. Özlem Bicer brings over 25 years of experience and is an esteemed member of the International Society of Hair Restoration Surgery (ISHRS). She is supported by a dedicated team of highly trained nurses, making us one of the most reputable and experienced hair transplant teams worldwide.</p>
                    </article>
                    <article className='group relative w-full lg:w-auto flex-1 min-h-60 lg:min-h-74.25 flex items-center justify-center bg-coffee-dark text-ivory-soft rounded-4xl py-25 px-12.5'>
                        <span className='group-hover:opacity-0 transition-opacity duration-300 uppercase text-[25px] md:text-[32px] text-nowrap'>Contact US</span>
                        <div className='w-fit flex flex-col items-center justify-center text-[32px] absolute left-1/2 top-1/2 -translate-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <a href="mailto:info@ozlembicer.com">info@ozlembicer.com</a>
                            <a href="tel:+905334141313">+90 (533) 414 13 13</a>
                        </div>
                    </article>
                </MotionScrollInView>
            </main>
        </section>
    )
}
