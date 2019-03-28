import styled from 'styled-components'


import React, { Component} from 'react';

class Text extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
            <textarea cols="40" rows="20" value={this.props.Value} ></textarea>
            </div>
        );
    }
}


export {
    Text
}