import { TestBed } from '@angular/core/testing';

import { TableSortService } from './table-sort.service';

describe('TableSortService', () => {
  let service: TableSortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableSortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
