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
import { MyCoursesComponent } from './mycourses/mycourses.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AuthGuard } from './auth.guard'
import { BecomeInstructorComponent } from './become-instructor/become-instructor.component';


const routes: Routes = [

    { path: 'mycourses', component: MyCoursesComponent , canActivate: [AuthGuard], data: { roles: ['learner'] }},//
    { path: 'become-inst', component: BecomeInstructorComponent , canActivate: [AuthGuard], data: { roles: ['learner'] }},
    { path: 'admin', component: AdminMainDashComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },
    { path: 'changepass', component: ChangePasswordComponent, canActivate: [AuthGuard], data: { roles: ['admin','instructor','learner'] } },
    { path: 'ranking', component: RankingsComponent },
    { path: 'insidecourse', component: CourseInterfaceComponent , canActivate: [AuthGuard], data: { roles: ['learner'] }},//
    { path: 'viewcourse', component: ViewcourseComponent },
    { path: '', component: FviewComponent },
    { path: 'create-course', component: CreateCourseComponent, canActivate: [AuthGuard], data: { roles: ['instructor'] }  }, //
    { path: 'addcontent', component: AddcontentComponent, canActivate: [AuthGuard], data: { roles: ['instructor'] } }, //
    { path: 'login', component: LogComponent },
    { path: 'signup', component: SupComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'maindash', component: InstMainDashComponent, canActivate: [AuthGuard], data: { roles: ['instructor'] } },
    { path: 'updatecourse', component: UpdateCourseComponent, canActivate: [AuthGuard], data: { roles: ['instructor'] } },
    { path: 'allcourses', component: AllcoursesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
