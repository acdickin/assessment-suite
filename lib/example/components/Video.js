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
var commonStyles_1 = require("./commonStyles");
var videoViewer = (function (_super) {
    __extends(videoViewer, _super);
    function videoViewer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    videoViewer.prototype.componentWillMount = function () {
        var video = this.props.video;
        this.props.appBarTitle && this.props.appBarTitle(video.title);
    };
    videoViewer.prototype.render = function () {
        var isOnline = true;
        var _a = this.props, video = _a.video, screenWidth = _a.screenWidth;
        var onlineVideo = React.createElement("video", { width: screenWidth, src: video.src, poster: video.img, controls: true }, "Sorry, your browser doesn't support embedded videos.");
        var offlineVideo = 'This video is not available while offline';
        var content = typeof isOnline === 'undefined' || isOnline ? onlineVideo : offlineVideo;
        return (React.createElement("div", { style: commonStyles_1.flexParentRowCenterStyle },
            React.createElement("div", { style: commonStyles_1.flexRowItemStyle }, content)));
    };
    videoViewer.defaultProps = {
        screenWidth: 400
    };
    return videoViewer;
}(React.Component));
exports.default = videoViewer;
