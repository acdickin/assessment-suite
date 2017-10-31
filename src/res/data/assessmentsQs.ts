import * as Choices from './ChoiceSets';

export interface QuestionInterface{
  id: number|string;
  title: string;
  type: string;
  choices: Choices.ChoicesInterface[];
}

export const makeQuestion = (id: number|string,title,type='text',choices = []): QuestionInterface => {
  return {
    id,
    title,
    type,
    choices
  }
}


export const percSocialSupportQuestions: QuestionInterface[] = [
  makeQuestion(1,'There is a special person who is around when I am in need.','select',Choices.choicesSet19),
  makeQuestion(2,'There is a special person with whom I can share my joys and sorrows.','select',Choices.choicesSet19),
  makeQuestion(3,'My family really tries to help me.','select',Choices.choicesSet19),
  makeQuestion(4,'I get the emotional help and support I need from my family.','select',Choices.choicesSet19),
  makeQuestion(5,'I have a special person who is a real source of comfort to me.','select',Choices.choicesSet19),
  makeQuestion(6,'My friends really try to help me.','select',Choices.choicesSet19),

  makeQuestion(7,'I can count on my friends when things go wrong.','select',Choices.choicesSet19),
  makeQuestion(8,'I can talk about my problems with my family.','select',Choices.choicesSet19),
  makeQuestion(9,'I have friends with whom I can share my joys and sorrows.','select',Choices.choicesSet19),

  makeQuestion(10,'There is a special person in my life who cares about my feelings.','select',Choices.choicesSet19),
  makeQuestion(11,'My family is willing to help me make decisions.','select',Choices.choicesSet19),
  makeQuestion(12,'I can talk about my problems with my friends.','select',Choices.choicesSet19)
];

export const postDepSupportQuestions: QuestionInterface[] = [
  makeQuestion(1,'The reception I received when I returned from my deployment made me feel appreciated for my efforts.','select',Choices.choicesSet9),
  makeQuestion(2,'The American people made me feel at home when I returned.','select',Choices.choicesSet9),
  makeQuestion(3,'When I returned, people made me feel proud to have served my country in the armed forces.','select',Choices.choicesSet9),

  makeQuestion(4,'I am carefully listened to and understood by family members or friends.','select',Choices.choicesSet9),
  makeQuestion(5,'Among my family or relatives, there is someone who makes me feel better when I am feeling down.','select',Choices.choicesSet9),
  makeQuestion(6,'I have problems that I can’t discuss with family or friends.','select',Choices.choicesSet8),

  makeQuestion(7,'Among my friends or relatives, there is someone I go to when I need good advice.','select',Choices.choicesSet9),
  makeQuestion(8,'People at home just don’t understand what I have been through in the armed forces.','select',Choices.choicesSet8),
  makeQuestion(9,'There are people to whom I can talk about my deployment experiences.','select',Choices.choicesSet9),

  makeQuestion(10,'The people I work with respect the fact that I am a veteran or service member.','select',Choices.choicesSet9),
  makeQuestion(11,'My supervisor understands when I need time to take off to take care of personal matters.','select',Choices.choicesSet9),
  makeQuestion(12,'My friends or relatives would lend me money if I needed it.','select',Choices.choicesSet9),

  makeQuestion(13,'My friends or relatives would help me move my belongings if I needed to.','select',Choices.choicesSet9),
  makeQuestion(14,'When I am unable to attend to daily chores, there is someone who will help me with these tasks.','select',Choices.choicesSet9),
  makeQuestion(15,'When I am ill, friends or family members will help out until I am well.','select',Choices.choicesSet9)
];

export const parentingConfidenceAssessment: QuestionInterface[] = [
  makeQuestion(1,'Are you a Mother/Father/Other?','select',Choices.choicesSet10),
  makeQuestion(2,'The problems of taking care of a child are easy to solve once you know how your actions affect your child, an understanding I have acquired.','select',Choices.choicesSet12),
  makeQuestion(3,'Even though being a parent could be rewarding, I am frustrated now while my child is at his/her present age.','select',Choices.choicesSet11),
  makeQuestion(4,'I go to bed the same way I wake up in the morning—feeling I have not accomplished a whole lot.','select',Choices.choicesSet11),
  makeQuestion(5,'I do not know what it is, but sometimes when I’m supposed to be in control, I feel more like the one being manipulated.','select',Choices.choicesSet11),
  makeQuestion(6,'My parent was better prepared to be a good parent than I am.','select',Choices.choicesSet11),
  makeQuestion(7,'I would make a fine model for a new parent to follow in order to learn what she/he would need to know in order to be a good parent.','select',Choices.choicesSet12),
  makeQuestion(8,'Being a parent is manageable, and any problems are easily solved.','select',Choices.choicesSet12),
  makeQuestion(9,'A difficult problem in being a parent is not knowing whether you’re doing a good job or a bad one.','select',Choices.choicesSet11),
  makeQuestion(10,'Sometimes I feel like I’m not getting anything done.','select',Choices.choicesSet11),
  makeQuestion(11,'I meet my own personal expectations for expertise in caring for my child.','select',Choices.choicesSet12),
  makeQuestion(12,'If anyone can find the answer to what is troubling my child, I am the one.','select',Choices.choicesSet12),
  makeQuestion(13,'My talents and interests are in other areas, not in being a parent.','select',Choices.choicesSet11),
  makeQuestion(14,' Considering how long I’ve been a parent, I feel thoroughly familiar with this role.','select',Choices.choicesSet12),
  makeQuestion(15,'If being a parent of a child were only more interesting, I would be motivated to do a better job as a parent.','select',Choices.choicesSet11),
  makeQuestion(16,' I honestly believe I have all the skills necessary to be a good parent to my child.','select',Choices.choicesSet12),
  makeQuestion(17,'Being a parent makes me tense and anxious.','select',Choices.choicesSet11),
]

