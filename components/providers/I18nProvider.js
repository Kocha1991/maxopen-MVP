'use client';
import { I18nextProvider } from 'react-i18next';
import { useEffect, useState } from 'react';
import i18n from '@/public/locales/i18n';

export function I18nProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Не рендеримо нічого під час SSR
  }

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
} 