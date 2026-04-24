import localFont from 'next/font/local';
import '../globals.css';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ReactLenis } from '@/lib/lenis';
import ScrollToTopOnRouteChange from '@/components/common/scrollToTopOnRouteChange';

const inter = localFont({
   src: [
      { path: '../../fonts/Inter-ExtraLight.woff2', weight: '200', style: 'normal' },
      { path: '../../fonts/Inter-Light.woff2', weight: '300', style: 'normal' },
      { path: '../../fonts/Inter-Regular.woff2', weight: '400', style: 'normal' },
      { path: '../../fonts/Inter-Medium.woff2', weight: '500', style: 'normal' },
      { path: '../../fonts/Inter-SemiBold.woff2', weight: '600', style: 'normal' },
      { path: '../../fonts/Inter-Bold.woff2', weight: '700', style: 'normal' },
      { path: '../../fonts/Inter-ExtraBold.woff2', weight: '800', style: 'normal' },
      { path: '../../fonts/Inter-Black.woff2', weight: '900', style: 'normal' },
   ],
   variable: '--font-inter',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drozlembicer.com';

export async function generateMetadata({ params }) {
   const { locale } = await params;
   const messages = (await import(`../../../messages/${locale}.json`)).default;
   const meta = messages.Metadata;

   return {
      title: {
         default: meta.defaultTitle,
         template: `%s | Dr. Özlem Biçer`,
      },
      description: meta.defaultDescription,
      keywords: meta.keywords,
      authors: [{ name: 'Dr. Özlem Biçer' }],
      creator: 'Dr. Özlem Biçer Clinic',
      metadataBase: new URL(SITE_URL),
      alternates: {
         canonical: `${SITE_URL}/${locale}`,
         languages: {
            'en': `${SITE_URL}/en`,
            'de': `${SITE_URL}/de`,
            'fr': `${SITE_URL}/fr`,
            'it': `${SITE_URL}/it`,
         },
      },
      openGraph: {
         title: meta.defaultTitle,
         description: meta.defaultDescription,
         url: `${SITE_URL}/${locale}`,
         siteName: meta.siteName,
         locale: locale,
         type: 'website',
         images: [
            {
               url: `${SITE_URL}/images/meta-logo.png`,
               width: 1200,
               height: 630,
               alt: meta.siteName,
            },
         ],
      },
      twitter: {
         card: 'summary_large_image',
         title: meta.defaultTitle,
         description: meta.defaultDescription,
         images: [`${SITE_URL}/images/meta-logo.png`],
      },
      robots: {
         index: true,
         follow: true,
         googleBot: {
            index: true,
            follow: true,
         },
      },
      icons: {
         icon: '/images/meta-logo.png',
         shortcut: '/images/meta-logo.png',
         apple: '/images/meta-logo.png',
      },
   };
}

export default async function RootLayout({ children, params }) {
   const { locale } = await params;

   if (!hasLocale(routing.locales, locale)) {
      notFound();
   }
   return (
      <html lang={locale}>
         <body className={`${inter.variable} font-inter antialiased w-full bg-stone-beige`}>
            <NextIntlClientProvider>
               <ReactLenis root options={{ smoothWheel: true }}>
                  <ScrollToTopOnRouteChange />
                  <Header />
                  <div className="pt-27 sm:pt-33 lg:pt-30 relative">{children}</div>
                  <Footer />
               </ReactLenis>
            </NextIntlClientProvider>
         </body>
      </html>
   );
}
