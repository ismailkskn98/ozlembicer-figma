import MotionScrollInView from '@/components/common/motionScrollInView'
import MotionScrollInViewVariant from '@/components/common/motionScrollInViewVariant'
import Image from 'next/image'
import React from 'react'

export default function SpeaksLanguage() {
    const languages = [
        { flag: '/images/about/united-states.png', name: 'English', alt: 'English Support' },
        { flag: '/images/about/italy.png', name: 'Italiano', alt: 'Italian Support' },
        { flag: '/images/about/franc.png', name: 'Français', alt: 'French Support' },
        { flag: '/images/about/germany.png', name: 'Deutsch', alt: 'German Support' }
    ];

    return (
        <section className='fluid gridContainer w-full pb-2 sm:pb-10 pt-10'>
            <main className='w-full max-w-full xl:max-w-6xl mx-auto bg-linear-to-br from-coffee-dark via-wine-brown to-coffee-dark py-12 sm:py-16 px-6 sm:px-12 rounded-4xl shadow-2xl'>
                <MotionScrollInView className='text-center mb-8'>
                    <h2 className='text-ivory-soft text-2xl sm:text-4xl font-semibold mb-3 sm:mb-4'>
                        Multilingual Support
                    </h2>
                    <p className='text-ivory-soft/80 text-base sm:text-xl max-w-2xl mx-auto'>
                        Contact Directly To Someone Who Speaks In Your Language
                    </p>
                </MotionScrollInView>

                <MotionScrollInViewVariant
                    className='grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto'
                    childClassname='group'
                >
                    {languages.map((lang, index) => (
                        <div
                            key={index}
                            className='flex flex-col items-center gap-4 p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl'
                        >
                            <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shadow-lg ring-2 ring-white/20 group-hover:ring-white/40 transition-all'>
                                <Image
                                    src={lang.flag}
                                    alt={lang.alt}
                                    width={80}
                                    height={80}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <span className='text-ivory-soft text-sm sm:text-base font-medium'>
                                {lang.name}
                            </span>
                        </div>
                    ))}
                </MotionScrollInViewVariant>
            </main>
        </section>
    )
}
