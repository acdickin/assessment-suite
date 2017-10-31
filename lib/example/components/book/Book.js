"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var BookCover_1 = require("./BookCover");
var Page_1 = require("./Page");
var Menu_1 = require("material-ui/Menu");
var MenuItem_1 = require("material-ui/MenuItem");
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
var pageMenu = function (pages, pageClick) {
    return (React.createElement(Menu_1.default, null, pages.map(function (page, i) { return React.createElement(MenuItem_1.default, { key: page.id, primaryText: page.title, onTouchTap: pageClick(i) }); })));
};
var Book = (function (_super) {
    __extends(Book, _super);
    function Book(props) {
        var _this = _super.call(this, props) || this;
        _this.handlePageClick = function (pageIdx) {
            var pageOpen = _this.props.pageOpen;
            return function (event) {
                _this.setState({ currentPage: pageIdx, isOpen: true });
                pageOpen(event);
            };
        };
        _this.handleBookClose = function (event) {
            _this.setState({ isOpen: false });
        };
        _this.handlePageNext = function (event) {
            var nextPage = _this.state.currentPage + 1;
            if (nextPage < _this.state.numPages) {
                window.scrollTo(0, 0);
                _this.setState({ currentPage: nextPage });
            }
        };
        _this.handlePagePrevious = function (event) {
            var prevPage = _this.state.currentPage - 1;
            if (prevPage > -1) {
                window.scrollTo(0, 0);
                _this.setState({ currentPage: prevPage });
            }
        };
        _this.state = {
            numPages: props.book.pages.length || 0,
            currentPage: 0,
            isOpen: _this.props.isOpen || false
        };
        return _this;
    }
    Book.prototype.componentWillMount = function () {
        var title = this.props.title;
        this.props.appBarTitle(title);
    };
    Book.prototype.componentWillReceiveProps = function (nextProps) {
        var isOpen = nextProps.isOpen, title = nextProps.title;
        this.props.appBarTitle(title);
        this.setState({ isOpen: isOpen });
    };
    Book.prototype.render = function () {
        var book = this.props.book;
        var page = book.pages[this.state.currentPage] ? book.pages[this.state.currentPage] : book.pages[0];
        var currentPageContent = React.createElement(Page_1.default, { next: this.handlePageNext, previous: this.handlePagePrevious, close: this.handleBookClose, pageIndex: this.state.currentPage, numPages: this.state.numPages, page: page });
        var content = currentPageContent;
        if (!this.state.isOpen) {
            content = pageMenu(book.pages, this.handlePageClick);
            return (React.createElement("div", null,
                React.createElement(BookCover_1.default, { book: book }),
                content));
        }
        else {
            return currentPageContent;
        }
    };
    return Book;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Book;
