import React from 'react';
import ReactDOM from 'react-dom';
import './styling/sass/App.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);