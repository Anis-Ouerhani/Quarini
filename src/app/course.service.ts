import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { Course } from './shared/model/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private baseUrl = 'http://localhost:8080/api/v1/courses'; // Update this URL according to your Spring application's URL

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  getCourseById(courseId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${courseId}`);
  }

  // addCourse(course: any): Observable<any> {
  //   const formData = new FormData();
  //   // for (const key in course) {
  //   //   formData.append(key, course[key]);
  //   // }
  //   formData.append('course',JSON.stringify(course));
  //   formData.append('coursePhotoFile', course.coursePhotoFile);
  //   return this.http.post<any>(`${this.baseUrl}`, formData);
  // }

  



  addCourse(course: Course,file:File): Observable<any> {
    const formData = new FormData();
    
    formData.append('course', JSON.stringify(course));
    formData.append('file', file);
  
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
  
    return this.http.post<any>(`${this.baseUrl}`, formData);
  }









  updateCourse(course: any, courseId: number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${courseId}`, course);
  }

  deleteCourse(courseId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${courseId}`);
  }
}