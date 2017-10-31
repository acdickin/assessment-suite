import { normalize, schema } from 'normalizr';
import * as Qs from './assessmentsQs';
import * as Scoring from './Scoring'
var path = require('path');

const assessmentSchema = new schema.Entity('assessment');
const assessmentListSchema = new schema.Array(assessmentSchema);

export interface AssessmentInterface{
  id: number;
  title: string;
  maxScore: number;
  middleScore: number;
  minScore: number;
  scoringMode: number;
  scoring: Scoring.ScoringInterface[];
  questions: Qs.QuestionInterface[];
  image: string;
  calcQuestions(values: any): Qs.QuestionInterface[];
  calcScore(values: any): number;
  validate(data:{[propName: string]: string}): {data: {[propName: string]: string}, isValid: boolean}
}
const defaultCalcQuestion = function(values: any){

      return this.questions;
}

const defaultCalcScore = function(values: any){

    function tallyScore (answers, questions) {
      var total = 0;
   
      Object.keys(questions).map(function (idx) {
          let question = questions[idx];
          if(answers && typeof answers[question.id] !== 'undefined'){
            let choiceValue = answers[question.id];
            let choices = questions[idx].choices;

            if(choices){
              choices.map((choice) => {
                if(choice.value === choiceValue){
                  total += parseInt(choice.score);
                }
              });
            }
          }
      });

      return total;
    }


    return tallyScore(values,this.questions);
}
function defaultValidation(data:{[propName: string]: string}): { data:{[propName: string]: string}, isValid: boolean} {
    let hasErrors = false;

    const filteredData = this.calcQuestions(data)
        .filter((question) => {
          return question.type !== 'label'
        })
        .reduce((acc,question) => {
            acc[question.id] = typeof data[question.id] !== 'undefined' ? data[question.id] : '';
            return acc;
        },{});

    const reduceCb = (errors, name) => {
      if(filteredData[name].length === 0){
        hasErrors = true;
        errors[name] = 'Required.';
      } else {
        errors[name] = '';
      }
      
      return errors;
    };

    const errors = Object.keys(filteredData)
      .map((propName) => propName)
      .reduce(reduceCb,{});

      console.log(errors);

    return {
      data: errors,
      isValid: !hasErrors
    }
}

export const makeAssessment = (id,title, minScore: number, middleScore: number, maxScore: number, scoring: Scoring.ScoringInterface[], scoringMode: number, questions: Qs.QuestionInterface[], image='',calcQuestions: (any) => any = defaultCalcQuestion, calcScore: (any) => any = defaultCalcScore,validate: (any) => any = defaultValidation ):AssessmentInterface => {
  return {
    id,
    title,
    minScore,
    middleScore,
    maxScore,
    scoring,
    scoringMode,//1: High score is good, 0: high score is bad
    questions,
    image,
    calcQuestions,
    calcScore,
    validate
  }
}

const alcImage = 'res/images/Alcohol_and_Drugs.jpg';
const ptsImage = 'res/images/Post_Traumatic_Stress.jpg';
const depressImage = 'res/images/Depression.jpg';
const anxietyImage = 'res/images/Anxiety.jpg';
const panicImage = 'res/images/Panic.jpg';
const physInjuryImage = 'res/images/PhysicaI_Injury_Resilience.jpg';
const sleepImage = 'res/images/Sleep.jpg';

const friendsImage = 'res/images/Friendship_Scale.jpg';
const marriageImage  = 'res/images/Marital_Satisfaction.jpg';
const socialImage  = 'res/images/Perceived_Social_Support.jpg';
const postDepSocialImage = 'res/images/Post_Deployment_Social_Support.jpg';
const parentingConfidenceImage = 'res/images/Parenting_Confidence.jpg';
const angerImage = panicImage;
const stressImage = postDepSocialImage;
const stigmaImage = ptsImage;

const hopeImage ='res/images/Hope.png';
const spiritualImage='res/images/Spirituality.png';
const caregiverStressImage='res/images/Caregiver.png';
const forgivenessImage = 'res/image/Forgiveness.png';

