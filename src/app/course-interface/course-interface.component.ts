import { Component } from '@angular/core';

interface Lesson {
  title: string;
  description: string;
  chapters: Chapter[];
  quizzes: Quiz[];
}

interface Chapter {
  title: string;
  description: string;
  videoLink: string;
}

interface Quiz {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-course-interface',
  templateUrl: './course-interface.component.html',
  styleUrls: ['./course-interface.component.css']
})
export class CourseInterfaceComponent {
  course = {
    lessons: [
      {
        title: 'Loops',
        description: 'You will have mastered the art of loop construction, gained insights into best practices for loop optimization, and be equipped with the knowledge to write clean, efficient, and maintainable Python code.',
        chapters: [
          {
            title: 'If Loop',
            description: 'You will have mastered the art of loop construction, gained insights into best practices for loop optimization, and be equipped with the knowledge to write clean, efficient, and maintainable Python code.',
            videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Embedded YouTube video link
          },
          {
            title: 'For Loop',
            description: 'You will have mastered the art of loop construction, gained insights into best practices for loop optimization, and be equipped with the knowledge to write clean, efficient, and maintainable Python code.',
            videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Embedded YouTube video link
          }
        ],
        quizzes: [
          {
            question: 'What is the capital of France?',
            answer: ''
          },
          {
            question: 'What is the capital of England?',
            answer: ''
          }
        ]
      },
      {
        title: 'Lesson 2',
        description: 'This is lesson 2',
        chapters: [
          {
            title: 'Chapter 1',
            description: 'This is chapter 1',
            videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Embedded YouTube video link
          },
          {
            title: 'Chapter 2',
            description: 'This is chapter 2',
            videoLink: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Embedded YouTube video link
          }
        ],
        quizzes: [
          {
            question: 'What is the capital of France?',
            answer: ''
          },
          {
            question: 'What is the capital of England?',
            answer: ''
          }
        ]
      }
    ]
  };

  selectedLesson: Lesson | null = null;
  selectedChapter: Chapter | null = null;
  showQuiz: boolean = false;

  onSelectLesson(lesson: Lesson) {
    if (this.selectedLesson === lesson) {
      this.selectedLesson = null;
      this.showQuiz = false;
    } else {
      this.selectedLesson = lesson;
      this.selectedChapter = null;
      this.showQuiz = false;
    }
  }

  onSelectChapter(chapter: Chapter) {
    this.selectedChapter = this.selectedChapter === chapter ? null : chapter;
    this.showQuiz = false;
  }

  onSelectQuiz(lesson: Lesson) {
    this.showQuiz = true;
    this.selectedChapter = null;
  }
  
}
