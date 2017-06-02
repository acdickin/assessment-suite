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
var Snackbar_1 = require("material-ui/Snackbar");
var AppSnackBar = (function (_super) {
    __extends(AppSnackBar, _super);
    function AppSnackBar(props) {
        var _this = _super.call(this, props) || this;
        /*
          componentWillReceiveProps = (nextProps) => {
              if(nextProps.open && !this.state.open){
                this.setState({open: true})
              }
          }
          */
        _this.handleTouchTap = function () {
            _this.setState({
                open: true,
            });
        };
        _this.handleRequestClose = function () {
            _this.setState({
                open: false,
            });
        };
        _this.state = {
            open: false,
        };
        return _this;
    }
    AppSnackBar.prototype.render = function () {
        var _a = this.props, message = _a.message, open = _a.open;
        return (React.createElement(Snackbar_1.default, { open: open, message: message, autoHideDuration: 2000, onRequestClose: this.handleRequestClose }));
    };
    return AppSnackBar;
}(React.Component));
exports.default = AppSnackBar;
//# sourceMappingURL=AppSnackBar.js.map