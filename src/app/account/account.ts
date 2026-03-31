import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  imports: [CommonModule, ReactiveFormsModule,FormsModule],
  templateUrl: './account.html',
  styleUrl: './account.css',
})
export class Account {

  formArrayExample: FormGroup;

  constructor(private fb: FormBuilder) {
 
    this.formArrayExample = this.fb.group({
      items: this.fb.array([this.createItem()])
    });
  }

    // Getter for FormArray
  get items(): FormArray {
    return this.formArrayExample.get('items') as FormArray;
  }
 
 
  // Create one item (FormGroup)
  createItem(): FormGroup {
    return this.fb.group({
      itemName: ['', Validators.required],
      itemPrice: ['', Validators.required],
      itemQuantity: ['', Validators.required]
    });
  }
 
 
  // Add new item
  addItems(): void {
    this.items.push(this.createItem());
 
  }
 
  // Remove item
  removeItems(index: number): void {
    this.items.removeAt(index);
  }
 
  // Submit form
  onSubmitFormArray(): void {
    if (this.formArrayExample.valid) {
      console.log('Form Value:', this.formArrayExample.value);
    }
  }
 

}
