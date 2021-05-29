import { InputAdornment, Input, withStyles } from "@material-ui/core"
import { Send } from "@material-ui/icons"
import classnames from "classnames"
import React, { Component, createRef } from "react"
import { Message } from "./message"
import styles from "./message-field.module.css"
import { MessagesNotFound } from "./messages-not-found"

const StyledInput = withStyles(() => ({
  root: {
    "&": {
      color: "#9a9fa1",
      padding: "10px 15px",
      fontSize: " 15px",
    },
  },
}))(Input)
export class MessageField extends Component {
  ref = createRef()

  handleChangeInput = (e) => {
    this.props.handleChangeValue(e)
  }

  handlePressInput = ({ code }) => {
    if (code === "Enter" || code === "NumpadEnter") {
      this.handleSendMessage()
    }
  }

  handleSendMessage = () => {
    const { sendMessage, value } = this.props

    sendMessage({ author: "User", message: value })
  }

  handleScrollBottom = () => {
    if (this.ref.current) {
      this.ref.current.scrollTo(0, this.ref.current.scrollHeight)
    }
  }

  componentDidUpdate() {
    this.handleScrollBottom()
  }

  render() {
    const { messages, value } = this.props

    return (
      <>
        <div ref={this.ref}>
          {!messages.length ? (
            <MessagesNotFound />
          ) : (
            messages.map((message, index) => (
              <Message message={message} key={index} />
            ))
          )}
        </div>

        <StyledInput
          fullWidth={true}
          placeholder="Введите сообщение..."
          value={value}
          onChange={this.handleChangeInput}
          onKeyPress={this.handlePressInput}
          endAdornment={
            <InputAdornment position="end">
              {value && (
                <Send
                  className={classnames(styles.icon)}
                  onClick={this.handleSendMessage}
                />
              )}
            </InputAdornment>
          }
        />
      </>
    )
  }
}
