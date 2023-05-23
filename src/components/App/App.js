import React from 'react';

import {
  FLIP_LETTER_SPEED,
  TIME_TO_FINISH_FLIPS,
  WORD_SIZE,
} from '../../constants';
import Game from '../Game';
import Header from '../Header';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    const isDarkMode = JSON.parse(window.localStorage.getItem('is-dark-mode'));
    return isDarkMode || false;
  });

  React.useEffect(() => {
    window.localStorage.setItem('is-dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div
      style={{
        '--flip-letter-speed': FLIP_LETTER_SPEED + 'ms',
        '--word-size': WORD_SIZE,
        '--time-to-finish-flips': TIME_TO_FINISH_FLIPS + 'ms',
      }}
      className={!isDarkMode ? 'wrapper' : 'wrapper dark-mode'}
    >
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <div className="game-wrapper">
        <Game />
      </div>
    </div>
  );
}

export default App;