//todo make this image work
//const mTBIImage = 'res/image/mTBI.png';;
const mTBIImage = ptsImage;
//const nicotineImage = 'res/image/Nicotine.png';
const nicotineImage = stressImage;
//const satisfactionImage ='res/image/Satisfaction.png';
const satisfactionImage = hopeImage;
//const sexualTraumaImage ='res/image/SexualTrauma.png';
const sexualTraumaImage =stressImage;
//const  workAdjustmentImage ='res/image/WorkAdjustment.png';
const  workAdjustmentImage=stressImage;


export interface AssessmentTreeInterface {
  [propName: string]: AssessmentInterface;
}

export const FriendShipAssessment = makeAssessment(1,'Friendship Scale', 0, 17, 24,Scoring.FriendshipScaleList,1,Qs.friendShipQuestions,friendsImage);
export const MaritalAssessment = makeAssessment(2,'Marital Satisfaction', 2, 92, 158,Scoring.MaritalSatisfactionList,1,Qs.maritalSatisfactionQuestions,marriageImage);
export const SocialSupportAssessment = makeAssessment(3,'Perceived Social Support', 12, 58, 84, Scoring.PerceivedSocialSupportList, 1, Qs.percSocialSupportQuestions, socialImage);
export const PostDeploymentSocialSupportAssessment = makeAssessment(4,'Post Deployment Social Support', 15, 49, 75,Scoring.PostDeploymentSocialSupportList, 0, Qs.postDepSupportQuestions,postDepSocialImage);
export const ParentingConfidenceAssessment = makeAssessment(5,'Parenting Confidence', 16, 60, 96,Scoring.ParentingConfidenceList,1,Qs.parentingConfidenceAssessment,parentingConfidenceImage);
export const AlcoholDrugsAssessment = makeAssessment(6,'Alcohol and Drugs', 0, 22, 38, Scoring.AlcoholDrugsList,0,Qs.alcDrugsQuestions,alcImage,Scoring.calcAlcDrugQuestions,Scoring.calcDrugsScore);
export const PostTraumaticStressAssessment =  makeAssessment(7,'Post-Traumatic Stress', 17, 39, 85,Scoring.PostTraumaticStressList, 0, Qs.ptsQuestions, ptsImage);
export const DepressionAssessment =  makeAssessment(8,'Depression', 0, 10, 27,Scoring.DepressionList, 0, Qs.depressionQuestions, depressImage);
export const AnxietyAssessment =  makeAssessment(9,'Anxiety', 0, 8.5, 21, Scoring.AnxietyList, 0, Qs.anxietyQuestions,anxietyImage);
export const PanicAssessment =  makeAssessment(10,'Panic', 0, 31, 60, Scoring.PanicList, 0, Qs.panicQuestions, panicImage, Scoring.calcPanicQuestions, Scoring.calcPanicScore);
export const PhysicalAssessment =  makeAssessment(11,'Physical Injury Resilience', 0, 60, 88, Scoring.PhysicalInjuryResilienceList, 1, Qs.physicalInjuryAssessmentQs,physInjuryImage);
export const SleepAssessment =  makeAssessment(12,'Sleep', 0, 1.5, 10, Scoring.SleepList, 0, Qs.sleepAssessmentQs,sleepImage);
export const AngerAssessment = makeAssessment(13,'Anger', 0, 32.5, 56, Scoring.AngerList, 0, Qs.angerQuestions,panicImage);
export const StressAssessment = makeAssessment(14,'Stress', 0, 18, 40, Scoring.StressList, 0, Qs.stressQuestions,stressImage);
export const StigmaAssessment = makeAssessment(15,'Stigma', 10, 27.5, 50, Scoring.StigmaList, 0, Qs.stigmaQuestions,stigmaImage);
export const WorryAssessment = makeAssessment(16,'Worry', 16, 38, 80, Scoring.WorryList, 0, Qs.worryAssessmentQs,stigmaImage);
export const ResilienceAssessment =  makeAssessment(17,'Resilience', 0, 60, 88, Scoring.PhysicalInjuryResilienceList, 1, Qs.resilienceAssessmentQs,physInjuryImage);
export const ForgivenessAssessment =  makeAssessment(18,'Forgiveness', 0, 70, 126, Scoring.ForgivenessList, 1, Qs.forgivenessQuestions,postDepSocialImage);
export const GratitudeAssessment =  makeAssessment(19,'Gratitude', 0, 38, 42, Scoring.GratitudeList, 1, Qs.gratitudeAssessmentQs,socialImage);
export const GenerosityAssessment =  makeAssessment(20,'Generosity', 0, 51, 60, Scoring.GenerosityList, 1, Qs.generosityAssessmentQs,friendsImage);
export const OptimismAssessment =  makeAssessment(21,'Optimism', 0, 16, 24, Scoring.OptimismList, 1, Qs.optimismAssessmentQs, friendsImage);
export const HopeAssessment = makeAssessment(22,'Hope', 8,  16 , 32, Scoring.HopeList, 1, Qs.hopeAssessmentQs, hopeImage);
export const SpiritualityAssessment =makeAssessment(23,'Spirituality', 14, 28, 56, Scoring.SpiritualityList, 1 ,Qs.spiritualityAssessmentsQs, spiritualImage);
export const CaregiverStressAssessment = makeAssessment(24, 'Caregiver Stress', 2,19,36, Scoring.CaregiverStressList, 1, Qs.CaregiverStressAssessmentsQs, caregiverStressImage);
export const mTBIAssessment = makeAssessment(25,'mTBI', 13, 71, 130, Scoring.mTBISymptomManagementList, 1, Qs.mTbiQs, mTBIImage);
export const NicotineAssessment =makeAssessment(26,'Nicotine',2, 6, 10, Scoring.NicotineDependenceList, 1, Qs.NicotineAssessmentsQs, nicotineImage);
export const SatisfactionAssessment =makeAssessment(27,'Satisfaction', 5, 20, 35,  Scoring.SatisfactionwithLifeList, 1, Qs.SatisfactionAssessmentsQs, satisfactionImage);
export const SexualTraumaAssessment= makeAssessment(28,'Sexual Harassment, Assult, and Trauma', 17, 51 ,85, Scoring.SexualTraumaList, 1, Qs.SexualTraumaAssessmentsQs, sexualTraumaImage);
export const WorkAdjustmentAssessment = makeAssessment(29,'Work Adjustment', 10, 30, 40, Scoring.WorkAdjustmentList, 0, Qs.WorkAdjustmentAssessmentsQs, workAdjustmentImage)
const assessmentsRaw: AssessmentInterface[] = [
  FriendShipAssessment,
  MaritalAssessment,
  SocialSupportAssessment,
  PostDeploymentSocialSupportAssessment,
  ParentingConfidenceAssessment,
  AlcoholDrugsAssessment,
  PostTraumaticStressAssessment,
  DepressionAssessment, //TODO fix depression results page - and questions - Gauge indicator is missing
  AnxietyAssessment,
  PanicAssessment,
  PhysicalAssessment,
  SleepAssessment,
  AngerAssessment,
  StressAssessment,
  StigmaAssessment,
  WorryAssessment,
  ResilienceAssessment,
  ForgivenessAssessment,
  GratitudeAssessment,
  GenerosityAssessment,
  OptimismAssessment,
  HopeAssessment,
  SpiritualityAssessment,
  CaregiverStressAssessment,
  ForgivenessAssessment,
  mTBIAssessment,
  NicotineAssessment,
  SatisfactionAssessment,
  SexualTraumaAssessment,
  WorkAdjustmentAssessment
];

//TODO
/*
Stress
Stigma
*/

const normalData = normalize(assessmentsRaw,assessmentListSchema);

export const assessments: AssessmentTreeInterface = normalData.entities.assessment;

export const assessmentIds = normalData.result;
