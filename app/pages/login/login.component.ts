import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

    login() {

        console.log('[DEV] Logging in...');
        this.router.navigate(['/home']);
    }
}