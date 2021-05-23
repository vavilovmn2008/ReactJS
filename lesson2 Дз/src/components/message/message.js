import PropTypes from "prop-types"
import React from "react"

export class Message extends React.Component {
  static propTypes = {
    message: PropTypes.shape({
      author: PropTypes.string,
      value: PropTypes.string,
      date: PropTypes.date,
    }),
  }

  render() {
    const { message } = this.props
    const { author, value } = message

    return (
      <div>
        <h3>{value}</h3>
        <h3>{author}</h3>
        <hr />
      </div>
    )
  }
}
