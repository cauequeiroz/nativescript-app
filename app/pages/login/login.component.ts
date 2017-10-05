import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login-common.css']
})
export class LoginComponent {

    login() {

        console.log('[DEV] Logging in...');
    }
}