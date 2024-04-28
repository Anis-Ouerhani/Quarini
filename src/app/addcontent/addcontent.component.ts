import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LessonService } from '../lesson.service';
import { ChapterService } from '../chapter.service';
import { QuizService } from '../quiz.service';

interface Lesson {
  lessonTitle: string;
  lessonDescription: string;
  lessonChapters: Chapter[];
  lessonQuizzes: Quiz[];
}

interface Chapter {
  chapterTitle: string;
  chapterDescription: string;
  chapterVideo: string;
}

interface Quiz {
  quizQuestion: string;
  quizCorrectAnswer: string;
  quizScore: number;
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
    this.courseLessons[lessonIndex].lessonChapters.push({ chapterTitle: '', chapterDescription: '', chapterVideo: '' });
  }

  deleteChapter(lessonIndex: number, chapterIndex: number): void {
    this.courseLessons[lessonIndex].lessonChapters.splice(chapterIndex, 1);
  }

  addQuiz(lessonIndex: number): void {
    const lesson = this.courseLessons[lessonIndex];
    const numQuizzes = lesson.lessonQuizzes.length;
    const totalScore = numQuizzes > 0 ? lesson.lessonQuizzes.reduce((acc, quiz) => acc + quiz.quizScore, 0) : 0;
    const score = numQuizzes > 0 ? Math.round(totalScore / (numQuizzes + 1)) : 100;

    // Update scores for existing quizzes
    lesson.lessonQuizzes.forEach(quiz => {
      quiz.quizScore = score;
    });

    // Add new quiz with calculated score
    this.courseLessons[lessonIndex].lessonQuizzes.push({ quizQuestion: '', quizCorrectAnswer: '', quizScore: score });
  }

  deleteQuiz(lessonIndex: number, quizIndex: number): void {
    const lesson = this.courseLessons[lessonIndex];
    const numQuizzes = lesson.lessonQuizzes.length;
  
    // Remove quiz
    const removedQuizScore = lesson.lessonQuizzes[quizIndex].quizScore;
    lesson.lessonQuizzes.splice(quizIndex, 1);
  
    // Recalculate scores for remaining quizzes
    if (numQuizzes > 1) {
      const totalScore = lesson.lessonQuizzes.reduce((acc, quiz) => acc + quiz.quizScore, 0);
      const updatedNumQuizzes = numQuizzes - 1;
      const newScore = Math.round(100 / updatedNumQuizzes);
      lesson.lessonQuizzes.forEach(quiz => {
        quiz.quizScore = newScore;
      });
    } else {
      // If there is only one quiz left, reset its score to 100%
      lesson.lessonQuizzes[0].quizScore = 100;
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();
  
    const allLessonsFilled = this.courseLessons.every(lesson =>
      lesson.lessonTitle.trim() && lesson.lessonDescription.trim() &&
      lesson.lessonChapters.every(chapter => chapter.chapterTitle.trim() && chapter.chapterDescription.trim() && chapter.chapterVideo.trim()) &&
      lesson.lessonQuizzes.every(quiz => quiz.quizQuestion.trim() && quiz.quizCorrectAnswer.trim()));
  
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
