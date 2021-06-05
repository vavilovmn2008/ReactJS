import { combineReducers, createStore, compose } from "redux"
import { conversationsReducer } from "./conversations"
import { messagesReducer } from "./messages"

export const store = createStore(
  combineReducers({
    messagesReducer,
    conversationsReducer,
  }),
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : () => {},
  ),
)