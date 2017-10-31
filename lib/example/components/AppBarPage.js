"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
var React = require("react");
//import * as ReactDOM from 'react-dom';
var AppBar_1 = require("material-ui/AppBar");
var styles = {
    bgDiv: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0.1,
        width: '100%',
        height: '100%',
        zIndex: -2,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '400px'
    },
    wrapper: {
        overflowY: 'auto'
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        flexFlow: 'row',
        height: '100%'
    },
};
var AssessmentAdapter = (function (_super) {
    __extends(AssessmentAdapter, _super);
    function AssessmentAdapter() {
        var _this = _super.apply(this, arguments) || this;
        _this.handleSetTitle = function (title) {
            var testyTestTitle = _this.props.testyTestTitle;
            //alert(title);
            testyTestTitle(title);
        };
        return _this;
    }
    AssessmentAdapter.prototype.render = function () {
        return (React.createElement("div", null, React.cloneElement(this.props.children, { setTitle: this.handleSetTitle })));
    };
    return AssessmentAdapter;
}(React.Component));
var AppBarPage = (function (_super) {
    __extends(AppBarPage, _super);
    function AppBarPage(props) {
        var _this = _super.call(this, props) || this;
        _this.altContentTimeoutId = null;
        _this.replaceContent = function (altContent) {
            if (altContent) {
                _this.setState({
                    showAltContent: true,
                    altContent: altContent
                });
            }
            _this.altContentTimeoutId = setTimeout(function () {
                _this.restoreContent();
            }, 20000);
        };
        _this.restoreContent = function () {
            _this.altContentTimeoutId && clearTimeout(_this.altContentTimeoutId);
            _this.setState({
                showAltContent: false,
                altContent: null
            });
        };
        _this.handleRequestClose = _this.handleRequestClose.bind(_this);
        _this.handleTouchTap = _this.handleTouchTap.bind(_this);
        _this.handleTitle = _this.handleTitle.bind(_this);
        _this.state = {
            open: false,
            title: '',
            showAltContent: false,
            altContent: null
        };
        return _this;
    }
    AppBarPage.prototype.handleRequestClose = function () {
        this.setState({
            open: false
        });
    };
    AppBarPage.prototype.handleTouchTap = function () {
        this.setState({
            open: true
        });
    };
    AppBarPage.prototype.handleTitle = function (title) {
        this.setState({
            title: title
        });
    };
    AppBarPage.prototype.render = function () {
        // const {categories,pathOnTouchTap,leftIcon,flashMessage} = this.props;
        //const MainContent = !this.state.showAltContent ? React.cloneElement((this.props as any).children, { restoreContent: this.restoreContent, replaceContent: this.replaceContent, appBarTitle: this.handleTitle, categories, pathOnTouchTap, appConfig: appConfig }) : this.state.altContent;
        return (React.createElement("div", null,
            React.createElement("div", { style: styles.bgDiv }),
            !this.state.showAltContent && React.createElement(AppBar_1.default, { title: this.state.title, titleStyle: { textAlign: 'center' } }),
            React.createElement("div", { style: { 'padding': '5px' } },
                React.createElement("div", null, React.cloneElement(this.props.children, { setPageTitle: this.handleTitle })))));
    };
    return AppBarPage;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppBarPage;
