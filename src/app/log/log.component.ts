import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
}