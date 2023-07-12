import React from 'react';

import PreviousGuesses from '../PreviousGuesses/PreviousGuesses';
import WordInput from '../WordInput/WordInput';
import GameOverBanner from '../GameOverBanner/GameOverBanner';
import PreviousKeys from '../PreviousKeys/PreviousKeys';
import CurrentGameProvider from '../CurrentGameProvider/CurrentGameProvider';

function Game() {
  return (
    <CurrentGameProvider>
      <PreviousGuesses />
      <WordInput />
      <GameOverBanner />
      <PreviousKeys />
    </CurrentGameProvider>
  );
}

export default Game;
