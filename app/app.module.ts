import * as application from 'application';
import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFacebookModule } from "nativescript-facebook/angular";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { routes, navigableComponents } from "./app.routing";
import { AppComponent } from "./app.component";

import { ProfileComponent } from './components/profile/profile.component';

let nsFacebook = require('nativescript-facebook');

application.on(application.launchEvent, function (args) {
    nsFacebook.init("1179526238815379");
});

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        NativeScriptFacebookModule,
        NativeScriptHttpModule
    ],
    declarations: [
        AppComponent,
        ...navigableComponents,
        ProfileComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
