import { LOCALS } from "@/public/locales/locales";
import { Urbanist } from "next/font/google";
import { ModalProvider } from "@/components/customHooks/useModal";
import { LanguageProvider } from "@/components/customHooks/LanguageContext";
import { I18nProvider } from "@/components/providers/I18nProvider";
import { Suspense } from "react";

const urban = Urbanist({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--tg-body-font-family",
  display: "swap",
});

// Генеруємо статичні параметри для всіх підтримуваних мов
export async function generateStaticParams() {
  return Object.values(LOCALS).map((lang) => ({
    lang: lang,
  }));
}

// Генеруємо метадані для кожної мови
export async function generateMetadata({ params: { lang } }) {
  return {
    title: "MaxOpen",
    alternates: {
      languages: {
        'en': '/en',
        'uk': '/uk',
        'ru_UA': '/ru_UA',
      },
    },
  };
}

// Кореневий layout, який обгортає всі сторінки
export default function Layout({ children, params }) {
  return (
    <html lang={params.lang}>
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
