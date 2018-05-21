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

  it('table headers and boday should match with the parameters', () => {
    component.tableView={'headers':['Registration Number', 'Bus Route'], 'rows':[['RX12345','Piliyandala']]};
    fixture.detectChanges();
    let ths = fixture.nativeElement.querySelectorAll('th');
    expect(ths).toBeTruthy();
    expect(ths.length).toBe(2);
    expect(ths[0].outerText).toBe('Registration Number');
    expect(ths[1].outerText).toBe('Bus Route');

    let trs = fixture.nativeElement.querySelectorAll('tr');
    expect(trs).toBeTruthy();
    expect(trs.length).toBe(2);

    let tds = fixture.nativeElement.querySelectorAll('td');
    expect(tds).toBeTruthy();
    expect(tds.length).toBe(2);
    expect(tds[0].outerText).toBe('RX12345');
    expect(tds[1].outerText).toBe('Piliyandala');
  });

});
