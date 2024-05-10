import { Component } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  changePassword() {
    // Implement your change password logic here
    if (this.newPassword !== this.confirmPassword) {
      // Passwords match, proceed with changing password
      const errorMessage = 'Password does not match. Please try again. ';
      this.errorMessage = errorMessage; 
      // Add your logic to call the API or service to change the password
    } 
  }
}
