// navhome.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navhome',
  templateUrl: './navhome.component.html',
  styleUrls: ['./navhome.component.css']
})
export class NavHomeComponent {

  constructor(private router: Router) { }

  goToFView() {
    this.router.navigate(['/']);
  }

  goToTeach() {
    this.router.navigate(['/teach']); // Change to the actual path for teaching form
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToSignUp() {
    this.router.navigate(['/signup']);
  }
}
