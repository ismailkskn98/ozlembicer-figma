'use client';
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useLocale, useTranslations } from 'next-intl';

export default function TemporaryLanguageChange() {
   const locale = useLocale();
   const tCommon = useTranslations('Common');
   const tTemporary = useTranslations('TemporaryLanguage');
   const comingSoonMessages = tTemporary.raw('comingSoonMessages');
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
            <Select value={locale} onValueChange={handleLanguageChange}>
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

         <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="bg-coffee-dark border border-gold max-w-md">
               <DialogHeader className={''}>
                  <DialogTitle className="text-ivory-soft text-xl font-bold">{comingSoonMessages[selectedLanguage || 'en']?.title}</DialogTitle>
                  <DialogDescription className="text-ivory-soft/90 text-sm pt-2">{comingSoonMessages[selectedLanguage || 'en']?.message}</DialogDescription>
               </DialogHeader>
               <div className="flex justify-end pt-4">
                  <button
                     onClick={() => setIsDialogOpen(false)}
                     className="px-5 py-1.5 bg-ivory-soft hover:bg-ivory-soft/80 text-coffee-dark rounded-sm transition-colors duration-200 cursor-pointer text-sm"
                  >
                     {tTemporary('ok')}
                  </button>
               </div>
            </DialogContent>
         </Dialog>
      </>
   );
}
