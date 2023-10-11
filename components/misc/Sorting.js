import React from 'react';

const SortingDropdown = ({ options, selectedOption, onSelect }) => {
  return (
    <div>
      <label>Sort by:</label>
      <select value={selectedOption} onChange={onSelect}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortingDropdown;