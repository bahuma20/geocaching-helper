import {GeocacheStage} from './GeocacheStage';

export class GeocacheEntry {
  public id: string = '';
  public title: string = '';
  public stages: GeocacheStage[] = [];
  public finalHint: string = '';
  public solvingMethod: string = '';
  public finalCoordinates: string = '';
  public annotations: string = '';
}
