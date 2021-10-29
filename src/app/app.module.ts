import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentsPageComponent } from './students/students-page.component';
import { StudentListComponent } from './students/student-list.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsPageComponent,
    StudentListComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
