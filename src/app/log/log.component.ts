import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  loginData = {
    email: '',
    password: ''
  };

  rememberMe: boolean = false;
  showSignupForm: boolean = false; // Variable to track whether to show login form or sign-up form

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    // Implement login functionality here
    console.log('Logging in with:', this.loginData);
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }

  forgotPassword() {
    Swal.fire({
      title: 'Forgot Password',
      html: `
        <p>Please enter your email.</p>
        <input type="email" id="forgot-email" class="swal2-input" placeholder="Enter your email">
      `,
      confirmButtonText: 'Send',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      preConfirm: () => {
        const emailInput = Swal.getPopup()?.querySelector('#forgot-email') as HTMLInputElement;
        const email = emailInput?.value.trim();
        if (!email) {
          Swal.showValidationMessage(`Please enter your email`);
        } else {
          // Call your API or service to send the password reset email
          // For demonstration purposes, I'll just log the email
          console.log(`Sending password reset email to ${email}`);

          // If the email is not in the database, you can show a failure alert box
          // For example:
          // Swal.showValidationMessage(`The email entered is not valid`);

          // If the email is in the database, you can show a success alert box
          Swal.fire({
            title: 'Success',
            text: 'An email has been sent to you. Please check it out.',
            icon: 'success',
            confirmButtonColor: '#000', // Change the color of the success button to black
            cancelButtonColor: '#333' // Change the color of the cancel button to black
          });
        }
      },
      confirmButtonColor: '#000', // Change the color of the confirm button to black
      cancelButtonColor: '#333' // Change the color of the cancel button to black
    });
  }
}