export const angerQuestions: QuestionInterface[] = [
  makeQuestion(1,'I often find myself getting angry at people or situations.','select',Choices.choicesSet1),
  makeQuestion(2,'When I get angry, I get really mad.','select',Choices.choicesSet1),
  makeQuestion(3,'When I get angry, I stay angry.','select',Choices.choicesSet1),
  makeQuestion(4,'When I get angry at someone, I want to hit or clobber the person.','select',Choices.choicesSet1),
  makeQuestion(5,'My anger interferes with my ability to get my work done.','select',Choices.choicesSet1),
  makeQuestion(6,'My anger prevents me from getting along with people as well as I would like to.','select',Choices.choicesSet1),
  makeQuestion(7,'My anger has a bad effect on my health.','select',Choices.choicesSet1),
];

export const stressQuestions: QuestionInterface[] = [
  makeQuestion(1,'In the last month, how often have you been upset because of something that happened unexpectedly?','select',Choices.choicesSet30),
  makeQuestion(2,'In the last month, how often have you felt that you were unable to control the important things in your life?','select',Choices.choicesSet30),
  makeQuestion(3,'In the last month, how often have you felt nervous and stressed?','select',Choices.choicesSet30),
  makeQuestion(4,'In the last month, how often have you felt confident about your ability to handle your personal problems?','select',Choices.choicesSet31),
  makeQuestion(5,'In the last month, how often have you felt that things were going your way?','select',Choices.choicesSet31),
  makeQuestion(6,'In the last month, how often have you found that you could not cope with all the things that you had to do?','select',Choices.choicesSet30),
  makeQuestion(7,'In the last month, how often have you been able to control irritations in your life?','select',Choices.choicesSet31),
  makeQuestion(8,'In the last month, how often have you felt that you were on top of things?','select',Choices.choicesSet31),
  makeQuestion(9,'In the last month, how often have you been angered because of things that were outside of your control?','select',Choices.choicesSet30),
  makeQuestion(10,'In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?','select',Choices.choicesSet30),
];


export const stigmaQuestions: QuestionInterface[] = [
  makeQuestion(1,'I would feel inadequate if I went to a therapist for psychological help.','select',Choices.choicesSet32),
  makeQuestion(2,'My self-confidence would NOT be threatened if I sought professional help.','select',Choices.choicesSet33),
  makeQuestion(3,'Seeking psychological help would make me feel less intelligent.','select',Choices.choicesSet32),
  makeQuestion(4,'My self-esteem would increase if I talked to a therapist.','select',Choices.choicesSet33),
  makeQuestion(5,'My view of myself would not change just because I made the choice to see a therapist.','select',Choices.choicesSet33),
  makeQuestion(6,'It would make me feel inferior to ask a therapist for help.','select',Choices.choicesSet32),
  makeQuestion(7,'I would feel okay about myself if I made the choice to seek professional help.','select',Choices.choicesSet33),
  makeQuestion(8,'If I went to a therapist, I would be less satisfied with myself.','select',Choices.choicesSet32),
  makeQuestion(9,'My self-confidence would remain the same if I sought professional help for a problem I could not solve.','select',Choices.choicesSet33),
  makeQuestion(10,'I would feel worse about myself if I could not solve my own problems.','select',Choices.choicesSet32),
];


export const forgivenessQuestions: QuestionInterface[] = [
  makeQuestion(1,'Although I feel bad at first when I mess up, over time I can give myself some slack','select',Choices.choicesSet36),
  makeQuestion(2,'I hold grudges against myself for negative things I\'ve done.','select',Choices.choicesSet37),
  makeQuestion(3,'Learning from bad things that I\'ve done helps me get over them.','select',Choices.choicesSet36),
  makeQuestion(4,'It is really hard for me to accept myself once I\'ve messed up.','select',Choices.choicesSet37),
  makeQuestion(5,'With time I am understanding of myself for mistakes I\'ve made.','select',Choices.choicesSet36),
  makeQuestion(6,'I  don’t stop criticizing myself for negative things I\'ve felt, thought, said, or done.','select',Choices.choicesSet37),
  makeQuestion(7,'I continue to punish a person who has done something that I think is wrong.','select',Choices.choicesSet37),
  makeQuestion(8,'With time I am understanding of others for the mistakes they\'ve mad','select',Choices.choicesSet36),
  makeQuestion(9,'I continue to be hard on others who have hurt me.','select',Choices.choicesSet37),
  makeQuestion(10,'Although others have hurt me in the past, I have eventually been able to see them as good people.','select',Choices.choicesSet36),
  makeQuestion(11,'If others mistreat me, I continue to think badly of them.','select',Choices.choicesSet37),
  makeQuestion(12,'When someone disappoints me, I can eventually move past it.','select',Choices.choicesSet36),
  makeQuestion(13,'When things go wrong for reasons that can\'t be controlled, I get stuck in negative thoughts about it.','select',Choices.choicesSet37),
  makeQuestion(14,'With time I can be understanding of bad circumstances in my life.','select',Choices.choicesSet36),
  makeQuestion(15,'If I am disappointed by uncontrollable circumstances in my life, I continue to think negatively about them.','select',Choices.choicesSet37),
  makeQuestion(16,'I eventually make peace with bad situations in my life.','select',Choices.choicesSet36),
  makeQuestion(17,'It\'s really hard for me to accept negative situations that aren\'t anybody’s faut','select',Choices.choicesSet37),
  makeQuestion(18,'Eventually I let go of negative thoughts about bad circumstances that are beyond anyone\'s control.','select',Choices.choicesSet37),
];

