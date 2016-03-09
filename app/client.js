import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

const data = window.__INITIAL_STATE__;

ReactDOM.render(<App data={data} />, document.getElementById('app'));
