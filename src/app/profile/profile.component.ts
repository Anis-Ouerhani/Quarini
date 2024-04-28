import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  isEditMode = false;

  firstName: string = 'John';
  lastName: string = 'Doe';
  email: string = 'johndoe@example.com';
  birthdate: string = '1990-01-01';
  phoneNumber: string = '123456789';
  country: string = 'USA';
  profession: string = 'Software Developer';
  location: string = 'New York';

  editMode() {
    this.isEditMode = true;
  }

  editPhoto() {
    // Add logic to edit photo here
  }

  saveChanges() {
    this.isEditMode = false;
    // Add logic to save changes here
  }

  cancelEdit() {
    this.isEditMode = false;
    // Reset fields to their original values
  }
}
