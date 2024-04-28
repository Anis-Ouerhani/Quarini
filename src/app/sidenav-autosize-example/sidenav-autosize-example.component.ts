import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-autosize-example',
  templateUrl: './sidenav-autosize-example.component.html',
  styleUrls: ['./sidenav-autosize-example.component.css']
})
export class SidenavAutosizeExampleComponent {
  createCourseBoxVisible = false;

  constructor(private router: Router) { }


  goToDashboard() {
    // Redirect to the main dashboard page
    this.router.navigate(['/instdash']);
  }

  goToProfile() {
    // Redirect to the profile page
    this.router.navigate(['/profile']);
  }

  goToFView() {
    this.router.navigate(['/home']);
  }
}
