import styled from 'styled-components'


import React, { Component} from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>{this.props.children}</button>
            </div>
        );
    }
}

const StyledButton = styled(Button)`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


export {
    StyledButton
}