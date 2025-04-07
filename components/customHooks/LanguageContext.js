'use client';
import React, { createContext, useState } from 'react';

// Створення контексту з дефолтним значенням (можна і null, але краще типізувати)
export const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
