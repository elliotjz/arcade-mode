
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
// import { combineReducers } from 'redux-immutable';

import App from './containers/App';
import arcadeReducer from './reducers/ArcadeReducer';

const ReactRedux = require('react-redux');

const Provider = ReactRedux.Provider;

const app = document.getElementById('app');

const reducersCombined = combineReducers({
  arcadeReducer
});

const mainStore = createStore(reducersCombined);

ReactDOM.render(
  <Provider store={mainStore}>
    <App />
  </Provider>, app
);
