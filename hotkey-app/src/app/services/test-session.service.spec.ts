import { TestBed, inject } from '@angular/core/testing';

import { TestSessionService } from './test-session.service';

describe('TestSessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestSessionService]
    });
  });

  it('should be created', inject([TestSessionService], (service: TestSessionService) => {
    expect(service).toBeTruthy();
  }));
});
