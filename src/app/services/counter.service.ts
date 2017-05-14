import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CounterService {

  private counter = new Subject<any>();

  constructor() { }

   sendMessage(message: number) {
        this.counter.next(message);
    }
 
    clearMessage() {
        this.counter.next();
    }
 
    getMessage(): Observable<any> {
        return this.counter.asObservable();
    }

}
