import { Component } from '@angular/core';

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

export interface Quiz {
  quizQuestion: string;
  quizDescription: string;
  quizCorrectAnswer: string;
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
          quizDescription: 'Please pick of these 3 answers : HTML framework - A Backend framework - A JavaScript framework',
          quizCorrectAnswer: 'A JavaScript framework',
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
          quizDescription: 'Please pick of these 3 answers : To add behavior to DOM elements - For making the TypeScript easier - For Designing',
          quizCorrectAnswer: 'To add behavior to DOM elements',
          quizScore: 10
        },
        {
          quizQuestion: 'What is an Angular service?',
          quizDescription: 'Please pick one of 3 these answers : A reusable piece of code - A TypeScript code - A connection between Frontend and Backend',
          quizCorrectAnswer: 'A reusable piece of code',
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
  quizAnswer: string = '';
  answers: any = {};

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

  submitQuiz() {
    // Process submitted quiz answers here
    console.log(this.answers);
  }

  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }
}
