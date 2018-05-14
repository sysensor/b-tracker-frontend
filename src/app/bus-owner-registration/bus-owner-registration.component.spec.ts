import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {} from 'jasmine';
import { BusOwnerRegistrationComponent } from './bus-owner-registration.component';

describe('BusOwnerRegistrationComponent', () => {
  let component: BusOwnerRegistrationComponent;
  let fixture: ComponentFixture<BusOwnerRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusOwnerRegistrationComponent ]
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
