import * as React from 'react';
import Todo from '../models/Todo';

/**
 * Interface for props
 */
interface Props {
  todos: Todo[],
  onTodoClicked: (todoId: number) => (void),
  onToDoViewClicked: (viewType: string) => (void)
}
interface State { viewType: string }

/**
 * ListSummary React Component renders summary of todo 
 */
class ListSummary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { viewType: '' }; // Empty by default
    this._updateView = this._updateView.bind(this);
  }

  _updateView(viewType: string) {
    this.props.onToDoViewClicked(this.state.viewType);
    this.setState({ viewType: viewType });
  }

  render() {
    const { todos } = this.props;
    let allItems = 0;
    let dueToday = 0;

    if (todos) {
      allItems = todos.length;

      todos.forEach((todo) => {
        if (this.IsToday(todo.duedate)) {
          dueToday++;
        }
      })
    }

    // View for all items
    let allItemsStyle = {
      fontWeight: 'bold' as 'bold',
      cursor: 'pointer'
    }

    if (this.state.viewType === 'VIEW_ALL') {
      allItemsStyle = {
        fontWeight: 'bold' as 'bold',
        cursor: 'pointer'
      }
    } else {
      allItemsStyle = {
        fontWeight: 'normal' as 'bold',
        cursor: 'pointer'
      }
    }

    // View for due today
    let dueTodayStyle = {
      fontWeight: 'normal' as 'bold',
      cursor: 'pointer'
    }

    if (this.state.viewType === 'VIEW_TODAY') {
      dueTodayStyle = {
        fontWeight: 'bold' as 'bold',
        cursor: 'pointer'
      }
    } else {
      dueTodayStyle = {
        fontWeight: 'normal' as 'bold',
        cursor: 'pointer'
      }
    }

    return (
      <div>
        <ul className="list-group">
          <li 
            data-test="list_summary"
            className="list-group-item d-flex justify-content-between align-items-center" 
            onClick={() => this._updateView('VIEW_ALL')} 
            style={allItemsStyle}
          >
            All Items
            <span className="badge badge-primary badge-pill">{allItems}</span>
          </li>
          <li 
            className="list-group-item d-flex justify-content-between align-items-center" 
            onClick={() => this._updateView('VIEW_TODAY')} 
            style={dueTodayStyle}
          >
            Due Today
            <span className="badge badge-primary badge-pill">{dueToday}</span>
          </li>
        </ul>
      </div>
    );
  }

  IsToday = (someDate: Date) => {
    const today = new Date()
    return someDate.getDate() === today.getDate() &&
      someDate.getMonth() === today.getMonth() &&
      someDate.getFullYear() === today.getFullYear()
  }
}

export default ListSummary;
