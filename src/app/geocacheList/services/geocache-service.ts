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
    let cache1: GeocacheEntry = new GeocacheEntry();
    cache1.id = 'GC5J942';
    cache1.title = 'Bernlohe bei Nacht';
    cache1.finalHint = 'N 49° 21.(PLN-30)\nE 011° 06.(MKO+890)';
    cache1.solvingMethod = 'ROT 13';
    cache1.finalCoordinates = 'N 49° 21.315\nE 011° 06.998';
    cache1.annotations = 'Auf dem Zettel von Stage 4 stehen hinten die Koordinaten von Stage 5';
    cache1.stages.push(new GeocacheStage(1, {key: 'A', value: '5'}, ''));
    cache1.stages.push(new GeocacheStage(2, {key: 'B', value: '8'}, ''));
    cache1.stages.push(new GeocacheStage(3, {key: 'C', value: '3'}, ''));
    cache1.stages.push(new GeocacheStage(4, {key: 'X', value: '0'},
      'Auf der Rueckseite des Zettels stehen die Koordinaten fuer Stage 5'));
    cache1.stages.push(new GeocacheStage(5, {key: 'Y', value: '4'}, ''));
    cache1.stages.push(new GeocacheStage(6, {key: 'Z', value: '1'}, ''));
    return [cache1];
    //return this.http.get('/assets/data.json')
    // .map(res => res.json());
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
