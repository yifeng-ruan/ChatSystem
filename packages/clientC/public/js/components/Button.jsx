var createReactClass = require('create-react-class');

var Button = createReactClass({
    render: function() {
        return (
            <div>
                <button onClick={this.props.onClick}>{this.props.children}</button>
            </div>
        );
    }
})

module.exports = {
    Button
};