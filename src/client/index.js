import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    type: "dark",
    primary: {
      main: "#43563f"
    },
    secondary: {
      main: "#97c16b"
    },
    background: {
      default: "#202520"
    }
  }
});

ReactDOM.render(<MuiThemeProvider theme={theme}>
    <App />
    </MuiThemeProvider>
  , document.getElementById('root'));