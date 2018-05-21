import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {RegistrationComponent} from "./registration.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

describe('RegistrationComponent', () => {
    let component: RegistrationComponent;
    let fixture: ComponentFixture<RegistrationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserModule, FormsModule, CommonModule, RouterModule],
            declarations: [RegistrationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RegistrationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // it('should be able to see the values on HTML components', () => {
    //     //component.registration={name: 'Dinuka', address: 'Piliyandala', phone: '12536548', username: 'dinuka', password: 'password'};
    //     document.getElementById("name").setAttribute("value","Dinuka");
    //     fixture.detectChanges();
    //     expect(component.registration.name).toBe('Dinuka');
    //     expect(component.registration.address).toBe('Piliyandala');
    //     expect(component.registration.phone).toBe('12536548');
    //     expect(component.registration.username).toBe('dinuka');
    //     expect(component.registration.password).toBe('password');
    //
    //     expect().toBe('password');
    // });
});
