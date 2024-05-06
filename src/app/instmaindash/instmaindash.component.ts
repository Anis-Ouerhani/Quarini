import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instmaindash',
  templateUrl: './instmaindash.component.html',
  styleUrls: ['./instmaindash.component.css']
})
export class InstMainDashComponent implements OnInit, OnDestroy {
  courseCount: number = 0;
  studentCount: number = 0;
  todos: any[] = [
    { task: 'Task 1', completed: false },
    { task: 'Task 2', completed: true }
  ];
  newTodo: string = '';
  courses: any[] = [
    { 
      "courseId": 1, 
      "courseTitle": "Course 1", 
      "coursePhotoFile": "assets/imagecourse.jpg", 
      "coursePublishedDate": "2024-04-15", 
      "rate": 4,
      "courseStudentsEnrolled": 10 
    },
    { 
      "courseId": 2, 
      "courseTitle": "Course 2", 
      "coursePhotoFile": "assets/imagecourse.jpg", 
      "coursePublishedDate": "2024-04-16", 
      "rate": 5,
      "courseStudentsEnrolled": 15 
    }
  ];
  courseRatings: any[] = [ // New array to store ratings
    { courseId: 1, rating: 4.5 },
    { courseId: 2, rating: 3.8 }
  ];
  courseInterval: any;
  studentInterval: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.startCounters();
  }

  ngOnDestroy(): void {
    clearInterval(this.courseInterval);
    clearInterval(this.studentInterval);
  }

  startCounters() {
    this.courseInterval = setInterval(() => {
      const targetCourseCount = 2;
      if (this.courseCount < targetCourseCount) {
        this.courseCount++;
      } else {
        clearInterval(this.courseInterval);
      }
    }, 100);

    this.studentInterval = setInterval(() => {
      const targetStudentCount = 35;
      if (this.studentCount < targetStudentCount) {
        this.studentCount++;
      } else {
        clearInterval(this.studentInterval);
      }
    }, 100);
  }

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push({ task: this.newTodo, completed: false });
      this.newTodo = '';
    }
  }

  deleteTodo(index: number): void {
    this.todos.splice(index, 1);
  }

  manageCourse(courseId: number) {
    console.log(`Managing course with ID ${courseId}`);
  }

  calculateAverageRating(course: any): number {
    const courseId = course.id;
    const ratings = this.courseRatings.filter(rating => rating.courseId === courseId);
  
    if (ratings.length === 0) {
      return 0;
    }
  
    const total = ratings.reduce((sum, rating) => sum + rating.rating, 0);
    return total / ratings.length;
  }

  deleteCourse(courseId: number) {
    // Logic to delete course
  }
  
  addCourse() {
    this.router.navigate(['/create-course']);
  }

  navigateToUpdateCourse(): void {
    this.router.navigate(['/updatecourse']); 
  }
  
}
