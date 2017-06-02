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
var BasicPage_1 = require("./BasicPage");
var CardContent_1 = require("./CardContent");
var CardPage = (function (_super) {
    __extends(CardPage, _super);
    function CardPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardPage.prototype.render = function () {
        var _a = this.props, appBarTitle = _a.appBarTitle, page = _a.page, title = _a.title, image = _a.image, actions = _a.actions, replaceContent = _a.replaceContent, restoreContent = _a.restoreContent;
        return React.createElement(BasicPage_1.default, { restoreContent: restoreContent, replaceContent: replaceContent, appBarTitle: appBarTitle, page: page, title: title },
            React.createElement(CardContent_1.default, { content: page, image: image, actions: actions }));
    };
    return CardPage;
}(React.Component));
exports.default = CardPage;
//# sourceMappingURL=CardPage.js.map