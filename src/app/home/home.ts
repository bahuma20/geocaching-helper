import {Component} from 'angular2/core';
import {GeocacheListComponent} from '../geocacheList/geocache-list';
import {LoadDataFromFileComponent} from '../loadDataFromFile/load-data-from-file';

@Component({
  selector: 'home',
  pipes: [ ],
  styles: [ require('./home.css') ],
  template: require('./home.html'),
  directives: [GeocacheListComponent, LoadDataFromFileComponent]
})
export class Home {
  constructor() {

  }

  ngOnInit() {
  }

}
