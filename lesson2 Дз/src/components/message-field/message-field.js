import React from "react"
import { Message } from "../message"

export class MessageField extends React.Component {
  state = {
    messages: [{ author: "User", value: "Привет !", date: new Date() }],
  }

  componentDidUpdate() {
    const { messages } = this.state

    const lastMessage = messages[messages.length - 1]

    if (lastMessage.author === "User") {
      setTimeout(() => {
        this.setState({
          messages: [
            ...messages,
            { author: "Bot", value: "нормально", date: new Date() },
          ],
        })
      }, 1000)
    }
  }

  sendMessage = () => {
    const { messages } = this.state

    this.setState({
      messages: [
        ...messages,
        { author: "User", value: "как живешь?", date: new Date() },
      ],
    })
  }

  render() {
    const { messages } = this.state

    return (
      <div>
        <button onClick={this.sendMessage}>Отправить сообщение</button>
        {messages.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>
    )
  }
}
