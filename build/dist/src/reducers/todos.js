var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { ActionTypes } from '../actions/todos';
// Define our initialState
export var initialState = {
    todos: [] // We don't have any todos at the start of the app
};
/*
 * Reducer takes 2 arguments
 * state: The state of the reducer. By default initialState ( if there was no state provided)
 * action: Action to be handled. Since we are in todos reducer, action type is Action defined in our actions/todos file.
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ActionTypes.ADD_TODO: {
            /*
             * We have autocompletion here
             * Typescript knows the action is type of AddTodoAction thanks to the ActionTypes enum
             * todo is type of Todo
             */
            var todo = action.payload.todo;
            return __assign({}, state, { todos: state.todos.concat([todo]) });
        }
        case ActionTypes.TOGGLE_TODO: {
            /*
             * This is the same as
             * const todoId = action.payload.todoId
             */
            var todoId_1 = action.payload.todoId;
            return __assign({}, state, { todos: state.todos.map(function (todo) { return todo.id === todoId_1 ? __assign({}, todo, { done: !todo.done }) : todo; }) });
        }
        default:
            return state;
    }
}
//# sourceMappingURL=todos.js.map