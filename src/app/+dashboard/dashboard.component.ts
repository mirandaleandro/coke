import { Component, OnInit } from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {MdCheckbox} from '@angular2-material/checkbox/checkbox';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives:[MdButton, MdCheckbox]
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
