import {Page} from 'ionic-angular/index';
import {Nav} from 'ionic-angular/index';
import {NavController} from 'ionic-angular/index';
import {NavParams} from 'ionic-angular/index';
import {GeocacheService} from '../../services/geocache-service';
import {GeocacheEntry} from '../../models/GeocacheEntry';

@Page ({
  templateUrl: 'build/pages/geocache-detail/geocache-detail.html',
})
export class GeocacheDetailPage {
  private entry: GeocacheEntry;

  constructor(private nav: NavController, navParams: NavParams, geocacheService: GeocacheService) {
    console.log(geocacheService);
    this.entry = navParams.data.entry;
  }
}
