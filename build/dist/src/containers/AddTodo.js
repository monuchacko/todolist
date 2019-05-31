import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';
import AddTodoForm from '../components/AddTodoForm';
export default connect(null, {
    handleSubmit: addTodo
})(AddTodoForm);
//# sourceMappingURL=AddTodo.js.map