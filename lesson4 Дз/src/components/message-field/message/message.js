import classNames from "classnames"
import { format } from "date-fns"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styles from "./message.module.css"

export class Message extends Component {
  static propTypes = {
    message: PropTypes.shape({
      author: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }),
  }

  render() {
    const {
      message: { message, author, date },
    } = this.props

    return (
      <div className={styles.wrapper}>
        <div
          className={classNames(styles.message, {
            [styles.currentMessage]: author === "User",
          })}
        >
          <h3>{message}</h3>
          <p>{author}</p>
          <p>{format(date, "HH:mm:ss")}</p>
        </div>
      </div>
    )
  }
}
