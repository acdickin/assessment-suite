import {makeQuestion}from './assessmentsQs';

export const makeScoring = (id: number,min,max,title,description='',recommendations=''): ScoringInterface => {
  return {
    id,
    min,
    max,
    title,
    description,
    recommendations
  }
}

export interface ScoringInterface{
  id: number;
  min: number;
  max: number;
  
  title: string;
  description: string;
  recommendations: string;
}


export const PostTraumaticStressList: ScoringInterface[] = [];


export const PostTraumaticStressScoring0 = makeScoring(1,0,33,'LOW',
                                    `<p>Your score reflects that you are not experiencing symptoms that are typically associated with post-traumatic stress.</p><p>Although only a healthcare professional can provide an actual diagnosis of post-traumatic stress, or its absence, your results suggest that your experience is not similar to the experience of individuals suffering from post-traumatic stress.</p>`,
                                    `<p>Your results suggest you are managing this area of your life.  Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” program.</p><p>You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p><p>You’re also encouraged to check out other assessments on AfterDeployment as they can be helpful for learning more about whether or not you are having problems in other areas.  For your convenience, you can find links to the tools that were mentioned here through the RESOURCES tab located above.</p>`
                                    );



export const PostTraumaticStressScoring1 = makeScoring(2,34,43,'MOD',
                                    `<p>Although only a healthcare professional can provide an actual diagnosis, you are reporting some experiences which are similar to some moderate symptoms  associated with Post-traumatic stress.</p>`,
                                    `<p>Having experiences that are somewhat similar to those associated with post-traumatic stress doesn’t mean you have post-traumatic stress disorder (PTSD).  It does mean that you should look into the concerns you are reporting because they can be upsetting and distressing.  If you’ve experienced these symptoms for more than a few weeks, or they are getting worse, you should consult your health care provider.  If you don’t have one, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.   If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>Another way to explore these experiences is to check out the materials in AfterDeployment’s “Post-Traumatic Stress” topic. When someone is experiencing the kinds of distressing symptoms you report, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const PostTraumaticStressScoring2 = makeScoring(3,44,85,'HIGH',
                                    `<p>Although only a healthcare professional can provide an actual diagnosis, your score indicates that you are experiencing a significant number of symptoms that are similar to those associated with post-traumatic stress.</p>`,
                                    `<p>Having experiences that are very similar to those associated with post-traumatic stress suggests that you should look into these concerns because they can be very upsetting and disruptive of your life.   If you’ve experienced these symptoms for more than a few weeks, or they are getting worse, you should consult your health care provider immediately.  If you don’t have one, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>We encourage you to check out the materials in AfterDeployment’s “Post-Traumatic Stress” topic. Also, when someone is experiencing the kinds of distressing symptoms you report, problems are often present in other areas of life.  You can determine where other problems may exist or the extent of the problem by taking additional assessments. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const DepressionList: ScoringInterface[] = [];


export const DepressionScoring3 = makeScoring(4,0,4,'LOW',
                                    `<p>Although only a healthcare professional can provide an actual diagnosis, your score is in a range not typically associated with depression or mood problems. </p>`,
                                    `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const DepressionScoring4 = makeScoring(5,5,15,'MOD',
                                    `<p>Although only a healthcare professional can provide an actual diagnosis, your score is in a range not typically associated with depression or mood problems. However you have indicated that you have had thoughts of hurting yourself in the last month. Please review your answers to determine if they accurately reflect your mood. </p><p><strong>IF YOU ARE HAVING THOUGHTS OF SELF HARM SEEK HELP IMMEDIATELY.</strong> </p>`,
                                    `<p>You have indicated that you have recently had thoughts of harming yourself. Please review your answers to determine if they accurately reflect your mood. </p>  <p><strong>IF YOU ARE HAVING THOUGHTS OF SELF HARM SEEK HELP IMMEDIATELY.</strong></p> <p>If you would like to speak with someone, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website. If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const DepressionScoring5 = makeScoring(6,16,27,'HIGH',
                                    `<p>Although only a healthcare professional can provide an actual diagnosis, your score is in a range typically associated with mild or moderate depression. </p>`,
                                    `<p>After a deployment, service members often report brief periods of feeling down, having low energy, or losing interest in things they used to enjoy. Depression is a problem that you can do something about. We encourage you to check out the materials in AfterDeployment’s "Depression" topic.  In addition to the materials on AfterDeployment, you may benefit from discussing your mood problem with a health care provider. If your mood problem lasts several weeks to a few months, or if you believe that your depression is getting worse, contact a healthcare provider and share the results of this assessment. If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>Another way to explore these experiences is to check out the materials in AfterDeployment’s “Depression” topic. When someone is experiencing the kinds of distressing concerns you report, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const mTBISymptomManagementList: ScoringInterface[] = [];


export const mTBISymptomManagementScoring9 = makeScoring(10,13,64,'LOW',
                                    `<p>Your score is in a range typically associated with a low level of confidence in your ability to cope with and manage many of the symptoms of your brain injury.</p><p>Although only a healthcare professional can provide a complete evaluation,   your concerns over your ability to cope with your injury are significant and may have the potential to interfere with your recovery.</p>`,
                                    `<p>A decrease in self-confidence can be common following an injury like a traumatic brain injury.  It is important to identify where you believe support is lacking or additional support is required and begin to problem-solve around getting what you need.  If you find that your confidence in your ability to cope with the problems created by your brain injury has not gradually improved, it is important to discuss these issues with your family and your health care provider. If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.   If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p> Another way to explore these experiences is to check out the materials in AfterDeployment’s “mTBI” topic. When someone is struggling with managing the symptoms of a traumatic brain injury, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const mTBISymptomManagementScoring10 = makeScoring(11,65,119,'MOD',
                                    `<p>Compared to others with  a traumatic brain injury, your score is in a range typically associated with a moderate amount of confidence in your ability to cope with the symptoms associated with your brain injury.</p><p>Although only a healthcare professional can provide a complete evaluation, your responses suggest you may be feeling somewhat uncertain in your ability to get help with or manage the symptoms of your injury.</p>`,
                                    `<p>A decrease in self-confidence can be common following an injury like a traumatic brain injury.  It is important to identify where you believe support is lacking or additional support is required and begin to problem-solve around getting what you need .  If you find that your confidence in your ability to cope with the problems created by your brain injury has not gradually improved, it is important to discuss these issues with your family and your health care provider.  If you don’t have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website. If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>When someone is experiencing the kinds of distressing symptoms you report, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const mTBISymptomManagementScoring11 = makeScoring(12,119,130,'HIGH',
                                    `<p>Your score is in a range typically associated with a high level of confidence in your ability to cope with your traumatic brain injury compared to others with a TBI.</p><p>Although only a healthcare professional can provide a completely accurate evaluation, your results suggest that you believe you will be able to positively manage the consequences of  your brain injury.  Self-confidence in this area is often associated with symptom improvement.</p>`,
                                    `<p>A decrease in self-confidence can be common following an injury like a traumatic brain injury.  It is important to identify where you believe support is lacking or additional support is required and begin to problem-solve around getting what you need .  If you find that your confidence in your ability to cope with the problems created by your brain injury has not gradually improved, it is important to discuss these issues with your family and your health care provider.  If you don’t have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website. If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>When someone is experiencing the kinds of distressing symptoms you report, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments.   </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const AngerList: ScoringInterface[] = [];


export const AngerScoring12 = makeScoring(13,0,22,'LOW',
                                    `<p>Your score is in a range typically associated with low anger.</p>  <p>Although only a healthcare professional can provide an actual diagnosis, your results suggest that you don’t seem to be having difficulties with anger right now.</p>`,
                                    `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const AngerScoring13 = makeScoring(14,23,42,'MOD',
                                    `<p>Your score is in a range typically associated with a moderate amount of anger.</p>  <p>Although only a healthcare professional can provide an actual diagnosis, your responses suggest you may be feeling angry often or having problems controlling your anger. </p>`,
                                    `<p>Anger can be common following a deployment. Anger can also be an appropriate emotion in some circumstances. But anger that persists or that is out of control can be harmful to your physical health, your emotional well-being, and your relationships. If your anger is not improving, or is getting harder to manage, you need to get help.  If you don’t have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7. <p>When someone is struggling with controlling anger, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments. We also encourage you to check out AfterDeployment’s  materials in the "Anger" topic.</p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const AngerScoring14 = makeScoring(15,43,56,'HIGH',
                                    `<p>Your score is in a range typically associated with a significant amount of anger.</p>  <p>Although only a healthcare professional can provide an actual diagnosis, anger may be causing significant problems in your relationships, your work, and your health.</p>`,
                                    `<p>Anger can be common following a deployment. Anger can also be an appropriate emotion in some circumstances. But anger that persists or that is out of control can be harmful to your physical health, your emotional well-being, and your relationships. Because you’re reporting significant anger problems, we urge you to seek face-to-face care with a healthcare provider. If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>Difficulty controlling anger can be accompanied by depression, life stress, and post-traumatic stress. Anger can cause relationship problems and interfere with job performance. A good way to determine if you’re having problems in these other areas is to take additional assessments. </p> <p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const MaritalSatisfactionList: ScoringInterface[] = [];


export const MaritalSatisfactionScoring15 = makeScoring(16,100,158,'HIGH',
                                    `<p>Your score is in a range typically associated with high marital distress.</p><p>Your response indicated that you are experiencing problems with your spouse in a variety of areas leading to a great deal of distress in your marital relationship.</p>`,
                                    `<p>Having experiences of marital distress suggests that you should look into these concerns because they can be very upsetting and disruptive of your life.  We encourage you to check out the resources in the "Families and Friendships" topic. You will find information and exercises for developing skills and strategies that can help improve your marriage.</p><p>In addition to the materials on AfterDeployment, you may benefit from discussing your marriage with a healthcare provider. You can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of this page. If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of this page. Both the CALL and CHAT options are available 24/7.</p><p> We recommend that you retake the Marital Relationships assessment in a month to see how you are doing. If over time you find that problems aren’t improving, consult a professional. AfterDeployment is not a substitute for face to face support.</p><p>Problems may also be present in other areas of life. A good way to determine if you’re having problems in other areas is to take additional assessments.</p><p>For your convenience, you can find links to the tools that were mentioned here through the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const MaritalSatisfactionScoring16 = makeScoring(17,85,99,'MOD',
                                    `<p>Your score is in a range typically associated with some marital distress.</p><p>Your responses suggest that you have some dissatisfaction with your marital relationship based on the presence of conflict or disagreement.</p>`,
                                    `<p>Having some experiences of marital distress suggests that you should look into these concerns because they can become very upsetting and disruptive of your life if left unresolved.  We encourage you to check out the resources in the "Families and Friendships" topic. You will find information and exercises for developing skills and strategies that can help improve your marriage.</p><p>In addition to the materials on AfterDeployment, you may benefit from discussing your marriage with a healthcare provider. You can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of this page. If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of this page. Both the CALL and CHAT options are available 24/7.</p><p> We recommend that you retake the Marital Relationships assessment in a month to see how you are doing. If over time you find that problems aren’t improving, consult a professional. AfterDeployment is not a substitute for face to face support.</p><p>When there are marital difficulties present, problems are often present in other areas of life. A good way to determine if you’re having problems in other areas is to take additional assessments.</p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const MaritalSatisfactionScoring17 = makeScoring(18,0,84,'LOW',
                                    `<p>Your score is in a range typically associated with good marital satisfaction.</p><p>Your responses suggest that you are feeling satisfied with your marriage.</p>`,
                                    `<p>Your results suggest you are managing this area of your life.  Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” program.</p><p>You’re also encouraged to check out other assessments on AfterDeployment as they can be helpful for learning more about whether or not you are having problems in other areas.  For your convenience, you can find links to the tools that were mentioned here through the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const FriendshipScaleList: ScoringInterface[] = [];


export const FriendshipScaleScoring18 = makeScoring(19,0,15,'LOW',
                                    `<p>Your score is in a range reflecting few problems with social connections.</p>  <p>Your responses suggest that you’re socially connected and do not feel isolated from others. </p>`,
                                    `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const FriendshipScaleScoring19 = makeScoring(20,16,18,'MOD',
                                    `<p>Your score is in a range typically associated with some social support.<p>  <p>Your responses suggest that you have some social support but perhaps not as much as you would like, which may be causing you to feel isolated. </p>`,
                                    `<p>After a stressful experience, some people withdraw from friends and family and from activities. However, caring and encouragement from others can boost health and well-being. People who feel connected are less likely to be depressed and are more likely to live longer. We encourage you to check out <i>AfterDeployment</i>'s materials in the "Families and Friendships" topic.   In addition to the materials on AfterDeployment, you may benefit from discussing your feelings of isolation with a health care provider. If you don’t have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p>><p>Another way to explore these experiences is to check out the materials in AfterDeployment’s “Families and Friendships” topic.</p> <p>When someone is experiencing these kinds of concerns, problems may be present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const FriendshipScaleScoring20 = makeScoring(21,19,24,'HIGH',
                                    `<p>Your score is in a range typically associated with low social support, and suggests that you do not feel socially connected or supported by the people in your life. </p>`,
                                    `<p>After a stressful experience, some people withdraw from friends and family and from activities. However, caring and encouragement from others can boost health and well-being. People who feel connected are less likely to be depressed and are more likely to live longer.  Because you’re reporting a low level of social support, we encourage you to meet with a health care provider. If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>We encourage you to check out the materials in AfterDeployment’s “Families and Friendships” topic.</p><p>Social isolation can occur alongside problems in relationships, life stress, depression, and post-traumatic stress, the reaction that many people experience after a major trauma. A good way to determine if you’re having problems in these areas is to take additional assessments. We also suggest that you complete the Friendship Scale again in a month to track how you’re doing.</p> <p>You can find links to these tools under the RESOURCES tab located above</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const OptimismList: ScoringInterface[] = [];


export const OptimismScoring21 = makeScoring(22,0,13,'LOW',
                                    `<p>Your score is in a range typically associated with a low level of Optimism.</p><p>You describe yourself as someone who finds it difficult to believe that positive things are likely to occur in the future.</p>`,
                                    `<p>Your score suggests that you tend to expect negative outcomes when you are confronted with uncertainty.   Given any event that could hold either positive or negative meaning, you are likely to choose the negative interpretation.   This is a habit that can be broken.  Research suggests that the act of regularly interpreting events in a positive light leads to an increase in health and well-being over time and is protective against depression.  An optimistic perspective also increases the development and maintenance of healthy relationships which are an important part of building resilience.   Realistic optimism is not the same thing as being naïve or being in denial.  It recognizes that in looking at the world there are frequently a wide range of possible meanings associated with a particular event, all of which have a reasonable chance of describing reality.  Optimists tend to select the meaning that describes positive outcomes and contribute to their own well-being.</p><p>If you find that your tendency to expect the worst and to regularly give negative meaning to events is interfering with your ability to enjoy life or try new things,  you may benefit by meeting with a cognitive therapist. A therapist can help you recognize and change negative interpretation of events. you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>When someone wishes to increase their realistic optimism, exploring other areas of life can help.  You can do more exploration  by taking additional assessments.  We also encourage you to check out AfterDeployment’s "Resilience" topic.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const OptimismScoring22 = makeScoring(23,14,18,'MOD',
                                    `<p>Your score is in a range typically associated with a moderate level of Optimism.</p><p>You describe yourself as someone who is generally optimistic about life, but with some reservations.</p>`,
                                    `<p>Your score suggests that you somewhat positive about the future, but not completely.  Research suggests that maintaining a realistically optimistic perspective leads to an increase in health and well-being over time and is protective against physical illness and emotional struggles.  Realistic optimism also increases the development and maintenance of healthy relationships which are an important part of building resilience.  Realistic optimism is not the same thing as being naïve or being in denial.  It recognizes that in looking at the world there are frequently a wide range of possible meanings associated with a particular event, all of which have a reasonable chance of describing reality.  Optimists tend to select the meaning that describes positive outcomes and contribute to their own well-being.</p><p>If you’d like to enhance your sense of optimism, try surrounding yourself with positive people, like those who tend to volunteer with service organizations.  If you find that you have become less optimistic lately, you might consider meeting with a cognitive therapist who can help you evaluate and change how you interpret events. If you don’t have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>When someone wishes to increase their optimism, exploring other areas of life can help.  You can do more exploration  by taking additional assessments.  We also encourage you to check out AfterDeployment’s "Resilience" topic. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const OptimismScoring23 = makeScoring(24,19,24,'HIGH',
                                    `<p>Your score is in a range typically associated with a high degree of optimism.</p><p>Your results suggest that your expectations for the future are very positive.</p>`,
                                    `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics.  </p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p>`
                                    );


export const ParentingConfidenceList: ScoringInterface[] = [];


export const ParentingConfidenceScoring24 = makeScoring(25,0,50,'LOW',
                                    `<p>Your score is in a range typically associated with a significant lack of confidence and satisfaction in your role as a parent.  You describe yourself as someone who is experiencing conflict in this role.</p>`,
                                    `<p>There are many reasons that can contribute to feeling a lack of confidence or satisfaction as a parent.   You may feel like you have little support  or it may be that you have particularly challenging kids.   Many parents struggle with handling the demands of parenting, but it is possible to develop increased confidence and satisfaction by consulting with experts in the field.  If you would like personal support in developing more confidence you can speak with a professional who can provide guidance in this area.  You can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of this page.  If you have other personal concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of this page. Both the CALL and CHAT options are available 24-7.</p><p>When someone wishes to grow in their role as a parent, exploring other areas of life can help.  You can do more exploration by taking additional assessments. We also encourage you to check out AfterDeployment’s Families with Kids materials. You can find links to the tools that were mentioned here through the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const ParentingConfidenceScoring25 = makeScoring(26,51,69,'MOD',
                                    `<p>Your score is in a range typically associated with a moderate level of confidence and satisfaction in your role as a parent.</p>`,
                                    `<p>Your score suggests that for the most part, you believe you handle your role as a parent well but  you also identify some challenges with satisfaction or confidence as a parent.</p><p>Parenting is full of challenges and it is normal to feel unsure or dissatisfied on occasion.  If you would like support or guidance in increasing your confidence as a parent, there are providers who specialize in helping parents develop increased confidence.  If you don’t have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>When someone wishes to grow in their role as a parent, exploring other areas of life can help.  You can do more exploration by taking additional assessments.  We also encourage you to check out AfterDeployment’s "Families with Kids" topic. <p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const ParentingConfidenceScoring26 = makeScoring(27,70,96,'HIGH',
                                    `<p>Your score is in a range indicating that you very confident and satisfied with how you are handling your role as a parent.</p>`,
                                    `<p>Because maintaining healthy habits means a lifestyle that includes many stress management tools to help find balance, we encourage you to check out the many tools in the “Life Stress” program.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const PerceivedSocialSupportList: ScoringInterface[] = [];


export const PerceivedSocialSupportScoring27 = makeScoring(28,0,48,'LOW',
                                    `<p>Your score is in a range typically associated with low social support.</p>  <p>Your responses indicate that you are not feeling helped and supported by the important people in your life. You don’t have a lot of people to count on in difficult times. This can leave you feeling overwhelmed. Help and encouragement from others is important to your physical and emotional health and well-being. </p>`,
                                    `<p>Having experiences such as you have identified suggests that you should look into these concerns and discuss your sense of isolation with a counselor or therapist.  If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>When someone is experiencing the kinds of distressing concerns you report, problems are often present in other areas of life.  You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p>We recommend that you take this assessment again in two to four weeks to track how you are doing. We also encourage you to check out AfterDeployment's “Families and Friendships” materials. However, we want to emphasize that your responses on the assessment indicate that your best plan is to consult with a counselor or therapist. AfterDeployment is not a substitute for consulting with a provider in person.</p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const PerceivedSocialSupportScoring28 = makeScoring(29,49,68,'MOD',
                                    `<p>Your score is in a range typically associated with a moderate level of social support.</p>  <p>Your responses indicate that you have people in your life who are there when you need them. However, you may feel that you could use more support from some of the important people in your life. Help and encouragement from others is important to your physical and emotional health and well-being. </p>`,
                                    `<p>When someone experiences insufficient social support, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments. We also encourage you to check out the information in the "Families and Friendships" topic to find out more about these problems and what you can do about them. You will find information and activities on how to increase levels of social support.</p><p>You may benefit from discussing your need for increased social support with a counselor or therapist. If you don’t have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>We recommend that you retake this assessment in two to four weeks to track how you are doing.</p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const PerceivedSocialSupportScoring29 = makeScoring(30,69,84,'HIGH',
                                    `<p>Your score is in a range typically associated with high levels of social support.</p>  <p>Your responses suggest that you have support and help from family and friends.  You have people there when you need them. </p>`,
                                    `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const ResilienceList: ScoringInterface[] = [];


export const ResilienceScoring30 = makeScoring(31,0,49,'LOW',
                                    `<p>Your score is in a range that indicates that you are not regularly using many of the resilience skills that are available to help you to cope with life’s stressful events.</p>`,
                                    `<p>Your score suggests that there are a number of resilience skills that you are not currently using that have the potential to significantly improve how you respond to life’s stressors.  It might be useful to review your responses to this assessment and identify  the coping strategies you are not using to cope with stress.  You can then begin to practice those additional resilience skills.  If you’d like to work with a professional to increase your ability to successfully respond to stressful life events, you may benefit by talking with a therapist who is skilled in cognitive therapy. If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>We encourage you to check out the materials in AfterDeployment’s “Resilience” topic. Also, when someone is learning resilience skills, exploring other areas of life can help.  You can do more exploration by taking additional assessments. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const ResilienceScoring31 = makeScoring(32,50,70,'MOD',
                                    `<p>Your score is in a range that indicates that while you use many of the resilience skills available to you, you do not use them as consistently as you could to cope with life’s stressful events.</p>`,
                                    `<p>Your score suggests that you are familiar with and use resilience skills when you have to deal with stressful events.  Consider working on using them more consistently.  Review your responses to identify coping strategies you do not use on a regular basis to cope with stress, and begin to practice those skills.  If you’d like to work with a professional to increase your ability to successfully respond to stressful life events, you may benefit by talking with a therapist who is skilled in cognitive therapy. .  If you don’t have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>When someone is learning resilience skills, exploring other areas of life can help.  Explore these by taking additional assessments.  We also encourage you to check out AfterDeployment’s "Resilience" topic. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const ResilienceScoring32 = makeScoring(33,71,88,'HIGH',
                                    `<p>Your score is in a range that indicates that you use many of the skills that have been found to be useful in coping with life’s stressful events.</p>`,
                                    `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a following lifestyle that includes a wide range of stress management strategies, we encourage you to check out the additional tools in the “Life Stress” program.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn more about yourself in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const StigmaList: ScoringInterface[] = [];


export const StigmaScoring33 = makeScoring(34,0,22,'LOW',
                                    `<p>Your results indicate that you are comfortable with the idea of seeking psychological treatment. </p>`,
                                    `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means following a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in some areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const StigmaScoring34 = makeScoring(35,23,32,'MOD',
                                    `<p>Your results indicate that you are somewhat uncomfortable with the idea of seeking psychological treatment.</p>`,
                                    `<p>Discomfort with the idea of seeking psychological treatment for problems in living is not unusual.  Reluctance to meet with a mental health professional however is often the result of a lack of information or misinformation about the treatment process.  Counseling, psychotherapy, and medication management are now based on research and have been shown to be very effective for a wide range of psychological health issues from depression to relationship problems.  Failure to get needed treatment for the effects of stress or other issues can lead to increasing problems with your physical health, your emotional well-being, and your relationships.  If you are experiencing depression, anxiety, or other psychological distress, you need to get help.  Start with your physician or clergy.</p><p>You can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>We also encourage you to check out AfterDeployment’s "Stigma" topic.</p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const StigmaScoring35 = makeScoring(36,33,50,'HIGH',
                                    `<P>Your results indicate that you are highly uncomfortable with the idea of seeking psychological treatment. </p>`,
                                    `<p>Discomfort with the idea of seeking psychological treatment for problems in living is not unusual.  Reluctance to meet with a mental health professional however is often the result of a lack of information or misinformation about the treatment process.  Counseling, psychotherapy, and medication management are now based on research and have been shown to be very effective for a wide range of psychological health issues from depression to relationship problems.  Failure to get needed treatment for the effects of stress or other issues can lead to increasing problems with your physical health, your emotional well-being, and your relationships.  If you are experiencing depression, anxiety, or other psychological distress, you need to get help.  Start with your physician or clergy. You can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>We also encourage you to check out the materials in AfterDeployment’s "Stigma" topic.</p><p>If you are concerned about seeking psychological treatment, you may wish to explore the kinds of problems that may be  present in other areas of life.  You can determine where other problems may exist or the extent of the problem by taking additional assessments. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const StressList: ScoringInterface[] = [];


export const StressScoring36 = makeScoring(37,0,10,'LOW',
                                    `<p>Your score is in a range typically associated with low stress.</p><p>Your responses suggest that you feel very much in control of your life at the moment.  Your low level of stress suggests that you are either not experiencing significant challenges at this point in your life or that your coping skills are acting to protect you from stress.</p>`,
                                    `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means following a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const StressScoring37 = makeScoring(38,11,25,'MOD',
                                    `<p>Your score is in a range typically associated with moderate stress.</p><p>Your responses suggest you are experiencing some stress right now. If you are feeling overwhelmed,  that may affect your general well-being.</p>`,
                                    `<p>We encourage you to check out the materials in AfterDeployment’s "Life Stress" topic to find information and exercises about how to deal with stressful life events.  We want to emphasize  that while this website is here to provide information and support, AfterDeployment is not a substitute for consulting a health care provider.  If you don’t have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>When someone is struggling with stressful experiences, problems are often present in other areas of life.  You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const StressScoring38 = makeScoring(39,26,40,'HIGH',
                                    `<p>Your responses suggest that you are experiencing a high level of stress.  You feel overwhelmed, like things are out of control.  And, this level of stress is affecting your general well-being.</p>`,
                                    `<p>You have described experiencing symptoms associated with a significant amount of stress.  If you are not currently seeking help, we strongly recommend that you see your primary care doctor or other healthcare professional.  Take a copy of your assessment results with you to share with your provider.  A provider can help target the specific problems you might be having and will help develop a plan to help you feel better.</p>.  If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>When someone is struggling with stressful experiences, problems are often present in other areas of life.  You can determine where other problems may exist or the extent of the problem by taking additional assessments. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const WorkAdjustmentList: ScoringInterface[] = [];


export const WorkAdjustmentScoring39 = makeScoring(40,0,24,'LOW',
                                    `<p>Your results indicate that you feel little control over your ability to manage the challenges of your work environment.</p>`,
                                    `<p>One of the key elements associated with satisfaction and happiness on the job is your belief in your ability to manage the challenges presented by your  job and the people you work with.  Your results indicate that you have very little confidence that you can successfully handle the problems you confront at work.  This may be the result of an unreasonable supervisor, co-worker or something else beyond your control.  You may need to be more assertive or need more job training. Perhaps you simply aren’t happy doing the things required by your job.  It's important to gain a sense of control over your ability to manage the challenges at work.</p> <p>It may help for you to speak with a professional counselor or vocational counselor. You can locate a professional near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment. You can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p> <p>When people lack confidence in their ability to solve  problems at work, there are often problems present in other areas of life.  You can find out more about yourself  by taking additional assessments. We also encourage you to check out the materials in AfterDeployment’s "Work Adjustment" topic.</p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const WorkAdjustmentScoring40 = makeScoring(41,25,34,'MOD',
                                    `<p>Your results indicate that you are moderately satisfied with your ability to manage the challenges of your work environment.</p>`,
                                    `<p>One of the key elements associated with satisfaction and happiness on the job is your belief in your ability to manage the challenges presented by your  job and the people you work with.  Your results indicate that you are not completely confidence that you can successfully handle the problems you confront at work.  This may be the result of an unreasonable supervisor, co-worker or something else beyond your control.  You may need to be more assertive or need more job training. Perhaps you simply aren’t happy doing the things required by your job.  It's important to gain a sense of control over your ability to manage the challenges at work.</p> <p>It may help for you to speak with a professional counselor or vocational counselor. You can locate a professional near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment. You can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p> <p>When people lack confidence in their ability to solve  problems at work, there are often problems present in other areas of life.  You can find out more about yourself  by taking additional assessments. We also encourage you to check out the materials in AfterDeployment’s "Work Adjustment" topic.</p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const WorkAdjustmentScoring41 = makeScoring(42,35,40,'HIGH',
                                    `<P>Your results indicate that you feel very confident in your ability to manage the challenges and demands of your work environment.</p>`,
                                    `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means following a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const HopeList: ScoringInterface[] = [];


export const HopeScoring42 = makeScoring(43,0,16,'LOW',
                                    `<p>When compared to others, your hopefulness score is significantly below average. Your responses indicate that you’re not feeling very optimistic or hopeful, you’re not satisfied with your accomplishments, and you’re not feeling confident about achieving your future goals.</p>`,
                                    `<p>A loss of hopefulness or optimism about the future can be common following a stressful experience. Optimism can protect you from depression and the negative effects of stress, and contribute to increased happiness and health.  While only a healthcare provider can make an actual diagnosis, a lack of hopefulness or optimism is often related to depression and post-traumatic stress similar to what many people experience after a major trauma. The materials on AfterDeployment may be helpful. We also urge you to discuss your situation with a health care provider.  If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>We encourage you to check out the materials in AfterDeployment’s “Depression” topic. Also, when someone is experiencing the kinds of distressing concerns you report, problems are often present in other areas of life.  You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p> <p>We recommend that you complete this assessment again in two to four weeks to track how you're doing. </p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const HopeScoring43 = makeScoring(44,17,23,'MOD',
                                    `<p>When compared to others, your hopefulness score is below average. </p>  <p>While your responses indicate that you're somewhat hopeful, they also suggest that you’re guardedly optimistic, and that you may be dwelling on earlier goals and not feeling convinced about your ability to face challenges.</p>`,
                                    `<p>A loss of hopefulness or optimism about the future can be common following a stressful experience. The materials on AfterDeployment may be helpful. You may also find it helpful to discuss your concerns with a healthcare provider.  If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p>When someone is experiencing these kinds of  concerns, problems are often present in other areas of life.  You can determine where other problems may exist or the extent of the problem by taking additional assessments.   </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const HopeScoring44 = makeScoring(45,24,32,'HIGH',
                                    `<P>Your score is in a range typically associated with a hopeful outlook on life.</p>`,
                                    `<p>Your responses suggest that you're hopeful and optimistic about your ability to get things done, and can work to achieve your goals with skill and enthusiasm.</p>  Because maintaining healthy habits means following a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const GenerosityList: ScoringInterface[] = [];


export const GenerosityScoring45 = makeScoring(46,0,46,'LOW',
                                    `<p>Your score is in a range typically associated with a low level of interpersonal Generosity.  You describe yourself as someone who tends not to be available for other people, and who tends to hold back when it comes to extending personal resources to others, completely and unselfishly.</p>`,
                                    `<p>Your score suggests that you do not tend to be generous on the interpersonal level.  This might be because you simply don’t have the desire or interest to reach out to others on a personal level, or like many people, you may be shy or find it difficult to get involved with others.  You may show generosity in other ways,by donating money for example.  Research suggests that only interpersonal generosity has a positive affect on the giver’s health and well-being.  It also promotes the development and maintenance of healthy relationships which are an important part of building resilience.  If you would like personal support in developing a more reflexive generosity toward others, many spiritual traditions encourage interpersonal generosity.  You can locate a church, synagogue or other spiritual organization near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p> <p>We encourage you to check out the materials in AfterDeployment’s "Resilience" topic. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const GenerosityScoring46 = makeScoring(47,47,56,'MOD',
                                    `<p>Your score is in a range typically associated with a moderate level of Interpersonal Generosity. You describe yourself as someone who is available for other people, but who tends to hold back somewhat when it comes to extending personal resources to others, completely and unselfishly.</p>`,
                                    `<p>Your score suggests that you give of yourself to others in terms of your attention, emotions, and energy, but not wholeheartedly.  You tend to hold back to some degree.  This might be because you are cautious or shy, or that you don’t always attend to the needs of others.  Research suggests that the act of giving of yourself to others leads to an increase in health and well-being over time.  It also increases the development and maintenance of healthy relationships which are an important part of building resilience.  If you would like personal support in developing a more reflexive generosity toward others, many spiritual traditions encourage interpersonal generosity.  You can locate a church, synagogue or other spiritual organization near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>We  encourage you to check out the materials in AfterDeployment’s "Resilience" topic.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const GenerosityScoring47 = makeScoring(48,57,60,'HIGH',
                                    `<p>Your score is in a range typically associated with a high degree of interpersonal generosity. Your results suggest that you regularly give of your attention, emotions, and energy to others on a personal level.</p>`,
                                    `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means following a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const AlcoholDrugsList: ScoringInterface[] = [];


export const AlcoholDrugsScoring48 = makeScoring(49,0,14,'LOW',
                                    `<p>Your score is in a range typically associated with no or low alcohol or drug use. </p> <p>Although only a healthcare professional can diagnose a substance abuse problem, your results suggest that your health may not be at risk from alcohol or drug use.</p>`,
                                    `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic. </p> <p> It’s important to emphasize that the abuse of any drug – whether prescribed, over-the-counter, or illegal substances – can lead to health, legal, and relationship problems.</p>  <p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above. </p> <p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const AlcoholDrugsScoring49 = makeScoring(50,15,29,'MOD',
                                    `<p>Your score is in a range typically associated with <u>moderate</u> alcohol use.</p> <p>Although only a healthcare professional can diagnose a substance abuse problem, your results suggest that your health may not be at risk from alcohol or drug use.</p>`,
                                    `<p>After a stressful experience, some people turn to drinking to mask painful feelings. But drinking neither solves problems nor fixes painful emotions. In fact, just the opposite is true.  Drinking is much more likely to <u>worsen</u> rather than improve your level of stress.  Out-of-control drinking can often be accompanied by depression, life stress, and even post-traumatic stress, the reaction that many people experience after a major trauma. One easy way to determine if you're having problems in other areas is to take additional assessments.</p><p>We also encourage you to check out the materials in AfterDeployment's "Alcohol and drugs" topic.</p><p>You may benefit from discussing your alcohol use with a health care provider.  You can <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab tab in the upper right corner of the website. We suggest that you share the results of this assessment with your provider. If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website.  Both the CALL and CHAT options are available 24/7.  For your convenience, you can find links to the all of the tools that were mentioned here through the RESOURCES tab <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tabd above. </p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const AlcoholDrugsScoring50 = makeScoring(51,30,40,'HIGH',
                                    `<p>Your score is in a range typically associated with <u>high</u> levels of alcohol use.</p> <p>Although only a healthcare professional can diagnose a substance abuse problem, your responses are consistent with someone who has become dependent on alcohol, indicating that you’re at high risk for severe problems, including health, social, financial, legal, and relationship difficulties.</p>`,
                                    `<p>After a stressful experience, some people turn to drinking to mask painful feelings. But drinking neither solves problems nor fixes painful emotions. In fact, just the opposite: drinking is much more likely to worsen your stress.   Because your level of use suggests that you have become dependent on alcohol, you should not attempt to quit or decrease your alcohol use on your own.  Suddenly discontinuing heavy alcohol use can be dangerous.  Because you’re reporting significant alcohol use, we recommend that you seek face-to-face care with a professional.  A medical or mental health provider can evaluate the extent of the problem and develop a plan. Take a copy of your assessment results with you. You can <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab tab in the upper right corner of the main page. If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page. Both the CALL and CHAT options are available 24/7.</p>  <p>Out-of-control drinking can be accompanied by depression, life stress, and even post-traumatic stress, the reaction that many people experience after a major trauma. A good way to determine if you’re having problems in these other areas is to take additional assessments. We also suggest that you complete the alcohol and drug assessment again in three months and compare your assessment results with today’s results.</p>  <p>We encourage you to check out the materials in AfterDeployment's "Alcohol and Drugs" topic. However, we want to emphasize that your responses  indicate that your best plan is to consult with a health care provider. AfterDeployment is not a substitute for consulting with a provider in person.</p> <p>You can find links to these tools under the RESOURCES tab <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tabd above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const AnxietyList: ScoringInterface[] = [];


export const AnxietyScoring55 = makeScoring(56,0,5,'LOW',
                                    `<p>Your score is in a range typically associated with a low level of anxiety indicating that anxiety is probably not affecting your life.</p><p>Although only a healthcare professional can provide an actual diagnosis of an anxiety disorder, your results suggest that you are not experiencing the classic physical or cognitive symptoms associated with anxiety.</p>`,
                                    `<p> Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress”   topic.</p><p>You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics.  </p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p>`
                                    );



export const AnxietyScoring56 = makeScoring(57,6,10,'MOD',
                                    `<p>Your score is in a range typically associated with  moderate levels of the physical and cognitive symptoms of anxiety.  Although only a healthcare professional can provide an actual diagnosis, your responses suggest that the symptoms you describe may be associated with the changes that occur in the body in response to anxious concerns.</p>`,
                                    `<p>A moderate degree of anxiety typically doesn’t cause significant distress but is a sign to begin to pay attention to your level of worry.  Worry causes an increase in the level of vigilance and physical arousal, energy that could be better used focusing on positive things in life.  If your anxiety symptoms have increased recently  it may be useful to discuss this with your  health care provider.   You can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner on the main page.   If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner on the main page. Both the CALL and CHAT options are available 24/7.</p><p>When someone is worrying unnecessarily, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const AnxietyScoring57 = makeScoring(58,11,21,'HIGH',
                                    `<p>Your score is in a range typically associated with a significant level of physical and cognitive symptoms of anxiety.</p><p>Although only a healthcare professional can provide an actual diagnosis, these symptoms may be causing you significant distress.</p>`,
                                    `<p>The physical symptoms of anxiety are frequently experienced during deployment because of the need for a export constant level of vigilance.  But high levels of anxiety that persist after deployment, when high vigilance is not required,  can be harmful to your physical health, and your emotional well-being. The cognitive and physical symptoms you are reporting  are frequently associated with high levels of anxiety, but they may also indicate a physical illness.   We urge you to seek face-to-face care with a healthcare provider.If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24/7.</p><p>We encourage you to check out the materials in AfterDeployment’s “Anxiety” topic. Also, when someone is experiencing multiple symptoms of anxiety, problems are often present in other areas of life.  You can determine where other problems may exist or the extent of the problem by taking additional assessments. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const SleepList: ScoringInterface[] = [];


export const SleepScoring58 = makeScoring(59,0,0,'LOW',
                                    `<p>Your responses suggest that you are not having problems with your sleep. Good sleep patterns are important for your health, mood, and productivity. </p>`,
                                    `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p>`
                                    );



export const SleepScoring59 = makeScoring(60,1,2,'MOD',
                                    `<p>Your responses suggest that you are having some difficulty with sleeping and that your sleep is not as good as you’d like. </p>  <p>You report having one or two sleep problems and depending on how severe these problems are, you may be having significant difficulties with your functioning. Sleep problems need to be taken seriously. Good sleep patterns are important for your health, mood, and productivity. </p>`,
                                    `<p>We encourage you to check out the resources in the Sleep program on AfterDeployment to find out more about these problems and what you can do about them. You will find information and activities on how to manage issues with sleep and develop healthy sleep patterns. And, we would recommend that you retake this sleep assessment in 2-4 weeks to track how you are doing. We want to emphasize that while this website is here to provide information and support, AfterDeployment is not a substitute for consulting with a health care provider in person.  If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner on the main page.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner on the main page. Both the CALL and CHAT options are available 24-7.</p><p>Another way to explore these experiences is to check out the materials in AfterDeployment’s “Sleep” topic. When someone is struggling with difficulty sleeping, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const SleepScoring60 = makeScoring(61,3,10,'HIGH',
                                    `<p>Your score is in a range typically associated with significant sleep problems.</p>  <p>Sleep problems need to be taken seriously as chronic sleep problems are bad for your physical and emotional health, your relationships, and your productivity.</p>`,
                                    `<p>A variety of physical health problems may be related to sleep difficulty. Sleep problems may be related to problems such as stress, depression, post traumatic stress and substance abuse. Because you are reporting significant sleep problems, we recommend that you seek face-to-face care with a healthcare provider. A medical or mental health provider can evaluate what is going on and help develop a plan to address your sleep problems. If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>We encourage you to check out the materials in AfterDeployment’s “Sleep” topic. Also, when someone is experiencing the kinds of sleep concerns you report, problems are often present in other areas of life.  You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const CaregiverStressList: ScoringInterface[] = [];


export const CaregiverStressScoring61 = makeScoring(62,2,12,'LOW',
                                    `<p>Your score is in a range typically associated with low caregiver stress.</p>  <p>Your responses suggest that you’re taking care of yourself and dealing well with the stress of care giving. </p>`,
                                    `<p>Even though you're not reporting caregiver stress, maintaining healthy habits means a lifestyle that includes stress management and finding balance. You may find helpful tools in the “Life Stress” and "Health and Wellness" topics.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const CaregiverStressScoring62 = makeScoring(63,13,24,'MOD',
                                    `<p>Your score is in a range typically associated with moderate stress.</p>  <p>Based on your responses, you’re experiencing some stress in your role as a caregiver right now, and may be feeling somewhat overwhelmed by current demands. </p>`,
                                    `<p>There are many things in the life of a caregiver that can lead to feeling stressed. Caring for others is best accomplished by those who also make time for themselves. Consider whether you need to have some relief from your role as a caregiver. If you’re feeling resentment because you can’t seem to ask others for help, or because you believe that you must do everything yourself, talk with a healthcare professional. If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner on the main page.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner on the main page. Both the CALL and CHAT options are available 24-7.</p><p>Another way to explore these experiences is to check out the materials in AfterDeployment’s “Life Stress” topic. The stress of being a caregiver can be accompanied by problems in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const CaregiverStressScoring63 = makeScoring(64,25,36,'HIGH',
                                    `<p>Your score is in a range typically associated with high caregiver stress.</p>  <p>Based on your results, you’re experiencing a high level of distress in your role as a caregiver, which may be taking an emotional and physical toll. </p>`,
                                    `<p>There are many things in the life of a caregiver that can lead to feeling stressed. High stress can cause a variety of health problems, such as sleep difficulties, headaches, and gastrointestinal problems. Caring for others is best accomplished by those who also make time for themselves. Consider whether you need to have some relief from your role as a caregiver. If you’re feeling resentment because you can’t seem to ask others for help, or because you believe that you must do everything yourself, talk with a healthcare professional. If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner on the main page.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner on the main page. Both the CALL and CHAT options are available 24-7.</p><p>Another way to explore these experiences is to check out the materials in AfterDeployment’s “Life Stress” topic. The stress of being a caregiver can be accompanied by problems in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments..</p> <p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const ForgivenessList: ScoringInterface[] = [];


export const ForgivenessScoring64 = makeScoring(65,0,54,'LOW',
                                    `<p>Your score is in a range typically associated with a tendency to be unforgiving of yourself, others, or negative, uncontrollable  circumstances or  events like illness or natural catastrophes.</p><p>You describe yourself as unforgiving  when you are confronted with situations in life you consider to be unfair, or when you feel you have been hurt by others.  You also find it difficult to forgive yourself for past behaviors.</p>`,
                                    `<p><p>Your score suggests that you do not tend to be forgiving.  This might be because you have a basic desire to forgive, but like many people, find it difficult to do at certain times or under some circumstances.  Research suggests that holding on to negative feelings over the long run can have a negative effect on health and well-being.  It also interferes with developing and maintaining healthy relationships which are an important part of building resilience.    If you find that you are holding grudges, resentment or anger directed at yourself, someone else, or a circumstance that doesn’t seem fair, you may benefit by talking with an advisor associated with your spiritual tradition or with a therapist.   You can locate a provider, church, or synagogue near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner on the main page. Both the CALL and CHAT options are available 24-7.</p><p>When someone is learning to be more forgiving, exploring other areas of life can help.  You can do more exploration  by taking additional assessments. We also encourage you to check out AfterDeployment’s Resilience materials. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const ForgivenessScoring65 = makeScoring(66,55,89,'MOD',
                                    `<p>Your score is in a range typically associated with a moderate tendency to forgive yourself, others, and negative circumstances, events, or situations that are beyond anyone’s control.</p><p>You tend to be about equally as likely to forgive as not to forgive yourself, others or negative, uncontrollable  circumstances or  events like illness or natural catastrophes.</p>`,
                                    `<p>Your score suggests that you may find it easier to forgive in some situations or at some times than in others.  This might be because you have a basic desire to forgive, but like many people, find it difficult to do at certain times or under some circumstances.  Research suggests that holding on to negative feelings over the long run can have a negative effect on health and well-being.  It also interferes with developing and maintaining healthy relationships which are an important part of building resilience.    If you find that you are holding grudges, resentment or anger directed at yourself, someone else, or a circumstance that doesn’t seem fair, you may benefit by talking with an advisor associated with your spiritual tradition or with a therapist.   You can locate a provider, church, or synagogue near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner on the main page. Both the CALL and CHAT options are available 24-7.</p><p>When someone is learning to be more forgiving, exploring other areas of life can help.  You can do more exploration  by taking additional assessments. We also encourage you to check out AfterDeployment’s Resilience materials.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const ForgivenessScoring66 = makeScoring(67,90,126,'HIGH',
                                    `<p>Your score is in a range typically associated with a strong tendency to forgive others, yourself, and negative circumstances, events, or situations that are beyond anyone’s control.</p><p>Your results suggest that you tend to transform your responses to transgression,hurt, betrayal or disappointment from negative and potentially toxic, to neutral or even positive responses.</p>`,
                                    `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const GratitudeList: ScoringInterface[] = [];


export const GratitudeScoring67 = makeScoring(68,0,35,'LOW',
                                    `<p>Your score is in a range typically associated with a low level of Gratitude.</p><p>You describe yourself as someone who has a restricted sense of gratitude for the positive elements in life, but may focus instead on life’s hurts and disappointments.</p>`,
                                    `<p>Your score suggests that while you are thankful for some things in life, you have reservations about wholeheartedly describing yourself as grateful.   This might be because you simply haven’t spent much time thinking about gratitude or perhaps you are holding on to hurts or disappointments from the past.   Research suggests that the act of recognizing and focusing on even small things you are grateful for leads to an increase in health and well-being over time and is protective against depression.  Many people find that what were initially thought to be negative events, on reflection, held a lesson for which they could be grateful.  Gratitude also increases the development and maintenance of healthy relationships which are an important part of building resilience.  If you would like personal support in recognizing things in life for which to be grateful, many spiritual traditions encourage gratitude.  You can locate a church, synagogue or other spiritual organization near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const GratitudeScoring68 = makeScoring(69,36,40,'MOD',
                                    `<p>Your score is in a range typically associated with a moderate level of Gratitude.</p><p>You describe yourself as someone who is generally thankful for your experiences in life, but with some bit of reservation.</p>`,
                                    `<p>Your score suggests that you experience gratitude for a number of things in your life, but you have qualified your wholehearted endorsement of all of the gratitude questions.  Research suggests that the act of recognizing and focusing on what you are grateful for leads to an increase in health and well-being over time and is protective against depression.  Gratitude also increases the development and maintenance of healthy relationships which are an important part of building resilience.  Many people find that what were initially thought to be negative events, on reflection, held a lesson  for which they could be grateful.  If you would like personal support in increasing your sense of gratitude to an even higher level, many spiritual traditions encourage gratitude.  You can locate a church, synagogue or other spiritual organization near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>When someone wishes to increase their sense of gratitude, exploring other areas of life can help.  You can do more exploration  by taking additional assessments. We also encourage you to check out AfterDeployment’s Resilience materials.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const GratitudeScoring69 = makeScoring(70,41,42,'HIGH',
                                    `<p>Your score is in a range typically associated with a high degree of gratitude.</p><p>Your results suggest that you have been able to identify a number of people and experiences in life for which you are especially grateful.</p>`,
                                    `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means following a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const NicotineDependenceList: ScoringInterface[] = [];


export const NicotineDependenceScoring70 = makeScoring(71,0,4,'LOW',
                                    `<p>Based on your reported smoking habits, your results indicate that you are not very dependent on nicotine at this point in time.</p>`,
                                    `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics.  </p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p>`
                                    );



export const NicotineDependenceScoring71 = makeScoring(72,5,6,'MOD',
                                    `<p>Based on your reported smoking habits, your results indicate that you are moderately dependent on nicotine at this point in time. </p>`,
                                    `<p>Your reported smoking habits suggest that you have developed a moderate degree of dependence on nicotine. This means that you probably experience some degree of discomfort if your smoking habits are disrupted and that it is becoming increasingly difficult for you to quit.  If you would like to find medical or psychological support in your efforts to quit smoking, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner on the main page.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner on the main page. Both the CALL and CHAT options are available 24-7.</p><p>Another way to explore your tobacco use is to check out the materials in AfterDeployment’s “Tobacco” topic. When someone is struggling with nicotine dependence, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments.   </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const NicotineDependenceScoring72 = makeScoring(73,7,10,'HIGH',
                                    `<p>Based on your reported smoking habits, your results indicate that you are highly dependent on nicotine at this point in time. </p>`,
                                    `<p>Your reported smoking habits suggest that you have developed a high  degree of dependence on nicotine. This means that you probably  experience discomfort if your smoking habits are disrupted and that it may be very difficult for you to quit.  You may find it especially useful to consult with a medical or psychological health care provider in your efforts to quit smoking. There are many medications and behavioral strategies available to help overcome your nicotine dependence.   You can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner on the main page.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner on the main page. Both the CALL and CHAT options are available 24-7.</p><p>Another way to explore your tobacco use is to check out the materials in AfterDeployment’s “Tobacco” topic. When someone is struggling with nicotine dependence, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments.  Managing these kinds of concerns on your own can be difficult.</p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const PanicList: ScoringInterface[] = [];


export const PanicScoring73 = makeScoring(74,0,20,'LOW',
                                    `<p>Your score is in a range NOT typically associated with the classic symptoms of panic attacks.</p>  <p>Although only a healthcare professional can provide an actual diagnosis of panic disorder, your results suggest that you are not experiencing the kinds of physical symptoms that usually define a significant problem with panic attacks.</p>`,
                                    `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means following a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const PanicScoring74 = makeScoring(75,21,40,'MOD',
                                    `<p>Your score is in a range typically associated with  moderate levels of the physical symptoms associated with panic attacks.  Although only a healthcare professional can provide an actual diagnosis, you report some, but not all of the symptoms of actual panic disorder. </p>`,
                                    `<p>A moderate number of panic symptoms typically doesn’t cause significant, long term distress but is a sign to pay attention to how many demands you are juggling.  High stress levels cause  an increase in the level of vigilance and physical arousal.  If you’ve experienced an increase in these physical symptoms recently,   it may be useful to discuss this with your  health care provider. If you don’t have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>When someone is experiencing stress related symptoms,  problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments.</p><p>We also encourage you to check out the materials in AfterDeployment's "Anxiety" topic. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const PanicScoring75 = makeScoring(76,41,60,'HIGH',
                                    `<p>Your score is in a range typically associated with a significant level of physical symptoms associated with Panic Disorder.</p>  <p>Although only a healthcare professional can provide an actual diagnosis, these symptoms are probably causing you significant distress. </p>`,
                                    `<p>The physical symptoms of panic are frequently experienced during deployment when there is immediate danger and they are completely normal under those circumstances.   But high levels of panic symptoms that seem to come “out of the blue”, when there is no physical danger to confront,  can be frightening and upsetting. The cognitive and physical symptoms you are reporting  are frequently associated with high levels of chronic demands and life stress, but they may also indicate a physical illness.   We urge you to seek face-to-face care with a healthcare provider. If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>When someone is experiencing symptoms of panic disorder,  problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments. We also encourage you to check out the materials in AfterDeployment's "Anxiety" topic. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const PhysicalInjuryResilienceList: ScoringInterface[] = [];


export const PhysicalInjuryResilienceScoring76 = makeScoring(77,0,49,'LOW',
                                    `<p>Your results indicate that you are not using many of the skills that could allow you to be more resilient in the face of the challenges that come with being injured.</p>`,
                                    `<p>The stress of coping with a physical injury can be significant.  You have indicated that you are not using many of the skills that can increase personal resilience in the face of an injury.  Your score suggests that there is a great deal more you can do in this area, by adding to your coping strategies or by using them more consistently.</p><p>If you’d like personal help in adding to your coping skills, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>When people are coping with the results of a physical injury, there are often problems present in other areas of life.  You can do more exploration by taking additional assessments. We also encourage you to check out the materials in AfterDeployment’s "Physical Injury" topic.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const PhysicalInjuryResilienceScoring77 = makeScoring(78,50,70,'MOD',
                                    `<p>Your results indicate that you are using many of the skills that allow you to be resilient in the face of the challenges that come with being injured, but there may be additional skills you could develop to become even more resilient.</p>`,
                                    `<p>The stress of coping with a physical injury can be significant.  You have indicated that you are using several of the skills that can increase personal resilience in the face of an injury.  Your score suggests that there may be more you can do in this area, by adding to your coping strategies or by using them more consistently.</p><p>If you’d like personal help in adding to your coping skills, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p><p>When people are coping with the results of a physical injury, there are often problems present in other areas of life.  You can do more exploration by taking additional assessments.  We also encourage you to check out the materials in AfterDeployment’s "Physical Injury" topic.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const PhysicalInjuryResilienceScoring78 = makeScoring(79,71,88,'HIGH',
                                    `<p>Your results indicate that you are using many of the skills that allow you to be resilient in coping with the stress that comes with being injured.</p>`,
                                    `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means following a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const PostDeploymentSocialSupportList: ScoringInterface[] = [];


export const PostDeploymentSocialSupportScoring79 = makeScoring(80,0,39,'LOW',
                                    `<p>Your score is in a range typically associated with high social support following deployment.</p>  <p>Your responses suggest that you are satisfied with the social support that you have experienced following your deployment. </p>`,
                                    `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means following a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const PostDeploymentSocialSupportScoring80 = makeScoring(81,40,59,'MOD',
                                    `<p>Your score is in a range typically associated with moderate social support following deployment.</p>  <p>Your responses suggest that you may not be completely satisfied with the support that you have received from your family, friends, or community since your return from deployment.</p>`,
                                    `<p>Emotional and practical support from family and community is helpful for service members, making the transition back home much easier. We encourage you to build support and make sure that you have others to turn to when you need them. If you are not finding what you need, you may want to consider looking for other supports in the military, veteran, or civilian community. </p><p>When someone has a problem with social support, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments. We also encourage you to check out the materials in AfterDeployment's "Families and Friendships" and "Work Adjustment" topics to find out more about how to deal with difficulties in your personal and work relationships upon return from deployment. There, you will find information and strategies to help develop additional social support.</p><p>In addition to the materials on AfterDeployment, you may benefit from discussing social support with a healthcare provider. If you don’t have a provider, you can locate a provider or clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the website.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the website. Both the CALL and CHAT options are available 24-7.</p> <p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const PostDeploymentSocialSupportScoring81 = makeScoring(82,60,75,'HIGH',
                                    `<p>Your score is in a range typically associated with low social support following deployment.</p>  <p>Your responses suggest that you are not satisfied with the emotional or practical support that you have received from your family, friends, or community since your return from deployment. </p>`,
                                    `<p>If you are not currently seeking help, we strongly recommend that you discuss your sense of isolation with a counselor or therapist. Take a copy of your assessment results with you to share the details of your problem. A provider can help target the specific problems you might be having and will help develop a plan to improve your sense of connection to others. You can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p>  <p>When someone has a problem with social support, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments.</p>  <p>We also encourage you to check out the materials in AfterDeployment's "Families and Friendships" and "Work Adjustment" topics to find out more about how to deal with difficulties in relationships upon return from deployment. You will find information and strategies to help develop social supports.</p>  <p>Take a look at how comfortable you are with asking for support. You may find that you are giving people the message that you are OK and don't need or want support. It is a common mistake to believe that if you have to ask for support it means that people don’t care. Many people are more than happy to provide help and support if they understand the need. Remember that people can't read your mind.</p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const SatisfactionwithLifeList: ScoringInterface[] = [];


export const SatisfactionwithLifeScoring82 = makeScoring(83,0,17,'LOW',
                                    `<p>Your results indicate that you experience a low level of satisfaction with your life and are significantly below average in your ratings of how satisfied you are with your life compared to others who have completed this scale. </p>`,
                                    `<p>Satisfaction with life can be based on many factors, including your physical health, work, relationships, and emotional health.  If you are aware of specific areas of your life that interfere with the direction you’d like your life to go, it’s important to develop a plan that allows you to develop a sense of control in those areas.  You may wish to lose weight, stop smoking or drinking, improve your eating habits, improve your relationships or look for more satisfying work.  Your low level of life satisfaction suggests you might benefit by seeking help in any of these areas that are interfering with your ability to enjoy life.  If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>We encourage you to check out the materials in AfterDeployment’s “Health and Wellness” topic. Also, when someone is experiencing  concerns with how their life is progressing, problems are often present in many other areas.  You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const SatisfactionwithLifeScoring83 = makeScoring(84,18,29,'MOD',
                                    `<p>Your results indicate that you are moderately satisfied with your overall quality of life and are close to the average of others who have completed this scale.</p>`,
                                    `<p>Satisfaction with life can be based on many factors, including your physical health, work, relationships, and emotional health.  If you are aware of specific areas of your life that interfere with the direction you’d like your life to go, it’s important to develop a plan that allows you to develop a sense of control in those areas.  You may wish to lose weight, stop smoking or drinking, improve your eating habits, improve your relationships or look for more satisfying work.  Your low level of life satisfaction suggests you might benefit by seeking help in any of these areas that are interfering with your ability to enjoy life.  If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>We encourage you to check out the materials in AfterDeployment’s “Health and Wellness” topic. Also, when someone is experiencing  concerns with how their life is progressing, problems are often present in many other areas.  You can determine where other problems may exist or the extent of the problem by taking additional assessments.  </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const SatisfactionwithLifeScoring84 = makeScoring(85,30,35,'HIGH',
                                    `<p>Your results indicate that you are feeling very satisfied with how your life is going at the present time.</p>`,
                                    `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means following a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const SexualTraumaList: ScoringInterface[] = [];


export const SexualTraumaScoring85 = makeScoring(86,0,33,'LOW',
                                    `<p>Your score suggests that you are not experiencing symptoms that are typically associated with post-traumatic stress as a result of sexual trauma.</p><p>Although only a healthcare professional can provide an actual diagnosis of post-traumatic stress, or its absence, your results suggest that your experience is not similar to the experience of individuals suffering from post-traumatic stress.</p>`,
                                    `<p>Your results suggest you are managing this area of your life. However, you may still find the material in the "Military Sexual Trauma" and "Life Stress" topics on AfterDeployment helpful. </p><p>You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics.  </p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p>`
                                    );



export const SexualTraumaScoring86 = makeScoring(87,24,43,'MOD',
                                    `<p>Although only a healthcare professional can provide an actual diagnosis, you are reporting some experiences which are similar to symptoms associated with moderate post-traumatic stress, which may be associated with a traumatic sexual experience.</p>`,
                                    `<p>Having experiences that are somewhat similar to those associated with post-traumatic stress doesn’t mean you have post-traumatic stress disorder (PTSD).  It does mean that you should look into the concerns you are reporting because they can be upsetting and distressing.  If you’re experiencing significant upset or distress and you are not  in direct contact with support, you should consult your health care provider or a crisis clinic as soon as you can.  If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner on the main page.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner on the main page. Both the CALL and CHAT options are available 24-7.</p><p>You can find specific resources for personal support in AfterDeployment’s “Military Sexual Trauma" and "Post-Traumatic Stress” topics. When someone is experiencing the kinds of distressing symptoms you report, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const SexualTraumaScoring87 = makeScoring(88,44,85,'HIGH',
                                    `<p>Although only a healthcare professional can provide an actual diagnosis,  your score indicates that you are experiencing a significant number of symptoms that are similar to those associated with post-traumatic stress which may be related to a traumatic sexual experience.</p>`,
                                    `<p>The experiences you are describing should be addressed immediately by meeting with a professional with experience in this area, if you are not already doing so. Having experiences that are very similar to those associated with post-traumatic stress suggests that you should look into these concerns because they can be very upsetting and disruptive of your life. If you do not have a professional resource you can access, it’s important to locate someone who can help.</p>               <p> You can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7. You can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab, also in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment. Additional resources that can be accessed immediately can be found on the RESOURCES tab located above.<p/>       <p>We encourage you to check out the materials in AfterDeployment’s “Military Sexual Trauma" and "Post-Traumatic Stress” topics. Also, when someone is experiencing the kinds of distressing concerns you report, problems are often present in other areas of life.  You can determine where other problems may exist or the extent of the problem by taking additional assessments. </p><p>You can find links to all of these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const SpiritualityList: ScoringInterface[] = [];


export const SpiritualityScoring88 = makeScoring(89,0,1,'LOW',
                                    `<p>Your score is in a range indicating that you are experiencing very little to no spiritual struggle at this time.</p>  <p>Your results suggest that you are comfortable with how your belief system is supporting your ability to manage the stress that comes with the significant challenges and changes in your life.</p>`,
                                    `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const SpiritualityScoring89 = makeScoring(90,2,3,'MOD',
                                    `<p>Your score is in a range typically associated with a moderate level of spiritual struggle.</p>  <p>You describe yourself as someone who is experiencing  a moderate degree of spiritual struggle in response to the stress in your life. </p>`,
                                    `<p>Your score suggests that for the most part, you believe you can count on your spiritual beliefs for support during difficult times.  However, you have qualified your confidence in your ability to rely completely on the meaning you find in spirituality.  It is not at all uncommon for trauma, distress, or disappointment to create doubts about some aspects of one’s spiritual beliefs.    If the resulting spiritual struggle is temporary it is likely to have little effect on either your well-being or resilience.  However, even moderate amounts of unresolved, chronic spiritual tension, in the form of anger, resentment or a sense of abandonment, significantly increase the likelihood of physical and emotional problems.   If you would like personal support in examining your spiritual beliefs and disappointments, many spiritual traditions encourage this type of exploration.  In addition to its protective effects on health and well-being, many people find that the process of resolving spiritual struggle leads to personal and spiritual growth.   You can locate a church, synagogue or other spiritual organization near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page.  If you have other personal concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page. Both the CALL and CHAT options are available 24-7.</p> <p>When someone wishes to explore their spiritual understanding, exploring other areas of life can help.  You can do more exploration by taking additional assessments. We also encourage you to check out AfterDeployment's "Spirituality" topic. </p>  <p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const SpiritualityScoring90 = makeScoring(91,4,5,'HIGH',
                                    `<P>Your score is in a range typically associated with a significant degree of spiritual struggle.  You describe yourself as someone who is experiencing significant spiritual conflict in response to stressful experiences. </p>`,
                                    `<p>Your score suggests that you are feeling a high level of tension based on doubts about beliefs  about your spirituality which may have previously helped you to cope with difficulties in life.   This might be because you have experienced significant trauma and have been unable to reconcile that experience with your beliefs.  Many people find themselves questioning long held beliefs in response to trauma, illness, or disappointments.  However,   research suggests that high levels of spiritual struggle, even in the short term, can lead to a great deal of distress, significantly impacting health and well-being.  The longer the tension remains unresolved, the greater the likelihood of serious physical and emotional problems.  Because of the potential impact of your current level of spiritual struggle on your health and well-being, we strongly suggest that you work to resolve the tension you are experiencing.   If you would like personal support in examining your spiritual beliefs and disappointments, many spiritual traditions encourage this type of exploration.    In addition to its protective effects on health and well-being, many people find that the process of resolving spiritual struggle leads to personal and spiritual growth. You can locate a church, synagogue or other spiritual organization near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page.   If you have other personal concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page. Both the CALL and CHAT options are available 24-7.</p> <p>When someone wishes to explore their spiritual understanding, exploring other areas of life can help.  You can do more exploration by taking additional assessments. We also encourage you to check out AfterDeployment's "Spirituality" topic. </p>  <p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );


export const WorryList: ScoringInterface[] = [];


export const WorryScoring91 = makeScoring(92,0,39,'LOW',
                                    `<p>Your score is in a range typically associated with a low level of worry indicating that chronic worry is probably not affecting your life.</p><p>Although only a healthcare professional can provide an actual diagnosis of an anxiety disorder, your results suggest that you are not likely to engage in catastrophic thinking and that you can accurately evaluate the likelihood of negative events occurring in your life.</p>`,
                                    `<p>Your results suggest you are managing this area of your life. Because maintaining healthy habits means a lifestyle that includes stress management and finding balance, we encourage you to check out the many tools in the “Life Stress” topic.</p><p>You may find it helpful to join the <a href="https://www.facebook.com/afterdeployment/timeline">AfterDeployment Facebook</a> page where you can network with others on a range of topics.  </p><p>You're also encouraged to check out other assessments on AfterDeployment to learn if you are having problems in other areas.  You can find links to these tools under the RESOURCES tab located above.</p>`
                                    );



export const WorryScoring92 = makeScoring(93,40,59,'MOD',
                                    `<p>Your score is in a range typically associated with a moderate level of worry indicating that worry may be causing you some level of distress.</p><p>Although only a healthcare professional can provide an actual diagnosis, your responses suggest you may be prone to some degree of unrealistic concern about bad things happening in your life.</p>`,
                                    `<p>A moderate degree of worry typically doesn’t cause significant distress or anxiety.  It can take some of the joy out of life however, because worry causes an increase in the level of vigilance and physical arousal, energy that could be better used focusing on positive things in life.  If your worry has increased recently it may be useful to discuss this with your health care provider. If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner on the main page.  If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner on the main page. Both the CALL and CHAT options are available 24-7.</p><p>Another way to explore your level of worry is to check out the materials in AfterDeployment’s “Anxiety” topic. When someone is experiencing the kinds of distressing symptoms you report, problems are often present in other areas of life. You can determine where other problems may exist or the extent of the problem by taking additional assessments. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );



export const WorryScoring93 = makeScoring(94,60,80,'HIGH',
                                    `<p>Your score is in a range typically associated with a high level of worried thinking and anxiety.</p><p>Although only a healthcare professional can provide an actual diagnosis, worry may be causing you significant distress.</p>`,
                                    `<p>Thinking that regularly predicts catastrophic outcomes can be useful during deployment because those circumstances are legitimately dangerous.  But high levels of anxiety and worry that persists after deployment, when catastrophic outcomes are much less likely, can be harmful to your physical health, and your emotional well-being.  Because you’re reporting significant anxiety and worry, we urge you to seek face-to-face care with a healthcare provider. If you don’t have a provider, you can locate a provider or a clinic near you by clicking on the <a href='http://afterdeployment.dcoe.mil/locate-help'>LOCATE</a> tab in the upper right corner of the main page. We recommend you take a copy of the results of this assessment and share them during your appointment.</p><p>If you have more immediate concerns, you can talk with a professional right now by clicking on the <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=2#qt-quick_tab_header'>CALL</a> or <a href='http://afterdeployment.dcoe.mil/home?qt-quick_tab_header=1#qt-quick_tab_header'>CHAT</a> tabs, also found in the upper right corner of the main page.  Both the CALL and CHAT options are available 24-7.</p><p>We encourage you to check out the materials in AfterDeployment’s “Anxiety” topic. Also, when someone is experiencing the kinds of distressing concerns you report, problems are often present in other areas of life.  You can determine where other problems may exist or the extent of the problem by taking additional assessments. </p><p>You can find links to these tools under the RESOURCES tab located above.</p><p> You may find it helpful to join the <a href='https://www.facebook.com/afterdeployment/timeline'>AfterDeployment Facebook</a> page where you can network with others on a range of topics. </p>`
                                    );

/////////////////////////////////////PORT of Drugs Assessments START
export const getQuestionScore = (value,choices) => {
  return choices.reduce((score,choice) => {
                            if(choice.value === value){
                              score += choice.score;
                            }
                            return score;
                          },0);
}
export const makeIdHashMap = (items: {id:string}[]) => {
  return items.reduce((map,q) => {
                          map[q.id] = q;
                          return map;
                        },{})
}

export const getSubstanceScore = (substanceQuestions,values,questionsMap) => {
  return substanceQuestions.reduce((tally, qId) => {
    const value = typeof values[qId] !== 'undefined' ? values[qId] : null;
    if(value && typeof questionsMap[qId] !== 'undefined'){
      const choices = questionsMap[qId].choices;
      tally += getQuestionScore(value,choices);
    }
    return tally;
  },0);
}
export const returnInRange = (numbers: number[], min: number, max: number) => {
  return numbers.filter((number) => {
    return number >= min && number <= max;
  });
}
export const calcDrugsScore = function(values: any){
  var allSubstances = ['2','3','4','5','6'];
  const alcQuestions = ['2','7_2','8_2','9_2','10_2']; 
  const potQuestions = ['3','7_3','8_3','9_3','10_3']; 
  const cokeQuestions = ['4','7_4','8_4','9_4','10_4']; 
  const amphQuestions = ['5','7_5','8_5','9_5','10_5']; 
  const sedQuestions = ['6','7_6','8_6','9_6','10_6'];
  const substancesUsed = ['2','3','4','5','6'];
  
  const questionsMap = makeIdHashMap(this.calcQuestions(values));

  var chosenSubstances = []; //question1 chosen substances
  let alcChosen = false;

  allSubstances.map(qId => {
     if(typeof values[qId] !== 'undefined' && values[qId] === '2'){
       chosenSubstances.push(qId);
       if(qId === '2'){
         alcChosen = true;
       }
     }
  });
  const noneChosen = chosenSubstances.length === 0;
  const onlyAlc = chosenSubstances.length === 1 && alcChosen;
  
  let alcScore  = getSubstanceScore(alcQuestions,values,questionsMap);
  let potScore = getSubstanceScore(potQuestions,values,questionsMap);
  let cokeScore = getSubstanceScore(cokeQuestions,values,questionsMap);
  let amphScore = getSubstanceScore(amphQuestions,values,questionsMap);
  let sedScore = getSubstanceScore(sedQuestions,values,questionsMap);
  let scoresArray = [alcScore,potScore,cokeScore,amphScore,sedScore];
  let areAllDrugsLowUsagec = noneChosen;
  if(!areAllDrugsLowUsagec){
     areAllDrugsLowUsagec = alcScore < 4 && potScore < 4 && cokeScore < 4 && amphScore < 4 && sedScore < 4;
  }
 //0 - 14 = low, 15-29= mod, 30 - 40 = high
  const isAnyDrugModerate = returnInRange(scoresArray,4,26).length > 0;
  const isAnyDrugHigh = returnInRange(scoresArray,27,38).length > 0;
  const isLowAlc = (alcScore >= 0 && alcScore < 11);
  const isModAlc = (alcScore >= 11 && alcScore < 27);
  const isHighAlc = (alcScore >= 27 && alcScore < 39);
  if(noneChosen){
     return 0;
  }

  if(!noneChosen && areAllDrugsLowUsagec && !onlyAlc && isLowAlc){
    //Low Alcohol and Drug Acuity
    return 4
  }

  if(!noneChosen && areAllDrugsLowUsagec && !onlyAlc && isModAlc){
    //Moderate Alcohol Acuity
    return 20;
  }

  if(!noneChosen && areAllDrugsLowUsagec && !onlyAlc && isHighAlc){
    //High Alcohol Acuity
    return 30;
  }

  if(isAnyDrugModerate && !isAnyDrugHigh && isLowAlc){
    //Moderate Drug Acuity
    return 25;
  }

  if(isAnyDrugHigh && isLowAlc){
    //High Drug Acuity
    return 35;
  }

  if(isModAlc && isAnyDrugModerate && !isAnyDrugHigh){
    //Moderate Alcohol and Drug Acuity
    return 20;
  }

  if((isHighAlc && (isAnyDrugModerate || isAnyDrugHigh)) || (isAnyDrugHigh && (isModAlc || isHighAlc))){
    //High Alcohol and Drug Acuity
    return 35
  }

  return scoresArray.reduce((tally,score)=>{
    tally + score;
    return tally;
  },0);
}

export const calcAlcDrugQuestions = function(values: any){
      var allSubstances = ['1','2','3','4','5','6']; //Logicly these 6 questions "are" question one
      var question2Dependents = ['8','9','10'];
      var chosen = []; //question1 chosen substances
      allSubstances.map(qId => {
         if(typeof values[qId] !== 'undefined' && values[qId] === '2'){
           chosen.push(qId);
         }
      })

      const questionsMap = this.questions.reduce((acc,item) => {
          acc[item.id] = item;
          return acc;
      },{});

      let substanceQuestions = this.questions.filter(q => {
         if(parseInt(q.id) <= 6){
           return true;
         }
         return false;
      });
      
      
      let conditionalQuestions2Labels = this.questions.filter(q => {
         if(chosen.length > 0 && parseInt(q.id) === 7){
           return true;
         }
         return false;
      });

      let conditionalQuestions3Labels = this.questions.filter(q => {
         if(chosen.length > 0 && parseInt(q.id) > 7 && parseInt(q.id) < 11){
           return true;
         }
         return false;
      });
      
      let conditionalQuestions2 = [];
      let condition2chosenSubstances = [];
      if(chosen.length > 0){
        conditionalQuestions2Labels.map((ql) => {
          conditionalQuestions2.push(ql);
          chosen.map((qcId) => {
            var subQuestion = questionsMap[qcId];
            if(subQuestion){
              let questionId = ql.id + '_' + qcId;
              conditionalQuestions2.push(
               makeQuestion(questionId, subQuestion.title, 'select', ql.choices)
              )

              if(typeof values[questionId] !== 'undefined' && values[questionId] !== '1'){
                condition2chosenSubstances.push(subQuestion); 
              }
            }
          });
        })
      }
      let conditionalQuestions3 = [];
      if(condition2chosenSubstances.length > 0){
        conditionalQuestions3Labels.map((ql) => {
          conditionalQuestions3.push(ql);
          condition2chosenSubstances.map((subQuestion) => {
              let questionId = ql.id + '_' + subQuestion.id;
              conditionalQuestions3.push(
               makeQuestion(questionId, subQuestion.title, 'select', ql.choices)
              )
          });
        })
      }

      return substanceQuestions.concat(conditionalQuestions2).concat(conditionalQuestions3);
}

export const calcPanicQuestions = function(values: any = {}){
   const firstQuestionId = '1';
   let firstQuestionYes = false;
   if(typeof values[firstQuestionId] !== 'undefined' && values[firstQuestionId] === '2'){
     firstQuestionYes = true;
   }
   if(!firstQuestionYes){
     return [this.questions[0]]
   }
   return this.questions;
}
export const calcPanicScore = function(values: any = {}){
   const firstQuestionId = '1';
   const firstFour = ['2','3','4','5'];
   const remainingQuestions = ['6','7','8','9','10','11','12','13','14','15'];
   let firstQuestionYes = false;
   if(typeof values[firstQuestionId] !== 'undefined' && values[firstQuestionId] === '2'){
     firstQuestionYes = true;
   }

   const first4Yes = firstFour.filter((qId) => {
       if(typeof values[qId] !== 'undefined' && values[qId] === '2'){
         return true;
       }
       return false;
   });

   const remainingYes = remainingQuestions.filter((qId) => {
       if(typeof values[qId] !== 'undefined' && values[qId] === '2'){
         return true;
       }
       return false;
   });


   const arefirst4PanicYes = first4Yes.length === 4;
   const anyRemainingYes = remainingYes.length > 0;
   const atleast4RemainingYes = remainingYes.length > 3;

   if(!firstQuestionYes){
     return 5;
   }
   if(arefirst4PanicYes && atleast4RemainingYes ){
     return 55;
   }

   if(arefirst4PanicYes && anyRemainingYes){
     return 35;
   }
   return 15;
}

/////////////////////////////////////PORT of Drugs Assessments END

PostTraumaticStressList.push(PostTraumaticStressScoring0);
PostTraumaticStressList.push(PostTraumaticStressScoring1);
PostTraumaticStressList.push(PostTraumaticStressScoring2);
DepressionList.push(DepressionScoring3);
DepressionList.push(DepressionScoring4);
DepressionList.push(DepressionScoring5);
mTBISymptomManagementList.push(mTBISymptomManagementScoring9);
mTBISymptomManagementList.push(mTBISymptomManagementScoring10);
mTBISymptomManagementList.push(mTBISymptomManagementScoring11);
AngerList.push(AngerScoring12);
AngerList.push(AngerScoring13);
AngerList.push(AngerScoring14);
MaritalSatisfactionList.push(MaritalSatisfactionScoring15);
MaritalSatisfactionList.push(MaritalSatisfactionScoring16);
MaritalSatisfactionList.push(MaritalSatisfactionScoring17);
FriendshipScaleList.push(FriendshipScaleScoring18);
FriendshipScaleList.push(FriendshipScaleScoring19);
FriendshipScaleList.push(FriendshipScaleScoring20);
OptimismList.push(OptimismScoring21);
OptimismList.push(OptimismScoring22);
OptimismList.push(OptimismScoring23);
ParentingConfidenceList.push(ParentingConfidenceScoring24);
ParentingConfidenceList.push(ParentingConfidenceScoring25);
ParentingConfidenceList.push(ParentingConfidenceScoring26);
PerceivedSocialSupportList.push(PerceivedSocialSupportScoring27);
PerceivedSocialSupportList.push(PerceivedSocialSupportScoring28);
PerceivedSocialSupportList.push(PerceivedSocialSupportScoring29);
ResilienceList.push(ResilienceScoring30);
ResilienceList.push(ResilienceScoring31);
ResilienceList.push(ResilienceScoring32);
StigmaList.push(StigmaScoring33);
StigmaList.push(StigmaScoring34);
StigmaList.push(StigmaScoring35);
StressList.push(StressScoring36);
StressList.push(StressScoring37);
StressList.push(StressScoring38);
WorkAdjustmentList.push(WorkAdjustmentScoring39);
WorkAdjustmentList.push(WorkAdjustmentScoring40);
WorkAdjustmentList.push(WorkAdjustmentScoring41);
HopeList.push(HopeScoring42);
HopeList.push(HopeScoring43);
HopeList.push(HopeScoring44);
GenerosityList.push(GenerosityScoring45);
GenerosityList.push(GenerosityScoring46);
GenerosityList.push(GenerosityScoring47);
AlcoholDrugsList.push(AlcoholDrugsScoring48);
AlcoholDrugsList.push(AlcoholDrugsScoring49);
AlcoholDrugsList.push(AlcoholDrugsScoring50);
AnxietyList.push(AnxietyScoring55);
AnxietyList.push(AnxietyScoring56);
AnxietyList.push(AnxietyScoring57);
SleepList.push(SleepScoring58);
SleepList.push(SleepScoring59);
SleepList.push(SleepScoring60);
CaregiverStressList.push(CaregiverStressScoring61);
CaregiverStressList.push(CaregiverStressScoring62);
CaregiverStressList.push(CaregiverStressScoring63);
ForgivenessList.push(ForgivenessScoring64);
ForgivenessList.push(ForgivenessScoring65);
ForgivenessList.push(ForgivenessScoring66);
GratitudeList.push(GratitudeScoring67);
GratitudeList.push(GratitudeScoring68);
GratitudeList.push(GratitudeScoring69);
NicotineDependenceList.push(NicotineDependenceScoring70);
NicotineDependenceList.push(NicotineDependenceScoring71);
NicotineDependenceList.push(NicotineDependenceScoring72);
PanicList.push(PanicScoring73);
PanicList.push(PanicScoring74);
PanicList.push(PanicScoring75);
PhysicalInjuryResilienceList.push(PhysicalInjuryResilienceScoring76);
PhysicalInjuryResilienceList.push(PhysicalInjuryResilienceScoring77);
PhysicalInjuryResilienceList.push(PhysicalInjuryResilienceScoring78);
PostDeploymentSocialSupportList.push(PostDeploymentSocialSupportScoring79);
PostDeploymentSocialSupportList.push(PostDeploymentSocialSupportScoring80);
PostDeploymentSocialSupportList.push(PostDeploymentSocialSupportScoring81);
SatisfactionwithLifeList.push(SatisfactionwithLifeScoring82);
SatisfactionwithLifeList.push(SatisfactionwithLifeScoring83);
SatisfactionwithLifeList.push(SatisfactionwithLifeScoring84);
SexualTraumaList.push(SexualTraumaScoring85);
SexualTraumaList.push(SexualTraumaScoring86);
SexualTraumaList.push(SexualTraumaScoring87);
SpiritualityList.push(SpiritualityScoring88);
SpiritualityList.push(SpiritualityScoring89);
SpiritualityList.push(SpiritualityScoring90);
WorryList.push(WorryScoring91);
WorryList.push(WorryScoring92);
WorryList.push(WorryScoring93);
