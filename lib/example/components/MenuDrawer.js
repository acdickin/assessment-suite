"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Menu_1 = require("material-ui/Menu");
var IconButton_1 = require("material-ui/IconButton");
var menu_1 = require("material-ui/svg-icons/navigation/menu");
var Drawer_1 = require("material-ui/Drawer");
var AppBarMenuIconDrawer = (function (_super) {
    __extends(AppBarMenuIconDrawer, _super);
    function AppBarMenuIconDrawer(props, context) {
        var _this = _super.call(this, props) || this;
        _this.handleToggle = function (event) {
            event.preventDefault();
            event.stopPropagation();
            _this.setState({ open: !_this.state.open });
        };
        _this.handleClosePath = function (path) {
            var pathOnTouchTap = _this.props.pathOnTouchTap;
            return function (event) {
                pathOnTouchTap(path)(event);
                _this.setState({ open: false });
            };
        };
        _this.handleClose = function () {
            _this.setState({ open: false });
        };
        _this.state = { open: false };
        return _this;
    }
    AppBarMenuIconDrawer.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(IconButton_1.default, { onTouchTap: this.handleToggle },
                React.createElement(menu_1.default, null)),
            React.createElement(Drawer_1.default, { docked: false, width: 200, open: this.state.open, onRequestChange: function (open) { return _this.setState({ open: open }); }, containerStyle: { paddingTop: 60 } },
                React.createElement(Menu_1.default, { onItemTouchTap: this.handleClose }, this.props.children))));
    };
    return AppBarMenuIconDrawer;
}(React.Component));
exports.default = AppBarMenuIconDrawer;
//# sourceMappingURL=MenuDrawer.js.map