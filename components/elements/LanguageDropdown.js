'use client';
import React, { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';
import { LOCALS } from '@/public/locales/locales';

function LanguageDropdown() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSelectLanguage = (lang) => {
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.split('/').slice(2).join('/');
    const newPath = `/${lang}${pathWithoutLang ? '/' + pathWithoutLang : ''}`;
    
    localStorage.setItem('language', lang);
    window.location.href = newPath;
  };

  if (!mounted) {
    return null; // Не рендеримо нічого під час SSR
  }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-lan">
        {i18n.language?.toUpperCase() || LOCALS.UK.toUpperCase()}
      </Dropdown.Toggle>

      <Dropdown.Menu id="dropdown-lan-menu" style={{ width: 'auto', minWidth: '60px' }}>
        <Dropdown.Item onClick={() => handleSelectLanguage(LOCALS.EN)}>English</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelectLanguage(LOCALS.UK)}>Ukrainian</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelectLanguage(LOCALS.RU)}>Russian</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageDropdown;
