import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function LanguageDropdown() {
  const [language, setLanguage] = useState('EN');

  const handleSelectLanguage = (lang) => {
    setLanguage(lang);
  };
  
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-lan">
        {language}
      </Dropdown.Toggle>

      <Dropdown.Menu id='dropdown-lan-menu' style={{ width: 'auto', minWidth: '60px' }}>
        <Dropdown.Item href="#/action-1" onClick={() => handleSelectLanguage('EN')}>English</Dropdown.Item>
        <Dropdown.Item href="#/action-2" onClick={() => handleSelectLanguage('UA')}>Ukrainian</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageDropdown;