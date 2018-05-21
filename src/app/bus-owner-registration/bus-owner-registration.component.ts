import {Component, OnInit} from "@angular/core";
import {BusOwner} from "../model/BusOwner";
import {ModelConverter} from "../converter/ModelConverter";
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
    busOwner: BusOwner;
    modelConverter: ModelConverter;
    loginButtonName: string = "BusOwner Login";
    loginURL: string = "/" + AppConst.LOGIN_ROUTE;

    constructor(public busOwnerService: BusOwnerService) {
        this.busOwner = new BusOwner();
        this.modelConverter = new ModelConverter();
    }

    ngOnInit() {
    }

    registerUserDetails(regData: IRegistration) {
        console.log(regData)
        let busOwner: BusOwner = new BusOwner();
        busOwner.name = regData.name;
        busOwner.address = regData.address;
        busOwner.phone = regData.phone;
        busOwner.username = regData.username;
        busOwner.password = regData.password;

        this.busOwnerService.registerBusOwner(busOwner);
    }
}