import { ThemeProvider, createMuiTheme } from "@material-ui/core"
import React from "react"
import ReactDOM from "react-dom"
import { Layout } from "./components/layout"
import { MessageField, ChatList } from "./components"

const App = () => {
  // @TODO сделать Layout
  return (
    <div style={{ display: "flex" }}>
      <Layout />
    </div>
  )
}

const theme = createMuiTheme({})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root"),
)
