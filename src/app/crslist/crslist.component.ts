import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course.model';

@Component({
  selector: 'app-crslist',
  templateUrl: './crslist.component.html',
  styleUrls: ['./crslist.component.css']
})
export class CrslistComponent implements OnInit {
  
  courses: Course[] = [
  ];

  displayedCourses: Course[] = [];
  currentIndex: number = 0;
  selectedCourse: Course | undefined;
  showCourseDetails: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.updateDisplayedCourses();
  }

  navigate(direction: string): void {
    if (direction === 'left') {
      this.currentIndex = (this.currentIndex - 1 + this.courses.length) % this.courses.length;
    } else if (direction === 'right') {
      this.currentIndex = (this.currentIndex + 1) % this.courses.length;
    }
    this.updateDisplayedCourses();
  }

  updateDisplayedCourses(): void {
    const viewportWidth = window.innerWidth;
    let numCourses = 4;
  
    if (viewportWidth <= 1024) {
      numCourses = 3;
    }
  
    if (viewportWidth <= 768) {
      numCourses = 2;
    }
  
    if (viewportWidth <= 480) {
      numCourses = 1;
    }
  
    this.displayedCourses = [];
    for (let i = this.currentIndex; i < this.currentIndex + numCourses; i++) {
      const courseIndex = i % this.courses.length;
      this.displayedCourses.push(this.courses[courseIndex]);
    }
  }

  selectCourse(course: Course): void {
    this.selectedCourse = course;
    this.showCourseDetails = true;
  }

  closeCourseDetails(): void {
    this.selectedCourse = undefined; // Reset selected course
    this.showCourseDetails = false;
  }

  applyHoverAnimation(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    target.style.transform = 'scale(1.05)';
  }

  removeHoverAnimation(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    target.style.transform = 'scale(1)';
  }
}
