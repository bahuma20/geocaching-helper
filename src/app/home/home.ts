import {Component} from 'angular2/core';
import {GeocacheListComponent} from '../geocacheList/geocache-list';
import {LoadDataFromFileComponent} from '../loadDataFromFile/load-data-from-file';
import {ExportDataToFileComponent} from '../exportDataToFile/export-data-to-file';

@Component({
  selector: 'home',
  pipes: [ ],
  styles: [ require('./home.css') ],
  template: require('./home.html'),
  directives: [GeocacheListComponent, LoadDataFromFileComponent, ExportDataToFileComponent]
})
export class Home {
  constructor() {

  }

  ngOnInit() {
  }

}
