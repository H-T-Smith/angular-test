import { TestBed } from '@angular/core/testing';

import { JobomaticService } from './jobomatic.service';

describe('JobomaticService', () => {
  let service: JobomaticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobomaticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
