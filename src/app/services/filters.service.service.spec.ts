import { TestBed } from '@angular/core/testing';

import { FiltersService } from './filters.service.service';

describe('FiltersServiceService', () => {
  let service: FiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
