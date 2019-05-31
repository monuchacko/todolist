import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { reducer, initialState } from '../reducers';
var store = createStore(reducer, initialState, applyMiddleware(logger));
export default store;
//# sourceMappingURL=index.js.map