import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Canvas from './reusable/Canvas';

ReactDOM.render(
  <React.StrictMode>
    <Canvas />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
