import {Component, OnInit, Injectable} from "@angular/core";
import {TokenService} from "../service/token-service";

@Component({
    selector: 'login',
    providers: [TokenService],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
    public loginData = {username: "", password: "", accessToken:""};

    constructor(public _service: TokenService) {
    }

    ngOnInit() {
    }

    login() {
        var status = this._service.validateUserLogin(this.loginData);
    }

}
