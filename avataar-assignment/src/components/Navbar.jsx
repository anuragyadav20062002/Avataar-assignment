// Navbar.jsx

import React, { useState, useEffect } from 'react';
import './navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderMenuItems = () => {
    const maxVisibleItems = 6;
    const menuItems = [
      'Home',
      'Electronics',
      'Books',
      'Movies',
      'Music',
      'Clothing',
      'Games',
      'More',
      'Technology',
      'Travel',
      'Development',
      'Modeling',
      'Animation'
    ];

    if (windowWidth >= 1768) {
      // Large screens
      return menuItems.map((item, index) => (
        <div key={index} className="menu-item">
          {item}
        </div>
      ));
    } else {
      // Small screens
      const visibleItems = menuItems.slice(0, maxVisibleItems);
      const remainingItems = menuItems.slice(maxVisibleItems);

      return (
        <>
          {visibleItems.map((item, index) => (
            <div key={index} className="menu-item">
              {item}
            </div>
          ))}
          <div className="menu-item more">
            More
            <div className="more-dropdown">
              {remainingItems.map((item, index) => (
                <div key={index} className="menu-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="navbar">
      {renderMenuItems()}
      <div className="search-bar">
        <input type="text" placeholder="Search anything" />
      </div>
    </div>
  );
};

export default Navbar;
