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
var AddTodoForm = /** @class */ (function (_super) {
    __extends(AddTodoForm, _super);
    function AddTodoForm(props) {
        return _super.call(this, props) || this;
    }
    AddTodoForm.prototype.render = function () {
        var _a = this.props, todos = _a.todos, onTodoClicked = _a.onTodoClicked;
        return (React.createElement("div", null,
            React.createElement("table", { className: "table table-hover" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", { scope: "col" }, "Name"),
                        React.createElement("th", { scope: "col" }, "Description"),
                        React.createElement("th", { scope: "col" }, "Due Date"))),
                React.createElement("tbody", null, todos.map(function (todo) { return (React.createElement("tr", { className: "table-active", key: todo.id, onClick: function () { return onTodoClicked(todo.id); }, style: { textDecoration: "" + (todo.done ? 'line-through' : ''), cursor: 'pointer' } },
                    React.createElement("th", { scope: "row" }, todo.name),
                    React.createElement("td", null, todo.description),
                    React.createElement("td", null))); })))));
    };
    return AddTodoForm;
}(React.Component));
export default AddTodoForm;
//# sourceMappingURL=TodosList.js.map