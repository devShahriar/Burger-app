import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cartReducer from './cartReducer'
import { BrowserRouter,HashRouter} from 'react-router-dom';
const store = createStore(cartReducer);

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}><App /></Provider></BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

