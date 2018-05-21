import {Component, OnInit} from "@angular/core";
import {BusOwner} from "../model/BusOwner";
import {ModelConverter} from "../converter/ModelConverter";
import {ITableView} from "../common/interface/ITableView";
import {AppConst} from "../app-const";

@Component({
    selector: 'app-bus-owner-registration',
    templateUrl: './bus-owner-registration.component.html',
    styleUrls: ['./bus-owner-registration.component.css']
})
export class BusOwnerRegistrationComponent implements OnInit {
    busOwner: BusOwner;
    tableViewForBusOwner: ITableView;
    modelConverter: ModelConverter;
    loginButtonName: string = "BusOwner Login";
    loginURL: string = "/" + AppConst.LOGIN_ROUTE;

    constructor() {
        this.busOwner = new BusOwner();
        this.modelConverter = new ModelConverter();
    }

    ngOnInit() {
        this.tableViewForBusOwner = {headers: ['Registration Number', 'Bus Route'], rows: []};
    }

    registerUserDetails(formData: any) {
        console.log(formData)
    }

    updateTheTableView() {
        //console.log("Test");
        this.tableViewForBusOwner = {
            headers: ['Registration Number', 'Bus Route'],
            rows: [['Registration Number', 'Bus Route'], ['Registration Number', 'Bus Route']]
        };
    }

    rowSlectionInBusCollection(event: any) {
        console.log(event)
    }
}