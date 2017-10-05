import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Facebook from "nativescript-facebook";
import { AppConfig } from '../../app.config';
import { Page } from 'ui/page';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login-common.css']
})
export class LoginComponent implements OnInit {

    constructor(
        private router: Router,
        private page: Page
    ){}

    ngOnInit() {

        this.page.actionBarHidden = true;
    }

    onLogin(event: Facebook.LoginEventData) {
        if (event.error) {
            alert("Error during login: " + event.error);
        } else {
            AppConfig.token = event.loginResponse.token;
            this.router.navigate(['/home']);
        }
    }
}