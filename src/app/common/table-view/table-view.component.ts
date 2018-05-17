import {Component, OnInit, Input} from "@angular/core";
import {ITableView} from "../interface/ITableView";

@Component({
    selector: 'app-table-view',
    templateUrl: './table-view.component.html',
    styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
    @Input()
    tableView: ITableView;

    constructor() {
    }

    ngOnInit() {
    }

}

