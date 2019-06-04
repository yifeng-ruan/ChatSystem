import React, { Component } from 'react';
import { StyledButton } from './Button'
import { Input } from './Input'
import { Message } from './Message'
import { File } from './File'

import io from 'socket.io-client';

const socket = io('http://localhost:3000')

class Chat extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.readThenSendFile = this.readThenSendFile.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            messages: []
        };
        socket.on('message', (data) => {
            this.setState((pre) => {
                return { messages: [...pre.messages, ...[{ Value: data.message, Type: "text" }]] };
            });
        });
        socket.on('base64 file', function (msg) {
            this.setState((pre) => {
                return { messages: [...pre.messages, ...[{ Value: msg.file, Type: "img" }]] };
            });
        });
    }
    onClick() {
        const msg = "ClientA: " + this.refs.input.value;
        this.setState((pre) => {
            return { messages: [...pre.messages, ...[{ Value: msg, Type: "text" }]] };
        });
        socket.emit('message', { message: msg })
    }

    onChange(e) {
        var data = e.target.files[0];
        this.readThenSendFile(data);
    }

    readThenSendFile(data) {
        var self = this;
        var reader = new FileReader();
        reader.onload = function(evt){
            var msg ={};
            msg.username = "ClientA";
            msg.file = evt.target.result;
            msg.fileName = data.name;
            socket.emit('base64 file', msg);
            self.setState((pre) => {
                return { messages: [...pre.messages, ...[{ Value: msg.file, Type: "img" }]] };
            });
        };
        reader.readAsDataURL(data);
    }
    render() {
        return (
            <div>
                <Message messages= {this.state.messages} />
                <Input ref="input"></Input>
                <StyledButton onClick={this.onClick}>Send</StyledButton>
                <File onChange={this.onChange} />
            </div>
        );
    }
}

export {
    Chat
}
