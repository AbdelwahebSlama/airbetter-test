import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentsPageComponent } from './students/students-page.component';
import {StudentDetailComponent} from "./students/student-detail/student-detail.component";

const routes: Routes = [
  { path: 'students', component: StudentsPageComponent},
  {path: 'detail/:id', component: StudentDetailComponent},
  { path: '**', redirectTo: 'students' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
