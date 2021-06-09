import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCellHeaderComponent } from './table-cell-header.component';

describe('TableCellHeaderComponent', () => {
  let component: TableCellHeaderComponent;
  let fixture: ComponentFixture<TableCellHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCellHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCellHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
