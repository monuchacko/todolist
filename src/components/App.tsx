import * as React from 'react';
import TopNav from '../components/TopNav';
import ListSummary from '../components/ListSummary';
import AddTodo from '../containers/AddTodo';
import Todos from '../containers/Todos';

/**
 * App React Component sets up various components of the page
 */
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <TopNav />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <ListSummary />
          </div>
          <div className="col-md-9">
            <AddTodo />
            <Todos />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
