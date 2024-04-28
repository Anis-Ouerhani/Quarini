import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCourseComponent } from './create-course/create-course.component';
import { AddcontentComponent } from './addcontent/addcontent.component';
import { FviewComponent } from './fview/fview.component';
import { ViscrsComponent } from './viscrs/viscrs.component';
import { LogComponent } from './log/log.component';
import { SupComponent } from './sup/sup.component';
import { ProfileComponent } from './profile/profile.component'; 
import { InstMainDashComponent } from './instmaindash/instmaindash.component';
import { TeachComponent } from './teach/teach.component';
import { NewinstComponent } from './newinst/newinst.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { CourseInterfaceComponent } from './course-interface/course-interface.component';




const routes: Routes = [


  { path: '', component: CourseInterfaceComponent },
  { path: 'home', component: FviewComponent },
  { path: 'create-course', component: CreateCourseComponent },
  { path: 'addcontent', component: AddcontentComponent },
  { path: 'course', component: ViscrsComponent },
  { path: 'login', component: LogComponent },
  { path: 'signup', component: SupComponent },
  { path: 'profile', component: ProfileComponent }, 
  { path: 'maindash', component: InstMainDashComponent },
  { path: 'updatecourse', component: UpdateCourseComponent },
  { path: 'teach', component: TeachComponent },
  { path: 'newinst', component: NewinstComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
