import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Course } from '../course.model'; // Import the Course model
import { Quiz } from '../quiz.model'; // Import the Quiz model

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  course: Partial<Course> = {
    courseId: 0,
    courseTitle: '',
    courseDescription: '',
    courseDuration: '',
    coursePhotoFile: '',
    courseLessons: []
  }; 
  

  courseUpdateForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.courseUpdateForm = this.formBuilder.group({
      courseTitle: ['', Validators.required],
      courseDescription: ['', Validators.required],
      courseDuration: ['', Validators.required],
    });
  }

  ngOnInit() {
    // Get the course that needs to be updated
    // For now, we'll use a placeholder
    this.course = {
      courseId: 1,
      courseTitle: 'Example Course',
      courseDescription: 'This is an example course.',
      courseLessons: []
    };
  }

  onUpdateCourse(updatedCourse: Partial<Course>) {
    // Update the course with the new information
    this.course = updatedCourse;
  }

  onSubmit(): void {
    if (this.courseUpdateForm.valid) {
      this.onUpdateCourse(this.courseUpdateForm.value);
    }
  }

  addLesson(): void {
    if (this.course.courseLessons) {
      this.course.courseLessons.push({ lessonTitle: '', lessonDescription: '', lessonChapters: [], lessonQuizzes: [] });
    }
  }

  deleteLesson(index: number): void {
    if (this.course.courseLessons && index !== 0) {
      this.course.courseLessons.splice(index, 1);
    } else {
      alert("Cannot delete the first lesson.");
    }
  }

  addChapter(lessonIndex: number): void {
    if (this.course.courseLessons && this.course.courseLessons[lessonIndex]) {
      this.course.courseLessons[lessonIndex].lessonChapters.push({ chapterTitle: '', chapterDescription: '', chapterVideo: '' });
    }
  }

  deleteChapter(lessonIndex: number, chapterIndex: number): void {
    if (this.course.courseLessons && this.course.courseLessons[lessonIndex]) {
      this.course.courseLessons[lessonIndex].lessonChapters.splice(chapterIndex, 1);
    }
  }

  addQuiz(lessonIndex: number): void {
    if (this.course.courseLessons && this.course.courseLessons[lessonIndex]) {
      const lesson = this.course.courseLessons[lessonIndex];
      const numQuizzes = lesson.lessonQuizzes.length;
      const totalScore = numQuizzes > 0 ? lesson.lessonQuizzes.reduce((acc: number, quiz: Quiz) => acc + quiz.quizScore, 0) : 0;
      const score = numQuizzes > 0 ? Math.round(totalScore / (numQuizzes + 1)) : 100;

      // Update scores for existing quizzes
      lesson.lessonQuizzes.forEach((quiz: Quiz) => {
        quiz.quizScore = score;
      });

      // Add new quiz with calculated score
      this.course.courseLessons[lessonIndex].lessonQuizzes.push({ quizQuestion: '', quizCorrectAnswer: '', quizScore: score });
    }
  }

  deleteQuiz(lessonIndex: number, quizIndex: number): void {
    if (this.course.courseLessons && this.course.courseLessons[lessonIndex]) {
      const lesson = this.course.courseLessons[lessonIndex];
      const numQuizzes = lesson.lessonQuizzes.length;
  
      // Remove quiz
      const removedQuizScore = lesson.lessonQuizzes[quizIndex].quizScore;
      lesson.lessonQuizzes.splice(quizIndex, 1);
  
      // Recalculate scores for remaining quizzes
      if (numQuizzes > 1) {
        const totalScore = lesson.lessonQuizzes.reduce((acc: number, quiz: Quiz) => acc + quiz.quizScore, 0);
        const updatedNumQuizzes = numQuizzes - 1;
        const newScore = Math.round(100 / updatedNumQuizzes);
        lesson.lessonQuizzes.forEach((quiz: Quiz) => {
          quiz.quizScore = newScore;
        });
      } else {
        // If there is only one quiz left, reset its score to 100%
        lesson.lessonQuizzes[0].quizScore = 100;
      }
    }
  }
}
