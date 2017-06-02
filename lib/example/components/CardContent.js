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
var Card_1 = require("material-ui/Card");
var FlatButton_1 = require("material-ui/FlatButton");
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
var CardContent = (function (_super) {
    __extends(CardContent, _super);
    function CardContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //<CardTitle title={subtitle} />
    CardContent.prototype.render = function () {
        var _a = this.props, content = _a.content, image = _a.image, actions = _a.actions;
        var cardHeader = null;
        if (image) {
            cardHeader = (React.createElement(Card_1.CardMedia, { overlay: React.createElement(Card_1.CardTitle, { title: content.title, subtitle: content.subtitle }) },
                React.createElement("img", { src: image })));
        }
        else {
            cardHeader = React.createElement(Card_1.CardHeader, { title: content.title, subtitle: content.subtitle });
        }
        return (React.createElement(Card_1.Card, null,
            cardHeader,
            React.createElement(Card_1.CardText, null,
                React.createElement("div", { dangerouslySetInnerHTML: { __html: content.content } }),
                this.props.children),
            React.createElement(Card_1.CardActions, null, actions.map(function (act) { return React.createElement(FlatButton_1.default, { key: act.label, onTouchTap: act.action, label: act.label }); }))));
    };
    return CardContent;
}(React.Component));
exports.default = CardContent;
//# sourceMappingURL=CardContent.js.map