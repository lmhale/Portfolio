import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import Burger from './components/Burger'
import Menu from './components/Menu';
import Pages from './Router';
function App() {
    const [open, setOpen] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
        <Burger open={open} setOpen={setOpen}  />
            <Menu open={open} setOpen={setOpen} />
          <h1>Hello. This is burger menu tutorial</h1>
        <Pages/>
          <small>Icon made by Freepik from www.flaticon.com</small>
        </div>
      </>
    </ThemeProvider>
  );
}
export default App;