import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCourseComponent } from './create-course/create-course.component';
import { AddcontentComponent } from './addcontent/addcontent.component';
import { FviewComponent } from './fview/fview.component';
import { LogComponent } from './log/log.component';
import { SupComponent } from './sup/sup.component';
import { ProfileComponent } from './profile/profile.component'; 
import { InstMainDashComponent } from './instmaindash/instmaindash.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { CourseInterfaceComponent } from './course-interface/course-interface.component';
import { AllcoursesComponent } from './allcourses/allcourses.component'; 
import { ViewcourseComponent } from './viewcourse/viewcourse.component'; 
import { RankingsComponent } from './rankings/rankings.component'; 
import { AdminMainDashComponent } from './adminmaindash/adminmaindash.component';

const routes: Routes = [
  { path: 'admin', component: AdminMainDashComponent },
  { path: 'ranking', component: RankingsComponent },
  { path: 'insidecourse', component: CourseInterfaceComponent },
  { path: 'viewcourse', component: ViewcourseComponent },
  { path: 'home', component: FviewComponent },
  { path: 'create-course', component: CreateCourseComponent },
  { path: 'addcontent', component: AddcontentComponent },
  { path: 'login', component: LogComponent },
  { path: 'signup', component: SupComponent },
  { path: 'profile', component: ProfileComponent }, 
  { path: 'maindash', component: InstMainDashComponent },
  { path: 'updatecourse', component: UpdateCourseComponent },
  { path: 'allcourses', component: AllcoursesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
