import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import drumsReducer from './store/reducers/drums';
import genresReducer from './store/reducers/genres';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  drums: drumsReducer,
  genres: genresReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

registerServiceWorker();
