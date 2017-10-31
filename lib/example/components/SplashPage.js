"use strict";
var React = require("react");
var CircularProgress_1 = require("material-ui/CircularProgress");
var styles = {
    content: {
        paddingTop: '10px',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center'
    }
};
var Splash = function () {
    return (React.createElement("div", { style: styles.content },
        React.createElement(CircularProgress_1.default, null)));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Splash;
