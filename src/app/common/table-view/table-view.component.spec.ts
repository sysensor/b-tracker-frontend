import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewComponent } from './table-view.component';

describe('TableViewComponent', () => {
  let component: TableViewComponent;
  let fixture: ComponentFixture<TableViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('table headers should match with the parameters', () => {
    component.headers = ['Registration Number', 'Bus Route'];
    fixture.detectChanges();
    let ths = fixture.nativeElement.querySelectorAll('th');
    expect(ths).toBeTruthy();
    expect(ths.length).toBe(2);
    expect(ths[0].outerText).toBe('Registration Number');
    expect(ths[1].outerText).toBe('Bus Route');
  });

});
