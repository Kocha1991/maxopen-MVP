'use client';
import { Urbanist } from 'next/font/google';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/public/assets/css/style.css";
import Head from 'next/head';
import { ModalProvider } from '@/components/customHooks/useModal';
import { LanguageProvider } from '@/components/customHooks/LanguageContext';
import { useTranslation } from 'react-i18next';

const urban = Urbanist({
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--tg-body-font-family",
    display: 'swap',
});

// export const metadata = {
//     title: 'MaxOpen',
// };

export default function RootLayout({ children }) {
  const { t } = useTranslation();

  return (
    <html lang="en">
      <Head>
        <title>{t('metadata.MetaTitle')}</title>
        <meta name="description" content={t('metadata.MetaDescription')} />
        <meta name="keywords" content={t('metadata.MetaKeywords')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <body className={urban.variable}>
        <LanguageProvider>
          <ModalProvider>
            {children}
          </ModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