export const gratitudeAssessmentQs: QuestionInterface[] = [
  makeQuestion(1,'I have so much in life to be thankful for.','select',Choices.choicesSet38),
  makeQuestion(2,'If I had to list everything that I felt grateful for, it would be a very long list.','select',Choices.choicesSet38),
  makeQuestion(3,'When I look at the world, I don\'t see much to be grateful for','select',Choices.choicesSet39),
  makeQuestion(4,'I am grateful for a wide variety of people.','select',Choices.choicesSet38),
  makeQuestion(5,'As I get older, I find myself more able to appreciate the people, events, and situations that have been part of my life history.','select',Choices.choicesSet38),
  makeQuestion(6,'Long amounts of time can go by before I feel grateful to something or someone.','select',Choices.choicesSet39),
];

export const hopeAssessmentQs: QuestionInterface[] =[
  makeQuestion(1,'I energetically pursue my goals.','select',Choices.choicesSet43),
  makeQuestion(2,'I can think of many ways to get out of a jam.','select',Choices.choicesSet43),
  makeQuestion(3,'My past experiences have prepared me well for my future.','select',Choices.choicesSet43),
  makeQuestion(4,'There are lots of ways around any problem.','select',Choices.choicesSet43),
  makeQuestion(5,'I\'ve been pretty successful in life.','select',Choices.choicesSet43),
  makeQuestion(6,'I can think of many ways to get the things in life that are important to me.','select',Choices.choicesSet43),
  makeQuestion(7,'I meet the goals that I set for myself.','select',Choices.choicesSet43),
  makeQuestion(8,' Even when others get discouraged, I know I can find a way to solve the problem.','select',Choices.choicesSet43),
]

export const  spiritualityAssessmentsQs: QuestionInterface[] =[
  makeQuestion(1,'Looked for a stronger connection with God.','select',Choices.choicesSet44),
  makeQuestion(2,'Sought God’s love and care.','select',Choices.choicesSet44),
  makeQuestion(3,'Sought help from God in letting go of my anger.','select',Choices.choicesSet44),
  makeQuestion(4,'Tried to put my plans into action together with God.','select',Choices.choicesSet44),
  makeQuestion(5,'Tried to see how God might be trying to strengthen me in this situation.','select',Choices.choicesSet44),
  makeQuestion(6,'Asked forgiveness for my sins.','select',Choices.choicesSet44),
  makeQuestion(7,'Focused on religion to stop worrying about my problems.','select',Choices.choicesSet44),
  makeQuestion(8,'Wondered whether God had abandoned me.','select',Choices.choicesSet45),
  makeQuestion(9,'Felt punished by God for my lack of devotion.','select',Choices.choicesSet45),
  makeQuestion(10,'Wondered what I did for God to punish me.','select',Choices.choicesSet45),
  makeQuestion(11,'Questioned God’s love for me.','select',Choices.choicesSet45),
  makeQuestion(12,'Wondered whether my church had abandoned me.','select',Choices.choicesSet45),
  makeQuestion(13,'Decided the devil made this happen.','select',Choices.choicesSet45),
  makeQuestion(14,'Questioned the power of God.','select',Choices.choicesSet45),
]
export const CaregiverStressAssessmentsQs: QuestionInterface[]=[
  makeQuestion(1,'Had trouble keeping my mind on what I was doing.','select',Choices.choicesSet47),
  makeQuestion(2,'Felt that I couldn’t leave my relative alone.','select',Choices.choicesSet47),
  makeQuestion(3,'Had difficulty making decisions.','select',Choices.choicesSet47),
  makeQuestion(4,'Felt completely overwhelmed.','select',Choices.choicesSet47),
  makeQuestion(5,'Felt useful and needed.','select',Choices.choicesSet46),
  makeQuestion(6,'Felt lonely.','select',Choices.choicesSet47),
  makeQuestion(7,'Been upset that my relative has changed so much from his/her former self.','select',Choices.choicesSet47),
  makeQuestion(8,'Felt a loss of privacy and/or personal time.','select',Choices.choicesSet47),
  makeQuestion(9,'Been edgy or irritable.','select',Choices.choicesSet47),
  makeQuestion(10,'Had sleep disturbed because of caring for my relative.','select',Choices.choicesSet47),
  makeQuestion(11,'Had a crying spell.','select',Choices.choicesSet47),
  makeQuestion(12,'Felt strained between work and family responsibilities.','select',Choices.choicesSet47),
  makeQuestion(13,'Had back pain.','select',Choices.choicesSet47),
  makeQuestion(14,'Felt ill (headaches, stomach problems or common cold).','select',Choices.choicesSet47),
  makeQuestion(15,'Been satisfied with the support my family has given me.','select',Choices.choicesSet46),
  makeQuestion(16,'Found my relative’s living situation to be inconvenient or a barrier to care','select',Choices.choicesSet47),
  makeQuestion(17,'On a scale of 1 to 10, with 1 being \“not stressful\” to 10 being \“extremely stressful,\” please rate your current level of stress.','select',Choices.choicesSet48),
  makeQuestion(18,' On a scale of 1 to 10, with 1 being \“very healthy\” to 10 being \“very ill,\” please rate your current health compared to what it was this time last year','select',Choices.choicesSet48),
]

