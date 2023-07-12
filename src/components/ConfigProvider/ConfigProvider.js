import React from 'react';

export const ConfigContext = React.createContext();

function ConfigProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    const isDarkMode = JSON.parse(window.localStorage.getItem('is-dark-mode'));
    return isDarkMode || false;
  });

  React.useEffect(() => {
    window.localStorage.setItem('is-dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <ConfigContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ConfigContext.Provider>
  );
}

export default ConfigProvider;
