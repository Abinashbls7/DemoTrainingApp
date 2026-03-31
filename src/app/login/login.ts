import { CommonModule } from '@angular/common';
import { Component,Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {


  user = {
    name: '',
    email: ''
  };


  submitForm(form: any) {
    console.log('Form Value:', form);
    console.log('User Model:', this.user);
  }
}