export const ForgivenessAssessmentsQs: QuestionInterface[]=[
  makeQuestion(1,'Although I feel bad at first when I mess up, over time I can give myself some slack.','select',Choices.choicesSet49),
  makeQuestion(2,'I hold grudges against myself for negative things I’ve done.','select',Choices.choicesSet50),
  makeQuestion(3,'Learning from bad things that I’ve done helps me get over them.','select',Choices.choicesSet49),
  makeQuestion(4,'It is really hard for me to accept myself once I’ve messed up.','select',Choices.choicesSet50),
  makeQuestion(5,'With time I am understanding of myself for mistakes I’ve made.','select',Choices.choicesSet49),
  makeQuestion(6,'I don’t stop criticizing myself for negative things I’ve felt, thought, said, or done.','select',Choices.choicesSet50),
  makeQuestion(7,'I continue to punish a person who has done something that I think is wrong.','select',Choices.choicesSet50),
  makeQuestion(8,'With time I am understanding of others for the mistakes they’ve made.','select',Choices.choicesSet49),
  makeQuestion(9,'I continue to be hard on others who have hurt me.','select',Choices.choicesSet50),
  makeQuestion(10,'Although others have hurt me in the past, I have eventually been able to see them as good people.','select',Choices.choicesSet49),
  makeQuestion(11,'If others mistreat me, I continue to think badly of them.','select',Choices.choicesSet50),
  makeQuestion(12,'When someone disappoints me, I can eventually move past it.','select',Choices.choicesSet49),
  makeQuestion(13,'When things go wrong for reasons that can’t be controlled, I get stuck in negative thoughts about it.','select',Choices.choicesSet50),
  makeQuestion(14,'With time I can be understanding of bad circumstances in my life.','select',Choices.choicesSet49),
  makeQuestion(15,'If I am disappointed by uncontrollable circumstances in my life, I continue to think negatively about them.','select',Choices.choicesSet50),
  makeQuestion(16,'I eventually make peace with bad situations in my life.','select',Choices.choicesSet49),
  makeQuestion(17,'It’s really hard for me to accept negative situations that aren’t anybody’s fault.','select',Choices.choicesSet50),
  makeQuestion(18,'Eventually I let go of negative thoughts about bad circumstances that are beyond anyone’s control.','select',Choices.choicesSet50),
]

export const mTbiQs: QuestionInterface[]=[
  makeQuestion(1,'Get family and friends to help you with things you need to do around your home (such as household chores, shopping, paying bills, or transportation)?','select',Choices.choicesSet51),
  makeQuestion(2,'Get emotional support from friends and family (such as listening to you or talking over your concerns)?','select',Choices.choicesSet51),
  makeQuestion(3,'Get emotional support from people other than friends or family, if needed?','select',Choices.choicesSet51),
  makeQuestion(4,'Get help with your daily tasks (like housecleaning, yard work, shopping) from resources other than family or friends, if needed?','select',Choices.choicesSet51),
  makeQuestion(5,'Keep any physical symptoms caused by your injury (such as fatigue, dizziness, or difficulty walking) from interfering with the things that you want to do?','select',Choices.choicesSet51),
  makeQuestion(6,'Keep any problems with concentration caused by your injury from interfering with the things that you want to do?','select',Choices.choicesSet51),
  makeQuestion(7,'Keep any problems with memory caused by your injury from interfering with the things that you want to do?','select',Choices.choicesSet51),
  makeQuestion(8,'Keep any problems with thinking caused by your injury from interfering with the things that you want to do?','select',Choices.choicesSet51),
  makeQuestion(9,'Compensate for any cognitive difficulties caused by your injury so that they don’t interfere with the things that you want to do?','select',Choices.choicesSet51),
  makeQuestion(10,'Keep from feeling frustrated or overwhelmed by things that you are trying to do?','select',Choices.choicesSet51),
  makeQuestion(11,'Keep from feeling sad or discouraged?','select',Choices.choicesSet51),
  makeQuestion(12,'Keep from feeling lonely?','select',Choices.choicesSet51),
  makeQuestion(13,'Do something to control your emotions or make yourself feel better?','select',Choices.choicesSet51),
]

export const NicotineAssessmentsQs: QuestionInterface[]=[
  makeQuestion(1,'How soon after you wake up do you smoke your first cigarette?','select',Choices.choicesSet52),
  makeQuestion(2,'Do you find it difficult to refrain from smoking in places where it is forbidden?','select',Choices.choicesSet29),
  makeQuestion(3,'Which cigarette would you hate most to give up?','select',Choices.choicesSet53),
  makeQuestion(4,'How many cigarettes per day do you smoke?','select',Choices.choicesSet54),
  makeQuestion(5,'Do you smoke more frequently during the first hours after awakening than during the rest of the day?','select',Choices.choicesSet29),
  makeQuestion(6,'Do you smoke even if you are so ill that you are in bed most of the day?','select',Choices.choicesSet29),
]
export const SatisfactionAssessmentsQs: QuestionInterface[]=[
  makeQuestion(1,'In most ways my life is close to my ideal.','select',Choices.choicesSet55),
  makeQuestion(2,'The conditions of my life are excellent.','select',Choices.choicesSet55),
  makeQuestion(3,'I am satisfied with life.','select',Choices.choicesSet55),
  makeQuestion(4,'So far I have gotten the important things I want in life.','select',Choices.choicesSet55),
  makeQuestion(5,'If I could live my life over, I would change almost nothing.','select',Choices.choicesSet55),
]
export const SexualTraumaAssessmentsQs: QuestionInterface[]=[
  //Todo add date picker
  makeQuestion(1,'Repeated, disturbing memories, thoughts, or images of a stressful experience from the past?','select',Choices.choicesSet56),
  makeQuestion(2,'Repeated, disturbing dreams of a stressful experience from the past?','select',Choices.choicesSet56),
  makeQuestion(3,'Suddenly acting or feeling as if a stressful experience were happening again (as if you were reliving it)?','select',Choices.choicesSet56),
  makeQuestion(4,'Feeling very upset when something reminded you of a stressful experience from the past?','select',Choices.choicesSet56),
  makeQuestion(5,'Having physical reactions (e.g., heart pounding, trouble breathing, or sweating) when something reminded you of a stressful experience from the past?','select',Choices.choicesSet56),
  makeQuestion(6,'Avoiding thinking about or talking about a stressful experience from the past or avoid having feelings related to it?','select',Choices.choicesSet56),
  makeQuestion(7,'Avoid activities or situations because they remind you of a stressful experience from the past?','select',Choices.choicesSet56),
  makeQuestion(8,'Trouble remembering important parts of a stressful experience from the past?','select',Choices.choicesSet56),
  makeQuestion(9,'Loss of interest in things that you used to enjoy?','select',Choices.choicesSet56),
  makeQuestion(10,'Feeling distant or cut off from other people?','select',Choices.choicesSet56),
  makeQuestion(11,'Feeling emotionally numb or being unable to have loving feelings for those close to you?','select',Choices.choicesSet56),
  makeQuestion(12,'Feeling as if your future will somehow be cut short?','select',Choices.choicesSet56),
  makeQuestion(13,'Trouble falling or staying asleep?','select',Choices.choicesSet56),
  makeQuestion(14,'Feeling irritable or having angry outbursts?','select',Choices.choicesSet56),
  makeQuestion(15,'Having difficulty concentrating?','select',Choices.choicesSet56),
  makeQuestion(16,'Being "super alert" or watchful on guard?','select',Choices.choicesSet56),
  makeQuestion(17,'Feeling jumpy or easily startled?','select',Choices.choicesSet56),
]

