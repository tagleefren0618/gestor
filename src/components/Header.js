import React from 'react';

const Header = ({ onHamburgerClick, onLogout, isLoggedIn }) => {
  return (
    <div className="header" style={{ backgroundColor: '#333', color: 'white', padding: '10px 20px', position: 'fixed', width: '100%', top: 0, left: 0, zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ margin: 0 }}>Educación integral</h1>
      {isLoggedIn ? (
        <div style={{ float: 'right' }}>
          <button className="hamburger-btn" style={{ backgroundColor: 'transparent', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer', marginRight: '20px' }} onClick={onLogout}>Logout</button>
        </div>
      ) : (
        <button className="hamburger-btn" style={{ backgroundColor: 'transparent', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer', marginRight: '20px' }} onClick={onHamburgerClick}>☰</button>
      )}
    </div>
  );
};

export default Header;
