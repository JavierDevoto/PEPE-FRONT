import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import './styles/general.scss';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
