import * as React from 'react';
import Todo from '../models/Todo';

/**
 * Interface for props
 */
interface Props {
  todos: Todo[],
  onTodoClicked: (todoId: number) => void
}
interface State { }

/**
 * AddToDoForm React Component renders data entry form 
 */
export default class AddTodoForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { todos, onTodoClicked } = this.props
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {
              todos.map(todo => (
                <tr className="table-active" key={todo.id} onClick={() => onTodoClicked(todo.id)} style={{ textDecoration: `${todo.done ? 'line-through' : ''}`, cursor: 'pointer' }}>
                  <th scope="row">{todo.name}</th>
                  <td>{todo.description}</td>
                  <td></td>
                </tr>)
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}