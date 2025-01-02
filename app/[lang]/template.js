'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function Template({ children }) {
  const pathname = usePathname();
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = pathname.split('/')[1];
    const i18nLang = lang === 'ru_UA' ? 'ru' : lang;
    if (i18n.language !== i18nLang) {
      i18n.changeLanguage(i18nLang);
    }
  }, [pathname, i18n]);

  return children;
} 