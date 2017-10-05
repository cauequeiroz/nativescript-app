import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as Facebook from "nativescript-facebook";
import { AppConfig } from '../../app.config';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login-common.css']
})
export class LoginComponent {

    constructor(
        private router: Router
    ){}

    onLogin(event: Facebook.LoginEventData) {
        if (event.error) {
            alert("Error during login: " + event.error);
        } else {
            AppConfig.token = event.loginResponse.token;
            this.router.navigate(['/home']);
        }
    }
}