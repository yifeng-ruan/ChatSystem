import React from 'react';
import ReactDOM from 'react-dom';
import {Chat} from './components/Chat'

ReactDOM.render(
  <div>
      <Chat></Chat>
  </div>,
  document.getElementById('app')
);

module.hot.accept()
