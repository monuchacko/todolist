import * as React from 'react';
import { FormEvent } from 'react';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css';

/**
 * Props for form
 */
interface Props {
  handleSubmit: (id: string, name: string, description: string, duedate: Date) => void
}

/**
 * State
 */
interface State {
  id: string,
  name: string,
  description: string
  duedate: Date
};

/**
 * AddTodoForm React Component renders data entry form for tasks 
 */
export default class AddTodoForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { id: '', name: '', description: '', duedate: new Date() }; // Empty by default
    this._updateName = this._updateName.bind(this);
    this._updateDescription = this._updateDescription.bind(this);
    this._updateDueDate = this._updateDueDate.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  /**
   * Update name property
   * @param name string updates name state
   */
  _updateName(name: string) {
    this.setState({ name })
  }

  /**
   * Update description property
   * @param description string updates description state
   */
  _updateDescription(description: string) {
    this.setState({ description })
  }

  /**
   * Update due date property
   * @param duedate string updates due date state
   */
  _updateDueDate(duedate: any) {
    this.setState({ duedate })
  }
  
  /**
   * Submit handler
   * @param e FormEvent
   */
  _handleSubmit(e: FormEvent<any>) {
    e.preventDefault()
    if (!this.state.name.trim()) {
      return
    }

    this.props.handleSubmit(this.state.id, this.state.name, this.state.description, this.state.duedate);
    this.setState({ id: '' });
    this.setState({ name: '' });
    this.setState({ description: '' });
    // this.setState({ duedate: new Date() });
  }

  /**
   * Render component
   */
  render() {
    const { name } = this.state;
    const { description } = this.state;
    // const { duedate } = this.state;
    const { _updateName, _handleSubmit } = this;
    return (
      <form onSubmit={_handleSubmit}>
        <fieldset>
          <legend data-test="add_new_form">Add Tasks</legend>
          <fieldset className="form-group">
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Task Name</label>
              <div className="col-sm-10">
                <input className="form-control" type="text" value={name} onChange={e => _updateName(e.target.value)} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Description</label>
              <div className="col-sm-10">
                <input 
                  className="form-control" 
                  type="text" 
                  value={description} 
                  onChange={e => this._updateDescription(e.target.value)} 
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Due Date</label>
              <div className="col-sm-10">
                <DatePicker className="form-control" selected={this.state.duedate} onChange={this._updateDueDate} />
              </div>
            </div>
          </fieldset>
          <div className="form-group row">
            <div className="col-sm-2">&nbsp;</div>
            <div className="col-sm-10">
              <button className="btn btn-primary" type="submit">Add Task</button>
            </div>
          </div>
        </fieldset>
      </form>
    )
  }
}