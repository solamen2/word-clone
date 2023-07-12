import React from 'react';

import { CurrentGameContext } from '../CurrentGameProvider/CurrentGameProvider';

function GameOverBanner() {
  const { answer, currentGuessIndex, gameStatus, GameStatuses, resetGame } =
    React.useContext(CurrentGameContext);

  if (gameStatus === GameStatuses.WON) {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> You got it in{' '}
          <strong>
            {currentGuessIndex === 1
              ? '1 guess'
              : `${currentGuessIndex} guesses`}
          </strong>
          .
        </p>
        <button className="reset-button" onClick={resetGame}>
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
        <button className="reset-button" onClick={resetGame}>
          Restart Game
        </button>
      </div>
    );
  }

  return null;
}

export default GameOverBanner;
