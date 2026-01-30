import HairTransplantMain from '@/components/hairTransplant'
import React from 'react'

export async function generateStaticParams() {
    const locales = ["en", "de", "fr", "it"];

    return locales.map((locale) => ({
        locale: locale,
    }));
}


export default async function page({ params }) {
    return <HairTransplantMain locale={params.locale} />
}
