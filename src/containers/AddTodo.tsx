import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';
import AddTodoForm from '../components/AddTodoForm';

/**
 * Connect defining the event handler
 */
export default connect<any, any, any>(null, {
  handleSubmit: addTodo
})(AddTodoForm)