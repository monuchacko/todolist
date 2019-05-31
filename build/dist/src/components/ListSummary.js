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
var ListSummary = /** @class */ (function (_super) {
    __extends(ListSummary, _super);
    function ListSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListSummary.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("ul", { className: "list-group" },
                React.createElement("li", { className: "list-group-item d-flex justify-content-between align-items-center" },
                    "Due Today",
                    React.createElement("span", { className: "badge badge-primary badge-pill" }, "14")),
                React.createElement("li", { className: "list-group-item d-flex justify-content-between align-items-center" },
                    "Due this Week",
                    React.createElement("span", { className: "badge badge-primary badge-pill" }, "2")),
                React.createElement("li", { className: "list-group-item d-flex justify-content-between align-items-center" },
                    "Pending",
                    React.createElement("span", { className: "badge badge-primary badge-pill" }, "1")))));
    };
    return ListSummary;
}(React.Component));
export default ListSummary;
//# sourceMappingURL=ListSummary.js.map