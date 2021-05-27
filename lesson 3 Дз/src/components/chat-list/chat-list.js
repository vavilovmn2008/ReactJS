import React from "react"
import { Chat } from "./chat"

// @TODO сделать propTypes
export class ChatList extends React.Component {
  state = {
    chats: ["room1", "room2", "room3"],
    selectedIndex: 0,
  }

  handleListItemClick = (event, index) => {
    this.setState({
      selectedIndex: index,
    })
  }

  render() {
    const { chats, selectedIndex } = this.state

    return (
      <div>
        {chats.map((chat, index) => (
          // @TODO доделать Chat
          <Chat title={chat} key={index} selected={selectedIndex} />
        ))}
      </div>
    )
  }
}

// const Layout ({chatList, messageList }) = () => {
//   return (
//     <div>
//       <div className="header"><Header /></div>
//       <div className="chat">{chatList}</div>
//       <div className="message">{messageList}</div>
//     </div>
//     )
// }
