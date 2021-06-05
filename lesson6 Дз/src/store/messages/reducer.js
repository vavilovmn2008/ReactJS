import { MESSAGE_SEND } from "./types"

const initialState = {
  room1: [
    { author: "User", message: "test!", date: new Date() },
    { author: "Bot", message: "Привет, я бот!", date: new Date() },
  ],
}

export const messagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MESSAGE_SEND:
      return {
        ...state,
        [payload.roomId]: [
          ...(state[payload.roomId] || []),
          {
            author: payload.author,
            message: payload.message,
            date: new Date(),
          },
        ],
      }
    default:
      return state
  }
}

// @TODO реагировать удаления комнаты

// @TODO * сделть функцию createReducer
// const reducer = createReducer(initialState, {
//   [MESSAGE_SEND]: (state, action) => ({})
// })