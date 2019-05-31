//NOT IN USE

// import * as React from 'react';
// import { FormEvent } from 'react';
// import { connect } from 'react-redux';
// import * as Redux from 'redux';
// import { MyReduxState } from './my-root-reducer.ts'

// interface Props {
//   handleSubmit: (value: string, description: string) => void
// }
// interface State {
//   value: string,
//   description: string
// };

// export interface OwnProps {
//   name: string,
//   value: string,
//   description: string
// }

// interface StateProps {
//   propFromReduxStore: string
// }

// interface DispatchProps {
//   createNewTask: () => void
// }

// export default class AddTodoForm extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props)
//     this.state = { value: '', description: '' } // Empty by default
//     this._updateValue = this._updateValue.bind(this)
//     this._updateDescription = this._updateDescription.bind(this)
//     this._handleSubmit = this._handleSubmit.bind(this)
//   }

//   _updateValue(value: string) {
//     this.setState({ value })
//   }

//   _updateDescription(description: string) {
//     this.setState({ description })
//   }

//   _createNewTask() {
//     // this.setState({ description })
//   }

//   _handleSubmit(e: FormEvent<any>) {
//     e.preventDefault()
//     if (!this.state.value.trim()) {
//       return
//     }

//     this.props.handleSubmit(this.state.value, this.state.description)
//     this.setState({ value: '' })
//     this.setState({ description: '' })
//   }

//   render() {
//     const { value } = this.state
//     const { description } = this.state
//     const { _updateValue, _handleSubmit } = this
//     return (
//       <form onSubmit={_handleSubmit}>
//         <fieldset>
//           <legend>Add Tasks</legend>
//           <fieldset className="form-group">
//             <div className="form-group row">
//               <label className="col-sm-2 col-form-label">Task Name</label>
//               <div className="col-sm-10">
//                 <input className="form-control" type="text" value={value} onChange={e => _updateValue(e.target.value)} />
//               </div>
//             </div>
//             <div className="form-group row">
//               <label className="col-sm-2 col-form-label">Description</label>
//               <div className="col-sm-10">
//                 <input className="form-control" type="text" value={description} onChange={e => this._updateDescription(e.target.value)} />
//               </div>
//             </div>
//           </fieldset>
//           <div className="form-group row">
//             <div className="col-sm-2">&nbsp;</div>
//             <div className="col-sm-10">
//               <button className="btn btn-primary" type="submit">Add Task</button>
//               <button className="btn btn-primary" type="button" onClick={()=>createNewTask()}>Create Add Task</button>
//             </div>
//           </div>
//         </fieldset>
//       </form>
//     )
//   }
// }

// // const mapStateToProps = (state: Types.RootState) => ({
// //   count: state.counters.reduxCounter,
// // });

// const mapStateToProps = (state: MyReduxState, ownProps: OwnProps): StateProps => {
//   let id = todoProps.id;
//   return {
//     name: todoProps.name,
//     description: todoProps.description,
//     tasks: state.tasks.filter((task: { id: any; })=>task.id = id)
//   }
// }

// // dispatch: Redux.Dispatch<any>, props
// const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): DispatchProps => {
//   return {
//     createNewTask() {
//       console.log("Creating new task");
//     }
//   }
// }

// // export const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps) (AddTodoForm);
// connect<StateProps, DispatchProps, OwnProps> (mapStateToProps, mapDispatchToProps)(AddTodoForm);

