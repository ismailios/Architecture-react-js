/**
 * theme for MUI
 * TODO: create a theme object as per designs
 */
import { createMuiTheme } from "@material-ui/core";
// import { purple, green, orange, deepOrange } from "@material-ui/core/colors";

// Global styles can be moved to a separate file for ease of maintenance.

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1E3C85",
    },
    secondary: {
      main: "#1DAAB0",
    },
  },
  typography: {
    fontFamily: "",
    fontSize: 14,
    h1: {
      fontSize: "2rem",
      fontWeight: 300,
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
  },
  overrides: {
    // Style sheet name ⚛️
    // MuiButton: {
    //   // Name of the rule
    //   text: {
    //     // Some CSS
    //     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    //     borderRadius: 3,
    //     border: 0,
    //     color: "white",
    //     height: 48,
    //     padding: "0 30px",
    //     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    //   },
    // },
  },
});

export default theme;
