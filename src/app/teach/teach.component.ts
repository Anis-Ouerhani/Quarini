import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teach',
  templateUrl: './teach.component.html',
  styleUrls: ['./teach.component.css']
})
export class TeachComponent implements OnInit {
  currentReviewIndex: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToFView() {
    this.router.navigate(['/home']);
  }

  toggleDescription(stepId: string) {
    const description = document.getElementById(stepId + '-description') as HTMLElement;
    if (description.style.display === 'none' || description.style.display === '') {
      description.style.display = 'block';
    } else {
      description.style.display = 'none';
    }
  }

  reviews: any[] = [
    {
      instructorPhoto: 'assets/second.jpg',
      reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      instructorName: 'Anis Ouerhani'
    },
    {
      instructorPhoto: 'assets/first.jpg',
      reviewText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
      instructorName: 'Hayder Thamlaoui'
    },
    
  ];

  nextReview() {
    this.currentReviewIndex++;
    if (this.currentReviewIndex >= this.reviews.length) {
      this.currentReviewIndex = 0; // Reset to the first review
    }
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }

  goToForm() {
    this.router.navigate(['/newinst']);
  }

}
