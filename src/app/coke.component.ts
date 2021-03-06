import { Component } from '@angular/core';
import { DashboardComponent } from './+dashboard';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'coke-app',
  templateUrl: 'coke.component.html',
  styleUrls: ['coke.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/dashboard', component: DashboardComponent}
])
export class CokeAppComponent {
  title = 'coke works!';
}
