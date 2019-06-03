import * as React from 'react';
import * as ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
import './bootstrap.min.css';
// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });

/**
 * Test case for root index React Component
 */
describe("Testing main component", function () {

  it('index renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
    // registerServiceWorker()
  });

  // it('Add Tasks should exist', () => {
  //   const wrapper = shallow(<Provider store={store}><App /></Provider>).dive();
  //   expect(wrapper.find('[data-test="add_new_form"]').text()).toEqual('Add Tasks');
  // });
})