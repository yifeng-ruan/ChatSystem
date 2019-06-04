import React, { Component } from 'react';
import { Text } from './Text'

class Message extends Component {
  render () {
    return (
      <div>
        {this.props.messages.map((message, i) => {
          return <Text {...message} key={i} />
        })}
      </div>)
  }
}

export {
    Message
}