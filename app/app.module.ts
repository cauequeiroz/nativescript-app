import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes, navigableComponents } from "./app.routing";

import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        ...navigableComponents
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
