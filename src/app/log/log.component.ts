import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

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
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  login(): void {
    this.authService.login(this.loginData.email, this.loginData.password).subscribe(
      () => {
        const userRole = this.authService.getUserRole();
  
        switch (userRole) {
          case 'admin':
            this.router.navigate(['/admin']);
            break;
          case 'learner':
            this.router.navigate(['/home']);
            break;
          case 'instructor':
            this.router.navigate(['/maindash']);
            break;
          default:
            const errorMessage = 'Invalid E-mail and Password. Please try again. ';
            this.errorMessage = errorMessage; 
            break;
        }
      },
      (error) => {
        const errorMessage = 'An error occurred during login. Please try again.';
        this.errorMessage = errorMessage; 
      }
    );
  }

  goToSignup(): void {
    this.router.navigate(['/signup']);
  }

  forgotPassword(): void {
    Swal.fire({
      title: 'Forgot Password',
      html: 
        `<p>Please enter your email.</p>
        <input type="email" id="forgot-email" class="swal2-input" placeholder="Enter your email">`,
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
          console.log(`Sending password reset email to ${email}`);

          //failure!
          Swal.showValidationMessage(`The email entered is not valid`);

          //sent!
          Swal.fire({
            title: 'Success',
            text: 'An email has been sent to you. Please check it out.',
            icon: 'success',
            confirmButtonColor: '#000',
            cancelButtonColor: '#333' 
          });
        }
      },
      confirmButtonColor: '#000', 
      cancelButtonColor: '#333'
    });
  }
}