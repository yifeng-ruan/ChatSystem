import React, { Component} from 'react';

import {StyledButton} from './Button'
import {Input} from './Input'
import {Text} from './Text'

import io from 'socket.io-client';

const socket = io('http://localhost:3000')

class Chat extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            text: ""
          };
        socket.on( 'message', ( data ) => {
            this.setState((pre) => {
                return {text: pre.text + " " + data.message}
            });
        });
    }
    onClick() {
        const msg = "ClientB: " + this.refs.input.value;
        this.setState((pre) => {
            return {text: pre.text + " " +msg}
        });
        socket.emit('message', {message : msg})
    }
    render() {
        return (
            <div>
                <Text ref="text" Value={this.state.text}></Text>
                <Input ref="input"></Input>
                <StyledButton onClick={this.onClick}>Send</StyledButton>
            </div>
        );
    }
}

export {
    Chat
}
