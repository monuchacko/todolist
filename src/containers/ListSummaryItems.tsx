import { connect } from 'react-redux'
import { State } from '../reducers'
import { getTodos } from '../selectors/todos'
import { toggleTodo } from '../actions/todos'
import { toggleTodoView } from '../actions/todosView'
import ListSummary from '../components/ListSummary'

/**
 * 
 * @param state Object defining props
 */
const mapStateToProps = (state: State) => ({
  todos: getTodos(state)
})

/**
 * Dispatch props
 */
const mapDispatchToProps = {
  onTodoClicked: toggleTodo,
  onToDoViewClicked : toggleTodoView
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(ListSummary)