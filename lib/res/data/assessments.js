"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var normalizr_1 = require("normalizr");
var path = require('path');
var assessmentSchema = new normalizr_1.schema.Entity('assessment');
var assessmentListSchema = new normalizr_1.schema.Array(assessmentSchema);
var defaultCalcQuestion = function (values) {
    return this.questions;
};
var defaultCalcScore = function (values) {
    function tallyScore(answers, questions) {
        var total = 0;
        Object.keys(questions).map(function (idx) {
            var question = questions[idx];
            if (answers && typeof answers[question.id] !== 'undefined') {
                var choiceValue_1 = answers[question.id];
                var choices = questions[idx].choices;
                if (choices) {
                    choices.map(function (choice) {
                        if (choice.value === choiceValue_1) {
                            total += parseInt(choice.score);
                        }
                    });
                }
            }
        });
        return total;
    }
    return tallyScore(values, this.questions);
};
function defaultValidation(data) {
    var hasErrors = false;
    console.log(data);
    var filteredData = this.calcQuestions(data)
        .filter(function (question) {
        return question.type !== 'label';
    })
        .reduce(function (acc, question) {
        acc[question.id] = typeof data[question.id] !== 'undefined' ? data[question.id] : '';
        return acc;
    }, {});
    var reduceCb = function (errors, name) {
        if (filteredData[name].length === 0) {
            hasErrors = true;
            errors[name] = 'Required.';
        }
        else {
            errors[name] = '';
        }
        return errors;
    };
    var errors = Object.keys(filteredData)
        .map(function (propName) { return propName; })
        .reduce(reduceCb, {});
    console.log(errors);
    return {
        data: errors,
        isValid: !hasErrors
    };
}
exports.makeAssessment = function (id, title, minScore, middleScore, maxScore, scoring, scoringMode, questions, image, calcQuestions, calcScore, validate) {
    if (image === void 0) { image = ''; }
    if (calcQuestions === void 0) { calcQuestions = defaultCalcQuestion; }
    if (calcScore === void 0) { calcScore = defaultCalcScore; }
    if (validate === void 0) { validate = defaultValidation; }
    return {
        id: id,
        title: title,
        minScore: minScore,
        middleScore: middleScore,
        maxScore: maxScore,
        scoring: scoring,
        questions: questions,
        image: image,
        calcQuestions: calcQuestions,
        calcScore: calcScore,
        scoringMode: scoringMode,
        validate: validate
    };
};
exports.makeScoring = function (id, min, max, title, description, recommendations) {
    if (description === void 0) { description = ''; }
    if (recommendations === void 0) { recommendations = ''; }
    return {
        id: id,
        min: min,
        max: max,
        title: title,
        description: description,
        recommendations: recommendations
    };
};
exports.makeQuestion = function (id, title, type, choices) {
    if (type === void 0) { type = 'text'; }
    if (choices === void 0) { choices = []; }
    return {
        id: id,
        title: title,
        type: type,
        choices: choices
    };
};
///////////////////////// Scoring from Drug Module Start
var PostTraumaticStressList = [];
var PostTraumaticStressScoring0 = exports.makeScoring(1, 0, 33, 'LOW', "<p>Your score reflects that you are not experiencing symptoms that are typically associated with post-traumatic stress.</p><p>Although only a healthcare professional can provide an actual diagnosis of post-traumatic stress, or its absence, your results suggest that your experience is not similar to the experience of individuals suffering from post-traumatic stress.</p>", "<p>Your results suggest you are managing this area of your life.  Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the \u201CLife Stress\u201D program.</p><p>You may find it helpful to join the <a href=\"https://www.facebook.com/afterdeployment/timeline\">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p><p>You're also encouraged to check out other assessments on AfterDeployment as they can be helpful for learning more about whether or not you are having problems in other areas.  For your convenience, you can find links to the tools that were mentioned here through the RESOURCES tab located above.</p>");
var PostTraumaticStressScoring1 = exports.makeScoring(2, 34, 43, 'MODERATE', "<p>Although only a healthcare professional can provide an actual diagnosis, you are reporting some experiences which are similar to some moderate symptoms  associated with Post-traumatic stress.</p>", "<p>Having experiences that are somewhat similar to those associated with post-traumatic stress doesn't mean you have post-traumatic stress disorder (PTSD).  It does mean that you should look into the concerns you are reporting because they can be upsetting and distressing.  If you've experienced these symptoms for more than a few weeks, or they are getting worse, you should consult your health care provider.  If you don't have one, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.   If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>Another way to explore these experiences is to check out the materials in AfterDeployment's \u201CPost-Traumatic Stress\u201D topic. When someone is experiencing the kinds of distressing symptoms you report, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href=\"https://www.facebook.com/afterdeployment/timeline\">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var PostTraumaticStressScoring2 = exports.makeScoring(3, 44, 85, 'HIGH', "<p>Although only a healthcare professional can provide an actual diagnosis, your score indicates that you are experiencing a significant number of symptoms that are similar to those associated with post-traumatic stress.</p>", "<p>Having experiences that are very similar to those associated with post-traumatic stress suggests that you should look into these concerns because they can be very upsetting and disruptive of your life.   If you've experienced these symptoms for more than a few weeks, or they are getting worse, you should consult your health care provider immediately.  If you don't have one, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>We encourage you to check out the materials in AfterDeployment's \u201CPost-Traumatic Stress\u201D topic. Also, when someone is experiencing the kinds of distressing symptoms you report, problems are often present in other areas of life.  You can determine where other problems may exist or the extent of the problem by taking additional assessments. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href=\"https://www.facebook.com/afterdeployment/timeline\">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var DepressionList = [];
var DepressionScoring3 = exports.makeScoring(4, 0, 4, 'LOW', "<p>Although only a healthcare professional can provide an actual diagnosis, your score is in a range not typically associated with depression or mood problems. </p>", "<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the \u201CLife Stress\u201D topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href=\"https://www.facebook.com/afterdeployment/timeline\">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var DepressionScoring4 = exports.makeScoring(5, 5, 15, 'MODERATE', "<p>Although only a healthcare professional can provide an actual diagnosis, your score is in a range not typically associated with depression or mood problems. However you have indicated that you have had thoughts of hurting yourself in the last month. Please review your answers to determine if they accurately reflect your mood. </p><p><strong>IF YOU ARE HAVING THOUGHTS OF SELF HARM SEEK HELP IMMEDIATELY.</strong> </p>", "<p>You have indicated that you have recently had thoughts of harming yourself. Please review your answers to determine if they accurately reflect your mood. </p>  <p><strong>IF YOU ARE HAVING THOUGHTS OF SELF HARM SEEK HELP IMMEDIATELY.</strong></p> <p>If you would like to speak with someone, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website. If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the \u201CLife Stress\u201D topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href=\"https://www.facebook.com/afterdeployment/timeline\">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var DepressionScoring5 = exports.makeScoring(6, 16, 27, 'HIGH', "<p>Although only a healthcare professional can provide an actual diagnosis, your score is in a range typically associated with mild or moderate depression. </p>", "<p>After a deployment, service members often report brief periods of feeling down, having low energy, or losing interest in things they used to enjoy. Depression is a problem that you can do something about. We encourage you to check out the materials in AfterDeployment's \"Depression\" topic.  In addition to the materials on AfterDeployment, you may benefit from discussing your mood problem with a health care provider. If your mood problem lasts several weeks to a few months, or if you believe that your depression is getting worse, contact a healthcare provider and share the results of this assessment. If you don't have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>Another way to explore these experiences is to check out the materials in AfterDeployment's \u201CDepression\u201D topic. When someone is experiencing the kinds of distressing concerns you report, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href=\"https://www.facebook.com/afterdeployment/timeline\">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var AlcoholDrugsList = [];
var AlcoholDrugsScoring9 = exports.makeScoring(10, 0, 14, 'LOW', "<p>Your score is in a range typically associated with no or low alcohol or drug use. </p> <p>Although only a healthcare professional can diagnose a substance abuse problem, your results suggest that your health may not be at risk from alcohol or drug use.</p>", "<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the \u201CLife Stress\u201D topic. </p> <p> It's important to emphasize that the abuse of any drug \u2013 whether prescribed, over-the-counter, or illegal substances \u2013 can lead to health, legal, and relationship problems.</p>  <p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above. </p> <p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var AlcoholDrugsScoring10 = exports.makeScoring(11, 15, 29, 'MODERATE', "<p>Your score is in a range typically associated with <u>moderate</u> alcohol use.</p> <p>Although only a healthcare professional can diagnose a substance abuse problem, your results suggest that your health may not be at risk from alcohol or drug use.</p>", "<p>After a stressful experience, some people turn to drinking to mask painful feelings. But drinking neither solves problems nor fixes painful emotions. In fact, just the opposite is true.  Drinking is much more likely to <u>worsen</u> rather than improve your level of stress.  Out-of-control drinking can often be accompanied by depression, life stress, and even post-traumatic stress, the reaction that many people experience after a major trauma. One easy way to determine if you're having problems in other areas is to take additional assessments.</p><p>We also encourage you to check out the materials in AfterDeployment's \"Alcohol and drugs\" topic.</p><p>You may benefit from discussing your alcohol use with a health care provider.  You can <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab tab in the upper right corner of the website. We suggest that you share the results of this assessment with your provider. If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website.  Both the CALL and CHAT options are available 24/7.  For your convenience, you can find links to the all of the tools that were mentioned here through the RESOURCES tab <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tabd above. </p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var AlcoholDrugsScoring11 = exports.makeScoring(12, 30, 40, 'HIGH', "<p>Your score is in a range typically associated with <u>high</u> levels of alcohol use.</p> <p>Although only a healthcare professional can diagnose a substance abuse problem, your responses are consistent with someone who has become dependent on alcohol, indicating that you're at high risk for severe problems, including health, social, financial, legal, and relationship difficulties.</p>", "<p>After a stressful experience, some people turn to drinking to mask painful feelings. But drinking neither solves problems nor fixes painful emotions. In fact, just the opposite: drinking is much more likely to worsen your stress.   Because your level of use suggests that you have become dependent on alcohol, you should not attempt to quit or decrease your alcohol use on your own.  Suddenly discontinuing heavy alcohol use can be dangerous.  Because you're reporting significant alcohol use, we recommend that you seek face-to-face care with a professional.  A medical or mental health provider can evaluate the extent of the problem and develop a plan. Take a copy of your assessment results with you. You can <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab tab in the upper right corner of the main page. If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page. Both the CALL and CHAT options are available 24/7.</p>  <p>Out-of-control drinking can be accompanied by depression, life stress, and even post-traumatic stress, the reaction that many people experience after a major trauma. A good way to determine if you're having problems in these other areas is to take additional assessments. We also suggest that you complete the alcohol and drug assessment again in three months and compare your assessment results with today's results.</p>  <p>We encourage you to check out the materials in AfterDeployment's \"Alcohol and Drugs\" topic. However, we want to emphasize that your responses  indicate that your best plan is to consult with a health care provider. AfterDeployment is not a substitute for consulting with a provider in person.</p> <p>You can find links to these tools under the RESOURCES tab <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tabd above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var AnxietyList = [];
var AnxietyScoring16 = exports.makeScoring(17, 0, 5, 'LOW', "<p>Your score is in a range typically associated with a low level of anxiety indicating that anxiety is probably not affecting your life.</p><p>Although only a healthcare professional can provide an actual diagnosis of an anxiety disorder, your results suggest that you are not experiencing the classic physical or cognitive symptoms associated with anxiety.</p>", "<p> Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the \u201CLife Stress\u201D   topic.</p><p>You may find it helpful to join the <a href=\"https://www.facebook.com/afterdeployment/timeline\">AfterDeployment Facebook</a> page where you can network with others on a range of topics.  </p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p>");
var AnxietyScoring17 = exports.makeScoring(18, 6, 10, 'MODERATE', "<p>Your score is in a range typically associated with  moderate levels of the physical and cognitive symptoms of anxiety.  Although only a healthcare professional can provide an actual diagnosis, your responses suggest that the symptoms you describe may be associated with the changes that occur in the body in response to anxious concerns.</p>", "<p>A moderate degree of anxiety typically doesn't cause significant distress but is a sign to begin to pay attention to your level of worry.  Worry causes an increase in the level of vigilance and physical arousal, energy that could be better used focusing on positive things in life.  If your anxiety symptoms have increased recently  it may be useful to discuss this with your  health care provider.   You can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner on the main page.   If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner on the main page. Both the CALL and CHAT options are available 24/7.</p><p>When someone is worrying unnecessarily, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var AnxietyScoring18 = exports.makeScoring(19, 11, 21, 'HIGH', "<p>Your score is in a range typically associated with a significant level of physical and cognitive symptoms of anxiety.</p><p>Although only a healthcare professional can provide an actual diagnosis, these symptoms may be causing you significant distress.</p>", "<p>The physical symptoms of anxiety are frequently experienced during deployment because of the need for a constant level of vigilance.  But high levels of anxiety that persist after deployment, when high vigilance is not required,  can be harmful to your physical health, and your emotional well-being. The cognitive and physical symptoms you are reporting  are frequently associated with high levels of anxiety, but they may also indicate a physical illness.   We urge you to seek face-to-face care with a healthcare provider.If you don't have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24/7.</p><p>We encourage you to check out the materials in AfterDeployment's \u201CAnxiety\u201D topic. Also, when someone is experiencing multiple symptoms of anxiety, problems are often present in other areas of life.  You can determine where other problems may exist or the extent of the problem by taking additional assessments. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var SleepList = [];
var SleepScoring19 = exports.makeScoring(20, 0, 0, 'LOW', "<p>Your responses suggest that you are not having problems with your sleep. Good sleep patterns are important for your health, mood, and productivity. </p>", "<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the \u201CLife Stress\u201D topic.</p><p>You may find it helpful to join the <a href=\"https://www.facebook.com/afterdeployment/timeline\">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p>");
var SleepScoring20 = exports.makeScoring(21, 1, 2, 'MODERATE', "<p>Your responses suggest that you are having some difficulty with sleeping and that your sleep is not as good as you'd like. </p>  <p>You report having one or two sleep problems and depending on how severe these problems are, you may be having significant difficulties with your functioning. Sleep problems need to be taken seriously. Good sleep patterns are important for your health, mood, and productivity. </p>", "<p>We encourage you to check out the resources in the Sleep program on AfterDeployment to find out more about these problems and what you can do about them. You will find information and activities on how to manage issues with sleep and develop healthy sleep patterns. And, we would recommend that you retake this sleep assessment in 2-4 weeks to track how you are doing. We want to emphasize that while this website is here to provide information and support, AfterDeployment is not a substitute for consulting with a health care provider in person.  If you don't have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner on the main page.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner on the main page. Both the CALL and CHAT options are available 24-7.</p><p>Another way to explore these experiences is to check out the materials in AfterDeployment's \u201CSleep\u201D topic. When someone is struggling with difficulty sleeping, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var SleepScoring21 = exports.makeScoring(22, 3, 10, 'HIGH', "<p>Your score is in a range typically associated with significant sleep problems.</p>  <p>Sleep problems need to be taken seriously as chronic sleep problems are bad for your physical and emotional health, your relationships, and your productivity.</p>", "<p>A variety of physical health problems may be related to sleep difficulty. Sleep problems may be related to problems such as stress, depression, post traumatic stress and substance abuse. Because you are reporting significant sleep problems, we recommend that you seek face-to-face care with a healthcare provider. A medical or mental health provider can evaluate what is going on and help develop a plan to address your sleep problems. If you don't have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>We encourage you to check out the materials in AfterDeployment's \u201CSleep\u201D topic. Also, when someone is experiencing the kinds of sleep concerns you report, problems are often present in other areas of life.  You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href=\"https://www.facebook.com/afterdeployment/timeline\">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var PanicList = [];
var PanicScoring22 = exports.makeScoring(23, 0, 20, 'LOW', "<p>Your score is in a range NOT typically associated with the classic symptoms of panic attacks.</p>  <p>Although only a healthcare professional can provide an actual diagnosis of panic disorder, your results suggest that you are not experiencing the kinds of physical symptoms that usually define a significant problem with panic attacks.</p>", "<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means following a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the \u201CLife Stress\u201D topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var PanicScoring23 = exports.makeScoring(24, 21, 40, 'MODERATE', "<p>Your score is in a range typically associated with  moderate levels of the physical symptoms associated with panic attacks.  Although only a healthcare professional can provide an actual diagnosis, you report some, but not all of the symptoms of actual panic disorder. </p>", "<p>A moderate number of panic symptoms typically doesn't cause significant, long term distress but is a sign to pay attention to how many demands you are juggling.  High stress levels cause  an increase in the level of vigilance and physical arousal.  If you've experienced an increase in these physical symptoms recently,   it may be useful to discuss this with your  health care provider. If you don't have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>When someone is experiencing stress related symptoms,  problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments.</p><p>We also encourage you to check out the materials in AfterDeployment's \"Anxiety\" topic. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var PanicScoring24 = exports.makeScoring(25, 41, 60, 'HIGH', "<p>Your score is in a range typically associated with a significant level of physical symptoms associated with Panic Disorder.</p>  <p>Although only a healthcare professional can provide an actual diagnosis, these symptoms are probably causing you significant distress. </p>", "<p>The physical symptoms of panic are frequently experienced during deployment when there is immediate danger and they are completely normal under those circumstances.   But high levels of panic symptoms that seem to come \u201Cout of the blue\u201D, when there is no physical danger to confront,  can be frightening and upsetting. The cognitive and physical symptoms you are reporting  are frequently associated with high levels of chronic demands and life stress, but they may also indicate a physical illness.   We urge you to seek face-to-face care with a healthcare provider. If you don't have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>When someone is experiencing symptoms of panic disorder,  problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments. We also encourage you to check out the materials in AfterDeployment's \"Anxiety\" topic. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var PhysicalInjuryResilienceList = [];
var PhysicalInjuryResilienceScoring25 = exports.makeScoring(26, 0, 49, 'LOW', "<p>Your results indicate that you are not using many of the skills that could allow you to be more resilient in the face of the challenges that come with being injured.</p>", "<p>The stress of coping with a physical injury can be significant.  You have indicated that you are not using many of the skills that can increase personal resilience in the face of an injury.  Your score suggests that there is a great deal more you can do in this area, by adding to your coping strategies or by using them more consistently.</p><p>If you'd like personal help in adding to your coping skills, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>When people are coping with the results of a physical injury, there are often problems present in other areas of life.  You can do more exploration by taking additional assessments. We also encourage you to check out the materials in AfterDeployment's \"Physical Injury\" topic.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var PhysicalInjuryResilienceScoring26 = exports.makeScoring(27, 50, 70, 'MODERATE', "<p>Your results indicate that you are using many of the skills that allow you to be resilient in the face of the challenges that come with being injured, but there may be additional skills you could develop to become even more resilient.</p>", "<p>The stress of coping with a physical injury can be significant.  You have indicated that you are using several of the skills that can increase personal resilience in the face of an injury.  Your score suggests that there may be more you can do in this area, by adding to your coping strategies or by using them more consistently.</p><p>If you'd like personal help in adding to your coping skills, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>When people are coping with the results of a physical injury, there are often problems present in other areas of life.  You can do more exploration by taking additional assessments.  We also encourage you to check out the materials in AfterDeployment's \"Physical Injury\" topic.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var PhysicalInjuryResilienceScoring27 = exports.makeScoring(28, 71, 88, 'HIGH', "<p>Your results indicate that you are using many of the skills that allow you to be resilient in coping with the stress that comes with being injured.</p>", "<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means following a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the \u201CLife Stress\u201D topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
PostTraumaticStressList.push(PostTraumaticStressScoring0);
PostTraumaticStressList.push(PostTraumaticStressScoring1);
PostTraumaticStressList.push(PostTraumaticStressScoring2);
DepressionList.push(DepressionScoring3);
DepressionList.push(DepressionScoring4);
DepressionList.push(DepressionScoring5);
AlcoholDrugsList.push(AlcoholDrugsScoring9);
AlcoholDrugsList.push(AlcoholDrugsScoring10);
AlcoholDrugsList.push(AlcoholDrugsScoring11);
AnxietyList.push(AnxietyScoring16);
AnxietyList.push(AnxietyScoring17);
AnxietyList.push(AnxietyScoring18);
SleepList.push(SleepScoring19);
SleepList.push(SleepScoring20);
SleepList.push(SleepScoring21);
PanicList.push(PanicScoring22);
PanicList.push(PanicScoring23);
PanicList.push(PanicScoring24);
PhysicalInjuryResilienceList.push(PhysicalInjuryResilienceScoring25);
PhysicalInjuryResilienceList.push(PhysicalInjuryResilienceScoring26);
PhysicalInjuryResilienceList.push(PhysicalInjuryResilienceScoring27);
///////////////////////// Scoring from Drug Module End
var MaritalSatisfactionList = [];
var MaritalSatisfactionScoring0 = exports.makeScoring(29, 2, 84, 'POOR', "<p>Your score is in a range typically associated with high marital distress.</p><p>Your response indicated that you are experiencing problems with your spouse in a variety of areas leading to a great deal of distress in your marital relationship.</p>", "<p>Having experiences of marital distress suggests that you should look into these concerns because they can be very upsetting and disruptive of your life.  We encourage you to check out the resources in the \"Families and Friendships\" topic. You will find information and exercises for developing skills and strategies that can help improve your marriage.</p><p>In addition to the materials on AfterDeployment, you may benefit from discussing your marriage with a healthcare provider. You can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of this page. If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of this page. Both the CALL and CHAT options are available 24/7. \n                                    </p> <p> We recommend that you retake the Marital Relationships assessment in a month to see how you are doing. If over time you find that problems aren\u2019t improving, consult a professional. AfterDeployment is not a substitute for face to face support.</p><p>Problems may also be present in other areas of life. A good way to determine if you\u2019re having problems in other areas is to take additional assessments.</p><p>For your convenience, you can find links to the tools that were mentioned here through the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href=\"https://www.facebook.com/afterdeployment/timeline\">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var MaritalSatisfactionScoring1 = exports.makeScoring(30, 85, 99, 'MODERATE', "<p>Your score is in a range typically associated with some marital distress.</p><p>Your responses suggest that you have some dissatisfaction with your marital relationship based on the presence of conflict or disagreement.</p>", "<p>Having some experiences of marital distress suggests that you should look into these concerns because they can become very upsetting and disruptive of your life if left unresolved.  We encourage you to check out the resources in the \"Families and Friendships\" topic. You will find information and exercises for developing skills and strategies that can help improve your marriage.</p><p>In addition to the materials on AfterDeployment, you may benefit from discussing your marriage with a healthcare provider. You can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of this page. If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of this page. Both the CALL and CHAT options are available 24/7.</p><p> We recommend that you retake the Marital Relationships assessment in a month to see how you are doing. If over time you find that problems aren\u2019t improving, consult a professional. AfterDeployment is not a substitute for face to face support.</p><p>When there are marital difficulties present, problems are often present in other areas of life. A good way to determine if you\u2019re having problems in other areas is to take additional assessments.</p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var MaritalSatisfactionScoring2 = exports.makeScoring(31, 100, 158, 'GOOD', "<p>Your score is in a range typically associated with good marital satisfaction.</p><p>Your responses suggest that you are feeling satisfied with your marriage.</p>", "<p>Your results suggest you are managing this area of your life.  Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the \u201CLife Stress\u201D program.</p><p>You\u2019re also encouraged to check out other assessments on AfterDeployment as they can be helpful for learning more about whether or not you are having problems in other areas.  For your convenience, you can find links to the tools that were mentioned here through the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href=\"https://www.facebook.com/afterdeployment/timeline\">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var FriendshipScaleList = [];
var FriendshipScaleScoring3 = exports.makeScoring(32, 0, 15, 'LOW', "<p>Your score is in a range typically associated with low social support, and suggests that you do not feel socially connected or supported by the people in your life. </p>", "<p>After a stressful experience, some people withdraw from friends and family and from activities. However, caring and encouragement from others can boost health and well-being. People who feel connected are less likely to be depressed and are more likely to live longer.  Because you\u2019re reporting a low level of social support, we encourage you to meet with a health care provider. If you don\u2019t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.\n\n                                    </p> <p>We encourage you to check out the materials in AfterDeployment\u2019s \u201CFamilies and Friendships\u201D topic.</p><p>Social isolation can occur alongside problems in relationships, life stress, depression, and post-traumatic stress, the reaction that many people experience after a major trauma. A good way to determine if you\u2019re having problems in these areas is to take additional assessments. We also suggest that you complete the Friendship Scale again in a month to track how you\u2019re doing.</p> <p>You can find links to these tools under the RESOURCES tab located above</p><p> You may find it helpful to join the <a href=\"https://www.facebook.com/afterdeployment/timeline\">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var FriendshipScaleScoring4 = exports.makeScoring(33, 16, 18, 'MODERATE', "<p>Your score is in a range typically associated with some social support.<p>  <p>Your responses suggest that you have some social support but perhaps not as much as you would like, which may be causing you to feel isolated. </p>", "<p>After a stressful experience, some people withdraw from friends and family and from activities. However, caring and encouragement from others can boost health and well-being. People who feel connected are less likely to be depressed and are more likely to live longer. We encourage you to check out <i>AfterDeployment</i>'s materials in the \"Families and Friendships\" topic.   In addition to the materials on AfterDeployment, you may benefit from discussing your feelings of isolation with a health care provider. If you don\u2019t have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>Another way to explore these experiences is to check out the materials in AfterDeployment\u2019s \u201CFamilies and Friendships\u201D topic.</p> <p>When someone is experiencing these kinds of concerns, problems may be present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var FriendshipScaleScoring5 = exports.makeScoring(34, 19, 24, 'HIGH', "<p>Your score is in a range reflecting few problems with social connections.</p>  <p>Your responses suggest that you\u2019re socially connected and do not feel isolated from others. </p>", "<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the \u201CLife Stress\u201D topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var ParentingConfidenceList = [];
var ParentingConfidenceScoring6 = exports.makeScoring(35, 16, 50, 'LOW', "<p>Your score is in a range typically associated with a significant lack of confidence and satisfaction in your role as a parent.  You describe yourself as someone who is experiencing conflict in this role.</p>", "<p>There are many reasons that can contribute to feeling a lack of confidence or satisfaction as a parent.   You may feel like you have little support  or it may be that you have particularly challenging kids.   Many parents struggle with handling the demands of parenting, but it is possible to develop increased confidence and satisfaction by consulting with experts in the field.  If you would like personal support in developing more confidence you can speak with a professional who can provide guidance in this area.  You can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of this page.  If you have other personal concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of this page. Both the CALL and CHAT options are available 24-7.\n                                    </p> <p> When someone wishes to grow in their role as a parent, exploring other areas of life can help.  You can do more exploration by taking additional assessments. We also encourage you to check out AfterDeployment\u2019s Families with Kids materials. You can find links to the tools that were mentioned here through the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var ParentingConfidenceScoring7 = exports.makeScoring(36, 51, 69, 'MOD', "<p>Your score is in a range typically associated with a moderate level of confidence and satisfaction in your role as a parent.</p>", "<p>Your score suggests that for the most part, you believe you handle your role as a parent well but  you also identify some challenges with satisfaction or confidence as a parent.</p><p>Parenting is full of challenges and it is normal to feel unsure or dissatisfied on occasion.  If you would like support or guidance in increasing your confidence as a parent, there are providers who specialize in helping parents develop increased confidence.  If you don\u2019t have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.\n                                    </p> <p>When someone wishes to grow in their role as a parent, exploring other areas of life can help.  You can do more exploration by taking additional assessments.  We also encourage you to check out AfterDeployment\u2019s \"Families with Kids\" topic. <p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var ParentingConfidenceScoring8 = exports.makeScoring(37, 70, 96, 'HIGH', "<p>Your score is in a range indicating that you very confident and satisfied with how you are handling your role as a parent.</p>", "<p>Because maintaining healthy habits means a lifestyle that includes many stress management tools to help find balance, we encourage you to check out the many tools in the \u201CLife Stress\u201D program.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var PerceivedSocialSupportList = [];
var PerceivedSocialSupportScoring9 = exports.makeScoring(38, 12, 48, 'LOW', "<p>Your score is in a range typically associated with low social support.</p>  <p>Your responses indicate that you are not feeling helped and supported by the important people in your life. You don\u2019t have a lot of people to count on in difficult times. This can leave you feeling overwhelmed. Help and encouragement from others is important to your physical and emotional health and well-being. </p>", "<p>Having experiences such as you have identified suggests that you should look into these concerns and discuss your sense of isolation with a counselor or therapist.  If you don\u2019t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p> \n                                     <p>When someone is experiencing the kinds of distressing concerns you report, problems are often present in other areas of life.  You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p>We recommend that you take this assessment again in two to four weeks to track how you are doing. We also encourage you to check out AfterDeployment's \u201CFamilies and Friendships\u201D materials. However, we want to emphasize that your responses on the assessment indicate that your best plan is to consult with a counselor or therapist. AfterDeployment is not a substitute for consulting with a provider in person.</p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href=\"https://www.facebook.com/afterdeployment/timeline\">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var PerceivedSocialSupportScoring10 = exports.makeScoring(39, 49, 68, 'MOD', "<p>Your score is in a range typically associated with a moderate level of social support.</p>  <p>Your responses indicate that you have people in your life who are there when you need them. However, you may feel that you could use more support from some of the important people in your life. Help and encouragement from others is important to your physical and emotional health and well-being. </p>", "<p>When someone experiences insufficient social support, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments. We also encourage you to check out the information in the \"Families and Friendships\" topic to find out more about these problems and what you can do about them. You will find information and activities on how to increase levels of social support.</p><p>You may benefit from discussing your need for increased social support with a counselor or therapist. If you don\u2019t have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7. </p>\n                                    <p>We recommend that you retake this assessment in two to four weeks to track how you are doing.</p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var PerceivedSocialSupportScoring11 = exports.makeScoring(40, 69, 84, 'HIGH', "<p>Your score is in a range typically associated with high levels of social support.</p>  <p>Your responses suggest that you have support and help from family and friends.  You have people there when you need them. </p>", "<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the \u201CLife Stress\u201D topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var PostDeploymentSocialSupportList = [];
var PostDeploymentSocialSupportScoring12 = exports.makeScoring(41, 15, 39, 'LOW', "<p>Your score is in a range typically associated with high social support following deployment.</p>  <p>Your responses suggest that you are satisfied with the social support that you have experienced following your deployment. </p>", "<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means following a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the \u201CLife Stress\u201D topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var PostDeploymentSocialSupportScoring13 = exports.makeScoring(42, 40, 59, 'MOD', "<p>Your score is in a range typically associated with moderate social support following deployment.</p>  <p>Your responses suggest that you may not be completely satisfied with the support that you have received from your family, friends, or community since your return from deployment.</p>", "<p>Emotional and practical support from family and community is helpful for service members, making the transition back home much easier. We encourage you to build support and make sure that you have others to turn to when you need them. If you are not finding what you need, you may want to consider looking for other supports in the military, veteran, or civilian community. </p><p>When someone has a problem with social support, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments. We also encourage you to check out the materials in AfterDeployment's \"Families and Friendships\" and \"Work Adjustment\" topics to find out more about how to deal with difficulties in your personal and work relationships upon return from deployment. There, you will find information and strategies to help develop additional social support.</p><p>In addition to the materials on AfterDeployment, you may benefit from discussing social support with a healthcare provider. If you don\u2019t have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p> \n                                    <p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var PostDeploymentSocialSupportScoring14 = exports.makeScoring(43, 60, 75, 'HIGH', "<p>Your score is in a range typically associated with low social support following deployment.</p>  <p>Your responses suggest that you are not satisfied with the emotional or practical support that you have received from your family, friends, or community since your return from deployment. </p>", "<p>If you are not currently seeking help, we strongly recommend that you discuss your sense of isolation with a counselor or therapist. Take a copy of your assessment results with you to share the details of your problem. A provider can help target the specific problems you might be having and will help develop a plan to improve your sense of connection to others. You can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7. </p>  <p>When someone has a problem with social support, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments.</p>  <p>We also encourage you to check out the materials in AfterDeployment's \"Families and Friendships\" and \"Work Adjustment\" topics to find out more about how to deal with difficulties in relationships upon return from deployment. You will find information and strategies to help develop social supports.</p>  <p>Take a look at how comfortable you are with asking for support. You may find that you are giving people the message that you are OK and don't need or want support. It is a common mistake to believe that if you have to ask for support it means that people don\u2019t care. Many people are more than happy to provide help and support if they understand the need. Remember that people can't read your mind.</p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>");
var angerScoringList = [
    exports.makeScoring(44, 0, 22, 'Low Acuity', "<p>Your score is in a range typically associated with LOW anger.</p>", "<p>Although only a healthcare professional can provide an actual diagnosis, your results suggest that you don\u2019t seem to be having difficulties with anger right now.</p>"),
    exports.makeScoring(45, 23, 42, 'Moderate Acuity', "<p>Your score is in a range typically associated with MODERATE anger.</p>", "<p>Although only a healthcare professional can provide an actual diagnosis, anger may be causing significant problems in your relationships, your work, and your health.</p>"),
    exports.makeScoring(46, 43, 56, 'High Acuity', "<p>Your score is in a range typically associated with HIGH anger.</p>", "<p>Although only a healthcare professional can provide an actual diagnosis, your responses suggest you may be feeling angry often or having problems controlling your anger.</p>")
];
MaritalSatisfactionList.push(MaritalSatisfactionScoring0);
MaritalSatisfactionList.push(MaritalSatisfactionScoring1);
MaritalSatisfactionList.push(MaritalSatisfactionScoring2);
FriendshipScaleList.push(FriendshipScaleScoring3);
FriendshipScaleList.push(FriendshipScaleScoring4);
FriendshipScaleList.push(FriendshipScaleScoring5);
ParentingConfidenceList.push(ParentingConfidenceScoring6);
ParentingConfidenceList.push(ParentingConfidenceScoring7);
ParentingConfidenceList.push(ParentingConfidenceScoring8);
PerceivedSocialSupportList.push(PerceivedSocialSupportScoring9);
PerceivedSocialSupportList.push(PerceivedSocialSupportScoring10);
PerceivedSocialSupportList.push(PerceivedSocialSupportScoring11);
PostDeploymentSocialSupportList.push(PostDeploymentSocialSupportScoring12);
PostDeploymentSocialSupportList.push(PostDeploymentSocialSupportScoring13);
PostDeploymentSocialSupportList.push(PostDeploymentSocialSupportScoring14);
var choicesSet1 = [
    { title: '0 - Not at all', value: '1', score: 0 },
    { title: '1', value: '2', score: 1 },
    { title: '2', value: '3', score: 2 },
    { title: '3', value: '4', score: 3 },
    { title: '4', value: '5', score: 4 },
    { title: '5', value: '6', score: 5 },
    { title: '6', value: '7', score: 6 },
    { title: '7', value: '8', score: 7 },
    { title: '8 - Exactly So', value: '9', score: 8 }
];
var choicesSet2 = [
    { title: 'Almost Always', value: '1', score: 4 },
    { title: 'Most of the time', value: '2', score: 3 },
    { title: 'About half the time', value: '3', score: 2 },
    { title: 'Occasionally', value: '4', score: 1 },
    { title: 'Not at all', value: '5', score: 0 },
];
var choicesSet3 = [
    { title: 'Almost Always', value: '1', score: 0 },
    { title: 'Most of the time', value: '2', score: 1 },
    { title: 'About half the time', value: '3', score: 2 },
    { title: 'Occasionally', value: '4', score: 3 },
    { title: 'Not at all', value: '5', score: 4 },
];
var choicesSet4 = [
    { title: 'Very Unhappy', value: '1', score: 0 },
    { title: 'Somewhat Unhappy', value: '2', score: 2 },
    { title: 'Slightly Unhappy', value: '3', score: 7 },
    { title: 'Happy', value: '4', score: 15 },
    { title: 'Pretty Happy', value: '5', score: 20 },
    { title: 'Very Happy', value: '6', score: 25 },
    { title: 'Perfectly Happy', value: '7', score: 35 },
];
var choicesSet5 = [
    { title: 'Always Agree', value: '1', score: 5 },
    { title: 'Almost Always Agree', value: '2', score: 4 },
    { title: 'Occasionally Disagree', value: '3', score: 3 },
    { title: 'Frequently Disagree', value: '4', score: 2 },
    { title: 'Almost Always Disagree', value: '5', score: 1 },
    { title: 'Always Disagree', value: '6', score: 0 },
];
var choicesSet6 = [
    { title: 'Always Agree', value: '1', score: 8 },
    { title: 'Almost Always Agree', value: '2', score: 6 },
    { title: 'Occasionally Disagree', value: '3', score: 4 },
    { title: 'Frequently Disagree', value: '4', score: 2 },
    { title: 'Almost Always Disagree', value: '5', score: 1 },
    { title: 'Always Disagree', value: '6', score: 0 },
];
var choicesSet7 = [
    { title: 'Always Agree', value: '1', score: 15 },
    { title: 'Almost Always Agree', value: '2', score: 12 },
    { title: 'Occasionally Disagree', value: '3', score: 9 },
    { title: 'Frequently Disagree', value: '4', score: 4 },
    { title: 'Almost Always Disagree', value: '5', score: 1 },
    { title: 'Always Disagree', value: '6', score: 0 },
];
var choicesSet8 = [
    { title: 'Strongly disagree', value: '1', score: 5 },
    { title: 'Disagree', value: '2', score: 4 },
    { title: 'Neither agree nor disagree', value: '3', score: 3 },
    { title: 'Agree', value: '4', score: 2 },
    { title: 'Strongly agree', value: '5', score: 1 }
];
var choicesSet9 = [
    { title: 'Strongly disagree', value: '1', score: 1 },
    { title: 'Disagree', value: '2', score: 2 },
    { title: 'Neither agree nor disagree', value: '3', score: 3 },
    { title: 'Agree', value: '4', score: 4 },
    { title: 'Strongly agree', value: '5', score: 5 }
];
var choicesSet10 = [
    { title: 'Mother', value: '1', score: 0 },
    { title: 'Father', value: '2', score: 0 },
    { title: 'Other', value: '3', score: 0 }
];
var choicesSet11 = [
    { title: 'Strongly Agree', value: '1', score: 1 },
    { title: 'Agree', value: '2', score: 2 },
    { title: 'Mildly Agree', value: '3', score: 3 },
    { title: 'Mildly Disagree', value: '4', score: 4 },
    { title: 'Disagree', value: '5', score: 5 },
    { title: 'Strongly Disagree', value: '6', score: 6 }
];
var choicesSet12 = [
    { title: 'Strongly Agree', value: '1', score: 6 },
    { title: 'Agree', value: '2', score: 5 },
    { title: 'Mildly Agree', value: '3', score: 4 },
    { title: 'Mildly Disagree', value: '4', score: 3 },
    { title: 'Disagree', value: '5', score: 2 },
    { title: 'Strongly Disagree', value: '6', score: 1 }
];
var choicesSet13 = [
    { title: 'husband giving in', value: '1', score: 0 },
    { title: 'wife giving in', value: '2', score: 2 },
    { title: 'agreement by mutual give and take', value: '3', score: 10 },
];
var choicesSet14 = [
    { title: 'All of them', value: '1', score: 10 },
    { title: 'Some of them', value: '2', score: 8 },
    { title: 'Very few of them', value: '3', score: 3 },
    { title: 'None of them', value: '4', score: 0 }
];
var choicesSet15 = [
    { title: 'to both be "On the go" ', value: '1', score: 3 },
    { title: 'to both be stay at home ', value: '2', score: 10 },
    { title: 'neither', value: '3', score: 2 }
];
var choicesSet16 = [
    { title: 'Frequently', value: '1', score: 0 },
    { title: 'Occasionally', value: '2', score: 3 },
    { title: 'Rarely', value: '3', score: 8 },
    { title: 'Never', value: '4', score: 15 }
];
var choicesSet17 = [
    { title: 'Marry the same person', value: '1', score: 15 },
    { title: 'Marry a different person', value: '2', score: 0 },
    { title: 'Not marry at all', value: '3', score: 1 }
];
var choicesSet18 = [
    { title: 'almost never', value: '1', score: 0 },
    { title: 'rarely', value: '2', score: 2 },
    { title: 'in most things', value: '3', score: 10 },
    { title: 'in everything', value: '4', score: 10 }
];
var choicesSet19 = [
    { title: 'Very Strongly Disagree', value: '1', score: 1 },
    { title: 'Strongly Disagree', value: '2', score: 2 },
    { title: 'Mildly Disagree', value: '3', score: 3 },
    { title: 'Neutral', value: '4', score: 4 },
    { title: 'Mildly Agree', value: '5', score: 5 },
    { title: 'Strongly Agree', value: '6', score: 6 },
    { title: 'Very Strongly Agree', value: '7', score: 7 }
];
var choicesSet20 = [
    { title: 'Never', value: '1', score: 0 },
    { title: 'Once or Twice', value: '2', score: 2 },
    { title: 'Monthly', value: '3', score: 3 },
    { title: 'Weekly', value: '4', score: 4 },
    { title: 'Daily or almost daily', value: '5', score: 6 },
];
var choicesSet21 = [
    { title: 'Never', value: '1', score: 0 },
    { title: 'Once or Twice', value: '2', score: 3 },
    { title: 'Monthly', value: '3', score: 4 },
    { title: 'Weekly', value: '4', score: 5 },
    { title: 'Daily or almost daily', value: '5', score: 6 },
];
var choicesSet22 = [
    { title: 'Never', value: '1', score: 0 },
    { title: 'Once or Twice', value: '2', score: 5 },
    { title: 'Monthly', value: '3', score: 6 },
    { title: 'Weekly', value: '4', score: 7 },
    { title: 'Daily or almost daily', value: '5', score: 8 },
];
var choicesSet23 = [
    { title: 'No, Never', value: '1', score: 0 },
    { title: 'Yes, in the past 3 months', value: '2', score: 6 },
    { title: 'Yes, but not in the past 3 months', value: '3', score: 3 }
];
var choicesSet24 = [
    { title: 'Not at all', value: '1', score: 1 },
    { title: 'A little bit', value: '2', score: 2 },
    { title: 'Moderately', value: '3', score: 3 },
    { title: 'Quite a bit', value: '4', score: 4 },
    { title: 'Extremely', value: '5', score: 5 },
];
var choicesSet25 = [
    { title: 'Not at all', value: '1', score: 0 },
    { title: 'Several days', value: '2', score: 1 },
    { title: 'More than half the days', value: '3', score: 2 },
    { title: 'Nearly Every day', value: '4', score: 3 }
];
var choicesSet26 = [
    { title: 'Not at all', value: '1', score: 0 },
    { title: 'Several days', value: '2', score: 0 },
    { title: 'More than half the days', value: '3', score: 0 },
    { title: 'Nearly Every day', value: '4', score: 0 }
];
var choicesSet27 = [
    { title: 'Exactly Like Me', value: '1', score: 4 },
    { title: 'A Lot Like Me', value: '2', score: 3 },
    { title: 'Somewhat Like Me', value: '3', score: 2 },
    { title: 'A tiny bit Like M', value: '4', score: 1 },
    { title: 'Not at All Like Me', value: '4', score: 0 }
];
var choicesSet28 = [
    { title: 'True', value: '1', score: 1 },
    { title: 'False', value: '2', score: 0 }
];
var choicesSet29 = [
    { title: 'No', value: '1', score: 0 },
    { title: 'Yes', value: '2', score: 1 }
];
;
// (a) almost never 0 (b) rarely 2(c) in most things 10 (d) in everything 10 
var friendShipQuestions = [
    exports.makeQuestion(1, 'It has been easy to relate to others.', 'select', choicesSet2),
    exports.makeQuestion(2, 'I felt isolated from other people.', 'select', choicesSet3),
    exports.makeQuestion(3, 'I had someone to share my feelings with.', 'select', choicesSet2),
    exports.makeQuestion(4, 'I found it easy to get in touch with others when I needed to.', 'select', choicesSet2),
    exports.makeQuestion(5, 'When with other people, I felt separate from them.', 'select', choicesSet3),
    exports.makeQuestion(6, 'I felt alone and friendless.', 'select', choicesSet3)
];
var marraigeHappinessQuestion = exports.makeQuestion(1, 'Which describes the degree of happiness of your present marriage?', 'select', choicesSet4);
var maritalSatisfactionQuestions = [
    marraigeHappinessQuestion,
    exports.makeQuestion(2, 'Handling Family Finances', 'select', choicesSet5),
    exports.makeQuestion(3, 'Matters of Recreation', 'select', choicesSet5),
    exports.makeQuestion(4, 'Demonstration of Affection', 'select', choicesSet6),
    exports.makeQuestion(5, 'Friends', 'select', choicesSet5),
    exports.makeQuestion(6, 'Sex Relations', 'select', choicesSet7),
    exports.makeQuestion(7, 'Conventionality (right, good, or proper conduct)', 'select', choicesSet5),
    exports.makeQuestion(8, 'Philosophy of Life', 'select', choicesSet5),
    exports.makeQuestion(9, 'Ways of dealing with in-laws', 'select', choicesSet5),
    exports.makeQuestion(10, 'When disagreements arise, they usually result in:', 'select', choicesSet13),
    exports.makeQuestion(11, 'Do you and your mate engage in outside interests together?', 'select', choicesSet14),
    exports.makeQuestion(12, 'In leisure time do you generally prefer:', 'select', choicesSet15),
    exports.makeQuestion(13, 'Do you ever wish you had not married?', 'select', choicesSet16),
    exports.makeQuestion(14, 'If you had your life to live over again, do you think you would:', 'select', choicesSet17),
    exports.makeQuestion(15, 'Do you ever confide in your mate:', 'select', choicesSet18)
];
var percSocialSupportQuestions = [
    exports.makeQuestion(1, 'There is a special person who is around when I am in need.', 'select', choicesSet19),
    exports.makeQuestion(2, 'There is a special person with whom I can share my joys and sorrows.', 'select', choicesSet19),
    exports.makeQuestion(3, 'My family really tries to help me.', 'select', choicesSet19),
    exports.makeQuestion(4, 'I get the emotional help and support I need from my family.', 'select', choicesSet19),
    exports.makeQuestion(5, 'I have a special person who is a real source of comfort to me.', 'select', choicesSet19),
    exports.makeQuestion(6, 'My friends really try to help me.', 'select', choicesSet19),
    exports.makeQuestion(7, 'I can count on my friends when things go wrong.', 'select', choicesSet19),
    exports.makeQuestion(8, 'I can talk about my problems with my family.', 'select', choicesSet19),
    exports.makeQuestion(9, 'I have friends with whom I can share my joys and sorrows.', 'select', choicesSet19),
    exports.makeQuestion(10, 'There is a special person in my life who cares about my feelings.', 'select', choicesSet19),
    exports.makeQuestion(11, 'My family is willing to help me make decisions.', 'select', choicesSet19),
    exports.makeQuestion(12, 'I can talk about my problems with my friends.', 'select', choicesSet19)
];
var postDepSupportQuestions = [
    exports.makeQuestion(1, 'The reception I received when I returned from my deployment made me feel appreciated for my efforts.', 'select', choicesSet9),
    exports.makeQuestion(2, 'The American people made me feel at home when I returned.', 'select', choicesSet9),
    exports.makeQuestion(3, 'When I returned, people made me feel proud to have served my country in the armed forces.', 'select', choicesSet9),
    exports.makeQuestion(4, 'I am carefully listened to and understood by family members or friends.', 'select', choicesSet9),
    exports.makeQuestion(5, 'Among my family or relatives, there is someone who makes me feel better when I am feeling down.', 'select', choicesSet9),
    exports.makeQuestion(6, 'I have problems that I can’t discuss with family or friends.', 'select', choicesSet8),
    exports.makeQuestion(7, 'Among my friends or relatives, there is someone I go to when I need good advice.', 'select', choicesSet9),
    exports.makeQuestion(8, 'People at home just don’t understand what I have been through in the armed forces.', 'select', choicesSet8),
    exports.makeQuestion(9, 'There are people to whom I can talk about my deployment experiences.', 'select', choicesSet9),
    exports.makeQuestion(10, 'The people I work with respect the fact that I am a veteran or service member.', 'select', choicesSet9),
    exports.makeQuestion(11, 'My supervisor understands when I need time to take off to take care of personal matters.', 'select', choicesSet9),
    exports.makeQuestion(12, 'My friends or relatives would lend me money if I needed it.', 'select', choicesSet9),
    exports.makeQuestion(13, 'My friends or relatives would help me move my belongings if I needed to.', 'select', choicesSet9),
    exports.makeQuestion(14, 'When I am unable to attend to daily chores, there is someone who will help me with these tasks.', 'select', choicesSet9),
    exports.makeQuestion(15, 'When I am ill, friends or family members will help out until I am well.', 'select', choicesSet9)
];
var parentingConfidenceAssessment = [
    exports.makeQuestion(1, 'Are you a Mother/Father/Other?', 'select', choicesSet10),
    exports.makeQuestion(2, 'The problems of taking care of a child are easy to solve once you know how your actions affect your child, an understanding I have acquired.', 'select', choicesSet12),
    exports.makeQuestion(3, 'Even though being a parent could be rewarding, I am frustrated now while my child is at his/her present age.', 'select', choicesSet11),
    exports.makeQuestion(4, 'I go to bed the same way I wake up in the morning—feeling I have not accomplished a whole lot.', 'select', choicesSet11),
    exports.makeQuestion(5, 'I do not know what it is, but sometimes when I’m supposed to be in control, I feel more like the one being manipulated.', 'select', choicesSet11),
    exports.makeQuestion(6, 'My parent was better prepared to be a good parent than I am.', 'select', choicesSet11),
    exports.makeQuestion(7, 'I would make a fine model for a new parent to follow in order to learn what she/he would need to know in order to be a good parent.', 'select', choicesSet12),
    exports.makeQuestion(8, 'Being a parent is manageable, and any problems are easily solved.', 'select', choicesSet12),
    exports.makeQuestion(9, 'A difficult problem in being a parent is not knowing whether you’re doing a good job or a bad one.', 'select', choicesSet11),
    exports.makeQuestion(10, 'Sometimes I feel like I’m not getting anything done.', 'select', choicesSet11),
    exports.makeQuestion(11, 'I meet my own personal expectations for expertise in caring for my child.', 'select', choicesSet12),
    exports.makeQuestion(12, 'If anyone can find the answer to what is troubling my child, I am the one.', 'select', choicesSet12),
    exports.makeQuestion(13, 'My talents and interests are in other areas, not in being a parent.', 'select', choicesSet11),
    exports.makeQuestion(14, ' Considering how long I’ve been a parent, I feel thoroughly familiar with this role.', 'select', choicesSet12),
    exports.makeQuestion(15, 'If being a parent of a child were only more interesting, I would be motivated to do a better job as a parent.', 'select', choicesSet11),
    exports.makeQuestion(16, ' I honestly believe I have all the skills necessary to be a good parent to my child.', 'select', choicesSet12),
    exports.makeQuestion(17, 'Being a parent makes me tense and anxious.', 'select', choicesSet11),
];
var angerQuestions = [
    exports.makeQuestion(1, 'I often find myself getting angry at people or situations.', 'select', choicesSet1),
    exports.makeQuestion(2, 'When I get angry, I get really mad.', 'select', choicesSet1),
    exports.makeQuestion(3, 'When I get angry, I stay angry.', 'select', choicesSet1),
    exports.makeQuestion(4, 'When I get angry at someone, I want to hit or clobber the person.', 'select', choicesSet1),
    exports.makeQuestion(5, 'My anger interferes with my ability to get my work done.', 'select', choicesSet1),
    exports.makeQuestion(6, 'My anger prevents me from getting along with people as well as I would like to.', 'select', choicesSet1),
    exports.makeQuestion(7, 'My anger has a bad effect on my health.', 'select', choicesSet1),
];
var friendsImage = 'res/images/Friendship_Scale.jpg';
var marriageImage = 'res/images/Marital_Satisfaction.jpg';
var socialImage = 'res/images/Perceived_Social_Support.jpg';
var postDepSocialImage = 'res/images/Post_Deployment_Social_Support.jpg';
var parentingConfidenceImage = 'res/images/Parenting_Confidence.jpg';
var angerImage = 'res/images/Parenting_Confidence.jpg';
/////////////////////////////////////PORT of Drugs Assessments START
var getQuestionScore = function (value, choices) {
    return choices.reduce(function (score, choice) {
        if (choice.value === value) {
            score += choice.score;
        }
        return score;
    }, 0);
};
var makeIdHashMap = function (items) {
    return items.reduce(function (map, q) {
        map[q.id] = q;
        return map;
    }, {});
};
var getSubstanceScore = function (substanceQuestions, values, questionsMap) {
    return substanceQuestions.reduce(function (tally, qId) {
        var value = typeof values[qId] !== 'undefined' ? values[qId] : null;
        if (value && typeof questionsMap[qId] !== 'undefined') {
            var choices = questionsMap[qId].choices;
            tally += getQuestionScore(value, choices);
        }
        return tally;
    }, 0);
};
var returnInRange = function (numbers, min, max) {
    return numbers.filter(function (number) {
        return number >= min && number <= max;
    });
};
var calcDrugsScore = function (values) {
    var allSubstances = ['2', '3', '4', '5', '6'];
    var alcQuestions = ['2', '7_2', '8_2', '9_2', '10_2'];
    var potQuestions = ['3', '7_3', '8_3', '9_3', '10_3'];
    var cokeQuestions = ['4', '7_4', '8_4', '9_4', '10_4'];
    var amphQuestions = ['5', '7_5', '8_5', '9_5', '10_5'];
    var sedQuestions = ['6', '7_6', '8_6', '9_6', '10_6'];
    var substancesUsed = ['2', '3', '4', '5', '6'];
    var questionsMap = makeIdHashMap(this.calcQuestions(values));
    var chosenSubstances = []; //question1 chosen substances
    var alcChosen = false;
    allSubstances.map(function (qId) {
        if (typeof values[qId] !== 'undefined' && values[qId] === '2') {
            chosenSubstances.push(qId);
            if (qId === '2') {
                alcChosen = true;
            }
        }
    });
    var noneChosen = chosenSubstances.length === 0;
    var onlyAlc = chosenSubstances.length === 1 && alcChosen;
    var alcScore = getSubstanceScore(alcQuestions, values, questionsMap);
    var potScore = getSubstanceScore(potQuestions, values, questionsMap);
    var cokeScore = getSubstanceScore(cokeQuestions, values, questionsMap);
    var amphScore = getSubstanceScore(amphQuestions, values, questionsMap);
    var sedScore = getSubstanceScore(sedQuestions, values, questionsMap);
    var scoresArray = [alcScore, potScore, cokeScore, amphScore, sedScore];
    var areAllDrugsLowUsagec = noneChosen;
    if (!areAllDrugsLowUsagec) {
        areAllDrugsLowUsagec = alcScore < 4 && potScore < 4 && cokeScore < 4 && amphScore < 4 && sedScore < 4;
    }
    //0 - 14 = low, 15-29= mod, 30 - 40 = high
    var isAnyDrugModerate = returnInRange(scoresArray, 4, 26).length > 0;
    var isAnyDrugHigh = returnInRange(scoresArray, 27, 38).length > 0;
    var isLowAlc = (alcScore >= 0 && alcScore < 11);
    var isModAlc = (alcScore >= 11 && alcScore < 27);
    var isHighAlc = (alcScore >= 27 && alcScore < 39);
    if (noneChosen) {
        return 0;
    }
    if (!noneChosen && areAllDrugsLowUsagec && !onlyAlc && isLowAlc) {
        //Low Alcohol and Drug Acuity
        return 4;
    }
    if (!noneChosen && areAllDrugsLowUsagec && !onlyAlc && isModAlc) {
        //Moderate Alcohol Acuity
        return 20;
    }
    if (!noneChosen && areAllDrugsLowUsagec && !onlyAlc && isHighAlc) {
        //High Alcohol Acuity
        return 30;
    }
    if (isAnyDrugModerate && !isAnyDrugHigh && isLowAlc) {
        //Moderate Drug Acuity
        return 25;
    }
    if (isAnyDrugHigh && isLowAlc) {
        //High Drug Acuity
        return 35;
    }
    if (isModAlc && isAnyDrugModerate && !isAnyDrugHigh) {
        //Moderate Alcohol and Drug Acuity
        return 20;
    }
    if ((isHighAlc && (isAnyDrugModerate || isAnyDrugHigh)) || (isAnyDrugHigh && (isModAlc || isHighAlc))) {
        //High Alcohol and Drug Acuity
        return 35;
    }
    return scoresArray.reduce(function (tally, score) {
        tally + score;
        return tally;
    }, 0);
};
var calcAlcDrugQuestions = function (values) {
    var allSubstances = ['1', '2', '3', '4', '5', '6']; //Logicly these 6 questions "are" question one
    var question2Dependents = ['8', '9', '10'];
    var chosen = []; //question1 chosen substances
    allSubstances.map(function (qId) {
        if (typeof values[qId] !== 'undefined' && values[qId] === '2') {
            chosen.push(qId);
        }
    });
    var questionsMap = this.questions.reduce(function (acc, item) {
        acc[item.id] = item;
        return acc;
    }, {});
    var substanceQuestions = this.questions.filter(function (q) {
        if (parseInt(q.id) <= 6) {
            return true;
        }
        return false;
    });
    var conditionalQuestions2Labels = this.questions.filter(function (q) {
        if (chosen.length > 0 && parseInt(q.id) === 7) {
            return true;
        }
        return false;
    });
    var conditionalQuestions3Labels = this.questions.filter(function (q) {
        if (chosen.length > 0 && parseInt(q.id) > 7 && parseInt(q.id) < 11) {
            return true;
        }
        return false;
    });
    var conditionalQuestions2 = [];
    var condition2chosenSubstances = [];
    if (chosen.length > 0) {
        conditionalQuestions2Labels.map(function (ql) {
            conditionalQuestions2.push(ql);
            chosen.map(function (qcId) {
                var subQuestion = questionsMap[qcId];
                if (subQuestion) {
                    var questionId = ql.id + '_' + qcId;
                    conditionalQuestions2.push(exports.makeQuestion(questionId, subQuestion.title, 'select', ql.choices));
                    if (typeof values[questionId] !== 'undefined' && values[questionId] !== '1') {
                        condition2chosenSubstances.push(subQuestion);
                    }
                }
            });
        });
    }
    var conditionalQuestions3 = [];
    if (condition2chosenSubstances.length > 0) {
        conditionalQuestions3Labels.map(function (ql) {
            conditionalQuestions3.push(ql);
            condition2chosenSubstances.map(function (subQuestion) {
                var questionId = ql.id + '_' + subQuestion.id;
                conditionalQuestions3.push(exports.makeQuestion(questionId, subQuestion.title, 'select', ql.choices));
            });
        });
    }
    return substanceQuestions.concat(conditionalQuestions2).concat(conditionalQuestions3);
};
var calcPanicQuestions = function (values) {
    if (values === void 0) { values = {}; }
    var firstQuestionId = '1';
    var firstQuestionYes = false;
    if (typeof values[firstQuestionId] !== 'undefined' && values[firstQuestionId] === '2') {
        firstQuestionYes = true;
    }
    if (!firstQuestionYes) {
        return [this.questions[0]];
    }
    return this.questions;
};
var calcPanicScore = function (values) {
    if (values === void 0) { values = {}; }
    var firstQuestionId = '1';
    var firstFour = ['2', '3', '4', '5'];
    var remainingQuestions = ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
    var firstQuestionYes = false;
    if (typeof values[firstQuestionId] !== 'undefined' && values[firstQuestionId] === '2') {
        firstQuestionYes = true;
    }
    var first4Yes = firstFour.filter(function (qId) {
        if (typeof values[qId] !== 'undefined' && values[qId] === '2') {
            return true;
        }
        return false;
    });
    var remainingYes = remainingQuestions.filter(function (qId) {
        if (typeof values[qId] !== 'undefined' && values[qId] === '2') {
            return true;
        }
        return false;
    });
    var arefirst4PanicYes = first4Yes.length === 4;
    var anyRemainingYes = remainingYes.length > 0;
    var atleast4RemainingYes = remainingYes.length > 3;
    if (!firstQuestionYes) {
        return 5;
    }
    if (arefirst4PanicYes && atleast4RemainingYes) {
        return 55;
    }
    if (arefirst4PanicYes && anyRemainingYes) {
        return 35;
    }
    return 15;
};
var alcDrugsQuestions = [
    exports.makeQuestion('1', 'In your lifetime, which of the following substances have you ever used? (NON-MEDICAL USE ONLY)', 'label'),
    exports.makeQuestion('2', 'Alcohol (beer, wine, spirits, etc.)', 'select', choicesSet29),
    exports.makeQuestion('3', 'Cannabis (marijuana, pot, grass, hash, etc.)', 'select', choicesSet29),
    exports.makeQuestion('4', 'Cocaine (coke, crack, etc.)', 'select', choicesSet29),
    exports.makeQuestion('5', 'Amphetamine type stimulants (speed, diet pills, ecstasy, etc.)', 'select', choicesSet29),
    exports.makeQuestion('6', 'Sedatives or sleeping pills (Valium, Serapax, Rohypnol, Ambien, etc.)', 'select', choicesSet29),
    exports.makeQuestion('7', 'In the past three months, how often have you used each of the following substances? (NON-MEDICAL USE ONLY)', 'label', choicesSet20),
    exports.makeQuestion('8', 'During the past three months, how often have you had a strong desire or urge to use [substance]?', 'label', choicesSet21),
    exports.makeQuestion('9', 'During the past three months, how often has your use of [substance] led to health, social, legal, or financial problems?', 'label', choicesSet20),
    exports.makeQuestion('10', 'During the past three months, how often have you failed to do what was normally expected of you because of your use of [substance]?', 'label', choicesSet22),
    exports.makeQuestion('11', 'Has a friend or anyone else ever expressed concern because of your use of [substance]?', 'label', choicesSet23),
    exports.makeQuestion('12', 'Have your ever tried and failed to control, cut down or stop using [substance]?', 'label', choicesSet23),
];
var ptsQuestions = [
    exports.makeQuestion('1', 'Repeated, disturbing memories, thoughts, or images of a stressful military experience from the past?', 'select', choicesSet24),
    exports.makeQuestion('2', 'Repeated, disturbing dreams of a stressful military experience from the past?', 'select', choicesSet24),
    exports.makeQuestion('3', 'Suddenly acting or feeling as if a stressful military experience were happening again (as if you were reliving it)? ', 'select', choicesSet24),
    exports.makeQuestion('4', 'Feeling very upset when something reminded you of a stressful military experience from the past?', 'select', choicesSet24),
    exports.makeQuestion('5', 'Having physical reactions (e.g., heart pounding, trouble breathing, or sweating) when something reminded you of a stressful military experience from the past? ', 'select', choicesSet24),
    exports.makeQuestion('6', 'Avoiding thinking about or talking about a stressful military experience from the past or avoid having feelings related to it?', 'select', choicesSet24),
    exports.makeQuestion('7', 'Avoid activities or situations because they remind you of a stressful military experience from the past? ', 'select', choicesSet24),
    exports.makeQuestion('8', 'Trouble remembering important parts of a stressful military experience from the past?', 'select', choicesSet24),
    exports.makeQuestion('9', 'Loss of interest in things that you used to enjoy?', 'select', choicesSet24),
    exports.makeQuestion('10', 'Feeling distant or cut off from other people? ', 'select', choicesSet24),
    exports.makeQuestion('11', 'Feeling emotionally numb or being unable to have loving feelings for those close to you?', 'select', choicesSet24),
    exports.makeQuestion('12', 'Feeling as if your future will somehow be cut short? ', 'select', choicesSet24),
    exports.makeQuestion('13', 'Trouble falling or staying asleep? ', 'select', choicesSet24),
    exports.makeQuestion('14', 'Feeling irritable or having angry outbursts?', 'select', choicesSet24),
    exports.makeQuestion('15', 'Having difficulty concentrating?', 'select', choicesSet24),
    exports.makeQuestion('16', 'Being "super alert" or watchful on guard?', 'select', choicesSet24),
    exports.makeQuestion('17', 'Feeling jumpy or easily startled?', 'select', choicesSet24),
];
var depressionQuestions = [
    exports.makeQuestion('1', 'How often have you been bothered by having little interest or pleasure in doing things?', 'select', choicesSet25),
    exports.makeQuestion('2', 'How often have you been bothered by feeling down, depressed or hopeless?', 'select', choicesSet25),
    exports.makeQuestion('3', 'Over the last two weeks, how often have you been bothered by any of the following problems? ', 'label'),
    exports.makeQuestion('4', 'Trouble falling or staying asleep, or sleeping too much. ', 'select', choicesSet25),
    exports.makeQuestion('5', 'Feeling tired or having little energy.', 'select', choicesSet25),
    exports.makeQuestion('6', 'Poor appetite or overeating.', 'select', choicesSet25),
    exports.makeQuestion('7', 'Feeling bad about yourself – or that  you are a failure or have let yourself or your family down. ', 'select', choicesSet25),
    exports.makeQuestion('8', 'Trouble concentrating on things, such as reading the newspaper or watching television.  ', 'select', choicesSet25),
    exports.makeQuestion('9', "Moving or speaking so slowly that other people \ncould have noticed.  Or the opposite \u2013 being so \nfidgety or restless that you have been moving \naround a lot more than usual. ", 'select', choicesSet25),
    exports.makeQuestion('10', 'Thoughts that you would be better off dead, or of hurting yourself in some way. ', 'select', choicesSet25)
];
var anxietyQuestions = [
    exports.makeQuestion('1', 'Feeling nervous, anxious, or on edge', 'select', choicesSet25),
    exports.makeQuestion('2', 'Not being able to stop or control worrying', 'select', choicesSet25),
    exports.makeQuestion('3', 'Worrying too much about different things', 'select', choicesSet25),
    exports.makeQuestion('4', 'Trouble relaxing', 'select', choicesSet25),
    exports.makeQuestion('5', 'Being so restless that it\'s hard to sit still', 'select', choicesSet25),
    exports.makeQuestion('6', 'Becoming easily annoyed or irritable', 'select', choicesSet25),
    exports.makeQuestion('7', 'Feeling afraid as if something awful might happen', 'select', choicesSet25),
    exports.makeQuestion('8', 'If you checked off any problems, how difficult have these made it for you to do your work, take care of things at home, or long with other people?', 'select', choicesSet26),
];
var panicQuestions = [
    exports.makeQuestion('1', 'In the last 4 weeks, have you had an anxiety attack - suddenly feeling fear or panic?', 'select', choicesSet29),
    exports.makeQuestion('2', 'Has this ever happened before?', 'select', choicesSet29),
    exports.makeQuestion('3', 'Do some of these attacks come suddenly out of the blue; that is, in situations where you don\'t expect to be nervous or uncomfortable?', 'select', choicesSet29),
    exports.makeQuestion('4', 'Do these attacks bother you a lot or are you worried about having another attack?', 'select', choicesSet29),
    exports.makeQuestion('5', 'Were you short of breath?', 'select', choicesSet29),
    exports.makeQuestion('6', 'Did your heart race, pound, or skip?', 'select', choicesSet29),
    exports.makeQuestion('7', 'Did you have chest pain or pressure?', 'select', choicesSet29),
    exports.makeQuestion('8', 'Did you sweat?', 'select', choicesSet29),
    exports.makeQuestion('9', 'Did you feel as if you were choking?', 'select', choicesSet29),
    exports.makeQuestion('10', 'Did you have hot flashes or chills?', 'select', choicesSet29),
    exports.makeQuestion('11', 'Did you have nausea or an upset stomach, or the feeling that you were going to have diarrhea?', 'select', choicesSet29),
    exports.makeQuestion('12', 'Did you feel dizzy, unsteady, or faint?', 'select', choicesSet29),
    exports.makeQuestion('13', 'Did you have tingling or numbness in parts of your body?', 'select', choicesSet29),
    exports.makeQuestion('14', 'Did you tremble or shake?', 'select', choicesSet29),
    exports.makeQuestion('15', 'Were you afraid you were dying?', 'select', choicesSet29)
];
var physicalInjuryAssessmentQs = [
    exports.makeQuestion('1', 'In response to the stress of my physical injury, I tend to...', 'label'),
    exports.makeQuestion('2', '...take action to fix things.', 'select', choicesSet27),
    exports.makeQuestion('3', '...not give up trying to solve problems I think I can solve.', 'select', choicesSet27),
    exports.makeQuestion('4', '...find a way to do what\'s necessary to carry on.', 'select', choicesSet27),
    exports.makeQuestion('5', '...pray or meditate.', 'select', choicesSet27),
    exports.makeQuestion('6', '...face my fears.', 'select', choicesSet27),
    exports.makeQuestion('7', '...find opportunity for growth.', 'select', choicesSet27),
    exports.makeQuestion('8', '...calm and comfort myself.', 'select', choicesSet27),
    exports.makeQuestion('9', '...try to "recharge" myself before I have to face the next challenge.', 'select', choicesSet27),
    exports.makeQuestion('10', '...see it as a challenge that will make me better.', 'select', choicesSet27),
    exports.makeQuestion('11', '...look at the problem in a number of ways.', 'select', choicesSet27),
    exports.makeQuestion('12', '...look for creative solutions to the problem.', 'select', choicesSet27),
    exports.makeQuestion('13', '...put things in perspective and realize I will have times of joy and times of sadness.', 'select', choicesSet27),
    exports.makeQuestion('14', '...be good at determining which situations are changeable and which are not.', 'select', choicesSet27),
    exports.makeQuestion('15', '...find meaning from the experience.', 'select', choicesSet27),
    exports.makeQuestion('16', '...find strength in the meaning, purpose, or mission of my life.', 'select', choicesSet27),
    exports.makeQuestion('17', '...know I will bounce back.', 'select', choicesSet27),
    exports.makeQuestion('18', '...expect that I can handle it.', 'select', choicesSet27),
    exports.makeQuestion('19', '...learn important and useful life lessons.', 'select', choicesSet27),
    exports.makeQuestion('20', '...understand that bad things can happen to anyone, not just me.', 'select', choicesSet27),
    exports.makeQuestion('21', '...lean on my faith in God or a higher power.', 'select', choicesSet27),
    exports.makeQuestion('22', '...draw upon lessons learned from failures and past mistakes.', 'select', choicesSet27),
    exports.makeQuestion('23', '...practice ways to handle it better next time.', 'select', choicesSet27)
];
var sleepAssessmentQs = [
    exports.makeQuestion('1', 'I feel sleepy during the day, even when I get a good night\'s sleep.', 'select', choicesSet28),
    exports.makeQuestion('2', 'I get very irritable when I can\'t sleep.', 'select', choicesSet28),
    exports.makeQuestion('3', 'I often wake up at night and have trouble falling back to sleep.', 'select', choicesSet28),
    exports.makeQuestion('4', 'It usually takes me a long time to fall asleep.', 'select', choicesSet28),
    exports.makeQuestion('5', 'I often wake up very early and can\'t fall back to sleep.', 'select', choicesSet28),
    exports.makeQuestion('6', 'I usually feel achy and stiff when I wake up in the morning.', 'select', choicesSet28),
    exports.makeQuestion('7', 'I often seem to wake up because of dreams.', 'select', choicesSet28),
    exports.makeQuestion('8', 'I sometimes wake up gasping for breath.', 'select', choicesSet28),
    exports.makeQuestion('9', 'My bed partner says my snoring keeps her/him from sleeping.', 'select', choicesSet28),
    exports.makeQuestion('10', 'I\'ve fallen asleep driving.', 'select', choicesSet28),
];
var alcImage = 'res/images/Alcohol_and_Drugs.jpg';
var ptsImage = 'res/images/Post_Traumatic_Stress.jpg';
var depressImage = 'res/images/Depression.jpg';
var anxietyImage = 'res/images/Anxiety.jpg';
var panicImage = 'res/images/Panic.jpg';
var physInjuryImage = 'res/images/PhysicaI_Injury_Resilience.jpg';
var sleepImage = 'res/images/Sleep.jpg';
exports.FriendShipAssessment = exports.makeAssessment(1, 'Friendship Scale', 0, 17, 24, FriendshipScaleList, 1, friendShipQuestions, friendsImage);
exports.MaritalAssessment = exports.makeAssessment(2, 'Marital Satisfaction', 2, 92, 158, MaritalSatisfactionList, 1, maritalSatisfactionQuestions, marriageImage);
exports.SocialSupportAssessment = exports.makeAssessment(3, 'Perceived Social Support', 12, 58, 84, PerceivedSocialSupportList, 1, percSocialSupportQuestions, socialImage);
exports.PostDeploymentSocialSupportAssessment = exports.makeAssessment(4, 'Post Deployment Social Support', 15, 49, 75, PostDeploymentSocialSupportList, 0, postDepSupportQuestions, postDepSocialImage);
exports.ParentingConfidenceAssessment = exports.makeAssessment(5, 'Parenting Confidence', 16, 60, 96, ParentingConfidenceList, 1, parentingConfidenceAssessment, parentingConfidenceImage);
exports.AlcoholDrugsAssessment = exports.makeAssessment(6, 'Alcohol and Drugs', 0, 22, 38, AlcoholDrugsList, 0, alcDrugsQuestions, alcImage, calcAlcDrugQuestions, calcDrugsScore);
exports.PostTraumaticStressAssessment = exports.makeAssessment(7, 'Post-Traumatic Stress', 17, 39, 85, PostTraumaticStressList, 0, ptsQuestions, ptsImage);
exports.DepressionAssessment = exports.makeAssessment(8, 'Depression', 0, 10, 27, DepressionList, 0, depressionQuestions, depressImage);
exports.AnxietyAssessment = exports.makeAssessment(9, 'Anxiety', 0, 8.5, 21, AnxietyList, 0, anxietyQuestions, anxietyImage);
exports.PanicAssessment = exports.makeAssessment(10, 'Panic', 0, 31, 60, PanicList, 0, panicQuestions, panicImage, calcPanicQuestions, calcPanicScore);
exports.PhysicalAssessment = exports.makeAssessment(11, 'Physical Injury Resilience', 0, 60, 88, PhysicalInjuryResilienceList, 1, physicalInjuryAssessmentQs, physInjuryImage);
exports.SleepAssessment = exports.makeAssessment(12, 'Sleep', 0, 1.5, 10, SleepList, 0, sleepAssessmentQs, sleepImage);
exports.AngerAssessment = exports.makeAssessment(13, 'Anger', 0, 32.5, 56, angerScoringList, 0, angerQuestions, panicImage);
var assessmentsRaw = [
    exports.FriendShipAssessment,
    exports.MaritalAssessment,
    exports.SocialSupportAssessment,
    exports.PostDeploymentSocialSupportAssessment,
    exports.ParentingConfidenceAssessment,
    exports.AlcoholDrugsAssessment,
    exports.PostTraumaticStressAssessment,
    exports.DepressionAssessment,
    exports.AnxietyAssessment,
    exports.PanicAssessment,
    exports.PhysicalAssessment,
    exports.SleepAssessment,
    exports.AngerAssessment
];
var normalData = normalizr_1.normalize(assessmentsRaw, assessmentListSchema);
exports.assessments = normalData.entities.assessment;
exports.assessmentIds = normalData.result;
