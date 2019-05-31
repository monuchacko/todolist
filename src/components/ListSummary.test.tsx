import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ListSummary from '../components/ListSummary';

/**
 * Test case for ListSummary React Component 
 */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListSummary />, div);
  ReactDOM.unmountComponentAtNode(div);
});
