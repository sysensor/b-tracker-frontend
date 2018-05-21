import {TestBed, async} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {MapComponent} from "./map/map.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {TokenService} from "./service/token-service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AgmCoreModule} from "@agm/core";
import {Router} from "@angular/router";
import {fakeAsync} from "@angular/core/testing";
import {tick} from "@angular/core/testing";
describe("AppComponent", () => {
    let router: Router;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserModule, FormsModule, RouterTestingModule, HttpClientTestingModule, AgmCoreModule],
            declarations: [AppComponent, MapComponent],
            providers: [TokenService]
        }).compileComponents();

        router = TestBed.get(Router);
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'app-root'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app-root');
    }));
    it('should render title in a h1 tag', fakeAsync(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        router.initialNavigation();
        tick();
        expect(compiled.querySelector('router-outlet')).not.toBe(null);
    }));
});
