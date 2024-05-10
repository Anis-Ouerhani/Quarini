import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LessonService } from '../lesson.service';
import { ChapterService } from '../chapter.service';
import { QuizService } from '../quiz.service';

interface Answer {
  text: string;
  isCorrect: boolean;
}

interface Quiz {
  quizQuestion: string;
  answers: Answer[];
  quizScore: number;
}

interface Lesson {
  lessonTitle: string;
  lessonDescription: string;
  lessonChapters: Chapter[];
  lessonQuizzes: Quiz[];
}

interface Chapter {
  chapterTitle: string;
  chapterDescription: string;
  chapterVideoLink: string;
}

@Component({
  selector: 'app-addcontent',
  templateUrl: './addcontent.component.html',
  styleUrls: ['./addcontent.component.css']
})
export class AddcontentComponent {
  courseLessons: Lesson[] = [{ lessonTitle: '', lessonDescription: '', lessonChapters: [], lessonQuizzes: [] }];

  constructor(private router: Router, private lessonService: LessonService, private chapterService: ChapterService, private quizService: QuizService) { }

  addLesson(): void {
    this.courseLessons.push({ lessonTitle: '', lessonDescription: '', lessonChapters: [], lessonQuizzes: [] });
  }

  deleteLesson(index: number): void {
    if (index !== 0) {
      this.courseLessons.splice(index, 1);
    } else {
      // Alert that the first lesson cannot be deleted
      alert("Cannot delete the first lesson.");
    }
  }

  addChapter(lessonIndex: number): void {
    this.courseLessons[lessonIndex].lessonChapters.push({ chapterTitle: '', chapterDescription: '', chapterVideoLink: '' });
  }

  deleteChapter(lessonIndex: number, chapterIndex: number): void {
    this.courseLessons[lessonIndex].lessonChapters.splice(chapterIndex, 1);
  }

  addQuiz(lessonIndex: number): void {
    this.courseLessons[lessonIndex].lessonQuizzes.push({ quizQuestion: '', answers: [{ text: '', isCorrect: false }, { text: '', isCorrect: false }], quizScore: 100 });
  }

  deleteQuiz(lessonIndex: number, quizIndex: number): void {
    this.courseLessons[lessonIndex].lessonQuizzes.splice(quizIndex, 1);
  }

  addAnswer(lessonIndex: number, quizIndex: number): void {
    this.courseLessons[lessonIndex].lessonQuizzes[quizIndex].answers.push({ text: '', isCorrect: false });
  }

  deleteAnswer(lessonIndex: number, quizIndex: number, answerIndex: number): void {
    if (this.courseLessons[lessonIndex].lessonQuizzes[quizIndex].answers.length > 2) {
      this.courseLessons[lessonIndex].lessonQuizzes[quizIndex].answers.splice(answerIndex, 1);
    } else {
      alert("At least two answers are required for a quiz.");
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    const allLessonsFilled = this.courseLessons.every(lesson =>
      lesson.lessonTitle.trim() && lesson.lessonDescription.trim() &&
      lesson.lessonChapters.every(chapter => chapter.chapterTitle.trim() && chapter.chapterDescription.trim() && chapter.chapterVideoLink.trim()) &&
      lesson.lessonQuizzes.every(quiz =>
        quiz.quizQuestion.trim() &&
        quiz.answers.some(answer => answer.text.trim() && answer.isCorrect)
      )
    );

    if (allLessonsFilled) {
      this.courseLessons.forEach((lesson, lessonIndex) => {
        this.lessonService.addLesson(lesson).subscribe(savedLesson => {
          const lessonId = savedLesson.lessonId;
          lesson.lessonChapters.forEach(chapter => {
            this.chapterService.addChapter(lessonId, chapter).subscribe(savedChapter => {
              lesson.lessonChapters[lessonIndex] = savedChapter;
            });
          });
          lesson.lessonQuizzes.forEach(quiz => {
            this.quizService.addQuiz(lessonId, quiz).subscribe(savedQuiz => {
              lesson.lessonQuizzes[lessonIndex] = savedQuiz;
            });
          });
        });
      });
      console.log('Form submitted!');
      Swal.fire({
        icon: 'success',
        title: 'Content Added Successfully!',
        text: 'Your content has been added successfully.',
        confirmButtonText: 'OK'
      }).then(() => {
        // Redirect to the main dashboard page
        this.router.navigate(['/']);
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'No Content Added!',
        text: 'Please fill in all lesson, chapter, and quiz titles and descriptions.',
        confirmButtonText: 'OK'
      });
    }

  }
}
