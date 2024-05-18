import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

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
  learners: any[] = [
    { id: 1, fullName: 'Anis Ouerhani', phoneNumber: '+216 50 100 200' },
    { id: 2, fullName: 'Hayder Thamlaoui', phoneNumber: '+216 50 200 300' }
  ];

  instructors: any[] = [
    { id: 1, fullName: 'Hanen Brahmi', phoneNumber: '+216 50 300 400' },
    { id: 2, fullName: 'Khalil Landolsi', phoneNumber: '+216 50 400 500' }
  ];

  courses: any[] = [
    { courseId: 1, courseTitle: 'Start Angular', coursePublishedDate: '2024-05-01', rate: 4 , courseStudentsEnrolled: 20 },
    { courseId: 2, courseTitle: 'Learn Java', coursePublishedDate: '2024-05-02', rate: 3, courseStudentsEnrolled: 15 }
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

  calculateAverageRating(course: any): number {
    // Logic to calculate average rating
    return 0; // Placeholder value
  }

  toggleTable(table: string) {
    this.activeTable = table;
  }

  deleteLearner(learnerId: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to delete this learner.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        // Logic to delete learner
        Swal.fire('Deleted!', 'Learner has been deleted.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your learner is safe :)', 'error');
      }
    });
  }

  suspendLearner(learnerId: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to suspend this learner.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, suspend it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        // Logic to suspend learner
        Swal.fire('Suspended!', 'Learner has been suspended.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your learner is safe :)', 'error');
      }
    });
  }

  deleteCourse(courseId: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to delete this course.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        // Logic to delete course
        Swal.fire('Deleted!', 'Course has been deleted.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your course is safe :)', 'error');
      }
    });
  }

  toggleCourseVisibility(courseId: number) {
    // Logic to hide/unhide course
  }

  deleteInstructor(instructorId: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to delete this instructor.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        // Logic to delete instructor
        Swal.fire('Deleted!', 'Instructor has been deleted.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your instructor is safe :)', 'error');
      }
    });
  }

  suspendInstructor(instructorId: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to suspend this instructor.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, suspend it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        // Logic to suspend instructor
        Swal.fire('Suspended!', 'Instructor has been suspended.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your instructor is safe :)', 'error');
      }
    });
  }

  reactivateLearner(learnerId: number) {
    // Logic to reactivate learner
  }

  reactivateInstructor(instructorId: number) {
    // Logic to reactivate instructor
  }
}


