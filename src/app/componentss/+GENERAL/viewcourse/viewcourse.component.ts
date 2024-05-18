import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {
  course: any = {
    courseCategory: 'Data Science',
    courseTitle: 'Introduction to Data Science',
    courseDescription: 'A data science course typically covers a range of topics related to the collection, analysis, interpretation, and presentation of data to extract meaningful insights and make informed decisions. These courses often include instruction on statistical methods, machine learning algorithms, data visualization techniques, and programming languages commonly used in data science such as Python and R.',
    courseRate: 4.5,
    courseDuration: '4 Weeks',
    participantsCount: 150,
    coursePublishDate: '18/01/2024',
    coursePhotoFile : 'assets/imagecourse.jpg',
    instructor: {
      instructorName: 'Hayder Thamlaoui',
      instructorProfession: 'Music Producer',
      coursesCount: 10,
      studentsCount: 500,
      avatar : 'assets/first.jpg'
    },
    courseLessons: [
      { lessonTitle: 'Introduction to Music Production', lessonChapters: ['Chapter 1', 'Chapter 2'], lessonQuizzes: [] },
      { lessonTitle: 'Advanced Techniques', lessonChapters: ['Chapter 3', 'Chapter 4'], lessonQuizzes: ['Quiz 1', 'Quiz 2'] }
    ]
  };

  relatedCourses: any[] = [
    { courseTitle: 'Course 1', courseDescription: 'Lorem ipsum dolor sit amet', courseDuration: '4 Weeks', courseRate: 4.7, coursePhotoFile: 'assets/imagecourse.jpg' },
    { courseTitle: 'Course 2', courseDescription: 'Consectetur adipiscing elit', courseDuration: '1 Month', courseRate: 4.6, coursePhotoFile: 'assets/imagecourse.jpg' }
    // Add more related courses
  ];

  ngOnInit(): void {
  }

  toggleContent(lessonIndex: number): void {
    const lesson = this.course.courseLessons[lessonIndex];
    lesson.showContent = !lesson.showContent;
  }

  constructor(private router: Router) {}

  navigateToCategory(category: string) {
    this.router.navigate(['/allcourses'], { queryParams: { category: category } });
  }

  goToViewCourse() {
    this.router.navigate(['/viewcourse'])
  }

  Enroll() {
    this.router.navigate(['/insidecourse']);
  }
  
  //goToViewCourse(courseId: number) {
    //this.router.navigate(['/view-course', courseId]); // Assuming courseId is the identifier of the course
  //}
}
