import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import './bootstrap.min.css';
/**
 *
 */
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(App, null)), document.getElementById('root'));
registerServiceWorker();
//# sourceMappingURL=index.js.map