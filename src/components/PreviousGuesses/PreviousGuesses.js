import React from 'react';

function PreviousGuesses({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess) => (
        <p className="guess" key={guess.id}>
          {[...guess.word].map((letter, index) => (
            <span className="cell" key={index}>
              {letter}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default PreviousGuesses;
