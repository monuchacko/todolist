import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '../store'
import ListSummaryItems from '../containers/ListSummaryItems';

/**
 * Test case for ListSummary React Component 
 */
describe("Testing main component", function(){
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><ListSummaryItems /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
