import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fview',
  templateUrl: './fview.component.html',
  styleUrls: ['./fview.component.css']
})
export class FviewComponent implements OnInit {
  learnerCount: number = 100; // Placeholder value, replace with actual count
  instructorCount: number = 50; // Placeholder value, replace with actual count
  courseCount: number = 200; // Placeholder value, replace with actual count
  categoryCount: number = 10; // Placeholder value, replace with actual count
  currentReviewIndex: number = 0;
  categories = [
    { name: 'Development', icon: 'bx-code' },
    { name: 'Business', icon: 'bx-briefcase' },
    { name: 'Photography', icon: 'bx-camera' },
    { name: 'Music', icon: 'bx-music' },
    { name: 'Personal Development', icon: 'bx-smile' },
    { name: 'Trading', icon: 'bx-chart' },
    { name: 'Marketing', icon: 'bx-bullseye' },
    { name: 'Science', icon: 'bxs-thermometer' }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialize any data or variables here
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

}