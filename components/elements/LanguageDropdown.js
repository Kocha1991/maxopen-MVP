'use client';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';

function LanguageDropdown() {
  const { i18n } = useTranslation();  // Доступ до i18n

  // Обробник для зміни мови
  const handleSelectLanguage = (lang) => {
    i18n.changeLanguage(lang);  // Зміна мови в i18next
  };

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
