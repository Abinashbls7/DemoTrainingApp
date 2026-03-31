import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Userservice {

  constructor(private http: HttpClient  ) { 
    
  }
  //data = "Hello, World!";
  //private subject = new Subject<number>();
    //private subject = new BehaviorSubject<number>(0);
    private subject = new ReplaySubject<number>(0);

   getUserData():Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  sendData() {
   this.subject.next(1);
   this.subject.next(2);
   this.subject.next(3);

  }

  getData(): Observable<any>{
    return this.subject.asObservable();
  }

}
