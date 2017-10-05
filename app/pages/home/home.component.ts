import { Component, OnInit } from '@angular/core';
import { Page } from 'ui/page';
import { AppConfig } from '../../app.config';
import { Http } from '@angular/http';
import * as Facebook from 'nativescript-facebook';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home-common.css']
})
export class HomeComponent implements OnInit {

    private user_token: string = AppConfig.token;
    private user_id: string;
    private user_name: string;
    private user_image: string;

    constructor( private page: Page, private http: Http, private router: Router ){

        this.http
            .get(AppConfig.facebook_api + '/me?access_token=' + this.user_token)
            .subscribe(
                (res) => {
                    let response = res.json();

                    this.user_name = response['name'];
                    this.user_id = response['id'];

                    this.http
                        .get(AppConfig.facebook_api + '/' + this.user_id + '/picture?type=large&redirect=false&access_token=' + this.user_token)
                        .subscribe(
                            (res) => {
                                let response = res.json();
                                this.user_image = response['data']['url'];
                            }
                        )
                }
            )
    }
    
    ngOnInit() {
        
        this.page.actionBarHidden = true;
    }
    
    onLogout(event: Facebook.LoginEventData) {
        if (event.error) {
            alert("Error during login: " + event.error);
        } else {
            AppConfig.token = '';
            this.router.navigate(['/login'])
        }
    }
}