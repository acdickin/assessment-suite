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
var SplashPage_1 = require("./SplashPage");
var getMuiTheme_1 = require("material-ui/styles/getMuiTheme");
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var customTheme_1 = require("./customTheme");
var muiTheme = getMuiTheme_1.default(customTheme_1.default);
var Theme = (function (_super) {
    __extends(Theme, _super);
    function Theme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Theme.prototype.render = function () {
        return (React.createElement(MuiThemeProvider_1.default, { muiTheme: getMuiTheme_1.default(muiTheme) }, this.props.children || React.createElement(SplashPage_1.default, null)));
    };
    return Theme;
}(React.Component));
exports.default = Theme;
//# sourceMappingURL=Theme.js.map