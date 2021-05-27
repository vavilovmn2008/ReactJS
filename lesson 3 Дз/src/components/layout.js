import React from "react"
import { MessageField, ChatList } from "./components"


export class Layout extends React.Component {
  render () {
    return (
      <Layout chatList ={ <div>chatList</div>} messageList={<div>messageList</div>}/>
    )
  }
}





const Layout = ({chatList, messageList }) = () => {
    return (
      <div>
        <div className="header"><Header /></div>
        <div className="chat">{chatList}</div>
        <div className="message">{messageList}</div>
      </div>
      )
  }
  