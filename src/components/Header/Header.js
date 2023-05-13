import React from 'react';

import Settings from '../Settings/Settings';

function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <header>
      <h1>Word Game</h1>
      <Settings isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </header>
  );
}

export default Header;
