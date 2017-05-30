

  declare namespace assessments{
    interface AssessmentInterface{
      onSubmit?(error: any, data: any): void;
      values?: any;
    }

    export class FriendShip implements AssessmentInterface{

    }

    export class MaritalSatisfaction implements AssessmentInterface{
      
    }
    
    export class PostDeploymentSocialSupport implements AssessmentInterface{
      
    }

    export class SocialSupport  implements AssessmentInterface{
      
    }

  }