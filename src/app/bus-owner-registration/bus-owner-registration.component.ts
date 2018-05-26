import {Component, OnInit} from "@angular/core";
import {BusOwner} from "../model/BusOwner";
import {AppConst} from "../app-const";
import {BusOwnerService} from "../service/bus-owner-service";
import {IRegistration} from "../common/interface/IRegistration";

@Component({
    selector: 'app-bus-owner-registration',
    providers: [BusOwnerService],
    templateUrl: './bus-owner-registration.component.html',
    styleUrls: ['./bus-owner-registration.component.css']
})
export class BusOwnerRegistrationComponent implements OnInit {
    private posting: boolean;
    private registration: IRegistration;
    private title: string;
    private loginButtonName: string;
    private loginURL: string;
    private success: boolean;
    private message: string;

    constructor(public _busOwnerService: BusOwnerService) {
        this.posting = false;
        this.title = "Bus Owner Registration";
        this.loginButtonName = "BusOwner Login";
        this.loginURL = "/" + AppConst.LOGIN_ROUTE;
        this.success = false;
        this.message = "";
        this.reloadDataModel();
    }

    ngOnInit() {
    }

    reloadDataModel() {
        this.registration = {name: '', address: '', phone: null, username: '', password: ''};
    }

    registerBusOwnerDetails(regData: IRegistration) {
        this.posting = true;
        console.log(regData);
        let busOwner: BusOwner = new BusOwner();
        busOwner.name = regData.name;
        busOwner.address = regData.address;
        busOwner.phone = regData.phone;
        busOwner.username = regData.username;
        busOwner.password = regData.password;

        this._busOwnerService.registerBusOwner(busOwner).then(
            result => {
                this.posting = false;
                this.success = true;
                this.message = "Bus owner " + busOwner.name + " successfully registered";
                this.reloadDataModel();
            },
            err => {
                this.posting = false;
                this.success = false;
                this.message = err;
            }
        ).catch(err => {
            this.posting = false;
            this.success = false;
            this.message = err;
        });
    }
}