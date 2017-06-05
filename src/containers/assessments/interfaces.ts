import {AssessmentInterface} from '../../res/data/assessments';

export interface AssessmentProps { 
  onSubmit?(error: any, data: any): void;
  onCancel?(error: any,assessment: AssessmentInterface): void;
  values?: any;
}
