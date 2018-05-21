import {Component, OnInit, EventEmitter, Output, Input} from "@angular/core";
import {IRegistration} from "../interface/IRegistration";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    @Input()
    extraButtonName: string = "Extra Button";
    @Input()
    extraButtonUrl: string = "/extra";
    registration: IRegistration;
    @Output()
    registerEvent: EventEmitter<any[]> = new EventEmitter<any[]>();


    constructor() {
        this.registration = {name: '', address: '', phone: '', username: '', password: ''};
    }

    registerUser(form: NgForm) {
        console.log(form.value);
        this.registerEvent.emit(form.value);
    }

    ngOnInit() {
    }

}