export const WorkAdjustmentAssessmentsQs: QuestionInterface[]=[
  makeQuestion(1,'I can always manage to solve difficult problems if I try hard enough.','select',Choices.choicesSet57),
  makeQuestion(2,'If someone opposes me, I can find the means and ways to get what I want.','select',Choices.choicesSet57),
  makeQuestion(3,'It is easy for me to stick to my aims and accomplish my goals.','select',Choices.choicesSet57),
  makeQuestion(4,'I am confident that I could deal efficiently with unexpected events.','select',Choices.choicesSet57),
  makeQuestion(5,'Thanks to my resourcefulness, I know how to handle unforeseen situations.','select',Choices.choicesSet57),
  makeQuestion(6,'I can solve most problems if I invest the necessary effort.','select',Choices.choicesSet57),
  makeQuestion(7,'I can remain calm when facing difficulties because I can rely on my coping abilities.','select',Choices.choicesSet57),
  makeQuestion(8,'When I am confronted with a problem, I can usually find several solutions.','select',Choices.choicesSet57),
  makeQuestion(9,'If I am in trouble, I can usually think of a solution.','select',Choices.choicesSet57),
  makeQuestion(10,'I can usually handle whatever comes my way.','select',Choices.choicesSet57),
]
export const alcDrugsQuestions: QuestionInterface[] = [
  makeQuestion('1','In your lifetime, which of the following substances have you ever used? (NON-MEDICAL USE ONLY)','label'),
  makeQuestion('2','Alcohol (beer, wine, spirits, etc.)','select',Choices.choicesSet29),
  makeQuestion('3','Cannabis (marijuana, pot, grass, hash, etc.)','select',Choices.choicesSet29),
  makeQuestion('4','Cocaine (coke, crack, etc.)','select',Choices.choicesSet29),
  makeQuestion('5','Amphetamine type stimulants (speed, diet pills, ecstasy, etc.)','select',Choices.choicesSet29),
  makeQuestion('6','Sedatives or sleeping pills (Valium, Serapax, Rohypnol, Ambien, etc.)','select',Choices.choicesSet29),
  makeQuestion('7','In the past three months, how often have you used each of the following substances? (NON-MEDICAL USE ONLY)','label',Choices.choicesSet20),
  makeQuestion('8','During the past three months, how often have you had a strong desire or urge to use [substance]?','label', Choices.choicesSet21),
  makeQuestion('9','During the past three months, how often has your use of [substance] led to health, social, legal, or financial problems?','label', Choices.choicesSet20),
  makeQuestion('10','During the past three months, how often have you failed to do what was normally expected of you because of your use of [substance]?','label', Choices.choicesSet22),
  makeQuestion('11','Has a friend or anyone else ever expressed concern because of your use of [substance]?','label', Choices.choicesSet23),
  makeQuestion('12','Have your ever tried and failed to control, cut down or stop using [substance]?','label', Choices.choicesSet23),
];

export const ptsQuestions: QuestionInterface[] = [
  makeQuestion('1','Repeated, disturbing memories, thoughts, or images of a stressful military experience from the past?','select',Choices.choicesSet24),
  makeQuestion('2','Repeated, disturbing dreams of a stressful military experience from the past?','select',Choices.choicesSet24),
  makeQuestion('3','Suddenly acting or feeling as if a stressful military experience were happening again (as if you were reliving it)? ','select',Choices.choicesSet24),
  makeQuestion('4','Feeling very upset when something reminded you of a stressful military experience from the past?','select',Choices.choicesSet24),
  makeQuestion('5','Having physical reactions (e.g., heart pounding, trouble breathing, or sweating) when something reminded you of a stressful military experience from the past? ','select',Choices.choicesSet24),
  makeQuestion('6','Avoiding thinking about or talking about a stressful military experience from the past or avoid having feelings related to it?','select',Choices.choicesSet24),
  makeQuestion('7','Avoid activities or situations because they remind you of a stressful military experience from the past? ','select',Choices.choicesSet24),
  makeQuestion('8','Trouble remembering important parts of a stressful military experience from the past?','select',Choices.choicesSet24),
  makeQuestion('9','Loss of interest in things that you used to enjoy?','select',Choices.choicesSet24),
  makeQuestion('10','Feeling distant or cut off from other people? ','select',Choices.choicesSet24),
  makeQuestion('11','Feeling emotionally numb or being unable to have loving feelings for those close to you?','select',Choices.choicesSet24),
  makeQuestion('12','Feeling as if your future will somehow be cut short? ','select',Choices.choicesSet24),
  makeQuestion('13','Trouble falling or staying asleep? ','select',Choices.choicesSet24),
  makeQuestion('14','Feeling irritable or having angry outbursts?','select',Choices.choicesSet24),
  makeQuestion('15','Having difficulty concentrating?','select',Choices.choicesSet24),
  makeQuestion('16','Being "super alert" or watchful on guard?','select',Choices.choicesSet24),
  makeQuestion('17','Feeling jumpy or easily startled?','select',Choices.choicesSet24),
];

