import { Routes } from '@angular/router';
import { User } from './user/user';
import { Login } from './login/login';
import { SignIn } from './sign-in/sign-in';
import { Account } from './account/account';
import { SubjectDemo } from './subject-demo/subject-demo';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'user',
        component: User
    },
    {
        path: 'login',
        component: Login
    },
     {
        path: 'signin',
        component: SignIn
    },
     {
        path: 'account',
        component: Account
    },
    {
        path: 'subjectdemo',
        component: SubjectDemo
    },
    {

        path: '**',
        redirectTo: ''
    }

];   
