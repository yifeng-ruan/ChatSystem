var Chat = require('./components/Chat');
var React = require('react');

function initApp() {
  var container = document.getElementById('content');
  React.render(
    <Chat/>,
    container
  );
}

initApp();
