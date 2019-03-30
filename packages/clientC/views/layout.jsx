
var createReactClass = require('create-react-class');

var Layout = createReactClass({

  render: function() {
    return (
      <html>
        <body>
          {this.props.children}
          <script src="/js/bundle.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = Layout;
