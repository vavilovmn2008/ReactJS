import React from "react"
import ReactDOM from "react-dom"
import { MessageField } from "./components"

const App = () => {
  return (
    <div>
      <MessageField />
    </div>
  )
}

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root"),
)
