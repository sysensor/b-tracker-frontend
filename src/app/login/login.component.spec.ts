import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {LoginComponent, LoginUser} from "./login.component";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {TokenService} from "../service/token-service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                RouterTestingModule,
                HttpClientTestingModule,
            ],
            declarations: [LoginComponent],
            providers: [TokenService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should load the UI components', () => {
        var username = document.getElementById('username');
        expect(username).toBeTruthy();

        var password = document.getElementById('password');
        expect(password).toBeTruthy();
    })

    it('Login UI should update the login user details', () => {
        document.getElementById('username').setAttribute("value", "admin");
        document.getElementById('password').setAttribute("value", "admin");
        document.getElementById('login').click()
        //expect(component._service.user).toBe("admin");
        // expect(component._service.password).toBe("admin");
        //spyOn(component._service, 'validateUserLogin').and.returnValue(Promise.resolve(true));

    })
});

class MockTokenService extends TokenService {
    public user: LoginUser;
    constructor() {
    }

    validateUserLogin(loginDetails) {
        this.user = loginDetails.username;
        this.user.password = loginDetails.password;
    }

    public getUser() {
        return this.user;
    }
}