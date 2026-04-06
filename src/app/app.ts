import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DemoTrainingApp');

  users = [
    {id: 1, name: 'Ram'},
    {id: 2, name: 'Shyam'},
    {id: 3, name: 'Hari'}
  ];
  msg: string = 'Hello , World';
}
