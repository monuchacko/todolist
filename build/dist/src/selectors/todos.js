import { createSelector } from 'reselect';
/*
 * Get the todos state from the root state
 */
var getTodosState = (function (state) { return state.todos; });
/*
 * Getting todos array from todos State
 */
export var getTodos = createSelector([getTodosState], function (s) { return s.todos; });
//# sourceMappingURL=todos.js.map