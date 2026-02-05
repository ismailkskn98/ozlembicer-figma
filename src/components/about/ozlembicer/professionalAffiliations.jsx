import React from 'react'

export default function ProfessionalAffiliations() {
    return (
        <section className='relative fluid gridContainer w-full bg-coffee-dark text-ivory-soft py-12 sm:py-16 lg:py-18.75 border-y border-gold'>
            <div className='w-full fluid absolute inset-x-0 top-0 h-0.5 bg-gold z-0' />
            <div className='w-full fluid absolute inset-x-0 bottom-0 h-0.5 bg-gold z-0' />
            <main className='w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-start gap-4 sm:gap-6.25'>
                <h2 className='text-[20px] sm:text-[32px]'>Professional Affiliations</h2>
                <article className='flex flex-col items-start'>
                    <h3 className='font-bold'>Diplomatic Roles</h3>
                    <p className='text-sm sm:text-base'>ABHRS</p>
                </article>
                <article className='flex flex-col items-start'>
                    <h3 className='font-bold'>Board Memberships</h3>
                    <p className='text-sm sm:text-base'>AAAM, TSHRS, MESTDER</p>
                </article>
                <article className='flex flex-col items-start'>
                    <h3 className='font-bold'>Educator Roles</h3>
                    <p className='text-sm sm:text-base'>Turkish Ministry of Health, ABHRS, ISHRS, IAHRS</p>
                </article>
                <article className='flex flex-col items-start'>
                    <h3 className='font-bold'>Professional Memberships</h3>
                    <p className='text-sm sm:text-base'>TBB, FUE EUROPE, AAAM, TSHRS, MESTDER, MED, MS, TTB</p>
                </article>
            </main>
        </section>
    )
}
