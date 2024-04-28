import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../course.model';

@Component({
  selector: 'app-viscrs',
  templateUrl: './viscrs.component.html',
  styleUrls: ['./viscrs.component.css']
})
export class ViscrsComponent {
  @Input() course: Course | undefined;
  @Output() close = new EventEmitter<void>(); // Emit close event when close button is clicked

  constructor() { }

  closeCourseDetails(): void {
    this.close.emit(); // Emit close event
  }
}
