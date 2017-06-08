import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const logger = createLogger();

const store = initialState =>
createStore(rootReducer, initialState, enhancers, applyMiddleware(thunk, logger));

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
