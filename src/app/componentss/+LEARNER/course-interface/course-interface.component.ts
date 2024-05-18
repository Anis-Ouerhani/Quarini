import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

// Define interfaces
export interface Lesson {
  lessonTitle: string;
  lessonDescription: string;
  lessonChapters: Chapter[];
  lessonQuizzes: Quiz[];
}

export interface Chapter {
  chapterTitle: string;
  chapterDescription: string;
  chapterVideo: string;
}

export interface Answer {
  text: string;
  isCorrect: boolean;
}

export interface Quiz {
  quizQuestion: string;
  answers: Answer[];
  quizScore: number;
}

export interface Course {
  courseTitle: string;
  courseDescription: string;
  courseLessons: Lesson[];
}

// Example course data
export const exampleCourse: Course = {
  courseTitle: 'Angular Masterclass',
  courseDescription: 'Master Angular framework with this comprehensive course.',
  courseLessons: [
    {
      lessonTitle: 'Introduction to Angular',
      lessonDescription: 'Learn the basics of Angular framework.',
      lessonChapters: [
        {
          chapterTitle: 'Getting Started',
          chapterDescription: 'Introduction to Angular framework.',
          chapterVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        },
        {
          chapterTitle: 'Components',
          chapterDescription: 'Understanding Angular components.',
          chapterVideo: 'https://www.youtube.com/embed/abc123'
        }
      ],
      lessonQuizzes: [
        {
          quizQuestion: 'What is Angular?',
          answers: [
            { text: 'HTML framework', isCorrect: false },
            { text: 'A Backend framework', isCorrect: false },
            { text: 'A JavaScript framework', isCorrect: true }
          ],
          quizScore: 10
        }
      ]
    },
    {
      lessonTitle: 'Directives and Services',
      lessonDescription: 'Explore Angular directives and services.',
      lessonChapters: [
        {
          chapterTitle: 'Directives Overview',
          chapterDescription: 'Understanding Angular directives.',
          chapterVideo: 'https://www.youtube.com/embed/def456'
        },
        {
          chapterTitle: 'Services in Angular',
          chapterDescription: 'Working with Angular services.',
          chapterVideo: 'https://www.youtube.com/embed/ghi789'
        }
      ],
      lessonQuizzes: [
        {
          quizQuestion: 'What are Angular directives used for?',
          answers: [
            { text: 'To add behavior to DOM elements', isCorrect: true },
            { text: 'For making the TypeScript easier', isCorrect: false },
            { text: 'For Designing', isCorrect: false }
          ],
          quizScore: 10
        },
        {
          quizQuestion: 'What is an Angular service?',
          answers: [
            { text: 'A reusable piece of code', isCorrect: true },
            { text: 'A TypeScript code', isCorrect: false },
            { text: 'A connection between Frontend and Backend', isCorrect: false }
          ],
          quizScore: 10
        }
      ]
    }
  ]
};

@Component({
  selector: 'app-course-interface',
  templateUrl: './course-interface.component.html',
  styleUrls: ['./course-interface.component.css']
})
export class CourseInterfaceComponent {
  // Assign example course data
  lessons: Lesson[] = exampleCourse.courseLessons;
  isSidebarHidden: boolean = false;
  selectedContent: any;
  answers: any = {};
  currentLessonIndex: number = 0; // Track current lesson
  totalCorrectAnswers: number = 0; // Track total correct answers
  totalQuestions: number = 0; // Track total questions
  showRateBox: boolean = false;
  rating!: number;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Set the default selected content to the first chapter of the first lesson
    if (this.lessons.length > 0 && this.lessons[0].lessonChapters.length > 0) {
      this.selectedContent = this.lessons[0].lessonChapters[0];
    }
  }

  toggleLesson(lesson: any) {
    lesson.expanded = !lesson.expanded;
  }

  displayContent(content: any) {
    if (content.hasOwnProperty('quizQuestion')) {
      this.selectedContent = { quiz: content };
    } else {
      this.selectedContent = content;
    }
  }

  closeRateBox(): void {
    this.showRateBox = false;
  }

  submitQuiz() {
    // Process submitted quiz answers here
    const quiz = this.selectedContent.quiz;
    const correctAnswer = quiz.answers.find((answer: Answer) => answer.isCorrect);
    if (this.answers[quiz.quizQuestion] === correctAnswer.text) {
      this.totalCorrectAnswers++;
    }
    this.totalQuestions++;
  
    const currentLesson = this.lessons[this.currentLessonIndex];
    const currentQuizIndex = currentLesson.lessonQuizzes.findIndex(q => q === quiz);
  
    // Check if it's the last quiz of the last lesson
    if (this.currentLessonIndex === this.lessons.length - 1 && currentQuizIndex === currentLesson.lessonQuizzes.length - 1) {
      // Display overall result
      const result = `You answered ${this.totalCorrectAnswers} correct quizzes out of ${this.totalQuestions}.`;
      if (this.totalCorrectAnswers === this.totalQuestions) {
        Swal.fire({
        title: 'Congratulations!',
        text: `You've completed the course.`,
        icon: 'success'
      }).then(() => {
        this.showRateBox = true; // Show the rate box
      });
    } else {
        Swal.fire({
          title: 'Failure',
          text: `${result} You need to go back and have all quizzes correct.`,
          icon: 'error',
          confirmButtonText: 'Proceed'
        }).then((result) => {
          if (result.isConfirmed) {
            // Reset quiz progress and navigate to the first quiz
            this.currentLessonIndex = 0;
            this.totalCorrectAnswers = 0;
            this.totalQuestions = 0;
            this.selectedContent = { quiz: this.lessons[0].lessonQuizzes[0] };
          }
        });
      }
    } else {
      // Navigate to the next lesson or quiz
      if (currentQuizIndex < currentLesson.lessonQuizzes.length - 1) {
        // Move to the next quiz in the same lesson
        this.selectedContent = { quiz: currentLesson.lessonQuizzes[currentQuizIndex + 1] };
      } else {
        // Move to the next lesson
        this.currentLessonIndex++;
        this.selectedContent = this.lessons[this.currentLessonIndex].lessonChapters[0];
      }
    }
  }

  onRateChange(value: number) {
    this.rating = value;
  }

  onSubmit() {
    console.log('Rating:', this.rating);
    this.router.navigate(['/mycourses']);
  }
  
  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }
}
