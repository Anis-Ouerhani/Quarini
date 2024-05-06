import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-allcourses',
  templateUrl: './allcourses.component.html',
  styleUrls: ['./allcourses.component.css']
})
export class AllcoursesComponent {
  searchText: string = '';
  categories = [
    {
      title: 'Programming',
      courses: [
        { title: 'Introduction to Python', image: 'assets/imagecourse.jpg', duration: '3 hours', rate: '4' },
        { title: 'JavaScript Basics', image: 'assets/imagecourse.jpg', duration: '2.5 hours', rate: '4' },
        { title: 'Java Fundamentals', image: 'assets/imagecourse.jpg', duration: '4 hours', rate: '4' },
        { title: 'C++ Crash Course', image: 'assets/imagecourse.jpg', duration: '3.5 hours', rate: '4' },
        { title: 'Ruby on Rails Essentials', image: 'assets/imagecourse.jpg', duration: '5 hours', rate: '5' },
        { title: 'PHP Programming', image: 'assets/imagecourse.jpg', duration: '3 hours', rate: '3' },
        { title: 'Swift Development', image: 'assets/imagecourse.jpg', duration: '2 hours', rate: '4' }
      ]
    },
    {
      title: 'Web Development',
      courses: [
        { title: 'HTML5 and CSS3 Basics', image: 'assets/imagecourse.jpg', duration: '2.5 hours', rate: '4' },
        { title: 'Responsive Web Design', image: 'assets/imagecourse.jpg', duration: '3 hours', rate: '5' },
        { title: 'JavaScript Fundamentals', image: 'assets/imagecourse.jpg', duration: '4 hours', rate: '3' },
        { title: 'Node.js Essentials', image: 'assets/imagecourse.jpg', duration: '5 hours', rate: '4' },
        { title: 'Angular Crash Course', image: 'assets/imagecourse.jpg', duration: '3.5 hours', rate: '4' }
      ]
    },
    {
      title: 'Data Science',
      courses: [
        { title: 'Introduction to Data Science', image: 'assets/imagecourse.jpg', duration: '3 hours', rate: '2' },
        { title: 'Machine Learning Basics', image: 'assets/imagecourse.jpg', duration: '5 hours', rate: '4' },
        { title: 'Data Visualization with Python', image: 'assets/imagecourse.jpg', duration: '4 hours', rate: '4' },
        { title: 'Deep Learning Fundamentals', image: 'assets/imagecourse.jpg', duration: '3.5 hours', rate: '5' },
        { title: 'Big Data Analytics', image: 'assets/imagecourse.jpg', duration: '4 hours', rate: '3' },
        { title: 'Natural Language Processing', image: 'assets/imagecourse.jpg', duration: '2.5 hours', rate: '3' }
      ]
    }
  ];

  currentIndex: { [key: string]: number } = {};

  filteredCourses() {
    return this.categories.filter(category => 
      category.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      category.courses.some(course => course.title.toLowerCase().includes(this.searchText.toLowerCase()))
    ).map(category => {
      const categoryId = category.title;
      if (!this.currentIndex[categoryId]) {
        this.currentIndex[categoryId] = 0;
      }
      const startIndex = this.currentIndex[categoryId];
      const endIndex = (startIndex + 5) % category.courses.length; // Ensure index doesn't exceed the array length
      return {
        title: category.title,
        courses: this.searchText ? 
          category.courses.filter(course =>
            category.title.toLowerCase().includes(this.searchText.toLowerCase()) || 
            course.title.toLowerCase().includes(this.searchText.toLowerCase())
          ) : 
          this.getCourses(category.courses, startIndex, endIndex)
      };
    }).filter(category => category.courses.length > 0);
  }
  
  
  

  nextCourse(category: any) {
    const categoryId = category.title;
    this.currentIndex[categoryId] = (this.currentIndex[categoryId] + 1) % category.courses.length;
  }

  // Helper function to get courses with cyclic indexing
  getCourses(courses: any[], startIndex: number, endIndex: number): any[] {
    if (endIndex > startIndex) {
      return courses.slice(startIndex, endIndex);
    } else {
      return courses.slice(startIndex).concat(courses.slice(0, endIndex));
    }
  }

  constructor(private router: Router, private route: ActivatedRoute) {}
  //goToViewCourse(courseId: number) {
    //this.router.navigate(['/view-course', courseId]); // Assuming courseId is the identifier of the course
  //}

  goToViewCourse() {
    this.router.navigate(['/viewcourse'])
  }

  ngOnInit() {
    // Retrieve the category parameter from the URL
    this.route.queryParams.subscribe(params => {
      const category = params['category'];
      if (category) {
        // Filter the courses based on the category parameter
        this.categories = this.categories.filter(cat => cat.title.toLowerCase() === category.toLowerCase());
      }
    });
  }
  
}