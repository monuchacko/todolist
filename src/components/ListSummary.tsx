import * as React from 'react';

class ListSummary extends React.Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Due Today
            <span className="badge badge-primary badge-pill">14</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Due this Week
            <span className="badge badge-primary badge-pill">2</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Pending
            <span className="badge badge-primary badge-pill">1</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default ListSummary;
