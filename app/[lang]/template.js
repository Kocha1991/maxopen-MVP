'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function Template({ children }) {
  const pathname = usePathname();
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = pathname.split('/')[1];
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [pathname, i18n]);

  return children;
} 