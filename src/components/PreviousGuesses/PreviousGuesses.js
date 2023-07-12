import React from 'react';

import Guess from '../Guess/Guess';
import { CurrentGameContext } from '../CurrentGameProvider/CurrentGameProvider';

function PreviousGuesses() {
  const { answer, guessList } = React.useContext(CurrentGameContext);

  return (
    <div className="guess-results">
      {guessList.map((guess) => (
        <Guess guess={guess} answer={answer} key={guess.id} />
      ))}
    </div>
  );
}

export default PreviousGuesses;
