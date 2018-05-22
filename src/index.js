import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
//for bootstraplike predefined css
import 'tachyons';
//CardList parent of Card
import App from './containers/App.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
