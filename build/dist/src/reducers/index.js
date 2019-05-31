import { combineReducers } from 'redux';
import * as fromTodos from './todos';
/*
 * initialState of the app
 */
export var initialState = {
    todos: fromTodos.initialState
};
/*
 * Root reducer of the app
 * Returned reducer will be of type Reducer<State>
 */
export var reducer = combineReducers({
    todos: fromTodos.reducer
});
//# sourceMappingURL=index.js.map