export const depressionQuestions: QuestionInterface[] = [
  makeQuestion('1','How often have you been bothered by having little interest or pleasure in doing things?','select',Choices.choicesSet25),
  makeQuestion('2','How often have you been bothered by feeling down, depressed or hopeless?','select',Choices.choicesSet25),
  makeQuestion('3','Over the last two weeks, how often have you been bothered by any of the following problems? ','label'),
  makeQuestion('4','Trouble falling or staying asleep, or sleeping too much. ','select',Choices.choicesSet25),
  makeQuestion('5','Feeling tired or having little energy.','select',Choices.choicesSet25),
  makeQuestion('6','Poor appetite or overeating.','select',Choices.choicesSet25),
  makeQuestion('7','Feeling bad about yourself – or that  you are a failure or have let yourself or your family down. ','select',Choices.choicesSet25),
  makeQuestion('8','Trouble concentrating on things, such as reading the newspaper or watching television.  ','select',Choices.choicesSet25),
  makeQuestion('9',`Moving or speaking so slowly that other people 
could have noticed.  Or the opposite – being so 
fidgety or restless that you have been moving 
around a lot more than usual. `,'select',Choices.choicesSet25),
  makeQuestion('10','Thoughts that you would be better off dead, or of hurting yourself in some way. ','select',Choices.choicesSet25)
];

export const anxietyQuestions: QuestionInterface[] = [
  makeQuestion('1','Feeling nervous, anxious, or on edge','select',Choices.choicesSet25),
  makeQuestion('2','Not being able to stop or control worrying','select',Choices.choicesSet25),
  makeQuestion('3','Worrying too much about different things','select',Choices.choicesSet25),
  makeQuestion('4','Trouble relaxing','select',Choices.choicesSet25),
  makeQuestion('5','Being so restless that it\'s hard to sit still','select',Choices.choicesSet25),
  makeQuestion('6','Becoming easily annoyed or irritable','select',Choices.choicesSet25),
  makeQuestion('7','Feeling afraid as if something awful might happen','select',Choices.choicesSet25),
  makeQuestion('8','If you checked off any problems, how difficult have these made it for you to do your work, take care of things at home, or long with other people?','select',Choices.choicesSet26),
];

export const panicQuestions: QuestionInterface[] = [
  makeQuestion('1','In the last 4 weeks, have you had an anxiety attack - suddenly feeling fear or panic?','select',Choices.choicesSet29),
  makeQuestion('2','Has this ever happened before?','select',Choices.choicesSet29),
  makeQuestion('3','Do some of these attacks come suddenly out of the blue; that is, in situations where you don\'t expect to be nervous or uncomfortable?','select',Choices.choicesSet29),
  makeQuestion('4','Do these attacks bother you a lot or are you worried about having another attack?','select',Choices.choicesSet29),
  makeQuestion('5','Were you short of breath?','select',Choices.choicesSet29),
  makeQuestion('6','Did your heart race, pound, or skip?','select',Choices.choicesSet29),
  makeQuestion('7','Did you have chest pain or pressure?','select',Choices.choicesSet29),
  makeQuestion('8','Did you sweat?','select',Choices.choicesSet29),
  makeQuestion('9','Did you feel as if you were choking?','select',Choices.choicesSet29),
  makeQuestion('10','Did you have hot flashes or chills?','select',Choices.choicesSet29),
  makeQuestion('11','Did you have nausea or an upset stomach, or the feeling that you were going to have diarrhea?','select',Choices.choicesSet29),
  makeQuestion('12','Did you feel dizzy, unsteady, or faint?','select',Choices.choicesSet29),
  makeQuestion('13','Did you have tingling or numbness in parts of your body?','select',Choices.choicesSet29),
  makeQuestion('14','Did you tremble or shake?','select',Choices.choicesSet29),
  makeQuestion('15','Were you afraid you were dying?','select',Choices.choicesSet29)
];

