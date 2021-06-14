import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTableClientComponent } from './view-table-client.component';

describe('ViewTableClientComponent', () => {
  let component: ViewTableClientComponent;
  let fixture: ComponentFixture<ViewTableClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTableClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTableClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
