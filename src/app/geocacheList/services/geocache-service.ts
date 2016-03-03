import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {GeocacheEntry} from '../../../models/GeocacheEntry';
import {GeocacheStage} from '../../../models/GeocacheStage';

@Injectable()
export class GeocacheService {
  public entries: GeocacheEntry[] = [];

  constructor(public http: Http) {

    this.entries = this.getData();
  }

  getData(): GeocacheEntry[] {
    //return this.http.get('/assets/data.json')
    // .map(res => res.json());
    return [];

  }

  importDataFromJSON(json): void {

    let result: GeocacheEntry[] = [];

    json.forEach((entryData) => {
      let entry = new GeocacheEntry();
      entry.id = entryData.id;
      entry.title = entryData.title;
      entry.finalHint = entryData.finalHint;
      entry.solvingMethod = entryData.solvingMethod;
      entry.finalCoordinates = entryData.finalCoordinates;
      entry.annotations = entryData.annotations;

      entryData.stages.forEach((stageData) => {
        entry.stages.push(new GeocacheStage(stageData.stageNumber, {
          key: stageData.foundValue.key,
          value: stageData.foundValue.value}, stageData.annotation));
      });

      result.push(entry);
    });

    this.entries = result;
  }

  ngOnInit() {
  }

  getEntryById(id: string): GeocacheEntry {
    let result: GeocacheEntry;

    this.entries.forEach((entry, index) => {
      if (entry.id === id) {
        result = entry;
      }
    });

    if (result) {
      return result;
    }

    return null;
  }

}
