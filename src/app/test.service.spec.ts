import { TestBed, inject } from '@angular/core/testing';
// import { FileTransferOriginal as FileTransfer } from '@ionic-native/file-transfer';
import { FileTransferOriginal } from '@ionic-native/file-transfer';

import { TestService } from './test.service';

describe('TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService, FileTransferOriginal]
    });
  });

  it('should be created', inject([TestService, FileTransferOriginal], (service: TestService, fileTransfer: FileTransferOriginal) => {
    expect(service).toBeTruthy();
  }));
});
