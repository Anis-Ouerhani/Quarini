import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  isEditMode = false;
  cannot = false;

  firstName: string = 'John';
  lastName: string = 'Doe';
  email: string = 'johndoe@example.com';
  birthdate: string = '1990-01-01';
  phoneNumber: string = '123456789';
  country: string = 'USA';
  location: string = 'New York';
  role: string = 'Software Developer';

  constructor(private router: Router){}

  editMode() {
    this.isEditMode = true;
  }
  
  cantEdit() {
    return false;
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

  changePassword() {
    this.router.navigate(['/changepass'])
  }
}
