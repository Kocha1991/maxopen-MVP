import { Urbanist } from "next/font/google";
import { ModalProvider } from "@/components/customHooks/useModal";
import { LanguageProvider } from "@/components/customHooks/LanguageContext";
import { I18nProvider } from "@/components/providers/I18nProvider";
import { Suspense } from "react";
import { getTranslation } from './metatranslations';

const urban = Urbanist({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--tg-body-font-family",
  display: "swap",
});

// Генерація метаданих
export async function generateMetadata({ params: { lang } }) {
  console.log("Generating metadata for language:", lang);

  const currentTranslation = getTranslation(lang);

  return {
    title: currentTranslation.MetaTitle,
    description: currentTranslation.MetaDescription,
    keywords: currentTranslation.MetaKeywords,
    alternates: {
      languages: {
        en: "/en",
        uk: "/uk",
        ru_UA: "/ru_UA",
      },
    },
  };
}

export default async function Layout({ children, params }) {
  console.log("Params:", params);

  const currentTranslation = getTranslation(params.lang);

  return (
    <html lang={params.lang}>
      <head>
        <title>{currentTranslation.MetaTitle}</title>
        <meta name="description" content={currentTranslation.MetaDescription} />
        <meta name="keywords" content={currentTranslation.MetaKeywords} />
      </head>
      <body className={urban.variable}>
        <I18nProvider>
          <LanguageProvider>
            <ModalProvider>
              <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
            </ModalProvider>
          </LanguageProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
