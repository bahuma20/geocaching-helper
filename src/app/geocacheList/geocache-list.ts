import {Component} from 'angular2/core';
import {GeocacheService} from './services/geocache-service';
import {RouterLink} from 'angular2/router';

@Component({
  selector: 'geocache-list',
  //providers: [GeocacheService],
  pipes: [],
  template: require('./geocache-list.html'),
  styles: [require('./geocache-list.css')],
  directives: [RouterLink]
})
export class GeocacheListComponent {

  constructor(public geocacheService: GeocacheService) {
    console.log(this.geocacheService);
    console.log(this.geocacheService.getEntryById('GC5J942'));
  }
}
