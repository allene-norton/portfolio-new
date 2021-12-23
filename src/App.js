import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/Home'
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './Theme'


function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Home />
      </MuiThemeProvider>
    </div>

  );
}

export default App;
