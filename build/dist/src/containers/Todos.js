import { connect } from 'react-redux';
import { getTodos } from '../selectors/todos';
import { toggleTodo } from '../actions/todos';
import TodosList from '../components/TodosList';
var mapStateToProps = function (state) { return ({
    todos: getTodos(state)
}); };
var mapDispatchToProps = {
    onTodoClicked: toggleTodo
};
export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
//# sourceMappingURL=Todos.js.map