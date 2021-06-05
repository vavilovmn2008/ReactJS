import "./global.css"
import { ThemeProvider, createMuiTheme } from "@material-ui/core"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Chat } from "./pages"
import { store } from "./store"

const theme = createMuiTheme({})

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/chat" component={(props) => <Chat {...props} />} />
          <Route path="*" component={() => <h1>404</h1>} />
        </Switch>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root"),
)