import {BusOwner} from "../model/BusOwner";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AppConst} from "../app-const";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BusOwnerService {

    constructor(private _http: HttpClient) {
    }

    public registerBusOwner(busOwner: BusOwner) {
        let promise = new Promise((resolve, reject) => {
            this._http.post(AppConst.DATA_API_BUS_OWNER, JSON.stringify(busOwner))
                .toPromise()
                .then(
                    res => {
                        resolve(res);
                    },
                    msg =>{
                        reject(msg.message);
                    }
                )
        });
        return promise;
    }

}