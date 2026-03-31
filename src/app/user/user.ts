import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Userservice } from '../userservice';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  users: any[] = [];

  constructor(private userservice: Userservice) { 
   
    console.log("User component constructor called");
  this.userservice.getUserData().subscribe({
    next: (data) => {
      this.users = data;
      console.log(data);
    },
    error: (err) => {
      console.log(err);
    }
  });
    
  }
  ngonInit() {
  }
  
   role = 'admin';
}
