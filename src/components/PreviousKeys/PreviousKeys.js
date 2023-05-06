import React from 'react';

import { LetterStatuses, checkGuess } from '../../game-helpers';

const FIRST_ROW_START = 0;
const FIRST_ROW_END = 10;
const SECOND_ROW_START = 10;
const SECOND_ROW_END = 19;
const THIRD_ROW_START = 19;
const THIRD_ROW_END = 25;

function PreviousKeys({ guessList, answer }) {
  const qwertyAllKeys = [
    { letter: 'Q', id: '17', status: '' },
    { letter: 'W', id: '23', status: '' },
    { letter: 'E', id: '5', status: '' },
    { letter: 'R', id: '18', status: '' },
    { letter: 'T', id: '20', status: '' },
    { letter: 'Y', id: '25', status: '' },
    { letter: 'U', id: '21', status: '' },
    { letter: 'I', id: '9', status: '' },
    { letter: 'O', id: '15', status: '' },
    { letter: 'P', id: '16', status: '' },
    { letter: 'A', id: '1', status: '' },
    { letter: 'S', id: '19', status: '' },
    { letter: 'D', id: '4', status: '' },
    { letter: 'F', id: '6', status: '' },
    { letter: 'G', id: '7', status: '' },
    { letter: 'H', id: '8', status: '' },
    { letter: 'J', id: '10', status: '' },
    { letter: 'K', id: '11', status: '' },
    { letter: 'L', id: '12', status: '' },
    { letter: 'Z', id: '26', status: '' },
    { letter: 'X', id: '24', status: '' },
    { letter: 'C', id: '3', status: '' },
    { letter: 'V', id: '22', status: '' },
    { letter: 'B', id: '2', status: '' },
    { letter: 'N', id: '14', status: '' },
    { letter: 'M', id: '13', status: '' },
  ];

  setGuessListStatuses(guessList);

  function setGuessListStatuses(guessList) {
    guessList.forEach(({ word }) => {
      checkGuess(word, answer).forEach(
        ({ letter: guessLetter = ' ', status: guessStatus = '' }, index) => {
          const currentKey = qwertyAllKeys.find(
            (key) => key.letter === guessLetter
          );
          if (currentKey) {
            setHighestStatus(guessStatus, currentKey);
          }
        }
      );
    });
  }

  function setHighestStatus(guessStatus, currentKey) {
    if (guessStatus === LetterStatuses.CORRECT) {
      currentKey.status = guessStatus;
    } else if (guessStatus === LetterStatuses.MISPLACED) {
      if (currentKey.status !== LetterStatuses.CORRECT) {
        currentKey.status = guessStatus;
      }
    } else if (guessStatus === LetterStatuses.INCORRECT) {
      if (currentKey.status === LetterStatuses.EMPTY) {
        currentKey.status = guessStatus;
      }
    }
  }

  function getClassName(status) {
    return status === LetterStatuses.EMPTY ? 'key' : `key used ${status}`;
  }

  return (
    <>
      <div className="keys">
        <div className="key-row" key="1">
          {qwertyAllKeys
            .slice(FIRST_ROW_START, FIRST_ROW_END)
            .map(({ letter, id, status }) => (
              <span className={getClassName(status)} key={id}>
                {letter}
              </span>
            ))}
        </div>
        <div className="key-row" key="2">
          {qwertyAllKeys
            .slice(SECOND_ROW_START, SECOND_ROW_END)
            .map(({ letter, id, status }) => (
              <span className={getClassName(status)} key={id}>
                {letter}
              </span>
            ))}
        </div>
        <div className="key-row" key="3">
          {qwertyAllKeys
            .slice(THIRD_ROW_START, THIRD_ROW_END)
            .map(({ letter, id, status }) => (
              <span className={getClassName(status)} key={id}>
                {letter}
              </span>
            ))}
        </div>
      </div>
    </>
  );
}

export default PreviousKeys;
