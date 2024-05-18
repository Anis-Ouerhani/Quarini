import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service'; // Adjust the path as needed
import { User } from '../../../models/user.model';

interface RegisterData {
  fullName?: string;
  birthDate?: Date;
  phoneNumber?: string;
  role?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  grade?: string;
  studyPlace?: string;
  interests?: string;
  category?: string;
  experience?: string;
  profession?: string;
  location?: string;
}

@Component({
  selector: 'app-sup',
  templateUrl: './sup.component.html',
  styleUrls: ['./sup.component.css']
})
export class SupComponent {
  registerData: RegisterData = {};
  rememberMe: boolean = false;
  passwordsMatch: boolean = true;
  showLoginForm: boolean = false; // Ensure this is defined and initialized

  constructor(private authService: AuthService) {}

  onUserTypeChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.registerData.role = selectElement.value;
  }

  

  register(form: NgForm) {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      this.passwordsMatch = false;
      return;
    }
    this.passwordsMatch = true;

    // Extract the relevant fields to send to the backend
    const registrationPayload: User = {
      name: this.registerData.fullName,
      email: this.registerData.email,
      password: this.registerData.password
    };

    this.authService.signup(registrationPayload).subscribe(
      (response) => {
        console.log('User registered successfully:', response);
        // Handle successful registration, e.g., navigate to login page
      },
      (error) => {
        console.error('Registration failed:', error);
        // Handle registration error, e.g., show an error message
      }
    );
  }

  passwordStrengthMessage: string = '';
  passwordStrengthColor: string = '';

  checkPasswordStrength(): void {
    const password = this.registerData.password;
    if (!password) {
      this.passwordStrengthMessage = '';
      this.passwordStrengthColor = '';
      return;
    }
  
    // Check for each strength criteria
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
  
    let strength = 0;
    if (hasLowercase) strength++;
    if (hasNumber) strength++;
  
    // Check length
    if (password.length > 5) {
      strength++;
    }
  
    // Determine strength message and color based on the number of fulfilled criteria
    if (strength === 3) {
      this.passwordStrengthMessage = 'Strong password';
      this.passwordStrengthColor = 'green';
    } else if (strength === 2) {
      this.passwordStrengthMessage = 'Moderate password';
      this.passwordStrengthColor = 'orange';
    } else {
      this.passwordStrengthMessage = 'Weak password';
      this.passwordStrengthColor = 'red';
    }
  }


  getRoleNumber(role: string | undefined): number {
    if (role === 'student') {
      return 1;
    } else if (role === 'instructor') {
      return 2;
    }
    return 0; // default or unknown role
  }

  goToLogin() {
    // Logic to navigate to the login page or show the login form
    this.showLoginForm = true;
  }
}
