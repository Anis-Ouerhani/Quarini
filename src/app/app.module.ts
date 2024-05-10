import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CreateCourseComponent } from './create-course/create-course.component';
import { SidenavAutosizeExampleComponent } from './sidenav-autosize-example/sidenav-autosize-example.component';
import { AddcontentComponent } from './addcontent/addcontent.component';
import { InstMainDashComponent } from './instmaindash/instmaindash.component';
import { FviewComponent } from './fview/fview.component';
import { LogComponent } from './log/log.component';
import { SupComponent } from './sup/sup.component';
import { ProfileComponent } from './profile/profile.component';
import { NavHomeComponent } from './navhome/navhome.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FooterComponent } from './footer/footer.component';
import { HeadComponent } from './head/head.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseInterfaceComponent } from './course-interface/course-interface.component';
import { SafeUrlPipe } from './safe-url.pipe';
import { AllcoursesComponent } from './allcourses/allcourses.component';
import { TopCoursesComponent } from './top-courses/top-courses.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { RankingsComponent } from './rankings/rankings.component';
import { GraphLearnerpercourseComponent } from './graph-learnerpercourse/graph-learnerpercourse.component';
import { AdminMainDashComponent } from './adminmaindash/adminmaindash.component';
import { GraphAllComponent } from './graph-all/graph-all.component';
import { MyCoursesComponent } from './mycourses/mycourses.component';
import { RatingModule } from 'primeng/rating';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarrRatingComponent } from './starr-rating/starr-rating.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCourseComponent,
    SidenavAutosizeExampleComponent,
    AddcontentComponent,
    InstMainDashComponent,
    FviewComponent,
    LogComponent,
    SupComponent,
    ProfileComponent,
    NavHomeComponent,
    ReviewsComponent,
    FooterComponent,
    HeadComponent,
    UpdateCourseComponent,
    CourseInterfaceComponent,
    SafeUrlPipe,
    AllcoursesComponent,
    TopCoursesComponent,
    ViewcourseComponent,
    StarRatingComponent,
    RankingsComponent,
    GraphLearnerpercourseComponent,
    AdminMainDashComponent,
    GraphAllComponent,
    MyCoursesComponent,
    StarrRatingComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RatingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }