import React from 'react';
import ReactDOM from 'react-dom';
import Api from './api/api';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

Api.init();
serviceWorker.unregister();
