import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {GeocacheEntry} from '../models/GeocacheEntry';
import {GeocacheStage} from '../models/GeocacheStage';

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

  exportDataToJSON(): String {
    return JSON.stringify(this.entries, null, 2);
  }

  importDummyData(): void {
    let jsonString = '[{"id":"GC5J942","title":"Bernlohe bei Nacht","stages":[{"stageNumber":1,"foundValue":{"key":"A","value":"5"},"annotation":""},{"stageNumber":2,"foundValue":{"key":"B","value":"8"},"annotation":""},{"stageNumber":3,"foundValue":{"key":"C","value":"3"},"annotation":""},{"stageNumber":4,"foundValue":{"key":"X","value":"0"},"annotation":"Auf der Rueckseite des Zettels stehen die Koordinaten fuer Stage 5"},{"stageNumber":5,"foundValue":{"key":"Y","value":"4"},"annotation":""},{"stageNumber":6,"foundValue":{"key":"Z","value":"1"},"annotation":""}],"finalHint":"N 49° 21.(PLN-30)E 011° 06.(MKO+890)","solvingMethod":"ROT 13","finalCoordinates":"N 49° 21.315E 011° 06.998","annotations":"Auf dem Zettel von Stage 4 stehen hinten die Koordinaten von Stage 5"}]';
    let json = JSON.parse(jsonString);
    this.importDataFromJSON(json);
  }
}
