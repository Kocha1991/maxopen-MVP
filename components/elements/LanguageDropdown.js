'use client';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useLanguage } from '../customHooks/LanguageContext';

function LanguageDropdown() {
  const { language, setLanguage } = useLanguage();

  const handleSelectLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-lan">
        {language.toUpperCase()}
      </Dropdown.Toggle>

      <Dropdown.Menu id='dropdown-lan-menu' style={{ width: 'auto', minWidth: '60px' }}>
        <Dropdown.Item onClick={() => handleSelectLanguage('en')}>English</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelectLanguage('uk')}>Ukrainian</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSelectLanguage('ru_UA')}>Russian</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageDropdown;
