/*
 * In order to automatically generate id for our todos
 */
var nextId = 0;
/*
 * We're defining every action name constant here
 * We're using Typescript's enum
 * Typescript understands enum better
 */
export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["ADD_TODO"] = "[todos] ADD_TODO";
    ActionTypes["TOGGLE_TODO"] = "[todos] TOGGLE_TODO";
})(ActionTypes || (ActionTypes = {}));
/*
 * Define our actions creators
 * We are returning the right Action for each function
 */
export function addTodo(name, description) {
    return {
        type: ActionTypes.ADD_TODO,
        payload: {
            todo: {
                id: nextId++,
                name: name,
                description: description,
                done: false
            }
        }
    };
}
export function toggleTodo(todoId) {
    return { type: ActionTypes.TOGGLE_TODO, payload: { todoId: todoId } }; // {todoId} is a shortcut for {todoId: todoId}
}
//# sourceMappingURL=todos.js.map