import { TestBed, inject } from '@angular/core/testing';

import { MyFactoryService } from './my-factory.service';

describe('MyFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyFactoryService]
    });
  });

  it('should be created', inject([MyFactoryService], (service: MyFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
