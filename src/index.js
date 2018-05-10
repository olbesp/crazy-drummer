import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import drumsReducer from './store/reducers/drums';
import genresReducer from './store/reducers/genres';

const rootReducer = combineReducers({
  drums: drumsReducer,
  genres: genresReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

registerServiceWorker();
