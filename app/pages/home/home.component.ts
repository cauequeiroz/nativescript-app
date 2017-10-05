import { Component, OnInit } from '@angular/core';
import { Page } from 'ui/page';
import {registerElement} from "nativescript-angular/element-registry";
registerElement("VideoPlayer", () => require("nativescript-videoplayer").Video);

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home-common.css']
})
export class HomeComponent implements OnInit {

    constructor(
        private page: Page
    ){}
    
    ngOnInit() {
        
        this.page.actionBarHidden = true;
    }    
}