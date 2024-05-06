import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-courses',
  templateUrl: './top-courses.component.html',
  styleUrls: ['./top-courses.component.css']
})
export class TopCoursesComponent implements OnInit {
  courses: any[] = [
    { title: 'Course 1', image: 'assets/imagecourse.jpg', duration: '2 hours', category: 'Programming', rate: 5 },
    { title: 'Course 2', image: 'assets/imagecourse.jpg', duration: '3 hours', category: 'Design', rate: 5 },
    { title: 'Course 3', image: 'assets/imagecourse.jpg', duration: '1.5 hours', category: 'Marketing', rate: 5 },
    { title: 'Course 4', image: 'assets/imagecourse.jpg', duration: '2.5 hours', category: 'Development', rate: 5 },
    { title: 'Course 5', image: 'assets/imagecourse.jpg', duration: '1 hour', category: 'Finance', rate: 5 },
    { title: 'Course 6', image: 'assets/imagecourse.jpg', duration: '4 hours', category: 'Business', rate: 5 },
    { title: 'Course 7', image: 'assets/imagecourse.jpg', duration: '2.5 hours', category: 'Technology', rate: 5 },
    { title: 'Course 8', image: 'assets/imagecourse.jpg', duration: '3 hours', category: 'Art', rate: 5 },
    { title: 'Course 9', image: 'assets/imagecourse.jpg', duration: '2 hours', category: 'Health', rate: 5 },
    { title: 'Course 10', image: 'assets/imagecourse.jpg', duration: '1.5 hours', category: 'Language', rate: 5 }
  ];

  displayedCourses: any[] = [];

  currentIndex: number = 0;

  ngOnInit(): void {
    this.updateDisplayedCourses();
  }

  onNext(): void {
    this.currentIndex = (this.currentIndex + 1) % this.courses.length;
    this.updateDisplayedCourses();
  }

  onPrev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.courses.length) % this.courses.length;
    this.updateDisplayedCourses();
  }

  updateDisplayedCourses(): void {
    const endIndex = (this.currentIndex + 5) % this.courses.length;
    if (endIndex >= this.currentIndex) {
      this.displayedCourses = this.courses.slice(this.currentIndex, endIndex);
    } else {
      this.displayedCourses = this.courses.slice(this.currentIndex);
      this.displayedCourses = this.displayedCourses.concat(this.courses.slice(0, endIndex));
    }
  }

  constructor(private router: Router) {}
  //goToViewCourse(courseId: number) {
    //this.router.navigate(['/view-course', courseId]); // Assuming courseId is the identifier of the course
  //}

  goToViewCourse() {
    this.router.navigate(['/viewcourse'])
  }
}
