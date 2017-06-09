"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FriendShip_1 = require("./containers/assessments/FriendShip");
var MaritalSatisfaction_1 = require("./containers/assessments/MaritalSatisfaction");
var PostDeploymentSocialSupport_1 = require("./containers/assessments/PostDeploymentSocialSupport");
var SocialSupport_1 = require("./containers/assessments/SocialSupport");
var routes_1 = require("./routes");
exports.createRoutes = routes_1.createRoutes;
exports.createPlainRoutes = routes_1.createPlainRoutes;
var assessments = {
    FriendShip: FriendShip_1.default,
    MaritalSatisfaction: MaritalSatisfaction_1.default,
    PostDeploymentSocialSupport: PostDeploymentSocialSupport_1.default,
    SocialSupport: SocialSupport_1.default
};
exports.assessments = assessments;
