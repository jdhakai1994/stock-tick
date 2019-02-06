import { TestBed } from '@angular/core/testing';

import { TimeSeriesService } from './timeseries.service';

describe('TimeseriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeSeriesService = TestBed.get(TimeSeriesService);
    expect(service).toBeTruthy();
  });
});
