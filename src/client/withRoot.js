import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/styles";
import CssBaseline from "@material-ui/CssBaseline";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
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

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
        <MuiThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...props} />
        </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;