import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';

export default async function NotFound() {
   const t = await getTranslations('NotFound');

   return (
      <section className="relative fluid gridContainer min-h-[70vh] sm:min-h-[75vh] flex items-center bg-radial to-wine-brown from-20% from-coffee-dark py-16 sm:py-20 lg:py-28">
         <div className="w-full fluid absolute inset-x-0 top-0 h-px bg-gold z-0" />
         <div className="w-full fluid absolute inset-x-0 bottom-0 h-px bg-gold z-0" />

         <main className="relative z-10 w-full max-w-full xl:max-w-6xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8 lg:gap-10 text-ivory-soft px-1">
            <p className="font-bold text-gold text-[72px] min-[393px]:text-[88px] sm:text-[120px] lg:text-[140px] leading-none tracking-tight select-none" aria-hidden="true">
               404
            </p>

            <div className="flex flex-col items-center gap-3 sm:gap-4 max-w-xl lg:max-w-2xl">
               <h1 className="font-bold text-[28px] min-[393px]:text-[32px] sm:text-[40px] lg:text-[48px] leading-tight">{t('title')}</h1>
               <p className="text-sm sm:text-base lg:text-lg text-ivory-soft/85 leading-relaxed max-w-md sm:max-w-lg">{t('description')}</p>
            </div>

            <div className="w-full h-px max-w-40 sm:max-w-56 bg-gold/60" />

            <div className="flex flex-col min-[400px]:flex-row items-stretch min-[400px]:items-center justify-center gap-3 sm:gap-5 w-full min-[400px]:w-auto">
               <Link
                  href="/"
                  className="rounded-sm sm:rounded-[10px] py-2.5 sm:py-2 xl:py-2.5 px-4 xl:px-5 text-xs lg:text-sm text-center border border-ivory-soft text-ivory-soft hover:bg-ivory-soft/70 hover:text-coffee-dark hover:border-transparent transition-colors duration-200"
               >
                  {t('home')}
               </Link>
               <Link
                  href="/contact-us"
                  className="rounded-sm sm:rounded-[10px] py-2.5 sm:py-2 xl:py-2.5 px-4 xl:px-5 text-xs lg:text-sm text-center bg-ivory-soft text-coffee-dark hover:bg-ivory-soft/70 transition-colors duration-200"
               >
                  {t('contact')}
               </Link>
            </div>
         </main>
      </section>
   );
}
