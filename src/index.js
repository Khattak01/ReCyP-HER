import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import store from './store/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  // <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
