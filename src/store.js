import { createStore, compose } from 'redux';

import rootReducer from './reducers';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = initialState => createStore(rootReducer, initialState, enhancers);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
