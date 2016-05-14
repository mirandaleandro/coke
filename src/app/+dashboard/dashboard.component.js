"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var button_1 = require('@angular2-material/button/button');
var checkbox_1 = require('@angular2-material/checkbox/checkbox');
var card_1 = require('@angular2-material/card/card');
var toolbar_1 = require('@angular2-material/toolbar/toolbar');
var DashboardComponent = (function () {
    function DashboardComponent() {
        this.views = [
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
        this.dogs = [
            { name: "Porter" },
            { name: "Mal" },
            { name: "Razzle" },
            { name: "Koby" },
            { name: "Molly" },
            { name: "Husi" }
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-dashboard',
            templateUrl: 'dashboard.component.html',
            styleUrls: ['dashboard.component.css'],
            directives: [button_1.MdButton, checkbox_1.MdCheckbox, card_1.MdCard, toolbar_1.MdToolbar]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map