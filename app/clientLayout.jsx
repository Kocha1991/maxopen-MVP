'use client';
import { LanguageProvider } from '@/components/customHooks/LanguageContext';
import { ModalProvider } from '@/components/customHooks/useModal';

export default function ClientLayout({ children }) {
  return (
    <LanguageProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </LanguageProvider>
  );
}
