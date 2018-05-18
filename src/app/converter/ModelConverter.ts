
import {Bus} from "../model/Bus";
export class ModelConverter{

    public convertBusList(busArrya:Array<Bus>){
       let finalList : any[]=new Array();
        for(let bus of busArrya){
            let list:any[]=new Array();
            list.push(bus.registration_no);
            list.push(bus.busRoute);
            finalList.push(list);
        }
        return finalList;
    }
}