import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const CustomDropdown = () => {
  // Список опцій
  const options = [
    { label: "Action", value: "#/action-1" },
    { label: "Another", value: "#/action-2" },
    { label: "Else", value: "#/action-3" },
  ];

  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (value) => {
    const selectedOption = options.find(option => option.value === value);
    setSelected(selectedOption);
  };

  return (
    <DropdownButton
      id="custom-dropdown"
      title={selected.label}
      onSelect={handleSelect}
      className='custom-dropdown'
    >
      {options.map(option => (
        <Dropdown.Item key={option.value} eventKey={option.value}>
          {option.label}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default CustomDropdown;
