import React from 'react';

import { GameStatuses } from '../Game/Game';

function GameOverBanner({ gameStatus, numOfGuesses, answer }) {
  if (gameStatus === GameStatuses.WON) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> You got it in{' '}
          <strong>{numOfGuesses} guesse(s)</strong>.
        </p>
      </div>
    );
  } else if (gameStatus === GameStatuses.LOST) {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer was <strong>{answer}</strong>.
        </p>
      </div>
    );
  }

  return null;
}

export default GameOverBanner;
