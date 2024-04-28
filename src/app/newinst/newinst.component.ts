import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newinst',
  templateUrl: './newinst.component.html',
  styleUrls: ['./newinst.component.css']
})
export class NewinstComponent {
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

  get background() {
    return this.form.get('background');
  }

  get engagement() {
    return this.form.get('engagement');
  }

  get profession() {
    return this.form.get('profession');
  }

  get location() {
    return this.form.get('location');
  }

  submitForm(): void {
    if (this.form.valid && (!this.showOtherBackground || this.form.get('otherBackground')?.value)) {
      console.log('Form submitted!');
      Swal.fire({
        icon: 'success',
        title: 'Request is pending!',
        text: "Your request is being reviewed by Quarini's team. Please stay close.",
        confirmButtonText: 'OK'
      }).then(() => {
        this.router.navigate(['/']);
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
