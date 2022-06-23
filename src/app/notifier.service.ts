import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NotifierService {
  private notifierSubject = new Subject<boolean>();

  getNotifierListener() {
    return this.notifierSubject.asObservable();
  }

  public notify(open: boolean): void {
    this.notifierSubject.next(open);
  }
}