export const physicalInjuryAssessmentQs: QuestionInterface[] = [
  makeQuestion('1','In response to the stress of my physical injury, I tend to...','label'),
  makeQuestion('2','...take action to fix things.','select',Choices.choicesSet27),
  makeQuestion('3','...not give up trying to solve problems I think I can solve.','select',Choices.choicesSet27),
  makeQuestion('4','...find a way to do what\'s necessary to carry on.','select',Choices.choicesSet27),
  makeQuestion('5','...pray or meditate.','select',Choices.choicesSet27),
  makeQuestion('6','...face my fears.','select',Choices.choicesSet27),
  makeQuestion('7','...find opportunity for growth.','select',Choices.choicesSet27),
  makeQuestion('8','...calm and comfort myself.','select',Choices.choicesSet27),
  makeQuestion('9','...try to "recharge" myself before I have to face the next challenge.','select',Choices.choicesSet27),
  makeQuestion('10','...see it as a challenge that will make me better.','select',Choices.choicesSet27),
  makeQuestion('11','...look at the problem in a number of ways.','select',Choices.choicesSet27),
  makeQuestion('12','...look for creative solutions to the problem.','select',Choices.choicesSet27),
  makeQuestion('13','...put things in perspective and realize I will have times of joy and times of sadness.','select',Choices.choicesSet27),
  makeQuestion('14','...be good at determining which situations are changeable and which are not.','select',Choices.choicesSet27),
  makeQuestion('15','...find meaning from the experience.','select',Choices.choicesSet27),
  makeQuestion('16','...find strength in the meaning, purpose, or mission of my life.','select',Choices.choicesSet27),
  makeQuestion('17','...know I will bounce back.','select',Choices.choicesSet27),
  makeQuestion('18','...expect that I can handle it.','select',Choices.choicesSet27),
  makeQuestion('19','...learn important and useful life lessons.','select',Choices.choicesSet27),
  makeQuestion('20','...understand that bad things can happen to anyone, not just me.','select',Choices.choicesSet27),
  makeQuestion('21','...lean on my faith in God or a higher power.','select',Choices.choicesSet27),
  makeQuestion('22','...draw upon lessons learned from failures and past mistakes.','select',Choices.choicesSet27),
  makeQuestion('23','...practice ways to handle it better next time.','select',Choices.choicesSet27)
];

export const resilienceAssessmentQs: QuestionInterface[] = [
  makeQuestion('1','During and after life’s most stressful events, I tend to...','label'),
  makeQuestion('2','...take action to fix things.','select',Choices.choicesSet27),
  makeQuestion('3','...not give up trying to solve problems I think I can solve.','select',Choices.choicesSet27),
  makeQuestion('4','...find a way to do what\'s necessary to carry on.','select',Choices.choicesSet27),
  makeQuestion('5','...pray or meditate.','select',Choices.choicesSet27),
  makeQuestion('6','...face my fears.','select',Choices.choicesSet27),
  makeQuestion('7','...find opportunity for growth.','select',Choices.choicesSet27),
  makeQuestion('8','...calm and comfort myself.','select',Choices.choicesSet27),
  makeQuestion('9','...try to "recharge" myself before I have to face the next challenge.','select',Choices.choicesSet27),
  makeQuestion('10','...see it as a challenge that will make me better.','select',Choices.choicesSet27),
  makeQuestion('11','...look at the problem in a number of ways.','select',Choices.choicesSet27),
  makeQuestion('12','...look for creative solutions to the problem.','select',Choices.choicesSet27),
  makeQuestion('13','...put things in perspective and realize I will have times of joy and times of sadness.','select',Choices.choicesSet27),
  makeQuestion('14','...be good at determining which situations are changeable and which are not.','select',Choices.choicesSet27),
  makeQuestion('15','...find meaning from the experience.','select',Choices.choicesSet27),
  makeQuestion('16','...find strength in the meaning, purpose, or mission of my life.','select',Choices.choicesSet27),
  makeQuestion('17','...know I will bounce back.','select',Choices.choicesSet27),
  makeQuestion('18','...expect that I can handle it.','select',Choices.choicesSet27),
  makeQuestion('19','...learn important and useful life lessons.','select',Choices.choicesSet27),
  makeQuestion('20','...understand that bad things can happen to anyone, not just me.','select',Choices.choicesSet27),
  makeQuestion('21','...lean on my faith in God or a higher power.','select',Choices.choicesSet27),
  makeQuestion('22','...draw upon lessons learned from failures and past mistakes.','select',Choices.choicesSet27),
  makeQuestion('23','...practice ways to handle it better next time.','select',Choices.choicesSet27)
]

export const sleepAssessmentQs: QuestionInterface[] = [
  makeQuestion('1','I feel sleepy during the day, even when I get a good night\'s sleep.','select',Choices.choicesSet28),
  makeQuestion('2','I get very irritable when I can\'t sleep.','select',Choices.choicesSet28),
  makeQuestion('3','I often wake up at night and have trouble falling back to sleep.','select',Choices.choicesSet28),
  makeQuestion('4','It usually takes me a long time to fall asleep.','select',Choices.choicesSet28),
  makeQuestion('5','I often wake up very early and can\'t fall back to sleep.','select',Choices.choicesSet28),
  makeQuestion('6','I usually feel achy and stiff when I wake up in the morning.','select',Choices.choicesSet28),
  makeQuestion('7','I often seem to wake up because of dreams.','select',Choices.choicesSet28),
  makeQuestion('8','I sometimes wake up gasping for breath.','select',Choices.choicesSet28),
  makeQuestion('9','My bed partner says my snoring keeps her/him from sleeping.','select',Choices.choicesSet28),
  makeQuestion('10','I\'ve fallen asleep driving.','select',Choices.choicesSet28),
]

