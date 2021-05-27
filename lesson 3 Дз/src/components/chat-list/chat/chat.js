import React from "react"

export class Chat extends React.Component {
  // @TODO сделать propTypes
  render() {
    const { title, handleListItemClick, selected } = this.props

    // handleListItemClick нужен для <ListItem handleListItemClick selected/> (из материал)

    return <div>{title}</div>
  }
}
