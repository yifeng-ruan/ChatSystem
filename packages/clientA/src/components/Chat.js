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
        // var bonjour = require('bonjour')()
        // // advertise an HTTP server on port 3000
        // bonjour.publish({ name: 'Client A', type: 'http', port: 8080 })
    }
    onClick() {
        const msg = "ClientA: " + this.refs.input.value;
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
