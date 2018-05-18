import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {ITableView} from "../interface/ITableView";

@Component({
    selector: 'app-table-view',
    templateUrl: './table-view.component.html',
    styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
    @Input()
    tableView: ITableView;

    @Output()
    eventTableRowSelection: EventEmitter<any[]> = new EventEmitter<any[]>();

    constructor() {
    }

    ngOnInit() {
    }

    rowSelection(rowData: any){
        console.log(rowData);
        this.eventTableRowSelection.emit(rowData);
    }

}

