import React from "react";
// Handle console logs
import "utils/dropConsole";
// Styles
import "fontsource-roboto";
// ROUTER
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "navigation/RouterConfig";
// MUI Theme
import { ThemeProvider } from "@material-ui/core";

import theme from "styles/muiTheme";
import "./App.css";

// Redux
import { Provider } from "react-redux";
import { store } from "redux/store";

function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <RouterConfig />
            </BrowserRouter>
          </ThemeProvider>
        </Provider>
      </div>
    </>
  );
}

export default App;
