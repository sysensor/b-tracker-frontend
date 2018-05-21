import {BusOwner} from "../model/BusOwner";
import {HttpClient, HttpResponse, HttpRequest} from "@angular/common/http";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {AppConst} from "../app-const";

@Injectable()
export class BusOwnerService {

    constructor(private _router: Router, private _http: HttpClient) {
    }

    public registerBusOwner(busOwner: BusOwner) {
        this._http.post(AppConst.DATA_API_BUS_OWNER, JSON.stringify(busOwner)).subscribe(res=>{
            console.log(res);
        });
    }

}