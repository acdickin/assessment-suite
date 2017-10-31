"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
var BookCover = (function (_super) {
    __extends(BookCover, _super);
    function BookCover() {
        return _super.apply(this, arguments) || this;
    }
    BookCover.prototype.render = function () {
        var book = this.props.book;
        return (React.createElement("div", null,
            React.createElement("h2", null, book.title),
            React.createElement("p", null, book.description),
            this.props.children));
    };
    return BookCover;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BookCover;
