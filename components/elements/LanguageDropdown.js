'use client';
import React, { useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';

function LanguageDropdown() {
  const { i18n } = useTranslation();

  // Обробник для зміни мови
  const handleSelectLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);  // Якщо є, змінюємо мову
    }
  }, [i18n]);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-lan">
        {i18n.language.toUpperCase()} {/* Відображення поточної мови */}
      </Dropdown.Toggle>

      <Dropdown.Menu id="dropdown-lan-menu" style={{ width: 'auto', minWidth: '60px' }}>
        <Dropdown.Item onClick={() => handleSelectLanguage('en')}>English</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelectLanguage('uk')}>Ukrainian</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelectLanguage('ru_UA')}>Russian</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageDropdown;
