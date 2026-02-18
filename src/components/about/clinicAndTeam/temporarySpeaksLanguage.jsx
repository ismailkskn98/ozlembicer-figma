'use client';
import MotionScrollInView from '@/components/common/motionScrollInView'
import MotionScrollInViewVariant from '@/components/common/motionScrollInViewVariant'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from 'next/image'
import React, { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'

const comingSoonMessages = {
    en: {
        title: "Coming Soon",
        message: "This section is under construction. Thank you for your understanding."
    },
    de: {
        title: "Demnächst verfügbar",
        message: "Dieser Bereich befindet sich im Aufbau. Vielen Dank für Ihr Verständnis."
    },
    fr: {
        title: "Prochainement disponible",
        message: "Cette section est en construction. Merci de votre compréhension."
    },
    it: {
        title: "Prossimamente disponibile",
        message: "Questa sezione è in costruzione. Grazie per la vostra comprensione."
    },
};

const localeMap = {
    'English': 'en',
    'Italiano': 'it',
    'Français': 'fr',
    'Deutsch': 'de',
};

export default function TemporarySpeaksLanguage() {
    const t = useTranslations('SpeaksLanguage');
    const tModal = useTranslations('LanguageModal');
    const locale = useLocale();

    const [confirmOpen, setConfirmOpen] = useState(false);
    const [comingSoonOpen, setComingSoonOpen] = useState(false);
    const [pendingLang, setPendingLang] = useState(null);

    const languages = [
        { flag: '/images/about/united-states.png', name: 'English', alt: 'English Support' },
        { flag: '/images/about/italy.png', name: 'Italiano', alt: 'Italian Support' },
        { flag: '/images/about/franc.png', name: 'Français', alt: 'French Support' },
        { flag: '/images/about/germany.png', name: 'Deutsch', alt: 'German Support' },
    ];

    const handleCardClick = (lang) => {
        const targetLocale = localeMap[lang.name];
        if (!targetLocale || targetLocale === locale) return;
        setPendingLang({ name: lang.name, locale: targetLocale });
        setConfirmOpen(true);
    };

    const handleConfirm = () => {
        setConfirmOpen(false);
        setComingSoonOpen(true);
    };

    const handleCancel = () => {
        setConfirmOpen(false);
        setPendingLang(null);
    };

    const handleComingSoonClose = () => {
        setComingSoonOpen(false);
        setPendingLang(null);
    };

    return (
        <>
            <section className='fluid gridContainer w-full pb-2 sm:pb-10 pt-10'>
                <main className='relative w-full max-w-full xl:max-w-6xl mx-auto bg-linear-to-br from-coffee-dark via-wine-brown to-coffee-dark py-12 sm:py-16 px-6 sm:px-12 rounded-4xl shadow-xl'>
                    <div className='absolute z-0 inset-0 w-full h-full rounded-4xl bg-[url("/images/world.svg")] bg-center bg-cover bg-fixed bg-no-repeat opacity-20' />
                    <MotionScrollInView className='relative z-20 text-center mb-8'>
                        <h2 className='text-ivory-soft text-2xl sm:text-4xl font-semibold mb-3 sm:mb-4'>
                            {t('heading')}
                        </h2>
                        <p className='text-ivory-soft/80 text-base sm:text-xl max-w-2xl mx-auto'>
                            {t('subheading')}
                        </p>
                    </MotionScrollInView>

                    <MotionScrollInViewVariant
                        className='relative z-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto'
                        childClassname='group'
                    >
                        {languages.map((lang, index) => {
                            const isActive = localeMap[lang.name] === locale;
                            return (
                                <div
                                    key={index}
                                    onClick={() => handleCardClick(lang)}
                                    className={`flex flex-col items-center gap-4 p-4 sm:p-6 backdrop-blur-sm rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-xl
                                        ${isActive
                                            ? 'bg-white/15 border-gold/50 ring-1 ring-gold/30 cursor-default'
                                            : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 cursor-pointer'
                                        }`}
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
                            );
                        })}
                    </MotionScrollInViewVariant>
                </main>
            </section>

            {/* Step 1: Onay modalı */}
            <Dialog open={confirmOpen} onOpenChange={handleCancel}>
                <DialogContent className="bg-coffee-dark border border-gold/40 max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-ivory-soft text-xl font-bold">
                            {tModal('title')}
                        </DialogTitle>
                        <DialogDescription className="text-ivory-soft/80 text-sm pt-2">
                            {tModal('description', { language: pendingLang?.name ?? '' })}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            onClick={handleCancel}
                            className="px-5 py-1.5 bg-transparent border border-ivory-soft/30 hover:border-ivory-soft/60 text-ivory-soft/70 hover:text-ivory-soft rounded-sm transition-all duration-200 cursor-pointer text-sm"
                        >
                            {tModal('cancel')}
                        </button>
                        <button
                            onClick={handleConfirm}
                            className="px-5 py-1.5 bg-ivory-soft hover:bg-ivory-soft/80 text-coffee-dark rounded-sm transition-colors duration-200 cursor-pointer text-sm"
                        >
                            {tModal('confirm')}
                        </button>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Step 2: Coming Soon bilgilendirme modalı */}
            <Dialog open={comingSoonOpen} onOpenChange={handleComingSoonClose}>
                <DialogContent className="bg-coffee-dark border border-gold max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-ivory-soft text-xl font-bold">
                            {comingSoonMessages[pendingLang?.locale ?? locale]?.title}
                        </DialogTitle>
                        <DialogDescription className="text-ivory-soft/90 text-sm pt-2">
                            {comingSoonMessages[pendingLang?.locale ?? locale]?.message}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end pt-4">
                        <button
                            onClick={handleComingSoonClose}
                            className="px-5 py-1.5 bg-ivory-soft hover:bg-ivory-soft/80 text-coffee-dark rounded-sm transition-colors duration-200 cursor-pointer text-sm"
                        >
                            OK
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
