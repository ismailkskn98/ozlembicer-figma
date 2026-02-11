'use client';
import React, { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLocale } from 'next-intl';

const languageMap = {
    en: { full: 'English', short: 'ENG' },
    de: { full: 'Deutsch', short: 'DEUT' },
    fr: { full: 'Français', short: 'FRAN' },
    it: { full: 'Italiano', short: 'ITAL' },
};

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

export default function TemporaryLanguageChange() {
    const locale = useLocale();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const handleLanguageChange = (value) => {
        if (value !== 'en') {
            setSelectedLanguage(value);
            setIsDialogOpen(true);
        }
    };

    return (
        <>
            <article className="w-fit flex items-center">
                <Select
                    value={locale}
                    onValueChange={handleLanguageChange}
                >
                    <SelectTrigger
                        className="border-none ring-0 focus-visible:ring-0 focus-visible:border-0 focus-visible:outline-0 justify-start cursor-pointer transition-all duration-200 w-fit h-fit pr-0 lg:px-3.75 py-2.5 shadow-none gap-0.5 md:gap-1 text-white uppercase"
                    >
                        <span className='text-xs lg:text-sm'>{languageMap[locale]?.short}</span>
                    </SelectTrigger>

                    <SelectContent className="bg-white dark:bg-coffee-dark border-gold/30">
                        <SelectItem value="en" className="cursor-pointer hover:bg-wine-brown/20">
                            <span className="flex items-center gap-1.5 text-xs">
                                <span>English</span>
                            </span>
                        </SelectItem>
                        <SelectItem value="de" className="cursor-pointer hover:bg-wine-brown/20">
                            <span className="flex items-center gap-1.5 text-xs">
                                <span>Deutsch</span>
                            </span>
                        </SelectItem>
                        <SelectItem value="fr" className="cursor-pointer hover:bg-wine-brown/20">
                            <span className="flex items-center gap-1.5 text-xs">
                                <span>Français</span>
                            </span>
                        </SelectItem>
                        <SelectItem value="it" className="cursor-pointer hover:bg-wine-brown/20">
                            <span className="flex items-center gap-1.5 text-xs">
                                <span>Italiano</span>
                            </span>
                        </SelectItem>
                    </SelectContent>
                </Select>
            </article>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="bg-coffee-dark border border-gold max-w-md">
                    <DialogHeader className={""}>
                        <DialogTitle className="text-ivory-soft text-xl font-bold">
                            {comingSoonMessages[selectedLanguage || 'en']?.title}
                        </DialogTitle>
                        <DialogDescription className="text-ivory-soft/90 text-sm pt-2">
                            {comingSoonMessages[selectedLanguage || 'en']?.message}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end pt-4">
                        <button
                            onClick={() => setIsDialogOpen(false)}
                            className="px-5 py-1.5 bg-ivory-soft hover:bg-ivory-soft/80 text-coffee-dark rounded-sm transition-colors duration-200 cursor-pointer text-sm"
                        >
                            OK
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
