import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-become-instructor',
  templateUrl: './become-instructor.component.html',
  styleUrl: './become-instructor.component.css'
})
export class BecomeInstructorComponent {
  form!: FormGroup;
  showOtherBackground: boolean = false;
  otherBackground: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      background: ['', [Validators.required]],
      otherBackground: [''],
      engagement: ['', Validators.required],
      profession: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  toggleOtherBackground(target: EventTarget | null): void {
    if (target instanceof HTMLSelectElement) {
      const selectedValue = (target as HTMLSelectElement).value;
      this.showOtherBackground = selectedValue === 'another';
    }
  }

  submitForm(): void {
    if (this.form.valid && (!this.showOtherBackground || this.form.get('otherBackground')?.value)) {
      console.log('Form submitted!');
      Swal.fire({
        icon: 'success',
        title: 'Form implemented!',
        text: 'Our team is reviewing your request. Please keep in touch.',
        confirmButtonText: 'OK'
      }).then(() => {
        window.history.back(); 
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Form Error!',
        text: 'Please fill in all required fields.',
        confirmButtonText: 'OK'
      });
    }
  }
}
