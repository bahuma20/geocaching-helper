import {Page} from 'ionic-angular/index';
import {GeocacheService} from '../../services/geocache-service';
import {NavController} from 'ionic-angular/index';
import {GeocacheDetailPage} from '../geocache-detail/geocache-detail';
import {LoadDataFromFileComponent} from '../../components/loadDataFromFile/load-data-from-file';

@Page ({
  templateUrl: 'build/pages/geocache-list/geocache-list.html',
  directives: [LoadDataFromFileComponent]
})
export class GeocacheListPage {
  constructor(public geocacheService: GeocacheService, private nav: NavController) { }

  itemTapped(event, entry) {
    this.nav.push(GeocacheDetailPage, {
      entry: entry
    });
  }
}
