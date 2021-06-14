import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTableServerComponent } from './view-table-server.component';

describe('ViewTableServerComponent', () => {
  let component: ViewTableServerComponent;
  let fixture: ComponentFixture<ViewTableServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTableServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTableServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
