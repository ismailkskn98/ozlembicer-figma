import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';

const SITE_URL = 'https://ozlembicer.com';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request) {
   const pathname = request.nextUrl.pathname;
   console.log('[Middleware] İstek geldi:', pathname);

   // Statik dosyaları (resim, css, js, font vs.) dil yönlendirmesinden hariç tut
   if (pathname.includes('.')) {
      console.log('[Middleware] Statik dosya atlandı:', pathname);
      return NextResponse.next();
   }

   const response = intlMiddleware(request);

   // next-intl yönlendirme URL'si oluşturduysa, hatalı adresi düzelt
   const location = response.headers.get('location');
   if (location) {
      console.log('[Middleware] Yönlendirme tespit edildi:', location);
      try {
         const url = new URL(location);
         // Port veya localhost varsa düzelt
         if (url.port || url.hostname === 'localhost') {
            const fixedUrl = SITE_URL + url.pathname + url.search + url.hash;
            console.log('[Middleware] Düzeltildi:', fixedUrl);
            return NextResponse.redirect(fixedUrl, response.status);
         }
      } catch (e) {
         // relative URL ise dokunma
      }
   }

   return response;
}

// eslint-disable-next-line no-useless-escape
export const config = {
   matcher: ['/((?!api|trpc|_next|_vercel|.\\..).*)'],
};
