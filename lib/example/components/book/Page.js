"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var arrow_forward_1 = require("material-ui/svg-icons/navigation/arrow-forward");
var arrow_back_1 = require("material-ui/svg-icons/navigation/arrow-back");
var clear_1 = require("material-ui/svg-icons/content/clear");
var IconButton_1 = require("material-ui/IconButton");
var commonStyles_1 = require("../commonStyles");
var getNavigation = function (previusButton, closeButton, nextButton) {
    return (React.createElement("div", { style: commonStyles_1.floatParentRowStyle },
        React.createElement("div", { style: commonStyles_1.floatAbsButtonTopLeft }, previusButton),
        React.createElement("div", { style: commonStyles_1.floatAbsButtonCenter }, closeButton),
        React.createElement("div", { style: commonStyles_1.floatAbsButtonTopRight }, nextButton)));
};
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
var Page = (function (_super) {
    __extends(Page, _super);
    function Page() {
        return _super.apply(this, arguments) || this;
    }
    Page.prototype.render = function () {
        var _a = this.props, page = _a.page, pageIndex = _a.pageIndex, numPages = _a.numPages, next = _a.next, previous = _a.previous, close = _a.close;
        var previusButton = React.createElement(IconButton_1.default, { disabled: !(pageIndex > 0), onTouchTap: previous },
            React.createElement(arrow_back_1.default, null));
        var closeButton = React.createElement(IconButton_1.default, { onTouchTap: close },
            React.createElement(clear_1.default, null));
        var nextButton = React.createElement(IconButton_1.default, { disabled: !(pageIndex + 1 < numPages), onTouchTap: next },
            React.createElement(arrow_forward_1.default, null));
        var navigation = getNavigation(previusButton, closeButton, nextButton);
        return (React.createElement("div", null,
            navigation,
            React.createElement("h2", null, page.title),
            React.createElement("div", { dangerouslySetInnerHTML: { __html: page.content } }),
            navigation));
    };
    return Page;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Page;
