import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {MapComponent} from "./map.component";
import {AgmCoreModule} from "@agm/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TokenService} from "../service/token-service";
import {AppConst} from "../app-const";
import {CommonModule} from "@angular/common";

describe('MapComponent', () => {
    let component: MapComponent;
    let fixture: ComponentFixture<MapComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [BrowserModule, FormsModule, RouterTestingModule, HttpClientTestingModule, CommonModule, AgmCoreModule.forRoot({
                apiKey: AppConst.GOOGLE_MAPS_API_KEY
            })],
            declarations: [MapComponent],
            providers: [TokenService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
