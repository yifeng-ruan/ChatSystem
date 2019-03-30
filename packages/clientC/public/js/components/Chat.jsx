var createReactClass = require('create-react-class');

var {Button} = require('./Button')
var {Input} = require('./Input')
var {Text} = require('./Text')

var io = require('socket.io-client');

var socket = io('http://localhost:3000')

var Chat = createReactClass({
    getInitialState: function () {
        socket.on( 'message', ( data ) => {
            this.setState((pre) => {
                return {text: pre.text + " " + data.message}
            });
        });
        return {
            text: ""
        };;
    },
    onClick: function() {
        var msg = "ClientB: " + this.refs.input.value;
        this.setState((pre) => {
            return {text: pre.text + " " +msg}
        });
        socket.emit('message', {message : msg})
    },
    render: function() {
        return (
            <div>
                <Text ref="text" Value={this.state.text}></Text>
                <Input ref="input"></Input>
                <Button onClick={this.onClick}>Send</Button>
            </div>
        );
    }
});

module.exports = {
    Chat
}
