import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TopNav from '../components/TopNav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TopNav />, div);
  ReactDOM.unmountComponentAtNode(div);
});
