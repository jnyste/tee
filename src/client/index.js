import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#43563f"
    },
    secondary: {
      main: "#97c16b"
    },
    background: {
      default: "#101010"
    }
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
