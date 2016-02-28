import {Component} from 'angular2/core';
import {GeocacheListComponent} from '../geocacheList/geocache-list';

@Component({
  selector: 'home',
  pipes: [ ],
  styles: [ require('./home.css') ],
  template: require('./home.html'),
  directives: [GeocacheListComponent]
})
export class Home {
  constructor() {

  }

  ngOnInit() {
  }

}
