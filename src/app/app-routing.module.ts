import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { ListCoursesComponent } from './course/list-courses/list-courses.component';
import { ViewCourseComponent } from './course/view-course/view-course.component';

const routes: Routes = [
  {path:'addCourse', component:AddCourseComponent},
  {path:'editCourse/:id', component:AddCourseComponent},
  {path:'viewCourse/:id', component:ViewCourseComponent},
  {path:'courses',component:ListCoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
