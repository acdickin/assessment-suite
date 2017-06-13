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
    export class FriendShip extends Component<null, null> implements AssessmentComponentInterface{

    }

    export class MaritalSatisfaction extends Component<null, null> implements AssessmentComponentInterface{
      
    }

    export class PostDeploymentSocialSupport extends Component<null, null> implements AssessmentComponentInterface{
      
    }

    export class SocialSupport extends Component<null, null> implements AssessmentComponentInterface{
      
    }

    export class Sleep extends Component<null, null> implements AssessmentComponentInterface{
      
    }

    export class Panic extends Component<null, null> implements AssessmentComponentInterface{
      
    }

    export class PostTraumaticStress extends Component<null, null> implements AssessmentComponentInterface{
      
    }

    export class Depression extends Component<null, null> implements AssessmentComponentInterface{
      
    }

    export class AlcoholDrugs extends Component<null, null> implements AssessmentComponentInterface{
      
    }

    export class Anxiety extends Component<null, null> implements AssessmentComponentInterface{
      
    }

    export class Physical extends Component<null, null> implements AssessmentComponentInterface{
      
    }

    export class ParentingConfidence extends Component<null, null> implements AssessmentComponentInterface{
      
    }

    export class Anger extends Component<null, null> implements AssessmentComponentInterface{
      
    }

    export class Stress extends Component<null, null> implements AssessmentComponentInterface{
      
    }

    export class Stigma extends Component<null, null> implements AssessmentComponentInterface{
      
    }

    export class Worry extends Component<null, null> implements AssessmentComponentInterface{
      
    }
}