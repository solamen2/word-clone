import React from 'react';

import ConfigProvider from '../ConfigProvider/ConfigProvider';
import Page from '../Page/Page';

function App() {
  return (
    <ConfigProvider>
      <Page />
    </ConfigProvider>
  );
}

export default App;