export const generosityAssessmentQs: QuestionInterface[] = [
  makeQuestion('1','When one of my loved ones needs my attention, I really try to slow down and give them the time and help they need.','select',Choices.choicesSet12),
  makeQuestion('2','I am known by family and friends as someone who makes time to pay attention to others\' problems.','select',Choices.choicesSet12),
  makeQuestion('3','I\'m the kind of person who is willing to go the "extra mile" to help take care of my friends, relatives, and acquaintances.','select',Choices.choicesSet12),
  makeQuestion('4','When friends or family members experience something upsetting or discouraging, I make a special point of being kind to them.','select',Choices.choicesSet12),
  makeQuestion('5','When it comes to my personal relationships with others, I am a very generous person.','select',Choices.choicesSet12),
  makeQuestion('6','It makes me very happy to give to other people in ways that meet their needs.','select',Choices.choicesSet12),
  makeQuestion('7','It is just as important to me that other people around me are happy and thriving as it is that I am happy and thriving.','select',Choices.choicesSet12),
  makeQuestion('8','My decisions are often based on concern for the welfare of others.','select',Choices.choicesSet12),
  makeQuestion('9','I am usually willing to risk my own feelings being hurt in the process if I stand a chance of helping someone else I need.','select',Choices.choicesSet12),
  makeQuestion('10','I make it a point to let my friends and family know how much I love and appreciate them.','select',Choices.choicesSet12)
];

export const optimismAssessmentQs: QuestionInterface[] = [
  makeQuestion('1','In uncertain times, I usually expect the best.','select',Choices.choicesSet40),
  makeQuestion('2','It\'s easy for me to relax.','select',Choices.choicesSet42),
  makeQuestion('3','If something can go wrong for me it will.','select',Choices.choicesSet41),
  makeQuestion('4','I am always optimistic about my future','select',Choices.choicesSet40),
  makeQuestion('5','I enjoy my friends a lot.','select',Choices.choicesSet42),
  makeQuestion('6','It\'s important for me to keep busy.','select',Choices.choicesSet42),
  makeQuestion('7','I hardly ever expect things to go my way.','select',Choices.choicesSet41),
  makeQuestion('8','I don\'t get upset too easily.','select',Choices.choicesSet42),
  makeQuestion('9','I rarely count on good things happening to me.','select',Choices.choicesSet41),
  makeQuestion('10','Overall, I expect more good things to happen to me than bad.','select',Choices.choicesSet40)
];
export const worryAssessmentQs: QuestionInterface[] = [
  makeQuestion('1','If I do not have enough time to do everything, I do not worry about it.','select',Choices.choicesSet35),
  makeQuestion('2','My worries overwhelm me.','select',Choices.choicesSet34),
  makeQuestion('3','I do not tend to worry about things.','select',Choices.choicesSet35),
  makeQuestion('4','Many situations make me worry.','select',Choices.choicesSet34),
  makeQuestion('5','I know I should not worry about things, but I just cannot help it.','select',Choices.choicesSet34),
  makeQuestion('6','When I am under pressure I worry a lot.','select',Choices.choicesSet34),
  makeQuestion('7','I am always worrying about something.','select',Choices.choicesSet34),
  makeQuestion('8','I find it easy to dismiss worrisome thoughts.','select',Choices.choicesSet35),
  makeQuestion('9','As soon as I finish one task, I start to worry about everything else I have to do.','select',Choices.choicesSet34),
  makeQuestion('10','I never worry about anything.','select',Choices.choicesSet35),
  makeQuestion('11','When there is nothing more I can do about a concern, I do not worry about it anymore.','select',Choices.choicesSet35),
  makeQuestion('12','I have been a worrier all my life.','select',Choices.choicesSet34),
  makeQuestion('13','I notice that I have been worrying about things.','select',Choices.choicesSet34),
  makeQuestion('14','Once I start worrying, I cannot stop.','select',Choices.choicesSet34),
  makeQuestion('15','I worry all the time.','select',Choices.choicesSet34),
  makeQuestion('16','I worry about projects until they are all done.','select',Choices.choicesSet34),
]

export const friendShipQuestions: QuestionInterface[] = [
  makeQuestion(1,'It has been easy to relate to others.','select',Choices.choicesSet2),
  makeQuestion(2,'I felt isolated from other people.','select',Choices.choicesSet3),
  makeQuestion(3,'I had someone to share my feelings with.','select',Choices.choicesSet2),
  makeQuestion(4,'I found it easy to get in touch with others when I needed to.','select',Choices.choicesSet2),
  makeQuestion(5,'When with other people, I felt separate from them.','select',Choices.choicesSet3),
  makeQuestion(6,'I felt alone and friendless.','select',Choices.choicesSet3)
];

export const marraigeHappinessQuestion = makeQuestion(
      1, 
      'Which describes the degree of happiness of your present marriage?',
      'select',
      Choices.choicesSet4
      );

export const maritalSatisfactionQuestions: QuestionInterface[] = [
  marraigeHappinessQuestion,
  makeQuestion(2,'Handling Family Finances','select',Choices.choicesSet5),
  makeQuestion(3,'Matters of Recreation','select',Choices.choicesSet5),
  makeQuestion(4,'Demonstration of Affection','select',Choices.choicesSet6),
  makeQuestion(5,'Friends','select',Choices.choicesSet5),
  makeQuestion(6,'Sex Relations','select',Choices.choicesSet7),
  makeQuestion(7,'Conventionality (right, good, or proper conduct)','select',Choices.choicesSet5),
  makeQuestion(8,'Philosophy of Life','select',Choices.choicesSet5),
  makeQuestion(9,'Ways of dealing with in-laws','select',Choices.choicesSet5),
  makeQuestion(10,'When disagreements arise, they usually result in:','select', Choices.choicesSet13),
  makeQuestion(11,'Do you and your mate engage in outside interests together?','select', Choices.choicesSet14),
  makeQuestion(12,'In leisure time do you generally prefer:','select',Choices.choicesSet15),
  makeQuestion(13,'Do you ever wish you had not married?','select',Choices.choicesSet16),
  makeQuestion(14,'If you had your life to live over again, do you think you would:','select',Choices.choicesSet17),
  makeQuestion(15,'Do you ever confide in your mate:','select',Choices.choicesSet18)
];