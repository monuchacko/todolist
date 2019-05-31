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
var TopNav = /** @class */ (function (_super) {
    __extends(TopNav, _super);
    function TopNav() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TopNav.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("nav", { className: "navbar navbar-expand-lg navbar-dark bg-primary" },
                React.createElement("a", { className: "navbar-brand", href: "#" }, "ToDo"),
                React.createElement("button", { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarColor01", "aria-controls": "navbarColor01", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                    React.createElement("span", { className: "navbar-toggler-icon" })),
                React.createElement("div", { className: "collapse navbar-collapse", id: "navbarColor01" },
                    React.createElement("ul", { className: "navbar-nav mr-auto" },
                        React.createElement("li", { className: "nav-item active" },
                            React.createElement("a", { className: "nav-link", href: "#" },
                                "Home ",
                                React.createElement("span", { className: "sr-only" }, "(current)"))),
                        React.createElement("li", { className: "nav-item" },
                            React.createElement("a", { className: "nav-link", href: "#" }, "About"))))),
            React.createElement("br", null)));
    };
    return TopNav;
}(React.Component));
export default TopNav;
//# sourceMappingURL=TopNav.js.map