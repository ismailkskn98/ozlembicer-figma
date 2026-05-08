import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';
import { NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request) {
   const response = intlMiddleware(request);

   // next-intl yönlendirme URL'si oluşturduysa, portlu adresi temizle
   const location = response.headers.get('location');
   if (location && location.includes(':3025')) {
      const fixedLocation = location.replace(':3025', '').replace('http://', 'https://');
      return NextResponse.redirect(fixedLocation, response.status);
   }

   return response;
}

export const config = {
   matcher: '/((?!api|trpc|_next|_vercel|.\\..).*)',
};
