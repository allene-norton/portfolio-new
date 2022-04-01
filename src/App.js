import './App.css';
import React from 'react';
import Home from './Components/Home'
import Nav from './Components/Nav'
import Parlx from './Components/Parallax'
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './Theme'


function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Nav />
        <Parlx />
      </MuiThemeProvider>
    </div>

  );
}

export default App;
