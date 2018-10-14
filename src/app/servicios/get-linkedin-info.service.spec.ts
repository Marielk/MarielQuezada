import { TestBed, inject } from '@angular/core/testing';

import { GetLinkedinInfoService } from './get-linkedin-info.service';

describe('GetLinkedinInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetLinkedinInfoService]
    });
  });

  it('should be created', inject([GetLinkedinInfoService], (service: GetLinkedinInfoService) => {
    expect(service).toBeTruthy();
  }));
});
