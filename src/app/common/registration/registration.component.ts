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
    registerEvent: EventEmitter<IRegistration> = new EventEmitter<IRegistration>();


    constructor() {
        this.registration = {name: '', address: '', phone: null, username: '', password: ''};
    }

    registerUser() {
        console.log(this.registration);
        this.registerEvent.emit(this.registration);
    }

    ngOnInit() {
    }

}
