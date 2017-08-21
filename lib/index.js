"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FriendShip_1 = require("./containers/assessments/FriendShip");
var MaritalSatisfaction_1 = require("./containers/assessments/MaritalSatisfaction");
var PostDeploymentSocialSupport_1 = require("./containers/assessments/PostDeploymentSocialSupport");
var SocialSupport_1 = require("./containers/assessments/SocialSupport");
var Sleep_1 = require("./containers/assessments/Sleep");
var Panic_1 = require("./containers/assessments/Panic");
var PostTraumaticStress_1 = require("./containers/assessments/PostTraumaticStress");
var Depression_1 = require("./containers/assessments/Depression");
var AlcoholDrugs_1 = require("./containers/assessments/AlcoholDrugs");
var Anxiety_1 = require("./containers/assessments/Anxiety");
var Physical_1 = require("./containers/assessments/Physical");
var ParentingConfidence_1 = require("./containers/assessments/ParentingConfidence");
var Anger_1 = require("./containers/assessments/Anger");
var Stress_1 = require("./containers/assessments/Stress");
var Stigma_1 = require("./containers/assessments/Stigma");
var Worry_1 = require("./containers/assessments/Worry");
var Resilience_1 = require("./containers/assessments/Resilience");
var Forgiveness_1 = require("./containers/assessments/Forgiveness");
var Gratitude_1 = require("./containers/assessments/Gratitude");
var Generosity_1 = require("./containers/assessments/Generosity");
var Optimism_1 = require("./containers/assessments/Optimism");
var AssessmentsList_1 = require("./components/AssessmentsList");
exports.AssessmentsList = AssessmentsList_1.default;
var routes_1 = require("./routes");
exports.createRoutes = routes_1.createRoutes;
exports.createPlainRoutes = routes_1.createPlainRoutes;
var assessments = {
    FriendShip: FriendShip_1.default,
    MaritalSatisfaction: MaritalSatisfaction_1.default,
    PostDeploymentSocialSupport: PostDeploymentSocialSupport_1.default,
    SocialSupport: SocialSupport_1.default,
    Sleep: Sleep_1.default,
    Panic: Panic_1.default,
    PostTraumaticStress: PostTraumaticStress_1.default,
    Depression: Depression_1.default,
    AlcoholDrugs: AlcoholDrugs_1.default,
    Anxiety: Anxiety_1.default,
    Physical: Physical_1.default,
    ParentingConfidence: ParentingConfidence_1.default,
    Anger: Anger_1.default,
    Stress: Stress_1.default,
    Stigma: Stigma_1.default,
    Worry: Worry_1.default,
    Resilience: Resilience_1.default,
    Forgiveness: Forgiveness_1.default,
    Gratitude: Gratitude_1.default,
    Generosity: Generosity_1.default,
    Optimism: Optimism_1.default
};
exports.assessments = assessments;
