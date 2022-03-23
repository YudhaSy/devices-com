import {TestBed} from '@angular/core/testing';

import {DevicesService} from './devices.service';
import {HttpClientModule} from '@angular/common/http';

describe('DevicesService', () => {
  let service: DevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    });
    service = TestBed.inject(DevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
