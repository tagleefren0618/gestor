// TestList.js
import React from 'react';

const TestList = ({ items, onItemClick }) => {
  const handleItemClick = (option, event) => {
    event.preventDefault(); // Evitar que la página se recargue al hacer clic en el enlace
    onItemClick(option);
  };

  return (
    <div className="test-list" style={{ display: 'flex', flexDirection: 'column' }}>
      {items.map(option => (
        <a key={option} href="#" style={{ marginBottom: '10px', textDecoration: 'underline' }} onClick={(event) => handleItemClick(option, event)}>{option}</a>
      ))}
    </div>
  );
};

export default TestList;
