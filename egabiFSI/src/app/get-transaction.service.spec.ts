import { TestBed } from '@angular/core/testing';

import { GetTransactionService } from './get-transaction.service';

describe('GetTransactionService', () => {
  let service: GetTransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
