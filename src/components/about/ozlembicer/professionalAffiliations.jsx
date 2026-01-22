import React from 'react'

export default function ProfessionalAffiliations() {
    return (
        <section className='fluid gridContainer w-full bg-coffee-dark text-ivory-soft py-18.75 border-y border-gold'>
            <main className='w-full max-w-286.5 mx-auto flex flex-col items-start gap-6.25'>
                <h2 className='text-[32px]'>Professional Affiliations</h2>
                <article className='flex flex-col items-start'>
                    <h3 className='font-bold'>Diplomatic Roles</h3>
                    <p>ABHRS</p>
                </article>
                <article className='flex flex-col items-start'>
                    <h3 className='font-bold'>Board Memberships</h3>
                    <p>AAAM, TSHRS, MESTDER</p>
                </article>
                <article className='flex flex-col items-start'>
                    <h3 className='font-bold'>Educator Roles</h3>
                    <p>Turkish Ministry of Health, ABHRS, ISHRS, IAHRS</p>
                </article>
                <article className='flex flex-col items-start'>
                    <h3 className='font-bold'>Professional Memberships</h3>
                    <p>TBB, FUE EUROPE, AAAM, TSHRS, MESTDER, MED, MS, TTB</p>
                </article>
            </main>
        </section>
    )
}
