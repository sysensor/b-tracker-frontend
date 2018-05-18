import {Component, OnInit, Input} from "@angular/core";
import {BusOwner} from "../model/BusOwner";
import {ModelConverter} from "../converter/ModelConverter";
import {ITableView} from "../common/interface/ITableView";

@Component({
    selector: 'app-bus-owner-registration',
    templateUrl: './bus-owner-registration.component.html',
    styleUrls: ['./bus-owner-registration.component.css']
})
export class BusOwnerRegistrationComponent implements OnInit{
    busOwner: BusOwner;
    tableViewForBusOwner:ITableView;
    modelConverter:ModelConverter;

    constructor() {
        this.busOwner = new BusOwner();
        this.modelConverter = new ModelConverter();
    }

    ngOnInit() {
        this.tableViewForBusOwner = {headers:['Registration Number', 'Bus Route'], rows:[]};
    }

    updateTheTableView(){
        //console.log("Test");
        this.tableViewForBusOwner = {headers:['Registration Number', 'Bus Route'], rows:[['Registration Number', 'Bus Route'],['Registration Number', 'Bus Route']]};
    }

    rowSlectionInBusCollection(event:any){
        console.log(event)
    }
}