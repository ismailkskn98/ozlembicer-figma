'use client';
import React, { useTransition } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useSearchParams } from 'next/navigation';


const languageMap = {
    en: { full: 'English', short: 'ENG' },
    de: { full: 'Deutsch', short: 'DEUT' },
    fr: { full: 'Français', short: 'FRAN' },
    it: { full: 'Italiano', short: 'ITAL' },
};

export default function LanguageChange() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const locale = useLocale();
    const [isPending, startTransition] = useTransition();

    let currentSearchParams = {};
    searchParams.forEach((value, key) => {
        currentSearchParams[key] = value;
    })

    return (
        <article className="w-fit flex items-center">
            <Select
                defaultValue={locale}
                onValueChange={(value) => {
                    startTransition(() => {
                        router.replace(
                            { pathname, query: currentSearchParams },
                            { scroll: false, locale: value }
                        );
                    });
                }}
            >
                <SelectTrigger
                    className="border-none ring-0 focus-visible:ring-0 focus-visible:border-0 focus-visible:outline-0 justify-start cursor-pointer transition-all duration-200 w-fit h-fit pr-0 lg:px-3.75 py-2.5 shadow-none gap-0.5 md:gap-1 text-white uppercase"
                >
                    <span className='text-xs lg:text-sm'>{languageMap[locale]?.short}</span>
                </SelectTrigger>

                <SelectContent className="bg-white dark:bg-site-dark">
                    <SelectItem value="en" className="cursor-pointer">
                        <span className="flex items-center gap-1.5 text-xs">
                            {/* <Image src="https://flagcdn.com/24x18/us.png" alt="English" width={24} height={18} className="h-3 w-4 object-cover" /> */}
                            <span>English</span>
                        </span>
                    </SelectItem>
                    <SelectItem value="de" className="cursor-pointer">
                        <span className="flex items-center gap-1.5 text-xs">
                            {/* <Image src="https://flagcdn.com/24x18/de.png" alt="Deutsch" width={24} height={18} className="h-3 w-4 object-cover" /> */}
                            <span>Deutsch</span>
                        </span>
                    </SelectItem>
                    <SelectItem value="fr" className="cursor-pointer">
                        <span className="flex items-center gap-1.5 text-xs">
                            {/* <Image src="https://flagcdn.com/24x18/fr.png" alt="Français" width={24} height={18} className="h-3 w-4 object-cover" /> */}
                            <span>Français</span>
                        </span>
                    </SelectItem>
                    <SelectItem value="it" className="cursor-pointer">
                        <span className="flex items-center gap-1.5 text-xs">
                            {/* <Image src="https://flagcdn.com/24x18/it.png" alt="Italiano" width={24} height={18} className="h-3 w-4 object-cover" /> */}
                            <span>Italiano</span>
                        </span>
                    </SelectItem>
                </SelectContent>
            </Select>
        </article>
    );
}
