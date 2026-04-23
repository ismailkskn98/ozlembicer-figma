'use client';
import { Link, usePathname } from '@/i18n/navigation';
import { useLenis } from 'lenis/react';
import Image from 'next/image';
import React from 'react';

export default function HeaderLogo() {
   const pathname = usePathname();
   const lenis = useLenis();

   const handleClick = (e) => {
      if (pathname === '/') {
         e.preventDefault();
         if (lenis) {
            lenis.scrollTo(0, { duration: 1 });
         } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
         }
      }
   };

   return (
      <Link href={'/'} onClick={handleClick} className="relative h-[99%] w-fit flex items-center justify-center">
         <div className="absolute left-1/2 top-1/2 -translate-1/2 w-[200%] h-[99%] bg-linear-to-r from-coffee-dark via-wine-brown to-coffee-dark" />
         <Image
            src="/images/logo.webp"
            alt="ozlembicer logo"
            width={150}
            height={100}
            className="relative z-20 object-contain object-center w-fit min-w-25 h-8 sm:min-w-31.25 sm:h-10 lg:h-11 xl:h-15"
         />
      </Link>
   );
}
