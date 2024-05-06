// Rankings Component TypeScript
import { Component, OnInit } from '@angular/core';

interface Instructor {
  name: string;
  score: number;
  subscribedLearners: number;
  numberOfCourses: number;
  learnerEngagement: number;
  averageCourseRating: number;
}

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {
  instructors: Instructor[] = [
    { name: 'John Doe', score: 95, subscribedLearners: 1000, numberOfCourses: 15, learnerEngagement: 85, averageCourseRating: 4.7 },
    { name: 'Jane Smith', score: 92, subscribedLearners: 800, numberOfCourses: 12, learnerEngagement: 80, averageCourseRating: 4.6 },
    { name: 'Bob Johnson', score: 88, subscribedLearners: 600, numberOfCourses: 10, learnerEngagement: 75, averageCourseRating: 4.5 },
    { name: 'Alice Brown', score: 85, subscribedLearners: 400, numberOfCourses: 8, learnerEngagement: 70, averageCourseRating: 4.4 },
    { name: 'Mike Davis', score: 82, subscribedLearners: 200, numberOfCourses: 6, learnerEngagement: 65, averageCourseRating: 4.3 }
  ];

  ngOnInit(): void {
    this.instructors.sort((a, b) => b.score - a.score);
  }

  getRankBadgeClass(index: number): string {
    if (index === 0) {
      return 'badge-1';
    } else if (index === 1) {
      return 'badge-2';
    } else if (index === 2) {
      return 'badge-3';
    } else {
      return 'no-border';
    }
  }

  getRankNumber(index: number): string {
    if (index <= 2) {
      return (index + 1).toString();
    } else {
      return '' + (index + 1);
    }
  }
}