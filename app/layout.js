import { Urbanist } from 'next/font/google';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/public/assets/css/style.css";
import { LanguageProvider } from '@/components/customHooks/LanguageContext';
import { ModalProvider } from '@/components/customHooks/useModal';
import { I18nProvider } from "@/components/providers/I18nProvider";
import { getTranslation } from './[lang]/metatranslations';
import SEO from '@/components/sections/customHome/SEO';

const urban = Urbanist({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: "--tg-body-font-family",
  display: 'swap',
});

export default function RootLayout({ children, params }) {
  const currentTranslation = getTranslation(params.lang);

  return (
    <html lang="en" suppressHydrationWarning>
      <SEO 
        title={currentTranslation.MetaTitle}
        description={currentTranslation.MetaDescription}
        keywords={currentTranslation.MetaKeywords}
      />
      <body className={urban.variable}>
        <I18nProvider>
          <LanguageProvider>
            <ModalProvider>
              {children}
            </ModalProvider>
          </LanguageProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
