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
;
var AddTodoForm = /** @class */ (function (_super) {
    __extends(AddTodoForm, _super);
    function AddTodoForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { value: '', description: '' }; // Empty by default
        _this._updateValue = _this._updateValue.bind(_this);
        _this._updateDescription = _this._updateDescription.bind(_this);
        _this._handleSubmit = _this._handleSubmit.bind(_this);
        return _this;
    }
    AddTodoForm.prototype._updateValue = function (value) {
        this.setState({ value: value });
    };
    AddTodoForm.prototype._updateDescription = function (description) {
        this.setState({ description: description });
    };
    AddTodoForm.prototype._handleSubmit = function (e) {
        e.preventDefault();
        if (!this.state.value.trim()) {
            return;
        }
        this.props.handleSubmit(this.state.value, this.state.description);
        this.setState({ value: '' });
        this.setState({ description: '' });
    };
    AddTodoForm.prototype.render = function () {
        var _this = this;
        var value = this.state.value;
        var description = this.state.description;
        var _a = this, _updateValue = _a._updateValue, _handleSubmit = _a._handleSubmit;
        return (React.createElement("form", { onSubmit: _handleSubmit },
            React.createElement("fieldset", null,
                React.createElement("legend", null, "Add Tasks"),
                React.createElement("fieldset", { className: "form-group" },
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: "col-sm-2 col-form-label" }, "Task Name"),
                        React.createElement("div", { className: "col-sm-10" },
                            React.createElement("input", { className: "form-control", type: "text", value: value, onChange: function (e) { return _updateValue(e.target.value); } }))),
                    React.createElement("div", { className: "form-group row" },
                        React.createElement("label", { className: "col-sm-2 col-form-label" }, "Description"),
                        React.createElement("div", { className: "col-sm-10" },
                            React.createElement("input", { className: "form-control", type: "text", value: description, onChange: function (e) { return _this._updateDescription(e.target.value); } })))),
                React.createElement("div", { className: "form-group row" },
                    React.createElement("div", { className: "col-sm-2" }, "\u00A0"),
                    React.createElement("div", { className: "col-sm-10" },
                        React.createElement("button", { className: "btn btn-primary", type: "submit" }, "Add Task"))))));
    };
    return AddTodoForm;
}(React.Component));
export default AddTodoForm;
//# sourceMappingURL=AddTodoForm.js.map