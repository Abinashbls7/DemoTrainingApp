import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Userservice } from '../userservice';

@Component({
  selector: 'app-subject-demo',
  imports: [],
  templateUrl: './subject-demo.html',
  styleUrl: './subject-demo.css',
})
export class SubjectDemo implements OnInit {
  //subject = new Subject<number>();

  //bhvsubject = new BehaviorSubject<number>(0);

  constructor(private userService: Userservice) {

      of(1, 2, 3,4,5,6,7,8,9,10)
    .pipe(
      filter(x => x % 2 ===0)
    ).subscribe(x => console.log(x));
  }

  ngOnInit() {
  this.userService.getData().subscribe((data:number) => {
    //console.log(data);
  });
}

submitData() {
  this.userService.sendData();  
}
}
