var Chat = require('../public/js/components/Chat');
var escapeHtml = require('escape-html');
var Layout = require('./layout');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var createReactClass = require('create-react-class');

var index = createReactClass({
  render: function() {
    var contentString = ReactDOMServer.renderToString(<Chat />);

    return (
      <Layout>
        <div id="content" dangerouslySetInnerHTML={{__html: contentString}}>
        </div>
      </Layout>
    );
  }
});

module.exports = index;
