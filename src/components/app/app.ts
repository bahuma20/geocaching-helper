/*
 * Angular 2 decorators and services
 */

import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {FORM_PROVIDERS} from '../../../node_modules/angular2/common.d';
import {Home} from '../home/home';
import {GeocacheDetail} from '../geocacheDetail/geocache-detail';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  directives: [ ROUTER_DIRECTIVES ],
  pipes: [],
  styles: [require('./app.css')],
  template: require('./app.html')
})
@RouteConfig([
  { path: '/', component: Home, name: 'Index' },
  { path: '/list', component: Home, name: 'List' },
  { path: '/detail/:id', component: GeocacheDetail, name: 'GeocacheDetail'},
  { path: '/**', redirectTo: ['Index'] }
])
export class App {
  constructor() { }
}
