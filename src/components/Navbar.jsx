import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import { Link } from 'react-router-dom';

const darkKey = true;
const darkInitial = 'isDM';

const Navbar = () => {
  const [darkMode, toggleDarkMode] = useDarkMode(darkKey, darkInitial);

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleDarkMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
