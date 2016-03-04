export interface FoundValue {
  key: string;
  value: string;
  bonuskey?: string;
  bonusvalue?: string;
}

export class GeocacheStage {
  public stageNumber: number;
  public annotation: string;
  public foundValue: FoundValue;

  constructor(stageNumber: number, foundValue: FoundValue, annotation: string) {
    this.stageNumber = stageNumber;
    this.foundValue = foundValue;
    this.annotation = annotation;
  }
}
