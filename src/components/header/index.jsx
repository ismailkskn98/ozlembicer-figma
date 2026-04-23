import { Link } from '@/i18n/navigation';
import React from 'react';
import Navbar from './navbar';
// import LanguageChange from './languageChange'
import TemporaryLanguageChange from './temporaryLanguageChange';
import MotionScrollInViewOpacity from '../common/motionScrollInViewOpacity';
import { SlMenu } from 'react-icons/sl';
import MobilNavbar from './mobilNavbar';
import HeaderLogo from './headerLogo';
import { CiSearch } from 'react-icons/ci';
import SearchMain from './searchMain';

export default function Header() {
   return (
      <main className="fixed inset-x-0 top-0 z-9999 w-full gridContainer">
         <header className="w-full fluid gridContainer bg-coffee-dark min-h-20 sm:min-h-25 lg:min-h-30 border-b border-gold">
            <MotionScrollInViewOpacity className="w-full flex items-center">
               <section className="w-full h-full max-w-full lg:max-w-6xl mx-auto flex items-center justify-between">
                  <HeaderLogo />
                  <main className="hidden md:flex items-center">
                     <Navbar />
                     <div className="w-fit h-fit hidden md:flex items-center justify-center gap-3 lg:gap-4 pl-2 lg:pl-4 lg:pr-5">
                        <TemporaryLanguageChange />
                        <SearchMain>
                           <button type="button" className="uppercase font-bold text-xl lg:text-2xl w-full text-left cursor-pointer">
                              <CiSearch className="text-ivory-soft!" />
                           </button>
                        </SearchMain>
                     </div>
                     <Link
                        href="/contact-us"
                        className="group hidden lg:flex flex-col items-center justify-center px-3.75 py-2.5 rounded-[10px] text-ivory-soft text-sm bg-wine-brown border border-wine-brown transition-all duration-300"
                     >
                        <span className="group-hover:opacity-70 transition-all duration-200">info@ozlembicer.com</span>
                        <span className="group-hover:opacity-70 transition-all duration-200">+90 (414) 13 13</span>
                     </Link>
                  </main>
                  <div className="md:hidden flex items-center gap-4">
                     <SearchMain>
                        <button type="button" className="uppercase font-bold text-xl lg:text-2xl w-full text-left cursor-pointer">
                           <CiSearch className="text-ivory-soft" />
                        </button>
                     </SearchMain>
                     <article className="md:hidden flex items-center gap-4">
                        <TemporaryLanguageChange />
                        <MobilNavbar>
                           <SlMenu size={24} className="cursor-pointer text-ivory-soft" />
                        </MobilNavbar>
                     </article>
                  </div>
               </section>
            </MotionScrollInViewOpacity>
         </header>
         <section className="lg:hidden fluid gridContainer w-full max-w-full lg:max-w-6xl mx-auto py-1 bg-coffee-dark">
            <main className="w-full flex items-center justify-center">
               <Link href="/contact-us" className="flex items-center justify-center gap-1 text-ivory-soft px-2.5 py-0.5 rounded-sm text-xs sm:text-sm">
                  <span>info@ozlembicer.com</span>
                  <span>-</span>
                  <span>+90 (414) 13 13</span>
               </Link>
            </main>
         </section>
      </main>
   );
}
