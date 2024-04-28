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
import { CrslistComponent } from './crslist/crslist.component';
import { ViscrsComponent } from './viscrs/viscrs.component';
import { FviewComponent } from './fview/fview.component';
import { LogComponent } from './log/log.component';
import { SupComponent } from './sup/sup.component';
import { ProfileComponent } from './profile/profile.component';
import { NavHomeComponent } from './navhome/navhome.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FooterComponent } from './footer/footer.component';
import { TeachComponent } from './teach/teach.component';
import { NewinstComponent } from './newinst/newinst.component';
import { HeadComponent } from './head/head.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseInterfaceComponent } from './course-interface/course-interface.component';
import { SafeUrlPipe } from './safe-url.pipe'; // Adjust the path as per your project structure


@NgModule({
  declarations: [
    AppComponent,
    CreateCourseComponent,
    SidenavAutosizeExampleComponent,
    AddcontentComponent,
    InstMainDashComponent,
    CrslistComponent,
    ViscrsComponent,
    FviewComponent,
    LogComponent,
    SupComponent,
    ProfileComponent,
    NavHomeComponent,
    ReviewsComponent,
    FooterComponent,
    TeachComponent,
    NewinstComponent,
    HeadComponent,
    UpdateCourseComponent,
    TestComponent,
    CourseInterfaceComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }