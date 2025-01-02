'use client';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';

function LanguageDropdown() {
  const { i18n } = useTranslation();

  const language = i18n.language || 'en';

  // Обробник для зміни мови
  const handleSelectLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);

    // Оновлення URL з новою мовою
    window.location.href = `/${lang}`;  // Оновлюємо URL без використання useRouter
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-lan">
        {language.toUpperCase()}
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
