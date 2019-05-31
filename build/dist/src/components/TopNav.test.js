import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TopNav from '../components/TopNav';
it('renders without crashing', function () {
    var div = document.createElement('div');
    ReactDOM.render(React.createElement(TopNav, null), div);
    ReactDOM.unmountComponentAtNode(div);
});
//# sourceMappingURL=TopNav.test.js.map