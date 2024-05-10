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
  searchQuery: string = '';
  searchMessage: string = '';
  originalLearners!: any[];
  originalCourses!: any[];
  originalInstructors!: any[];
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
    this.originalLearners = [...this.learners];
    this.originalCourses = [...this.courses];
    this.originalInstructors = [...this.instructors];
    this.startCounters();
  }

  filterData() {
    if (this.searchQuery.trim() === '') {
        // If search query is empty, restore original data for the active table
        if (this.activeTable === 'learners') {
            this.learners = [...this.originalLearners];
        } else if (this.activeTable === 'courses') {
            this.courses = [...this.originalCourses];
        } else if (this.activeTable === 'instructors') {
            this.instructors = [...this.originalInstructors];
        }
        this.searchMessage = '';
    } else {
        // If search query is not empty, filter the data for the active table
        if (this.activeTable === 'learners') {
            const filteredLearners = this.originalLearners.filter(learner =>
                learner.fullName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                learner.id.toString().includes(this.searchQuery.toLowerCase())
            );
            if (filteredLearners.length === 0) {
                this.searchMessage = 'No learners found with this input.';
            } else {
                this.searchMessage = '';
            }
            this.learners = filteredLearners;
        } else if (this.activeTable === 'courses') {
            const filteredCourses = this.originalCourses.filter(course =>
                course.courseTitle.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                course.courseId.toString().includes(this.searchQuery.toLowerCase())
            );
            if (filteredCourses.length === 0) {
                this.searchMessage = 'No courses found with this input.';
            } else {
                this.searchMessage = '';
            }
            this.courses = filteredCourses;
        } else if (this.activeTable === 'instructors') {
            const filteredInstructors = this.originalInstructors.filter(instructor =>
                instructor.fullName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                instructor.id.toString().includes(this.searchQuery.toLowerCase())
            );
            if (filteredInstructors.length === 0) {
                this.searchMessage = 'No instructors found with this input.';
            } else {
                this.searchMessage = '';
            }
            this.instructors = filteredInstructors;
        }
    }
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
