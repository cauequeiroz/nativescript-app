import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Facebook from "nativescript-facebook";
import { AppConfig } from '../../app.config';
import { Page } from 'ui/page';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login-common.css']
})
export class LoginComponent implements OnInit {

    constructor(
        private router: Router,
        private page: Page,
        private http: Http
    ){}

    ngOnInit() {

        this.page.actionBarHidden = true;
    }

    onLogin(event: Facebook.LoginEventData) {
        if (event.error) {
            alert("Error during login: " + event.error);
        } else {
            AppConfig.token = event.loginResponse.token;

            this.http
                .get(AppConfig.facebook_api + '/me?access_token=' + AppConfig.token)
                .subscribe(
                    (res) => {
                        let response = res.json();

                        AppConfig.user_name = response['name'];
                        AppConfig.user_id = response['id'];

                        this.http
                            .get(AppConfig.facebook_api + '/' + AppConfig.user_id + '/picture?type=large&redirect=false&access_token=' + AppConfig.token)
                            .subscribe(
                                (res) => {
                                    let response = res.json();
                                    AppConfig.user_image = response['data']['url'];
                                    this.router.navigate(['/home']);
                                }
                            )
                    }
                )
        }
    }
}