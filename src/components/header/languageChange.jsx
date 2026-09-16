'use client';
import React, { useTransition } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useSearchParams } from 'next/navigation';

export default function LanguageChange() {
   const router = useRouter();
   const pathname = usePathname();
   const searchParams = useSearchParams();
   const locale = useLocale();
   const tCommon = useTranslations('Common');
   const [isPending, startTransition] = useTransition();

   const handleLanguageChange = (value) => {
      if (value === locale) return;

      const currentSearchParams = Object.fromEntries(searchParams.entries());

      startTransition(() => {
         router.replace({ pathname, query: currentSearchParams }, { scroll: false, locale: value });
      });
   };

   return (
      <article className="w-fit flex items-center">
         <Select
            value={locale}
            onValueChange={handleLanguageChange}
            disabled={isPending}
         >
            <SelectTrigger className="border-none ring-0 focus-visible:ring-0 focus-visible:border-0 focus-visible:outline-0 justify-start cursor-pointer transition-all duration-200 w-fit h-fit pr-0 px-0 py-2.5 shadow-none gap-0.5 md:gap-1 text-ivory-soft uppercase">
               <span className="text-xs lg:text-sm">{tCommon(`languages.${locale}.short`)}</span>
            </SelectTrigger>

            <SelectContent className="bg-coffee-dark border-gold/30 text-ivory-soft">
               <SelectItem value="en" className="cursor-pointer hover:bg-wine-brown! hover:text-ivory-soft! transition-all duration-200">
                  <span className="flex items-center gap-1.5 text-xs">
                     <span>{tCommon('languages.en.name')}</span>
                  </span>
               </SelectItem>
               <SelectItem value="de" className="cursor-pointer hover:bg-wine-brown! hover:text-ivory-soft! transition-all duration-200">
                  <span className="flex items-center gap-1.5 text-xs">
                     <span>{tCommon('languages.de.name')}</span>
                  </span>
               </SelectItem>
               <SelectItem value="fr" className="cursor-pointer hover:bg-wine-brown! hover:text-ivory-soft! transition-all duration-200">
                  <span className="flex items-center gap-1.5 text-xs">
                     <span>{tCommon('languages.fr.name')}</span>
                  </span>
               </SelectItem>
               <SelectItem value="it" className="cursor-pointer hover:bg-wine-brown! hover:text-ivory-soft! transition-all duration-200">
                  <span className="flex items-center gap-1.5 text-xs">
                     <span>{tCommon('languages.it.name')}</span>
                  </span>
               </SelectItem>
            </SelectContent>
         </Select>
      </article>
   );
}
