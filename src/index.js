import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
dotenv.config()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
