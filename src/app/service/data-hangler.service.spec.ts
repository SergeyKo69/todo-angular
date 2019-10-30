import {TestBed} from '@angular/core/testing';

import {DataHanglerService} from './data-hangler.service';

describe('DataHanglerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataHanglerService = TestBed.get(DataHanglerService);
    expect(service).toBeTruthy();
  });
});
