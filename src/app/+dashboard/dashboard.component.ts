import { Component, OnInit } from '@angular/core';
import {MdButton} from '@angular2-material/button/button';
import {MdCheckbox} from '@angular2-material/checkbox/checkbox';
import {MdCard} from '@angular2-material/card/card';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';


@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives:[MdButton, MdCheckbox, MdCard, MdToolbar]
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
    {name: "Porter"},
    {name: "Mal"},
    {name: "Razzle"},
    {name: "Koby"},
    {name: "Molly"},
    {name: "Husi"}
  ];

  constructor() {}

  ngOnInit() {
  }

}
