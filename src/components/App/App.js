import React from 'react';

import Game from '../Game';
import Header from '../Header';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <div className={!isDarkMode ? 'wrapper' : 'wrapper dark-mode'}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <div className="game-wrapper">
        <Game />
      </div>
    </div>
  );
}

export default App;
