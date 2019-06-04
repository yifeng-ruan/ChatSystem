import React, { Component} from 'react';
import Linkify from 'react-linkify';

class Text extends Component {
    constructor(props) {
        super(props);
    }
    renderComponent({Type, Value}) {
        switch (Type) {
            case "img":
                return <img src={Value}  />
            default:
                return <Linkify properties={{ target: '_blank' }}>{Value}</Linkify>
        }
    }
    render() {
        return (
            <div>
                {this.renderComponent(this.props)}
            </div>
        );
    }
}


export {
    Text
}