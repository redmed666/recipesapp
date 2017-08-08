import { TestBed, inject } from '@angular/core/testing';

import { PlatsService } from './plats.service';

describe('PlatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlatsService]
    });
  });

  it('should ...', inject([PlatsService], (service: PlatsService) => {
    expect(service).toBeTruthy();
  }));
});
