import { Component } from '@angular/core';
import { AppConfig } from '../../app.config';
import * as Facebook from 'nativescript-facebook';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile-common.css']
})
export class ProfileComponent {

    private user_token: string = AppConfig.token;
    private user_id: string = AppConfig.user_id;
    private user_name: string = AppConfig.user_name;
    private user_image: string = AppConfig.user_image;

    constructor(private router: Router){}

    onLogout(event: Facebook.LoginEventData) {
        if (event.error) {
            alert("Error during login: " + event.error);
        } else {
            AppConfig.token = '';
            this.router.navigate(['/login'])
        }
    }
}