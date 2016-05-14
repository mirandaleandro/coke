import { Component, OnInit } from '@angular/core';
import {MdButton} from '@angular2-material/button/button';
import {MdCheckbox} from '@angular2-material/checkbox/checkbox';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card/card';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon/icon';


@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [
    MdButton,
    MdCheckbox,
    MdToolbar,
    MdIcon,
    MD_SIDENAV_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_LIST_DIRECTIVES],
    providers:[MdIconRegistry]
})
export class DashboardComponent implements OnInit {

  views: Object[] = [
    {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment ind"
    },
    {
      name: "Potential dates",
      description: "Find your soulmate!",
      icon: "pets"
    }
  ];
  dogs: Object[] = [
    { name: "Porter" },
    { name: "Mal" },
    { name: "Razzle" },
    { name: "Koby" },
    { name: "Molly" },
    { name: "Husi" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
