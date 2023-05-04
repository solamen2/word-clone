import React from 'react';

import { GameStatuses } from '../Game/Game';

function GameOverBanner({ gameStatus, resetGame, numOfGuesses, answer }) {
  if (gameStatus === GameStatuses.WON) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> You got it in{' '}
          <strong>{numOfGuesses} guesse(s)</strong>.
        </p>
        <button className="happy-reset-button" onClick={resetGame}>
          Restart Game
        </button>
      </div>
    );
  } else if (gameStatus === GameStatuses.LOST) {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer was <strong>{answer}</strong>.
        </p>
        <button className="sad-reset-button" onClick={resetGame}>
          Restart Game
        </button>
      </div>
    );
  }

  return null;
}

export default GameOverBanner;
