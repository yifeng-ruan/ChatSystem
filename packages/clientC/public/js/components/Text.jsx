var createReactClass = require('create-react-class');

var Text = createReactClass({
    render: function() {
        return (
            <div>
            <textarea cols="40" rows="20" value={this.props.Value} ></textarea>
            </div>
        );
    }
})

module.exports =  {
    Text
}