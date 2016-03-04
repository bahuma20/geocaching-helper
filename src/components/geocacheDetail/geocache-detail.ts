import {Component} from 'angular2/core';
import {GeocacheService} from '../../services/geocache-service';
import {RouteParams} from 'angular2/router';
import {GeocacheEntry} from '../../models/GeocacheEntry';

@Component({
  selector: 'geocache-detail',
  styles: [ require('./geocache-detail.css') ],
  template: require('./geocache-detail.html'),
})
export class GeocacheDetail {
  public entry: GeocacheEntry;

  constructor(public geocacheService: GeocacheService, routeParams: RouteParams ) {
    this.entry = geocacheService.getEntryById(routeParams.get('id'));
  }
}
