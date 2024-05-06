import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sup.component.html',
  styleUrls: ['./sup.component.css']
})
export class SupComponent implements OnInit {

  registerData = {
    fullName: '',
    email: '',
    gender: '',
    phoneNumber: '',
    birthDate: '',
    password: '',
    confirmPassword: '',
    userType: '', // Default to empty
    grade: '',
    studyPlace: '',
    interests: '',
    category: '',
    experience: '',
    profession: '',
    location: ''
  };

  passwordsMatch: boolean = true; // Ensure the property exists and initialized

  loginData = {
    email: '',
    password: ''
  };

  rememberMe: boolean = false;
  showLoginForm: boolean = false; // Variable to track whether to show login form or sign-up form

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    // Check if passwords match
    this.passwordsMatch = this.registerData.password === this.registerData.confirmPassword;

    if (!this.passwordsMatch) {
      // Passwords don't match, handle error or prevent form submission
      return;
    }

    // Implement register functionality here
    console.log('Registering with:', this.registerData);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  onUserTypeChange(event: any) {
    // No need to reset fields
  }
}
