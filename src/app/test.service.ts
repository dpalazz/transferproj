import { Injectable } from '@angular/core';
// import { FileTransferOriginal as FileTransfer } from '@ionic-native/file-transfer';
import { FileTransferOriginal } from '@ionic-native/file-transfer';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private fileTransfer: FileTransferOriginal) { }
}
