import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {RegistrationComponent} from "./registration.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule, By} from "@angular/platform-browser";
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
        component.registration = {
            name: '',
            address: '',
            phone: null,
            username: '',
            password: ''
        };

        component.title = "Testing Registration";
        component.extraButtonName = "Testing Button";
        component.extraButtonUrl = "/test";
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
        expect(fixture.debugElement.query(By.css('#title')).nativeElement.textContent).toBe('Testing Registration');
        expect(fixture.debugElement.query(By.css('#extraButton')).nativeElement.textContent).toBe('Testing Button');
        expect(fixture.debugElement.query(By.css('#extraButton')).nativeElement.href).toContain('/test');
    });

    it('should be able to see the Model values on HTML Form', () => {
        component.registration = {
            name: 'Dinuka',
            address: 'Piliyandala',
            phone: 12536548,
            username: 'dinuka',
            password: 'password'
        };

        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(component.form.value.name).toBe('Dinuka');
            expect(component.form.value.address).toBe('Piliyandala');
            expect(component.form.value.phone).toBe(12536548);
            expect(component.form.value.username).toBe('dinuka');
            expect(component.form.value.password).toBe('password');
            expect(component.form.valid).toBe(true);
        });
    });

    it('form should be invalid with the empty values', () => {
        component.registration = {
            name: '',
            address: '',
            phone: null,
            username: '',
            password: ''
        };

        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(component.form.value.name).toBe('');
            expect(component.form.value.address).toBe('');
            expect(component.form.value.phone).toBe(null);
            expect(component.form.value.username).toBe('');
            expect(component.form.value.password).toBe('');
            expect(component.form.valid).toBe(false);
        });
    });

    it('register button should be enabled after complete the mandatory fields', () => {
        component.registration = {
            name: 'Dinuka',
            address: 'Madapath',
            phone: null,
            username: 'dinuka',
            password: 'password'
        };

        fixture.detectChanges();
        fixture.whenStable().then(() => {
            expect(component.form.value.name).toBe('Dinuka');
            expect(component.form.value.address).toBe('Madapath');
            expect(component.form.value.phone).toBe(null);
            expect(component.form.value.username).toBe('dinuka');
            expect(component.form.value.password).toBe('password');
            expect(component.form.valid).toBe(true);
        });
    });

    it('registerEvent should emit the form values to their subscribers', () => {
        component.registration = {
            name: 'Dinuka',
            address: 'Madapath',
            phone: 2323233456,
            username: 'dinuka',
            password: 'password'
        };

        fixture.detectChanges();
        component.registerEvent.subscribe((model) => {
            expect(model.name).toBe('Dinuka');
            expect(model.address).toBe('Madapath');
            expect(model.phone).toBe(2323233456);
            expect(model.username).toBe('dinuka');
            expect(model.password).toBe('password');
        });
        document.getElementById('registerButton').click();
    });
});
