import {Component} from 'React';
//import {AssessmentRoutesConfig} from './src/routes';
//import {AssessmentInterface} from './src/res/data/assessments';
interface AssessmentInterface{
  onSubmit?(error: any, data: any): void;
  values?: any;
}

export function createRoutes(config: any): void;



export namespace assessments {
    /*~ For example, given this definition, someone could write:
     *~   import { assessments } from 'yourModule';
     *~   assessments.FriendShip;
     *~ or
     *~   import * as yourMod from 'yourModule';
     *~   yourMod.assessments.FriendShip;
     */
    export class FriendShip extends Component<null, null> implements AssessmentInterface{

    }

    export class MaritalSatisfaction extends Component<null, null> implements AssessmentInterface{
      
    }

    export class PostDeploymentSocialSupport extends Component<null, null> implements AssessmentInterface{
      
    }

    export class SocialSupport extends Component<null, null> implements AssessmentInterface{
      
    }
}