var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import TopNav from '../components/TopNav';
import ListSummary from '../components/ListSummary';
import AddTodo from '../containers/AddTodo';
import Todos from '../containers/Todos';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-12" },
                    React.createElement(TopNav, null))),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-3" },
                    React.createElement(ListSummary, null)),
                React.createElement("div", { className: "col-md-9" },
                    React.createElement(AddTodo, null),
                    React.createElement(Todos, null)))));
    };
    return App;
}(React.Component));
export default App;
//# sourceMappingURL=App.js.map