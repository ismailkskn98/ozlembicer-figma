import Image from 'next/image'
import React from 'react'
import MotionScrollInView from './motionScrollInView'
import MotionScrollInViewVariant from './motionScrollInViewVariant'
import { BsTelephone } from "react-icons/bs";

const appointmentSteps = [
    {
        id: 1,
        title: 'Contact From',
        titleBr: 'WhatsApp',
        hoverTitle: 'Fill Application',
        hoverTitleBr: 'Form',
        image: null,
        icon: BsTelephone,
        alt: 'whatsapp',
        imageWidth: 'w-14 sm:w-16 lg:w-69.25',
        description: 'Since 1998, I have worked on hair restoration and hair transplants. My clinic provides the highest level of service and expertise to turn our patients\' dreams into reality. We have built an unmatched reputation by offering our patients superior results while utilizing the best technology.'
    },
    {
        id: 2,
        title: 'Get Online',
        titleBr: 'Consultation',
        hoverTitle: 'Fill Application',
        hoverTitleBr: 'Form',
        image: '/images/appointment-icon-2-new.png',
        alt: 'consultation',
        imageWidth: 'w-14 sm:w-16 lg:w-69.25',
        description: 'Since 1998, I have worked on hair restoration and hair transplants. My clinic provides the highest level of service and expertise to turn our patients\' dreams into reality. We have built an unmatched reputation by offering our patients superior results while utilizing the best technology.'
    },
    {
        id: 3,
        title: 'Complete Your',
        titleBr: 'Appointment',
        hoverTitle: 'Fill Application',
        hoverTitleBr: 'Form',
        image: '/images/appointment-icon-3-new.png',
        alt: 'appointment',
        imageWidth: 'w-14 sm:w-16 lg:w-69.25',
        description: 'Since 1998, I have worked on hair restoration and hair transplants. My clinic provides the highest level of service and expertise to turn our patients\' dreams into reality. We have built an unmatched reputation by offering our patients superior results while utilizing the best technology.'
    }
]

export default function HowToAppointment() {
    return (
        <section className='w-full py-15'>
            <main className='w-full flex flex-col items-start lg:items-center justify-start lg:justify-center gap-6'>
                <MotionScrollInView className="w-full">
                    <h2 className='w-full max-w-sm lg:max-w-6xl lg:mx-auto text-[20px] lg:text-[30px] text-start lg:text-center h-auto lg:h-15 text-coffee-dark border-b border-coffee-dark'>How To Make An Appointment</h2>
                </MotionScrollInView>
                <MotionScrollInViewVariant className='w-full max-w-full xl:max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6' childClassname={"group w-full max-w-sm lg:max-w-full flex flex-col items-center justify-center bg-coffee-dark rounded-4xl pt-6 lg:pt-8 px-2.5 pb-8 lg:pb-14.75 h-full max-h-95"}>
                    {appointmentSteps.map((step) => (
                        <article key={step.id} className='group w-full max-w-sm lg:max-w-full flex flex-col items-center justify-center bg-coffee-dark rounded-4xl pt-4 sm:pt-6 lg:pt-8 px-2.5 pb-5 sm:pb-8 lg:pb-14.75 h-full max-h-95'>
                            <div className='w-xs lg:w-auto flex items-center gap-3 sm:gap-4 lg:gap-0 text-ivory-soft px-3 sm:px-0'>
                                {step.image ? (
                                    <Image src={step.image} alt={step.alt} width={300} height={200} className={`lg:hidden object-contain object-center ${step.imageWidth} h-full`} />
                                ) : (
                                    <step.icon className='lg:hidden w-15 sm:w-16 lg:w-69.25 h-auto text-ivory-soft' />
                                )}
                                <span className='text-[70px] sm:text-[80px] 2xl:text-[96px]'>{step.id}</span>
                                <div className='relative w-full'>
                                    <p className='text-[23px] sm:text-[28px] 2xl:text-[32px] leading-8 2xl:leading-9 opacity-0 lg:opacity-100 lg:group-hover:opacity-0 transition-all duration-300'>{step.title}<br />{step.titleBr}</p>
                                    <p className='w-full absolute left-0 top-1/2 -translate-y-1/2 text-[23px] sm:text-[28px] 2xl:text-[32px] leading-8 2xl:leading-9 text-nowrap opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200'>{step.hoverTitle}<br />{step.hoverTitleBr}</p>
                                </div>
                            </div>
                            <div className='relative h-38.25 w-full lg:w-auto'>
                                {step.image ? (
                                    <Image src={step.image} alt={step.alt} width={300} height={200} className={`opacity-0 lg:opacity-100 lg:group-hover:opacity-0 transition-all duration-300 object-contain object-center ${step.imageWidth} h-full`} />
                                ) : (
                                    <step.icon className='opacity-0 lg:opacity-100 lg:group-hover:opacity-0 transition-all duration-300 w-14 sm:w-16 lg:w-38.25 h-auto text-ivory-soft' />
                                )}
                                <p className='w-xs lg:w-xs px-2 sm:px-0 absolute left-1/2 top-1/2 -translate-1/2 text-[14px] text-ivory-soft opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200'>{step.description}</p>
                            </div>
                        </article>
                    ))}
                </MotionScrollInViewVariant>
                <MotionScrollInView className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-6'>
                    <article className='group flex flex-col items-start gap-3.75 text-coffee-dark'>
                        <h3 className='text-[32px] leading-9'>Hair Transplantation in<br /> Istanbul, Turkey</h3>
                        <p className='max-w-141'>Dr. Özlem Bicer brings over 25 years of experience and is an esteemed member of the International Society of Hair Restoration Surgery (ISHRS). She is supported by a dedicated team of highly trained nurses, making us one of the most reputable and experienced hair transplant teams worldwide.</p>
                    </article>
                    <article className='group relative w-full lg:w-auto max-w-sm lg:max-w-full flex-1 min-h-60 lg:min-h-74.25 flex items-center justify-center bg-coffee-dark text-ivory-soft rounded-4xl py-25 px-12.5'>
                        <span className='opacity-0 lg:opacity-100 lg:group-hover:opacity-0 transition-opacity duration-300 uppercase text-[23px] sm:text-[28px] md:text-[32px] text-nowrap'>Contact US</span>
                        <div className='w-fit flex flex-col items-center justify-center gap-2 absolute left-1/2 top-1/2 -translate-1/2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300'>
                            <span className='inline-block lg:hidden uppercase text-[23px] sm:text-[28px] md:text-[32px] text-nowrap'>Contact US</span>
                            <div className='flex flex-col items-center justify-center text-[23px] sm:text-[28px] lg:text-[32px]'>
                                <a href="mailto:info@ozlembicer.com">info@ozlembicer.com</a>
                                <a href="tel:+905334141313">+90 (533) 414 13 13</a>
                            </div>
                        </div>
                    </article>
                </MotionScrollInView>
            </main>
        </section>
    )
}
