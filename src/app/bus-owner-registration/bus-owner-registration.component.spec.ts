import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {BusOwnerRegistrationComponent} from "./bus-owner-registration.component";
import {RouterTestingModule} from "@angular/router/testing";
import {NgModel} from "@angular/forms";

describe('BusOwnerRegistrationComponent', () => {
    let component: BusOwnerRegistrationComponent;
    let fixture: ComponentFixture<BusOwnerRegistrationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BusOwnerRegistrationComponent],
            imports: [RouterTestingModule,NgModel]
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
});
