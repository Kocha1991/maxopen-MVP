// app/[lang]/page.jsx
'use client';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

// Генерація статичних параметрів для кожної локалі
export function generateStaticParams() {
  const locales = ['en', 'uk', 'ru_UA'];
  return locales.map((locale) => ({ locale })); // Генерація параметрів для кожної локалі
}

const LangPage = () => {
  const { i18n } = useTranslation();  // доступ до i18next
  const router = useRouter();
  const { lang } = router.query;      // отримуємо параметр lang з URL

  useEffect(() => {
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang);  // зміна мови через i18next
      localStorage.setItem('language', lang);  // збереження мови в localStorage
    }
  }, [lang, i18n]);

  return null;
};

export default LangPage;
