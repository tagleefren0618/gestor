// TestList.js
import React from 'react';

const TestList = ({ items }) => {
  return (
    <div className="test-list" style={{ display: 'flex', flexDirection: 'column' }}>
      {items.map(option => (
        <a key={option} href="#" style={{ marginBottom: '10px', textDecoration: 'underline' }}>{option}</a>
      ))}
    </div>
  );
};

export default TestList;
