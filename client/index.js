//setup file: insert our main component into the DOM

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';

ReactDOM.render(
  <Main />,
  document.getElementById('main')
);
