import { LOCALS } from "@/public/locales/locales";

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
