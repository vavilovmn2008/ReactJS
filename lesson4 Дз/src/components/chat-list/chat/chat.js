import {
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from "@material-ui/core"
import { AccountCircle } from "@material-ui/icons"
import { format } from "date-fns"
import PropTypes from "prop-types"
import React, { Component } from "react"

import styles from "./chat.module.css"

const StyledListItem = withStyles(() => ({
  root: {
    "&.Mui-selected": {
      backgroundColor: "#2b5278",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "#2b5278",
    },
  },
}))(ListItem)

export class Chat extends Component {
  static propTypes = {
    selected: PropTypes.bool.isRequired,
  }

  render() {
    const { handleListItemClick, selected, chat, lastMessage } = this.props
    const { title } = chat
    const time = lastMessage?.date ? format(lastMessage.date, "HH:mm:ss") : null

    return (
      <StyledListItem
        button={true}
        selected={selected}
        onClick={handleListItemClick}
      >
        <ListItemIcon>
          <AccountCircle fontSize="large" className={styles.icon} />
        </ListItemIcon>
        <div className={styles.description}>
          <ListItemText className={styles.text} primary={title} />
          {lastMessage ? (
            <ListItemText
              className={styles.text}
              primary={`${lastMessage.author}: ${lastMessage.message}`}
            />
          ) : (
            <ListItemText className={styles.text} primary="Нет сообщений" />
          )}
          <ListItemText className={styles.text} primary={time} />
        </div>
      </StyledListItem>
    )
  }
}
