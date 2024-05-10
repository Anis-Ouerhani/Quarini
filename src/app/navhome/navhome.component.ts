import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navhome',
  templateUrl: './navhome.component.html',
  styleUrls: ['./navhome.component.css']
})
export class NavHomeComponent implements OnInit {
  userRole!: string;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    // Assign the value of userRole when the component initializes
    this.userRole = this.getUserRole();
    // Call the method to redirect when connected
  }

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  getUserRole(): string {
    return this.authService.getUserRole();
  }

  whenConnect(): void {
      const userRole = this.getUserRole();

      if (userRole === 'instructor') {
        this.router.navigate(['/maindash']);
      } else if (userRole === 'admin') {
        this.router.navigate(['/admin']);
      } else if (userRole === 'learner') {
        this.router.navigate(['/home']);
      }
     else {
      this.router.navigate(['/login']);
    }
  }

  goToAdminDashboard(){
    this.router.navigate(['/admin']);
  }

  goToChangePassword() {
    this.router.navigate(['/changepass'])
  }

  goToInstructorDashboard(){
    this.router.navigate(['/maindash']);
  }

  goToMyCourses(){
    this.router.navigate(['/mycourses']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToFView() {
    this.router.navigate(['/home']);
  }

  goToCourses(): void {
    this.router.navigate(['/allcourses']);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  goToSignUp(): void {
    this.router.navigate(['/signup']);
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
