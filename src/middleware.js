import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';
import { NextResponse } from 'next/server';

const SITE_URL = 'https://ozlembicer.com';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request) {
   const response = intlMiddleware(request);

   // next-intl yönlendirme URL'si oluşturduysa, hatalı adresi düzelt
   const location = response.headers.get('location');
   if (location) {
      try {
         const url = new URL(location);
         // Port veya localhost varsa düzelt
         if (url.port || url.hostname === 'localhost') {
            const fixedUrl = SITE_URL + url.pathname + url.search + url.hash;
            return NextResponse.redirect(fixedUrl, response.status);
         }
      } catch (e) {
         // relative URL ise dokunma
      }
   }

   return response;
}

export const config = {
   matcher: '/((?!api|trpc|_next|_vercel|.\\..).*)',
};
