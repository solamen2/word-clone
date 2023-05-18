import React from 'react';

function Settings({ isDarkMode, setIsDarkMode }) {
  return (
    <div className="settings-wrapper">
      <div className="settings">
        <label className="toggle-label" htmlFor="dark-mode-checkbox">
          Dark Mode
        </label>
        <div className="toggle-wrapper">
          <input
            className="toggle-input"
            type="checkbox"
            id="dark-mode-checkbox"
            checked={isDarkMode}
            onChange={(event) => {
              return null; // silence warning, since other handlers do this for us
            }}
          />
          <button
            className="toggle-button"
            onClick={(event) => {
              event.preventDefault();
              setIsDarkMode(!isDarkMode);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Settings;
