import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import App from '../components/App';
it('renders without crashing', function () {
    var div = document.createElement('div');
    ReactDOM.render(React.createElement(Provider, { store: store },
        React.createElement(App, null)), div);
    ReactDOM.unmountComponentAtNode(div);
});
//# sourceMappingURL=App.test.js.map