import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {BusOwnerRegistrationComponent} from "./bus-owner-registration.component";
import {RouterTestingModule} from "@angular/router/testing";
import {NgModel, FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RegistrationComponent} from "../common/registration/registration.component";
import {TableViewComponent} from "../common/table-view/table-view.component";
import {BusOwnerService} from "../service/bus-owner-service";
import {Router} from "@angular/router";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('BusOwnerRegistrationComponent', () => {
    let component: BusOwnerRegistrationComponent;
    let fixture: ComponentFixture<BusOwnerRegistrationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserModule,FormsModule, HttpClientTestingModule],
            declarations: [BusOwnerRegistrationComponent,RegistrationComponent,TableViewComponent],
            providers:[BusOwnerService]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BusOwnerRegistrationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('check app-registration components in UI', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('app-registration')).not.toBe(null);
    });
});
