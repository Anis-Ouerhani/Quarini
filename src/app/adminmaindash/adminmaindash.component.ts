import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminmaindash',
  templateUrl: './adminmaindash.component.html',
  styleUrls: ['./adminmaindash.component.css']
})
export class AdminMainDashComponent implements OnInit {
  instructorCount: number = 0;
  learnerCount: number = 0;
  courseCount: number = 0;

  activeTable: string = '';

  // Sample data
  instructors: any[] = [
    { id: 1, fullName: 'John Doe', phoneNumber: '123-456-7890' },
    { id: 2, fullName: 'Jane Smith', phoneNumber: '987-654-3210' }
  ];

  learners: any[] = [
    { id: 1, fullName: 'Alice Johnson', phoneNumber: '111-222-3333' },
    { id: 2, fullName: 'Bob Williams', phoneNumber: '444-555-6666' }
  ];

  courses: any[] = [
    { courseId: 1, courseTitle: 'Course 1', coursePublishedDate: '2024-05-01', rate: 4 , courseStudentsEnrolled: 20 },
    { courseId: 2, courseTitle: 'Course 2', coursePublishedDate: '2024-05-02', rate: 3, courseStudentsEnrolled: 15 }
  ];

  constructor() { }

  ngOnInit(): void {
    // Simulate data loading
    this.startCounters();
  }

  startCounters() {
    // Simulate incrementing counters
    setInterval(() => {
      this.instructorCount++;
    }, 1000);

    setInterval(() => {
      this.learnerCount++;
    }, 1500);

    setInterval(() => {
      this.courseCount++;
    }, 2000);
  }

  toggleTable(table: string) {
    this.activeTable = table;
  }

  deleteLearner(learnerId: number) {
    // Logic to delete learner
  }

  suspendLearner(learnerId: number) {
    // Logic to suspend learner
  }

  reactivateLearner(learnerId: number) {
    // Logic to reactivate learner
  }

  deleteCourse(courseId: number) {
    // Logic to delete course
  }

  toggleCourseVisibility(courseId: number) {
    // Logic to hide/unhide course
  }

  calculateAverageRating(course: any): number {
    // Logic to calculate average rating
    return 0; // Placeholder value
  }

  deleteInstructor(instructorId: number) {
    // Logic to delete instructor
  }

  suspendInstructor(instructorId: number) {
    // Logic to suspend instructor
  }

  reactivateInstructor(instructorId: number) {
    // Logic to reactivate instructor
  }
}
