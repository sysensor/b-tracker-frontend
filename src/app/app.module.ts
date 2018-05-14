import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {RouterModule} from "@angular/router";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MapComponent} from "./map/map.component";
import {CommonModule} from "@angular/common";
import {AgmCoreModule} from "@agm/core";
import {AppBasicAuthInterceptor} from "./service/app-basic-auth-intercepter";
import {AppConst} from "./service/app-const";
import {BusOwnerRegistrationComponent} from "./bus-owner-registration/bus-owner-registration.component";


@NgModule({
    declarations: [
        AppComponent, LoginComponent, MapComponent, BusOwnerRegistrationComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        RouterModule.forRoot([
            {path: '', component: MapComponent},
            {path: 'login', component: LoginComponent},
            {path: 'bus-owner-registration', component: BusOwnerRegistrationComponent}
        ]),

        AgmCoreModule.forRoot({
            apiKey: AppConst.GOOGLE_MAPS_API_KEY
        })
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AppBasicAuthInterceptor,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
