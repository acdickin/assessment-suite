import {Component} from 'React';

//import {AssessmentInterface} from './src/res/data/assessments';
interface AssessmentComponentInterface{
  onSubmit?(error: any, data: any): void;
  values?: any;
}



export interface AssessmentInterface{
    id: number|string;
    image: string;
}
interface AssessmentRoutesConfig{
  ids: number[]|string[];
  itemClick(assessment: AssessmentInterface): void;
  loadImages?: boolean;
  onCancel?(error: any, assessment: AssessmentInterface): void;
  onSubmit?(error: any, data: any, assessment: AssessmentInterface): void;
}

export function createRoutes(config: AssessmentRoutesConfig,cb?: (assessment: AssessmentInterface) => AssessmentInterface): JSX.Element;
export function createPlainRoutes(config: AssessmentRoutesConfig,cb?: (assessment: AssessmentInterface) => AssessmentInterface): {AssessmentPageRoute: any, AssessmentsRoute: any};
export namespace assessments {
    /*~ For example, given this definition, someone could write:
     *~   import { assessments } from 'yourModule';
     *~   assessments.FriendShip;
     *~ or
     *~   import * as yourMod from 'yourModule';
     *~   yourMod.assessments.FriendShip;
     */
    class AssessmentBase extends Component<null, null> implements AssessmentComponentInterface{
      onSubmit(error: any, data: any): void; 
      values: any;
    }

    export class FriendShip extends AssessmentBase{

    }

    export class MaritalSatisfaction extends AssessmentBase{
      
    }

    export class PostDeploymentSocialSupport extends AssessmentBase{
      
    }

    export class SocialSupport extends AssessmentBase{
      
    }

    export class Sleep extends AssessmentBase{
      
    }

    export class Panic extends AssessmentBase{
      
    }

    export class PostTraumaticStress extends AssessmentBase{
      
    }

    export class Depression extends AssessmentBase{
      
    }

    export class AlcoholDrugs extends AssessmentBase{
      
    }

    export class Anxiety extends AssessmentBase{
      
    }

    export class Physical extends AssessmentBase{
      
    }

    export class ParentingConfidence extends AssessmentBase{
      
    }

    export class Anger extends AssessmentBase{
      
    }

    export class Stress extends AssessmentBase{
      
    }

    export class Stigma extends AssessmentBase{
      
    }

    export class Worry extends AssessmentBase {
      
    }
}