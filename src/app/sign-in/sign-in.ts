import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {

  signInForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.signInForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')
      ]],
      password: ['', [Validators.required, this.passwordLengthValidator]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.matchPasswordValidator 
    });

  }

  passwordLengthValidator(control: AbstractControl) {
    const value = control.value;
    if (value && value.length < 6) {
      return { minlength: true };
    }
    return null;
  }

  matchPasswordValidator(group: AbstractControl) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSubmit() {
    if (this.signInForm.valid) {
      console.log('userData', this.signInForm.value);
    }
  }
}