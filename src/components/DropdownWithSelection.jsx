import React, { useState } from "react";
import "./DropdownWithSelection.css";

const DropdownWithSelection = ({ label, options }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  // Add selected item
  const handleSelect = (event) => {
    const selected = event.target.value;
    if (selected && !selectedItems.includes(selected)) {
      setSelectedItems([...selectedItems, selected]);
    }
  };

  // Remove selected item
  const handleRemove = (item) => {
    setSelectedItems(selectedItems.filter((selected) => selected !== item));
  };

  return (
    <div className="dropdown-container">
      <p>{label}</p>
      <select onChange={handleSelect}>
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <div className="selected-items">
        {selectedItems.map((item, index) => (
          <div className="selected-tag bg-secondary" key={index}>
            {item}{" "}
            <button className="remove-btn" onClick={() => handleRemove(item)}>
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownWithSelection;
